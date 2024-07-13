import {
  ScmIntegrationsApi,
  scmIntegrationsApiRef,
  ScmAuth,
} from '@backstage/integration-react';
import {
  AnyApiFactory,
  ApiRef,
  BackstageIdentityApi,
  OAuthApi,
  OpenIdConnectApi,
  ProfileInfoApi,
  SessionApi,
  configApiRef,
  createApiFactory,
  createApiRef,
  discoveryApiRef,
  oauthRequestApiRef,
} from '@backstage/core-plugin-api';
import { OAuth2 } from '@backstage/core-app-api';


export const keycloakOIDCAuthApiRef: ApiRef<
OpenIdConnectApi & ProfileInfoApi & BackstageIdentityApi & SessionApi
> = createApiRef({
  id: 'auth.keycloak',
});
// export const acmeAuthApiRef: ApiRef<
//   OAuthApi &
//   ProfileInfoApi &
//   BackstageIdentityApi &
//   SessionApi
//   > = createApiRef({
//   id: 'auth.auth0',
// });

export const apis: AnyApiFactory[] = [
  createApiFactory({
    api: scmIntegrationsApiRef,
    deps: { configApi: configApiRef },
    factory: ({ configApi }) => ScmIntegrationsApi.fromConfig(configApi),
  }),
  ScmAuth.createDefaultApiFactory(),
  createApiFactory({
    api: keycloakOIDCAuthApiRef,
    deps: {
      discoveryApi: discoveryApiRef,
      oauthRequestApi: oauthRequestApiRef,
      configApi: configApiRef,
    },
    factory: ({discoveryApi, oauthRequestApi, configApi}) =>
      OAuth2.create({
        discoveryApi,
        oauthRequestApi,
        provider: {
          id: 'keycloak',
          title: 'Keycloak provider',
          icon: () => null,
        },
        environment: configApi.getOptionalString('auth.environment'),
        defaultScopes: ['openid', 'profile', 'email'],
        popupOptions: {
          size: {
            height: 250,
            width: 250,

          },
        },
      }),
  }),
  // createApiFactory({
  //   api: acmeAuthApiRef,
  //   deps: {
  //     discoveryApi: discoveryApiRef,
  //     oauthRequestApi: oauthRequestApiRef,
  //     configApi: configApiRef,
  //   },
  //   factory: ({ discoveryApi, oauthRequestApi, configApi }) =>
  //     OAuth2.create({
  //       discoveryApi,
  //       oauthRequestApi,
  //       provider: {
  //         id: 'auth0',
  //         title: 'Auth0',
  //         icon: () => null,
  //       },
  //       defaultScopes: ['openid', 'email', 'profile', 'offline_access'],
  //       environment: configApi.getOptionalString('auth.environment'),
  //     }),
  // })
];