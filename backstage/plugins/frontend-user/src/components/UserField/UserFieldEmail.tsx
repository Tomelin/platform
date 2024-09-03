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

const {value: getUserEntity} = useAsync(async () =>{
  return await identityApi.getProfileInfo();
})

  // Fetch the user profile asynchronously
  const { value: userProfile, error, loading } = useAsync(async () => {
    try {
      return await identityApi.getProfileInfo();
    } catch (err) {
      console.error('Error fetching user profile:', err);
      return null;
    }
  }, [identityApi]);

  // Determine user email
  const [userEmail, setUserEmail] = useState('guest@domain.com');
  
  useEffect(() => {
    if (userProfile?.email) {
      setUserEmail(userProfile.email.toString().toLowerCase());
    } 
  }, [userProfile]);
  // Handle loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching user email</div>;
  }

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
