import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { SimpleModal } from './SimpleModal';

interface LogoutProps {
  isLogoutOpenDialog: boolean;
  onIsLogoutOpenDialog: (openDialog: boolean) => void;
}

export const Logout = ({ isLogoutOpenDialog, onIsLogoutOpenDialog }: LogoutProps): JSX.Element => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        disableElevation
        fullWidth
        startIcon={<LogoutIcon sx={{ fontWeight: 'bold' }} />}
        sx={{
          color: '#5B5B5B',
          textTransform: 'none',
          justifyContent: 'flex-start',
          p: '0.8rem 1.2rem',
        }}
        onClick={() => onIsLogoutOpenDialog(!isLogoutOpenDialog)}
      >
        <Typography variant="body2" sx={{ ml: '1.2rem', fontSize: '1rem' }}>
          Sair
        </Typography>
      </Button>
      <SimpleModal
        title="Deseja realmente sair?"
        subtitle="Você será redirecionado para a página inicial de login."
        titleButtonConfirmation="Sair"
        isOpenModal={isLogoutOpenDialog}
        onOpenModal={onIsLogoutOpenDialog}
        onClick={() => navigate('/login', { replace: true })}
      />
    </>
  );
};
