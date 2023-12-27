import {
  EntityProvider,
  EntityProviderConnection,
} from '@backstage/plugin-catalog-node';
import { Logger } from 'winston';
import { Config } from '@backstage/config';
import {
  getRootLogger,
} from '@backstage/backend-common';
import { PluginTaskScheduler } from '@backstage/backend-tasks';

export class MyProvider implements EntityProvider {
  private readonly scheduleFn?: () => Promise<void>;
  private readonly logger: Logger = getRootLogger();
  constructor(
    private readonly config: Config,
    private readonly scheduler: PluginTaskScheduler,
    private connection?: EntityProviderConnection,
  ) {
    const configuration = this.config.getOptionalConfig(
      'catalog.providers.myProvider.schedule',
    );
    const schedule = configuration
      ? readTaskScheduleDefinitionFromConfig(configuration)
      : // Default if there is no config
        { timeout: { seconds: 4 }, frequency: { minutes: 10 } };

    const taskRunner = this.scheduler.createScheduledTaskRunner(schedule);
    this.scheduleFn = this.createScheduleFn(taskRunner);
  }

  getProviderName(): string {
    // Simply a string identifying your provider
    return 'MyProvider';
  }

  // Called by Backstage when the catalog builder is connecting
  async connect(connection: EntityProviderConnection): Promise<void> {
    this.connection = connection;
  }



  private createScheduleFn(taskRunner: TaskRunner): () => Promise<void> {
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
      throw new Error('Connection not initialized');
    }
    this.logger.info(`Refreshing ${this.getProviderName()}`);
    // URL and authentication etc. can also come from configuration
    const url = 'https://jsonplaceholder.typicode.com/users';
    const res = await fetch(url, {
      method: 'get',
    });
    const result: User[] = await res.json();

    // Do response filtering etc. here. For example disabled users
    // could be removed etc.

    // Now map the entities to Backstage entity format
    const entities = result.map(user => {
      return {
        apiVersion: 'backstage.io/v1alpha1',
        // System, Component, Resource, User, Group, Api...
        kind: 'User',
        metadata: {
          name: user.username,
          title: user.name,
          annotations: {
            // Some mandatory annotations
            'backstage.io/managed-by-location': `url:${url}`,
            'backstage.io/managed-by-origin-location': `url:${url}/${user.id}`,
          },
        },
        spec: { memberOf: ['group:my_group'] },
      };
    });

    // Users have to part of some group, so lets add group first
    // This is only for demoing purposes
    await this.connection.applyMutation({
      type: 'full',
      entities: [
        {
          entity: {
            apiVersion: 'backstage.io/v1alpha1',
            kind: 'Group',
            metadata: {
              name: 'my_group',
            },
          },
          locationKey: this.getProviderName(),
        },
      ],
    });

    // Now add the users
    await this.connection.applyMutation({
      type: 'full', // full or delta, read more from the applyMutation docs
      entities: entities.map(entity => ({
        entity,
        locationKey: this.getProviderName(),
      })),
    });

    this.logger.info(
      `Refreshed ${this.getProviderName()}: ${entities.length} users added`,
    );
  }

  async connect(connection: EntityProviderConnection): Promise<void> {
    this.connection = connection;
    // Start refresh right away after connection is available
    await this.scheduleFn?.();
  }


}