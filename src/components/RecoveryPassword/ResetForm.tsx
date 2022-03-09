import React, { useState } from 'react';
import { IconButton, Button, InputAdornment, Box, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import * as yup from 'yup';
import { Field, Form, Formik } from 'formik';

import { TextFieldWrapper } from '../TextFieldWrapper';
import { useStyles } from '../Login/useStyles';

const validationSchema = yup.object().shape({
  code: yup.string().required('Campo obrigatório'),
  newPassword: yup.string().min(8, 'Campo senha deve conter no minimo 8 caracteres').required('Campo obrigatório'),
  confPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], 'O campo confirmação de senha deve ser correspondente ao campo nova senha.')
    .required('Campo obrigatório'),
});

const INITIAL_VALUES = {
  code: '',
  newPassword: '',
  confPassword: '',
};

export const ResetForm = (): JSX.Element => {
  const classes = useStyles();
  const [showPassword, setPassword] = useState(false);
  const [showConfPassword, setConfPassword] = useState(false);

  return (
    <Box sx={{ width: { lg: '439px' } }}>
      <Box sx={{ mb: '13px' }}>
        <Typography className={classes.titleLabel} id="welcome-label" variant="body1">
          Redefinir Senha
        </Typography>

        <Typography className={classes.subtitleLabel} id="fill-the-data-label" variant="subtitle2">
          Preencha os campos abaixo para redefinir sua senha
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
            <Field id="code" name="code" type="text" label="Código" placeholder="154DF6" component={TextFieldWrapper} />
            <Field
              name="newPassword"
              type={showPassword ? 'text' : 'password'}
              placeholder="Digite sua senha"
              label="Nova senha"
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
              Entrar
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
