import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { frontendUserPlugin, FrontendUserPage } from '../src/plugin';

createDevApp()
  .registerPlugin(frontendUserPlugin)
  .addPage({
    element: <FrontendUserPage />,
    title: 'Root Page',
    path: '/frontend-user',
  })
  .render();
