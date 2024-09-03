import {
  EntityProvider,
  EntityProviderConnection,
} from '@backstage/plugin-catalog-node';
import { Logger } from 'winston';
import { Config } from '@backstage/config';
import {
  getRootLogger
} from '@backstage/backend-common';
import { PluginTaskScheduler } from '@backstage/backend-tasks';
import { SchedulerServiceTaskRunner } from '@backstage/backend-plugin-api';
import { Entity } from '@backstage/catalog-model';
const amqp = require('amqplib');

export class CollectorEntities implements EntityProvider {
  private readonly scheduleFn?: () => Promise<void>;
  private readonly logger: Logger = getRootLogger();
  private connectAMQP?: amqp.connection;
  private channel?: amqp.Channel;
  constructor(
    private readonly config: Config,
    private readonly scheduler: PluginTaskScheduler,
    private connection?: EntityProviderConnection,
  ) {

    const configuration = this.config.getOptionalConfig(
      'catalog.providers.collectorEntities.schedule',
    );
    const schedule = configuration
      ? readTaskScheduleDefinitionFromConfig(configuration)
      : // Default if there is no config
      { timeout: { seconds: 4 }, frequency: { minutes: 10 } };
    const taskRunner = this.scheduler.createScheduledTaskRunner(schedule);
    this.scheduleFn = this.createScheduleFn(taskRunner);
  }

  getProviderName(): string {
    return 'collector-entities-by-mq';
  }

  private createScheduleFn(taskRunner: SchedulerServiceTaskRunner): () => Promise<void> {
    return async () => {
      return taskRunner.run({
        id: `${this.getProviderName()}:refresh`,
        fn: async () => {
          await this.run();
        },
      });
    };
  }

  async run(): Promise<void> {
    if (!this.connection) {
      this.logger.error(`connection undefined to ${this.getProviderName()}`)
      throw new Error('Connection not initialized');
    }
    this.logger.info(`Refreshing ${this.getProviderName()}`);

    await this.setupMQ()
    this.consumeMessages()
  }

  async setupMQ() {
    const rmq_url = this.config.getOptionalString('message_queue.rabbitmq.url')
    const rmq_vhost = this.config.getOptionalString('message_queue.rabbitmq.vhost')
    let RABBITMQ_URL: string;
    if (rmq_url === undefined || rmq_url === '') {
      this.logger.error(`Refreshed ${this.getProviderName()}: connection with message queue did not configured`)
      throw new Error('connection with message queue did not configured')
    }

    if (rmq_vhost !== undefined || rmq_vhost !== '') {
      RABBITMQ_URL = `${rmq_url}/${rmq_vhost}`
    }
    else {
      RABBITMQ_URL = rmq_url
    }

    const EXCHANGE = this.config.getOptionalString('message_queue.infra_as_code.exchange');
    const MAIN_QUEUE = this.config.getOptionalString('message_queue.infra_as_code.queue');
    const DLX_EXCHANGE = this.config.getOptionalString('message_queue.dead_letter.exchange');
    const DLX_QUEUE = this.config.getOptionalString('message_queue.dead_letter.queue');

    try {
      this.connectAMQP = await amqp.connect(RABBITMQ_URL);
      this.channel = await this.connectAMQP.createChannel();

      await this.channel.assertExchange(EXCHANGE, 'direct', { durable: true });
      await this.channel.assertQueue(MAIN_QUEUE, {
        durable: true,
      });
      await this.channel.bindQueue(MAIN_QUEUE, EXCHANGE, 'main_key');

      // Declare DLX exchange and queue
      await this.channel.assertExchange(DLX_EXCHANGE, 'direct', { durable: true });
      await this.channel.assertQueue(DLX_QUEUE, { durable: true });
      await this.channel.bindQueue(DLX_QUEUE, DLX_EXCHANGE, 'dlx_key');

    } catch (error) {
      this.logger.error(`Refreshed ${this.getProviderName()}: Error setting up RabbitMQ: ${error}`);
    }

  }

  async consumeMessages(): Promise<void> {

    if (!this.channel) {
      this.logger.error('Channel is not initialized');
      throw new Error('Channel not initialized');
    }
    const expectedHeaderKey: string = this.config.getOptionalString('message_queue.infra_as_code.filter_header') || '';

    const MAIN_QUEUE = this.config.getOptionalString('message_queue.infra_as_code.queue');

    try {
      // Conectando ao RabbitMQ
      // const channel = await this.connectAMQP.createChannel();
      await this.channel.assertQueue(MAIN_QUEUE, { durable: true });

      this.channel.consume(MAIN_QUEUE, (msg) => {
        if (msg !== null) {

          const headers = msg.properties.headers as Record<string, any>;
          if (expectedHeaderKey in headers) {
            try {
              const data = JSON.parse(msg.content.toString())
              if (this.isEntity(data)) {
                this.populateEntity(data)
                this.channel.ack(msg);
                return
              } else {
                this.logger.warn(`Message is not a valid entity ${msg.content.toString()}`);
                this.channel.nack(msg, false, false); // Reject the message, no requeue
              }
            } catch (err) {
              this.logger.error(`Error processing message: ${err} and message is: ${msg.content.toString()}`);
              this.channel.nack(msg, false, false); // Reject the message, no requeue
            }
          } else {
            this.logger.warn(`Refreshed ${this.getProviderName()}: Message without header`);
            this.channel.nack(msg, false, false); // Rejeita a mensagem, não requeue
          }

        }
        this.logger.error(`Refreshed ${this.getProviderName()}: Message is empty or bad formed`);
      }, {
        noAck: false, // Manual acknowledgment
      });
    } catch (error) {
      this.logger.error(`Refreshed ${this.getProviderName()}: Error consuming messages: ${error}`);
    }

  }

  async populateEntity(data: string) {

    if (!this.connection) {
      throw new Error('Connection not initialized');
    }
    let entities: Entity[] = [];

    if (Array.isArray(data)) {
      entities = data as unknown as Entity[]
      entities.forEach((entity: Entity) => {
        entity.apiVersion = "backstage.io/v1alpha1";
        entity.metadata.annotations = {
          'backstage.io/managed-by-location': `url:ok`,
          'backstage.io/managed-by-origin-location': `url:ok/${entity.metadata.name}`,
        };
      });

    } else {
      const temp = data as unknown as Entity
      temp.metadata.annotations = {
        'backstage.io/managed-by-location': `url:ok`,
        'backstage.io/managed-by-origin-location': `url:ok/${temp.metadata.name}`,
      },
      temp.apiVersion = "backstage.io/v1alpha1";

      this.logger.warn('The message is:')
      this.logger.warn(JSON.stringify(temp));

      entities.push(temp)
    }

try{
    await this.connection.applyMutation({
      type: 'full',
      entities: entities.map((entity: Entity) => ({
        entity,
        locationKey: this.getProviderName(),
      })),
    });

    this.logger.info(
      `Refreshed ${this.getProviderName()}: ${entities.length} entities added`,
    );
  }catch{
    this.logger.error(
      `Error ${this.getProviderName()}: ${entities.length} for include`,
    );
  }
  }

  isEntity(obj: any): boolean {

    if (Array.isArray(obj)) {
      return obj.every(item => typeof item === 'object' && item !== null && 'kind' in item && 'metadata' in item && 'spec' in item);
    }

    return typeof obj === 'object' && obj !== null && 'kind' in obj && 'metadata' in obj && 'spec' in obj;
  }


  async connect(connection: EntityProviderConnection): Promise<void> {
    this.connection = connection;
    // Start refresh right away after connection is available
    await this.scheduleFn?.();
  }
}



