import React, { useState, useEffect } from 'react';
import { FieldProps } from '@rjsf/utils';
import { FormControl, TextField } from '@material-ui/core';
import { identityApiRef, useApi } from '@backstage/core-plugin-api';
import useAsync from 'react-use/lib/useAsync';

export const UserFieldEmail = ({
  onChange,
  rawErrors,
  required,
  formData,
  uiSchema,
}: FieldProps<string>) => {
  const fieldLabel =
    uiSchema?.['ui:label'] || 'Email of user logged in backstage';
  const identityApi = useApi(identityApiRef);

  const { value: getUserEntity } = useAsync(async () => {
    const profile = await identityApi.getBackstageIdentity();

    if (!profile.userEntityRef?.length) {
      return 'guest';
    } else {
      let user = profile.userEntityRef.split('/');
      if (user.length > 1) {
        return user[1];
      } else {
        return user;
      }
    }
  }, []);

  
  const [userInfo, setUserInfo] = useState<string>('');
  
  useEffect(() => {
    if (getUserEntity !== undefined) {
      setUserInfo(getUserEntity.toString());
      onChange(getUserEntity.toString());
    }
  }, [getUserEntity, onChange]);

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
        value={userInfo}
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
