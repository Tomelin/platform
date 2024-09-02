import { UrlReader } from '@backstage/backend-common';
import { Entity } from '@backstage/catalog-model';
import {
  EntityProvider,
  EntityProviderConnection,
} from '@backstage/plugin-catalog-node';
import { SchedulerServiceTaskRunner } from '@backstage/backend-plugin-api';

/**
 * Provides entities from fictional frobs service.
 */
export class GitHubOrgProvider implements EntityProvider {
  private readonly env: string;
  private readonly reader: UrlReader;
  private connection?: EntityProviderConnection;
  private taskRunner: SchedulerServiceTaskRunner;

  /** [1] */
  constructor(
    env: string,
    reader: UrlReader,
    taskRunner: SchedulerServiceTaskRunner,
  ) {
    // this.env = env;
    this.reader = reader;
    this.taskRunner = taskRunner;
  }

  /** [2] */
  getProviderName(): string {
    return `${this.env}-github-org-provider`;
  }

  /** [3] */
  async connect(connection: EntityProviderConnection): Promise<void> {
    this.connection = connection;
    this.taskRunner.run({
      id: this.getProviderName(),
      fn: async () => {
        await this.run();
      },
    });
  }

  /** [4] */
  async run(): Promise<void> {
    if (!this.connection) {
      throw new Error('Not initialized');
    }

    const response = await this.reader.readUrl(
      `https://frobs-${this.env}.example.com/data`,
    );
    const data = JSON.parse(await response.buffer()).toString();

    /** [5] */
    const entities: Entity[] = frobsToEntities(data);

    /** [6] */
    await this.connection.applyMutation({
      type: 'full',
      entities: entities.map(entity => ({
        entity,
        locationKey: `frobs-provider:${this.env}`,
      })),
    });
  }
}

function frobsToEntities(data: any){}