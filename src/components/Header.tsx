import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Grid, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
  onClick: () => void;
  mobile: boolean;
}

export const Header = ({ onClick, mobile }: HeaderProps): JSX.Element => {
  return (
    <AppBar color="primary" elevation={0} position="static">
      <Toolbar>
        <IconButton sx={{ display: mobile ? 'block' : 'none' }} aria-label="open drawer" onClick={onClick} edge="start">
          <MenuIcon sx={{ color: 'white' }} />
        </IconButton>
        <Grid container alignItems="center" justifyContent="flex-end">
          <Typography sx={{ color: 'white', mr: '1rem' }}>Gabriel Silva</Typography>
          <Avatar
            alt="Photo User"
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            sx={{ border: '2px solid white' }}
          />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
