import React from 'react';

import './App.css';
import '@mantine/core/styles.css';
import { registerSW } from 'virtual:pwa-register';
import { MantineProvider, Button } from '@mantine/core';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import { Provider } from 'react-redux';

import { theme } from '@/theme/theme';
import { Router } from '@/routes/Router';
import store from '@/store';

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

function AppInner() {
  // const layout = useAppSelector(selectLayout);
  // const emotionCache = layout.dir === 'rtl' ? rtlCache : undefined;

  return (
    <MantineProvider
      theme={theme}
      // withGlobalStyles
      // withNormalizeCSS
      // theme={{ ...theme, dir: layout.dir, colorScheme: layout.theme }}
      // emotionCache={emotionCache}
    >
      <SnackbarProvider maxSnack={3} />
      <Router />

      {/* <NavigationProgress />
      <NotificationsProvider position='top-right'>
        <ModalsProvider modalProps={{ centered: true }}>
          <div dir={layout.dir}>
            <RouterProvider router={router} />
          </div>
        </ModalsProvider>
      </NotificationsProvider> */}
    </MantineProvider>
  );
}

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <AppInner />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
