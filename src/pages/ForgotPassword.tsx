import React from 'react';
import { Grid } from '@mui/material';
import { ForgotForm } from '../components/RecoveryPassword/ForgotForm';

const ForgotPassword = (): JSX.Element => {
  return (
    <Grid container alignItems="center" justifyContent="center" sx={{ height: '100%' }}>
      <ForgotForm />
    </Grid>
  );
};

export default ForgotPassword;
