import React, { useState } from 'react';
import {
  List,
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  ListSubheader,
  Typography,
  Grid,
  Divider,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Stories from '@mui/icons-material/AutoStories';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Home from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';

import { Logout } from './Logout';

const drawerWidth = 240;

interface SideMenuProps {
  open: boolean;
  variant: 'persistent' | 'permanent' | 'temporary';
  onClose: () => void;
}

const items = [
  { icon: <Home />, label: 'Home', path: '/dashboard/home' },
  { icon: <AddIcon />, label: 'Novas Tarefas', path: '/dashboard/new-tasks' },
  { icon: <Stories />, label: 'Tarefas Finalizadas', path: '/dashboard/finished-tasks' },
];

export const SideMenu = ({ open, variant, onClose }: SideMenuProps): JSX.Element => {
  const [isLogoutOpenDialog, setIsLogoutOpenDialog] = useState(false);

  const renderMenuItems = (
    <>
      <List>
        {items.map((item) => (
          <NavLink key={item.label} to={item.path} style={{ textDecoration: 'none', color: '#5B5B5B' }}>
            {({ isActive }) => (
              <ListItemButton key={item.label}>
                <ListItemIcon sx={{ color: isActive ? '#5B2F8B' : 'inherit' }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            )}
          </NavLink>
        ))}
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Logout isLogoutOpenDialog={isLogoutOpenDialog} onIsLogoutOpenDialog={setIsLogoutOpenDialog} />
    </>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        onClose={onClose}
        variant={variant}
        anchor="left"
        open={open}
      >
        <Grid container alignItems="center" sx={{ margin: '1rem 0' }}>
          <AddTaskIcon fontSize="large" sx={{ margin: '0 1rem 0 0.5rem', color: '#5B5B5B' }} />
          <Typography variant="h5" sx={{ color: '#5B5B5B' }}>
            ToDoList
          </Typography>
        </Grid>
        <List
          sx={{ width: '100%' }}
          component="nav"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Menu de navegação
            </ListSubheader>
          }
        />
        {renderMenuItems}
      </Drawer>
    </Box>
  );
};
