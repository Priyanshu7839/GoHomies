import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import './index.css'
import { RouterProvider } from 'react-router';
import Routers from './Routes'
import {Store} from './Store/Store' 
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={Routers}/>
        </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
