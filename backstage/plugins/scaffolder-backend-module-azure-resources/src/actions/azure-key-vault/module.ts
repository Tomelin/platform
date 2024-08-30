import { createBackendModule, coreServices } from "@backstage/backend-plugin-api";
import { scaffolderActionsExtensionPoint  } from '@backstage/plugin-scaffolder-node/alpha';
import { createAzureKeyVaultAction } from "./akv";
import { Logger } from 'winston'; 
import { Config } from '@backstage/config';

/**
 * A backend module that registers the action into the scaffolder
 */
export const scaffolderModule = createBackendModule({
  moduleId: 'azure:keyvault',
  pluginId: 'scaffolder',
  register({ registerInit }) {
    registerInit({
      deps: {
        scaffolderActions: scaffolderActionsExtensionPoint,
        config: coreServices.rootConfig
      },
      async init({ scaffolderActions, config }) {
        scaffolderActions.addActions(createAzureKeyVaultAction(config));
      }
    });
  },
})