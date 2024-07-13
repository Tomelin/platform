import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const dynamicFormPlugin = createPlugin({
  id: 'dynamic-form',
  routes: {
    root: rootRouteRef,
  },
});

export const DynamicFormPage = dynamicFormPlugin.provide(
  createRoutableExtension({
    name: 'DynamicFormPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
