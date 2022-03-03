import React from 'react';
import {render} from 'react-dom';
import { ThemeProvider } from '@mui/material';

import App from './App';
import {theme} from './theme';
import './index.css';

render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
