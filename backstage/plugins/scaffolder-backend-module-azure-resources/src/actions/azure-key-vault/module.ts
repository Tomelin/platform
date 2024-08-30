import { createBackendModule } from "@backstage/backend-plugin-api";
import { scaffolderActionsExtensionPoint  } from '@backstage/plugin-scaffolder-node/alpha';
import { createAzureKeyVaultAction } from "./akv";

/**
 * A backend module that registers the action into the scaffolder
 */
// export const scaffolderModule = createBackendModule({
//   moduleId: 'azure:keyvault',
//   pluginId: 'scaffolder',
//   register({ registerInit }) {
//     registerInit({
//       deps: {
//         scaffolderActions: scaffolderActionsExtensionPoint
//       },
//       async init({ scaffolderActions}) {
//         scaffolderActions.addActions(createAzureKeyVaultAction());
//       }
//     });
//   },
// })