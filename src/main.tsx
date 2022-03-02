import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';

import './index.css';
import { theme } from './config/material-ui';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
