import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Panel from '../assets/panel.svg';

const useStyles = makeStyles({
  panelBackground: {
    background: 'linear-gradient(115.35deg, #5A2E8A 12.6%, #EB2368 144.14%)',
    height: '100vh',
  },
});

const LayoutPanel = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid
        item
        md={6}
        container
        justifyContent="center"
        alignItems="center"
        sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}
        className={classes.panelBackground}
      >
        <img src={Panel} alt="Imagem Login" height="450px" />
      </Grid>
      <Grid item md={6} container justifyContent="center" alignItems="center">
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default LayoutPanel;
