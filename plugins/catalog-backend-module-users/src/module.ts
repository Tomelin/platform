import { coreServices, createBackendModule } from '@backstage/backend-plugin-api';

export const catalogModuleUsers = createBackendModule({
  pluginId: 'catalog',
  moduleId: 'users',
  register(reg) {
    reg.registerInit({
      deps: { logger: coreServices.logger },
      async init({ logger }) {
        logger.info('Hello World!')
      },
    });
  },
});
