import React from 'react';
import {render} from 'react-dom';
import { ThemeProvider } from '@mui/material';
import {Provider} from 'react-redux';

import App from './App';
import {theme} from './theme';
import {store} from './store';
import './index.css';

render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
