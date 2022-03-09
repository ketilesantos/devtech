import React from 'react';
import { Grid } from '@mui/material';
import { LoginForm } from '../components/Login/LoginForm';

const Login = (): JSX.Element => {
  return (
    <Grid container alignItems="center" justifyContent="center" sx={{ height: '100vh' }}>
      <div style={{ boxShadow: '0.5px 0 0 1px rgba(0, 0, 0, 0.1)', padding: '2rem', borderRadius: '8px' }}>
        <LoginForm />
      </div>
    </Grid>
  );
};

export default Login;
