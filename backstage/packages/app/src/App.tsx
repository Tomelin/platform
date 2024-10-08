import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { apiDocsPlugin, ApiExplorerPage } from '@backstage/plugin-api-docs';
import {
  CatalogEntityPage,
  CatalogIndexPage,
  catalogPlugin,
} from '@backstage/plugin-catalog';
import {
  CatalogImportPage,
  catalogImportPlugin,
} from '@backstage/plugin-catalog-import';
import { ScaffolderPage, scaffolderPlugin } from '@backstage/plugin-scaffolder';
import { orgPlugin } from '@backstage/plugin-org';
import { SearchPage } from '@backstage/plugin-search';
import { TechRadarPage } from '@backstage-community/plugin-tech-radar';
import {
  TechDocsIndexPage,
  techdocsPlugin,
  TechDocsReaderPage,
} from '@backstage/plugin-techdocs';
import { TechDocsAddons } from '@backstage/plugin-techdocs-react';
import { ReportIssue } from '@backstage/plugin-techdocs-module-addons-contrib';
import { UserSettingsPage } from '@backstage/plugin-user-settings';
import { acmeAuthApiRef, apis } from './apis';
// import { acmeAuthApiRef, apis, keycloakOIDCAuthApiRef } from './apis';
import { entityPage } from './components/catalog/EntityPage';
import { searchPage } from './components/search/SearchPage';
import { Root } from './components/Root';
import { ScaffolderFieldExtensions } from '@backstage/plugin-scaffolder-react';

import { AlertDisplay, OAuthRequestDialog, SignInPage } from '@backstage/core-components';
import { createApp } from '@backstage/app-defaults';
import { AppRouter, FlatRoutes } from '@backstage/core-app-api';
import { CatalogGraphPage } from '@backstage/plugin-catalog-graph';
import { RequirePermission } from '@backstage/plugin-permission-react';
import { catalogEntityCreatePermission } from '@backstage/plugin-catalog-common/alpha';

import LightIcon from '@material-ui/icons/WbSunny';
import DarkIcon from '@material-ui/icons/WbSunny';

import { lightTheme } from './theme/white';
import { darkTheme } from './theme/dark';
import { UnifiedThemeProvider } from '@backstage/theme';
import { UserFieldEmailPlugin, UserFieldNamePlugin } from '@internal/backstage-plugin-frontend-user';
// import { SupportPage } from '@internal/backstage-plugin-support';

const app = createApp({
  apis,
  themes: [
    {
      id: 'light-theme',
      title: 'Light',
      variant: 'light',
      icon: <LightIcon />,
      Provider: ({ children }) => (
        <UnifiedThemeProvider theme={lightTheme} children={children} />
      ),
    },
    {
      id: 'dark-theme',
      title: 'Dark',
      variant: 'dark',
      icon: <DarkIcon />,
      Provider: ({ children }) => (
        <UnifiedThemeProvider theme={darkTheme} children={children} />
      ),
    },
  ],
  components: {
    SignInPage: props => {

      return (
        <>
          <SignInPage
        {...props}
        auto
        provider={{
          id: 'auth0-auth-provider',
          title: 'Synera',
          message: 'Sign in using Google provider',
          apiRef: acmeAuthApiRef,
        }}
      //   providers={[{
      //     id: 'auth0-auth-provider',
      //     title: 'Synera',
      //     message: 'Sign in using Google provider',
      //     apiRef: acmeAuthApiRef,
      //   },
      //       {
      //     id: 'github-auth-provider',
      //     title: 'GitHub',
      //     message: 'Sign in using GitHub',
      //     apiRef: githubAuthApiRef,
      //   }
      // ]}
        //     {
    //       id: 'github-auth-provider',
    //       title: 'GitHub',
    //       message: 'Sign in using GitHub',
    //       apiRef: githubAuthApiRef,
    //     }]
      /> 

          {/* <SignInPage
            {...props}
            auto
            provider={{
              id: 'keycloak-auth-provider',
              title: 'keycloak',
              message: 'Sign In keycloak',
              apiRef: acmeAuthApiRef,
            }}
          /> */}

        </>
      );
    },
    // SignInPage: props => (

    //   <SignInPage
    //     {...props}
    //     auto
    //     providers={[
    //     //   {
    //     //   id: 'keycloak-auth-provider',
    //     //   title: 'keycloak',
    //     //   message: 'Sign In keycloak',
    //     //   apiRef: keycloakOIDCAuthApiRef,
    //     // },
    //     {
    //       id: 'github-auth-provider',
    //       title: 'GitHub',
    //       message: 'Sign in using GitHub',
    //       apiRef: githubAuthApiRef,
    //     }]}
    //   />
      
    // ),


  },

  bindRoutes({ bind }) {
    bind(catalogPlugin.externalRoutes, {
      createComponent: scaffolderPlugin.routes.root,
      viewTechDoc: techdocsPlugin.routes.docRoot,
      createFromTemplate: scaffolderPlugin.routes.selectedTemplate,
    });
    bind(apiDocsPlugin.externalRoutes, {
      registerApi: catalogImportPlugin.routes.importPage,
    });
    bind(scaffolderPlugin.externalRoutes, {
      registerComponent: catalogImportPlugin.routes.importPage,
      viewTechDoc: techdocsPlugin.routes.docRoot,
    });
    bind(orgPlugin.externalRoutes, {
      catalogIndex: catalogPlugin.routes.catalogIndex,
    });
  },
});

const routes = (
  <FlatRoutes>
    <Route path="/" element={<Navigate to="catalog" />} />
    <Route path="/catalog" element={<CatalogIndexPage />} />
    <Route
      path="/catalog/:namespace/:kind/:name"
      element={<CatalogEntityPage />}
    >
      {entityPage}
    </Route>
    <Route path="/docs" element={<TechDocsIndexPage />} />
    <Route
      path="/docs/:namespace/:kind/:name/*"
      element={<TechDocsReaderPage />}
    >
      <TechDocsAddons>
        <ReportIssue />
      </TechDocsAddons>
    </Route>
    <Route path="/create" element={<ScaffolderPage />} >
    <ScaffolderFieldExtensions>
      <UserFieldEmailPlugin />
      <UserFieldNamePlugin />
    </ScaffolderFieldExtensions>
    </Route>
    <Route path="/api-docs" element={<ApiExplorerPage />} />
    <Route
      path="/tech-radar"
      element={<TechRadarPage width={1500} height={800} />}
    />
    <Route
      path="/catalog-import"
      element={
        <RequirePermission permission={catalogEntityCreatePermission}>
          <CatalogImportPage />
        </RequirePermission>
      }
    />
    <Route path="/search" element={<SearchPage />}>
      {searchPage}
    </Route>
    <Route path="/settings" element={<UserSettingsPage />} />
    <Route path="/catalog-graph" element={<CatalogGraphPage />} />

    {/* <Route path="/support" element={<SupportPage />} /> */}
  </FlatRoutes>
);

export default app.createRoot(
  <>
    <AlertDisplay />
    <OAuthRequestDialog />
    <AppRouter>
      <Root>{routes}</Root>
    </AppRouter>
  </>,
);
