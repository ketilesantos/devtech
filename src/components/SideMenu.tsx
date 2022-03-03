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
  Divider,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Stories from '@mui/icons-material/AutoStories';
import AddTaskIcon from '@mui/icons-material/AddTask';

const drawerWidth = 240;

interface SideMenuProps {
  open: boolean;
  variant: 'persistent' | 'permanent' | 'temporary';
  onClose: () => void;
}

export const SideMenu = ({ open, variant, onClose }: SideMenuProps): JSX.Element => {
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
          <AddTaskIcon fontSize="large" sx={{ margin: '0 1rem 0 0.5rem' }} />
          <Typography variant="h5">ToDoList</Typography>
        </Grid>
        <List
          sx={{ width: '100%' }}
          component="nav"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Menu de navegação
            </ListSubheader>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <AddIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Novas Tarefas" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Stories color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Tarefas Finalizadas" />
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
};
