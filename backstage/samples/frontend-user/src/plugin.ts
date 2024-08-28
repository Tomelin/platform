import { createPlugin } from '@backstage/core-plugin-api';
import { createScaffolderFieldExtension } from '@backstage/plugin-scaffolder-react';
import { UserFieldEmail, UserFieldName} from './components/UserField'

import { rootRouteRef } from './routes';

export const frontendUserPlugin = createPlugin({
  id: 'frontend-user',
  routes: {
    root: rootRouteRef,
  },
});

export const UserFieldEmailPlugin = frontendUserPlugin.provide(
  createScaffolderFieldExtension({
    name: 'UserFieldEmail',
    component: UserFieldEmail,
  })
)

export const UserFieldNamePlugin = frontendUserPlugin.provide(
  createScaffolderFieldExtension({
    name: 'UserFieldName',
    component: UserFieldName,
  })
)
