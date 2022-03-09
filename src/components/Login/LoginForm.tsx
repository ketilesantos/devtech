import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IconButton, Button, InputAdornment, Box, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import * as yup from 'yup';
import { Field, Form, Formik } from 'formik';

import { TextFieldWrapper } from '../TextFieldWrapper';
import { useStyles } from './useStyles';

const validationSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
  password: yup.string().min(8, 'Senha inválida').required('Campo obrigatório'),
});

const INITIAL_VALUES = {
  email: '',
  password: '',
};

export const LoginForm = (): JSX.Element => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [showPassword, setPassword] = useState(false);

  return (
    <Box sx={{ width: { lg: '439px' } }}>
      <Box sx={{ mb: '13px' }}>
        <Typography className={classes.titleLabel} id="welcome-label" variant="body1">
          Sejam bem-vindos
        </Typography>

        <Typography className={classes.subtitleLabel} id="fill-the-data-label" variant="subtitle2">
          Preencha os campos abaixo para entrar na plataforma
        </Typography>
      </Box>

      <Formik
        enableReinitialize
        initialValues={INITIAL_VALUES}
        onSubmit={() => navigate('/dashboard/home')}
        validationSchema={validationSchema}
      >
        {({ isValid }) => (
          <Form className={classes.form}>
            <Field
              id="email"
              name="email"
              type="email"
              label="E-mail"
              placeholder="juliana@gmail.com"
              component={TextFieldWrapper}
            />
            <Field
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Digite sua senha"
              label="Senha"
              component={TextFieldWrapper}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setPassword(!showPassword)}
                      onMouseDown={(event: React.ChangeEvent<EventTarget>) => event.preventDefault()}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              className={classes.button}
              variant="contained"
              type="submit"
              disabled={!isValid}
              autoFocus
              disableElevation
              sx={{ mt: 1 }}
            >
              Entrar
            </Button>
            <Box className={classes.link}>
              <Typography>Esqueceu sua senha?</Typography>
              <Link to="/forgot" style={{ color: 'black' }}>
                <Typography sx={{ marginLeft: '0.5rem' }}> Redefinir a senha </Typography>
              </Link>
            </Box>
            <Box className={classes.link}>
              <Typography>Não possui cadastro? </Typography>
              <Link to="/signup" style={{ color: 'black' }}>
                <Typography sx={{ marginLeft: '0.5rem' }}> Cadastre-se </Typography>
              </Link>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
