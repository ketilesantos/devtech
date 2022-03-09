import React from 'react';
import { TextField, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FieldProps } from 'formik';

const useStyles = makeStyles((theme: Theme) => ({
  input: {
    borderRadius: 'px',
    marginBottom: theme.spacing(2),
  },
}));

export const TextFieldWrapper = ({ field, form: { errors }, ...props }: FieldProps): JSX.Element => {
  const classes = useStyles();

  return (
    <TextField
      {...field}
      {...props}
      error={!!errors[field.name]}
      helperText={errors[field.name]}
      classes={{ root: classes.input }}
      InputLabelProps={{
        sx: {
          color: '#5B5B5B',
          fontSize: '1rem',
        },
      }}
    />
  );
};
