import React from 'react';
import { Grid } from '@mui/material';
import { CreateUserForm } from '../components/CreateUserForm';

const CreateUser = (): JSX.Element => {
  return (
    <Grid container alignItems="center" justifyContent="center" sx={{ height: '100vh' }}>
      <CreateUserForm />
    </Grid>
  );
};

export default CreateUser;
