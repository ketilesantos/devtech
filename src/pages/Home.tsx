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
        <Typography variant="h6" sx={{ color: '#5B5B5B', mb: '1rem' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </Typography>
        <img src={Tasks} alt="Tarefas" width="500px" />
      </Grid>
    </>
  );
};
