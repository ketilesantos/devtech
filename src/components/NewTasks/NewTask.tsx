import React, { useState } from 'react';
import { TextField, Button, FormGroup, Grid, Typography } from '@mui/material';
import { withStyles } from '@mui/styles';
import { NewTasksMenu } from './NewTasksMenu';
import { ITasks } from '../../types/interface';

const StyledButton = withStyles({
  root: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    textTransform: 'none',
    width: '10%',
  },
})(Button);

export const NewTask = (): JSX.Element => {
  const [tasks, setTasks] = useState<ITasks[]>([]);
  const [value, setValue] = useState('');

  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    setTasks([...tasks, { newTask: value, id, status: 'ACTIVE' }]);
    setValue('');
  };

  return (
    <form onSubmit={handleChange}>
      <FormGroup row sx={{ mb: '2rem' }}>
        <TextField
          variant="outlined"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="Adicione novas tarefas"
          sx={{
            '& .css-1iu4yay-MuiInputBase-root-MuiOutlinedInput-root': {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
            width: '90%',
          }}
        />
        <StyledButton type="submit" variant="contained" disableElevation>
          Adicionar
        </StyledButton>
      </FormGroup>
      <Grid container direction="column">
        {tasks.map((task) => (
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
            <NewTasksMenu onModalDelete={() => console.log('oi')} onModalEdit={() => console.log('oi')} />
          </Grid>
        ))}
      </Grid>
    </form>
  );
};
