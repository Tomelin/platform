import { AnyApiFactory, ApiRef, BackstageIdentityApi, OAuthApi, OpenIdConnectApi, ProfileInfoApi, SessionApi } from '@backstage/core-plugin-api';
export declare const keycloakOIDCAuthApiRef: ApiRef<OpenIdConnectApi & ProfileInfoApi & BackstageIdentityApi & SessionApi>;
export declare const acmeAuthApiRef: ApiRef<OAuthApi & ProfileInfoApi & BackstageIdentityApi & SessionApi>;
export declare const apis: AnyApiFactory[];
