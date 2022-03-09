import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    '& .css-1yg98n6-MuiFormLabel-root-MuiInputLabel-root': {
      textAlign: 'left',
      lineHeight: '18px',
      marginBottom: '5px',
      marginTop: '9px',
    },
  },
  forgotText: {
    display: 'flex',
    justifyContent: 'center',
    lineHeight: '27px',
    marginTop: '9px',
    fontSize: '1.2rem',
    color: '#5B5B5B',
  },
  button: {
    height: '3rem',
  },
  titleLabel: {
    textAlign: 'left',
    color: '#5B5B5B',
    fontSize: '2rem',
  },
  subtitleLabel: {
    textAlign: 'left',
    color: '#5B5B5B',
    fontSize: '1rem',
  },
}));
