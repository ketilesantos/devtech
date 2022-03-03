import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
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
        <Typography variant="h6" noWrap component="div">
          ToDoList
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
