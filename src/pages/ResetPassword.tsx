import React from 'react';
import { Grid } from '@mui/material';
import { ResetForm } from '../components/RecoveryPassword/ResetForm';

const ResetPassword = (): JSX.Element => {
  return (
    <Grid container alignItems="center" justifyContent="center" sx={{ height: '100vh' }}>
      <ResetForm />
    </Grid>
  );
};

export default ResetPassword;
