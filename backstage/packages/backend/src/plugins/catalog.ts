import { CatalogBuilder } from '@backstage/plugin-catalog-backend';
import { ScaffolderEntitiesProcessor } from '@backstage/plugin-catalog-backend-module-scaffolder-entity-model';
import { Router } from 'express';
import { PluginEnvironment } from '../types';
import { KeycloakOrgEntityProvider } from '@janus-idp/backstage-plugin-keycloak-backend';

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  const builder = await CatalogBuilder.create(env);
  builder.addProcessor(new ScaffolderEntitiesProcessor());
  builder.addEntityProvider(
    KeycloakOrgEntityProvider.fromConfig(env.config, {
      id: 'development',
      logger: env.logger,
      schedule: env.scheduler.createScheduledTaskRunner({
        frequency: { hours: 1 },
        timeout: { minutes: 50 },
        initialDelay: { seconds: 15 },
      }),
    }),
  );

  const { processingEngine, router } = await builder.build();
  await processingEngine.start();
  return router;
}
