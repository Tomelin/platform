import React, { useState, useEffect } from 'react';
import { FieldProps } from '@rjsf/utils';
import {
  FormControl,
  TextField,
} from '@material-ui/core';
import { identityApiRef, useApi } from '@backstage/core-plugin-api';
import useAsync from 'react-use/lib/useAsync';

export const UserFieldName = ({
  onChange,
  rawErrors,
  required,
  formData,
  uiSchema,
}: FieldProps<string>) => {
  const fieldLabel = uiSchema?.['ui:label'] || 'Name of logged in backstage';

  const identityApi = useApi(identityApiRef);

  const { value: getUserEntity } = useAsync(async () => {
    const profile = await identityApi.getBackstageIdentity();

    
    if (profile.userEntityRef?.length > 1) {
      const tmpUser = profile.userEntityRef.toLowerCase().split('/');
      const user = tmpUser[1].split('@');
      return user[0];
    } else {
      return 'guest';
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
        InputLabelProps={{ shrink: true }}
        type="string"
        style={{ width: '32rem' }}
        InputProps={{
          readOnly: true,
        }}
      />
    </FormControl>
  );
};
