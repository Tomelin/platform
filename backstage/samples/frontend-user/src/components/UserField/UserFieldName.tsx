import React, { useState, useEffect } from 'react';
import { FieldProps } from '@rjsf/utils';
import { FormControl, TextField } from '@material-ui/core';
import { identityApiRef, useApi } from '@backstage/core-plugin-api';
import useAsync from 'react-use/lib/useAsync';

export const UserFieldName = ({
  onChange,
  rawErrors,
  required,
  formData,
  uiSchema,
}: FieldProps<string>) => {
  const fieldLabel =
    uiSchema?.['ui:label'] || 'Email of user logged in backstage';
  const identityApi = useApi(identityApiRef);

const {value: getUserEntity} = useAsync(async () =>{
  return await identityApi.getProfileInfo();
})

const userEmail = getUserEntity?.displayName?.toString() || 'guest';

  return (
    <FormControl
      margin="normal"
      variant="outlined"
      required={required}
      error={!rawErrors && !formData}
    >
      <TextField
        required={required}
        variant="outlined"
        value={userEmail}
        label={fieldLabel}
        style={{ width: '32rem' }}
        InputLabelProps={{ shrink: true }}
        type="string"
        InputProps={{
          readOnly: true,
          id: 'user-logged-by-email'
        }}
      />
    </FormControl>
  );
};
