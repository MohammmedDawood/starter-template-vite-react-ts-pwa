import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';
import { MantineProvider, createTheme } from '@mantine/core';

import { Button } from '@mantine/core';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

// add this to prompt for a refresh
const updateSW = registerSW({
  onNeedRefresh() {
    // if (confirm('New content available. Reload?')) {
    //   updateSW(true);
    // }
    // use notistack
    //
    enqueueSnackbar('New content available. Reload?', {
      variant: 'success',
      action: () => (
        <Button
          onClick={() => {
            updateSW(true);
          }}
        >
          Reload
        </Button>
      ),
    });
  },
});

const theme = createTheme({
  /** Your theme override here */
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <App />
      </SnackbarProvider>
    </MantineProvider>
  </React.StrictMode>
);
