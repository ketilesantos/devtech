import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';
import * as yup from 'yup';
import { Field, Form, Formik } from 'formik';

import { TextFieldWrapper } from '../TextFieldWrapper';
import { useStyles } from '../Login/useStyles';

const validationSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
});

const INITIAL_VALUES = {
  email: '',
};

export const ForgotForm = (): JSX.Element => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Box sx={{ width: { lg: '439px' } }}>
      <Box sx={{ mb: '13px' }}>
        <Typography className={classes.titleLabel} id="welcome-label" variant="body1">
          Recuperar Senha
        </Typography>

        <Typography className={classes.subtitleLabel} id="fill-the-data-label" variant="subtitle2">
          Informe seu email para recuperar sua senha
        </Typography>
      </Box>

      <Formik
        enableReinitialize
        initialValues={INITIAL_VALUES}
        onSubmit={() => navigate('/reset')}
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
            <Button
              className={classes.button}
              variant="contained"
              type="submit"
              disabled={!isValid}
              autoFocus
              disableElevation
              sx={{ mt: 1 }}
            >
              Enviar
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
