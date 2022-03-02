import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: { main: '#EB2368', contrastText: '#FFF' },
    secondary: { main: '#5B2F8B' },
    background: { default: '#fff' },
    error: { main: '#e52902' },
    success: { main: '#37B450' },
  },
  typography: { fontFamily: 'Nunito' },
});
