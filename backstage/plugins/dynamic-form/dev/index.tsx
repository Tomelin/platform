import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { dynamicFormPlugin, DynamicFormPage } from '../src/plugin';

createDevApp()
  .registerPlugin(dynamicFormPlugin)
  .addPage({
    element: <DynamicFormPage />,
    title: 'Root Page',
    path: '/dynamic-form'
  })
  .render();
