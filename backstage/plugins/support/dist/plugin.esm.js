import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';
import { rootRouteRef } from './routes.esm.js';

const supportPlugin = createPlugin({
  id: "support",
  routes: {
    root: rootRouteRef
  }
});
const SupportPage = supportPlugin.provide(
  createRoutableExtension({
    name: "SupportPage",
    component: () => import('./components/ExampleComponent/index.esm.js').then((m) => m.ExampleComponent),
    mountPoint: rootRouteRef
  })
);

export { SupportPage, supportPlugin };
//# sourceMappingURL=plugin.esm.js.map
