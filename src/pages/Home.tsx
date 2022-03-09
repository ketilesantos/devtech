import React from 'react';
import { Grid, Typography } from '@mui/material';
import Tasks from '../assets/task.svg';

export const Home = (): JSX.Element => {
  return (
    <>
      <Typography variant="h4" sx={{ color: '#5B5B5B', mb: '1rem' }}>
        Organize seu dia
      </Typography>
      <Grid container justifyContent="center" alignItems="center">
        <Typography variant="h6" sx={{ color: '#5B5B5B', mb: '1rem', fontSize: '1.1rem' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book.
        </Typography>
        <img src={Tasks} alt="Tarefas" width="500px" />
      </Grid>
    </>
  );
};
