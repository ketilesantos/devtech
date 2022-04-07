import React from 'react';
import { Grid, Typography } from '@mui/material';
import { ITasks } from '../../types/interface';

interface FinishedTaskProps {
  tasks: ITasks[];
}

export const FinishedTask = ({ tasks }: FinishedTaskProps): JSX.Element => {
  return (
    <Grid container direction="column">
      {tasks.map(
        (task) =>
          task.status !== 'ACTIVE' && (
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              key={task.newTask}
              sx={{ background: '#F7F7F7', borderRadius: '4px', mt: '1rem', p: '1rem' }}
            >
              <Typography variant="h6" sx={{ fontSize: '1.1rem', color: '#5B5B5B' }}>
                {task.newTask}
              </Typography>
            </Grid>
          )
      )}
    </Grid>
  );
};
