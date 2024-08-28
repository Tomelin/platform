import React from 'react';
import { TestApiProvider, renderInTestApp } from '@backstage/test-utils';
import {
  IdentityApi,
  configApiRef,
  identityApiRef,
} from '@backstage/core-plugin-api';
import { ConfigReader } from '@backstage/core-app-api';
import { FieldProps, RJSFSchema } from '@rjsf/utils';
import { fireEvent } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { UserFieldName } from '.';

const DumbComponent = ({
  props,
}: {
  props: FieldProps<string, RJSFSchema, any>;
}) => {
  const identityApi: Partial<IdentityApi> = {
    getBackstageIdentity: async () => ({
      type: 'user',
      userEntityRef: 'default/nxxxxxx@domain.com',
      ownershipEntityRefs: ['teste'],
    }),
  };

  return (
    <TestApiProvider
      apis={[
        [identityApiRef, identityApi],
        [
          configApiRef,
          new ConfigReader({
            pagonxt: { xSubscriptionKey: '1a-2b-3c' },
            backend: {
              baseUrl: 'http://localhost:7007',
            },
          }),
        ],
      ]}
    >
      <UserFieldName {...props} />
    </TestApiProvider>
  );
};

const DumbComponentEmptyUser = ({
  props,
}: {
  props: FieldProps<string, RJSFSchema, any>;
}) => {
  const identityApi: Partial<IdentityApi> = {
    getBackstageIdentity: async () => ({
      type: 'user',
      userEntityRef: '',
      ownershipEntityRefs: ['teste'],
    }),
  };

  return (
    <TestApiProvider
      apis={[
        [identityApiRef, identityApi],
        [
          configApiRef,
          new ConfigReader({
            pagonxt: { xSubscriptionKey: '1a-2b-3c' },
            backend: {
              baseUrl: 'http://localhost:7007',
            },
          }),
        ],
      ]}
    >
      <UserFieldName {...props} />
    </TestApiProvider>
  );
};

describe(':: Plugins :: Component :: UserField', () => {
  let mockAdapter: MockAdapter;

  const onChange = jest.fn();
  const required = false;
  const rawErrors: string[] = [];
  const formData = undefined;
  let uiSchema: {
    'ui:options': { responseID?: boolean };
  };

  let props: FieldProps<string>;

  beforeEach(() => {
    mockAdapter = new MockAdapter(axios);
    uiSchema = {
      'ui:options': {},
    };
    props = {
      onChange,
      rawErrors,
      required,
      formData,
      uiSchema,
    } as unknown as FieldProps;
  });

  afterEach(() => {
    mockAdapter.restore();
  });

  it(':: UserFieldName :: label :: should be custom label', async () => {
    // @ts-ignore
    props.uiSchema['ui:label'] = 'My custom labels';

    const { getAllByText } = await renderInTestApp(
      <DumbComponent props={props} />,
    );

    expect(getAllByText('My custom labels')).toHaveLength(2);
  });

  it(':: UserFieldName :: label :: should be default label', async () => {
    const { getAllByText } = await renderInTestApp(
      <DumbComponent props={props} />,
    );

    expect(getAllByText('Name of logged in backstage')).toHaveLength(2);
  });

  it(':: UserFieldName :: user :: should be empty userEntityRef', async () => {
    // @ts-ignore
    props.uiSchema['ui:label'] = 'Customlabel';

    const { getByRole } = await renderInTestApp(
      <DumbComponentEmptyUser props={props} />,
    );

    const userDefault = 'guest';
    const input = getByRole('textbox');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'annother-user' } });
    fireEvent.blur(input);

    expect(onChange).toHaveBeenCalledWith(userDefault);
  });

  it(':: UserFieldName :: user :: should be user in userEntityRef', async () => {
    // @ts-ignore
    props.uiSchema['ui:label'] = 'Customlabel';

    const { getByRole } = await renderInTestApp(
      <DumbComponent props={props} />,
    );

    const userDefault = 'nxxxxxx';
    const input = getByRole('textbox');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'name@example.com' } });
    fireEvent.blur(input);

    expect(onChange).toHaveBeenCalledWith(userDefault);
    expect(onChange).not.toEqual(userDefault);
  });

});
