import * as React from 'react';
import { Grid, DialogContentText, DialogContent, DialogActions, Dialog, Button, DialogTitle, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  container: {
    '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
      margin: '11px',
    },
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '0.5rem',
  },
  title: {
    fontSize: '1.2rem',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '1rem',
    width: '300px',
  },
  button: {
    height: '3.5rem',
    fontSize: '0.9rem',
  },
}));

interface SimpleModalProps {
  isOpenModal: boolean;
  onOpenModal: (open: boolean) => void;
  onClick?: () => void;
  title: string;
  subtitle: string;
  titleButtonConfirmation: string;
}

export const SimpleModal = ({
  isOpenModal,
  onOpenModal,
  onClick,
  title,
  subtitle,
  titleButtonConfirmation,
}: SimpleModalProps): JSX.Element => {
  const classes = useStyles();

  const handleClick = () => {
    onOpenModal(!isOpenModal);
  };

  return (
    <Dialog open={isOpenModal} aria-describedby="Modal" className={classes.container}>
      <Box className={classes.content}>
        <Grid container justifyContent="center" alignItems="center" direction="column">
          <DialogTitle id="modal-title" className={classes.title}>
            {title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText className={classes.subtitle}>{subtitle}</DialogContentText>
          </DialogContent>
        </Grid>
        <DialogActions sx={{ width: '100%' }}>
          <Grid container justifyContent="center" alignItems="center" direction="column" sx={{ mb: 1, ml: 2, mr: 2 }}>
            <Button
              variant="contained"
              autoFocus
              disableElevation
              fullWidth
              sx={{ marginBottom: '0.5rem', textTransform: 'none' }}
              className={classes.button}
              onClick={onClick}
            >
              {titleButtonConfirmation}
            </Button>
            <Button
              sx={{ textTransform: 'none' }}
              variant="text"
              autoFocus
              disableElevation
              fullWidth
              className={classes.button}
              onClick={handleClick}
            >
              Cancelar
            </Button>
          </Grid>
        </DialogActions>
      </Box>
    </Dialog>
  );
};
