import React from 'react';
import { Grid } from '@mui/material';
import { LoginForm } from '../components/Login/LoginForm';

const Login = (): JSX.Element => {
  return (
    <Grid container alignItems="center" justifyContent="center" sx={{ height: '100vh' }}>
      <LoginForm />
    </Grid>
  );
};

export default Login;
