import React, { useState } from 'react';
import { useTheme, useMediaQuery, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Routes, Route } from 'react-router-dom';

import { SideMenu } from '../components/SideMenu';
import { Header } from '../components/Header';
import { Home } from './Home';
import { NewTasks } from './NewTasks';
import { FinishedTasks } from './FinishedTasks';
import { ITasks } from '../types/interface';

const useStyles = makeStyles(({ breakpoints }: Theme) => ({
  main: {
    marginLeft: 240,
    [breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
}));

const Dashboard = (): JSX.Element => {
  const { breakpoints } = useTheme();
  const classes = useStyles();
  const xsDown = useMediaQuery(breakpoints.down('sm'));
  const [open, setOpen] = useState(true);
  const [tasks, setTasks] = useState<ITasks[]>([]);

  return (
    <>
      <SideMenu variant={xsDown ? 'temporary' : 'permanent'} open={open} onClose={() => setOpen(false)} />
      <main className={classes.main}>
        <Header mobile={xsDown} onClick={() => setOpen(!open)} />
        <section style={{ padding: '2rem' }}>
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="new-tasks" element={<NewTasks tasks={tasks} setTasks={setTasks} />} />
            <Route path="finished-tasks" element={<FinishedTasks tasks={tasks} />} />
          </Routes>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
