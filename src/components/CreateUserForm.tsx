import React, { useState } from 'react';
import { Button, Box, Typography, InputAdornment, IconButton } from '@mui/material';
import * as yup from 'yup';
import { Field, Form, Formik } from 'formik';

import { VisibilityOff, Visibility } from '@mui/icons-material';
import { TextFieldWrapper } from './TextFieldWrapper';
import { useStyles } from './Login/useStyles';

const validationSchema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
  password: yup.string().min(8, 'Campo senha deve conter no minimo 8 caracteres').required('Campo obrigatório'),
  confPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'O campo confirmação de senha deve ser correspondente ao campo senha.')
    .required('Campo obrigatório'),
});

const INITIAL_VALUES = {
  name: '',
  email: '',
  password: '',
  confPassword: '',
};

export const CreateUserForm = (): JSX.Element => {
  const classes = useStyles();
  const [showPassword, setPassword] = useState(false);
  const [showConfPassword, setConfPassword] = useState(false);

  return (
    <Box sx={{ width: { lg: '439px' } }}>
      <Box sx={{ mb: '13px' }}>
        <Typography className={classes.titleLabel} id="welcome-label" variant="body1">
          Cadastre-se
        </Typography>

        <Typography className={classes.subtitleLabel} id="fill-the-data-label" variant="subtitle2">
          Preencha os campos abaixo para criar seu usuário
        </Typography>
      </Box>

      <Formik
        enableReinitialize
        initialValues={INITIAL_VALUES}
        onSubmit={() => console.log('oi')}
        validationSchema={validationSchema}
      >
        {({ isValid }) => (
          <Form className={classes.form}>
            <Field
              id="name"
              name="name"
              type="text"
              label="Nome Completo"
              placeholder="Juliana Silva Poulsh"
              component={TextFieldWrapper}
            />
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
            <Field
              name="confPassword"
              type={showConfPassword ? 'text' : 'password'}
              placeholder="Digite a senha novamente"
              label="Confirmação de senha"
              component={TextFieldWrapper}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setConfPassword(!showConfPassword)}
                      onMouseDown={(event: React.ChangeEvent<EventTarget>) => event.preventDefault()}
                      edge="end"
                    >
                      {showConfPassword ? <VisibilityOff /> : <Visibility />}
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
              Cadastrar
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
