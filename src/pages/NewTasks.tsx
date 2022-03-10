import React, { useState } from 'react';
import { TextField, Button, FormGroup, Grid, Box, Typography } from '@mui/material';
import { withStyles } from '@mui/styles';

const StyledButton = withStyles({
  root: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    textTransform: 'none',
    width: '10%',
  },
})(Button);

interface ITasks {
  newTask: string;
}

export const NewTasks = (): JSX.Element => {
  const [tasks, setTasks] = useState<ITasks[]>([]);
  const [value, setValue] = useState('');

  const handleChange = (e: any) => {
    e.preventDefault();
    setTasks([...tasks, { newTask: value }]);
    setValue('');
  };

  return (
    <form onSubmit={handleChange}>
      <FormGroup row>
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
        <Grid container direction="column">
          {tasks.map((task) => (
            <Box key={task.newTask} sx={{ background: '#F7F7F7', borderRadius: '4px', mt: '1rem', p: '1rem' }}>
              <Typography variant="h6" sx={{ fontSize: '1.1rem' }}>
                {task.newTask}
              </Typography>
            </Box>
          ))}
        </Grid>
      </FormGroup>
    </form>
  );
};
