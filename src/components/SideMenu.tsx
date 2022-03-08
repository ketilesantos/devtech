import * as React from 'react';
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
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Stories from '@mui/icons-material/AutoStories';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Home from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

interface SideMenuProps {
  open: boolean;
  variant: 'persistent' | 'permanent' | 'temporary';
  onClose: () => void;
}

const items = [
  { icon: <Home />, label: 'Introdução', path: '/dashboard/home' },
  { icon: <AddIcon />, label: 'Novas Tarefas', path: '/dashboard/new-tasks' },
  { icon: <Stories />, label: 'Tarefas Finalizadas', path: '/dashboard/finished-tasks' },
];

export const SideMenu = ({ open, variant, onClose }: SideMenuProps): JSX.Element => {
  const renderMenuItems = (
    <List>
      {items.map((item) => (
        <NavLink key={item.label} to={item.path} style={{ textDecoration: 'none', color: '#353535' }}>
          {({ isActive }) => (
            <ListItemButton key={item.label}>
              <ListItemIcon sx={{ color: isActive ? '#EB2368' : 'inherit' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          )}
        </NavLink>
      ))}
    </List>
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
