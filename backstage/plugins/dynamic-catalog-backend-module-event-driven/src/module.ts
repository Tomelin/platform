import {
  coreServices,
  createBackendModule,
} from '@backstage/backend-plugin-api';

export const dynamicCatalogModuleEventDriven = createBackendModule({
  pluginId: 'dynamic-catalog',
  moduleId: 'event-driven',
  register(reg) {
    reg.registerInit({
      deps: { logger: coreServices.logger },
      async init({ logger }) {
        logger.info('Hello World!');
      },
    });
  },
});
