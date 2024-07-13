import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const pagePlugin = createPlugin({
  id: 'new-page',
  routes: {
    root: rootRouteRef,
  },
});

export const NewPage = pagePlugin.provide(
  createRoutableExtension({
    name: 'NewPage',
    component: () =>
      import('./components/Page').then(m => m.PageComponent),
    mountPoint: rootRouteRef,
  }),
);
