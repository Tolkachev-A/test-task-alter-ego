import React from 'react';

import './index.css';
import { createTheme, ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const theme = createTheme({
  palette: {
    primary: { main: '#12307a' },
    secondary: { main: '#ec0000' },
    success: { main: '#D0CFCF' },
  },
});

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);

reportWebVitals();
