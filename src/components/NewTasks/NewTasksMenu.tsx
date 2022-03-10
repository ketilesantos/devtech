import React, { useState } from 'react';
import { Button, Grid, Menu, MenuItem, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { makeStyles } from '@mui/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

const useStyles = makeStyles(() => ({
  paper: {
    boxShadow: 'none',
    border: '1px solid #DEDEDE',
    borderRadius: '4px',
  },
  list: {
    padding: 0,
    '& li': {
      fontSize: '14px',
      padding: '0.5rem 1.2rem 0.5rem 0.7rem',
    },
  },
}));

interface UserTableMenuProps {
  onModalDelete: () => void;
  onModalEdit: () => void;
}

export const NewTasksMenu = ({ onModalDelete, onModalEdit }: UserTableMenuProps): JSX.Element => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSideMenuEdit = () => {
    onModalEdit();
    setAnchorEl(null);
  };

  const handleModalDelete = () => {
    onModalDelete();
    setAnchorEl(null);
  };

  return (
    <>
      <Button aria-controls="table-menu" aria-haspopup="true" onClick={handleClick} color="secondary">
        <MoreVertIcon className="more-icon" color="secondary" />
      </Button>
      <Menu
        id="table-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        classes={{ paper: classes.paper, list: classes.list }}
        disableScrollLock
      >
        <MenuItem onClick={handleSideMenuEdit}>
          <Grid container alignItems="center">
            <DoneIcon color="secondary" sx={{ fontSize: 18 }} />
            <Typography variant="subtitle2" noWrap style={{ fontSize: '14px', marginLeft: '.2rem' }}>
              Finalizar
            </Typography>
          </Grid>
        </MenuItem>
        <MenuItem onClick={handleModalDelete}>
          <Grid container alignItems="center">
            <DeleteIcon color="secondary" sx={{ fontSize: 18 }} />
            <Typography variant="subtitle2" noWrap style={{ fontSize: '14px', marginLeft: '.2rem' }}>
              Excluir
            </Typography>
          </Grid>
        </MenuItem>
      </Menu>
    </>
  );
};
