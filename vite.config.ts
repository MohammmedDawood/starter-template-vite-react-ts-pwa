import * as path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import manifest from './manifest.json';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  if (command === 'serve') {
    // dev specific config
    return {
      // vite config
      define: {
        'process.env': env,
      },
      plugins: [
        react(),
        VitePWA({
          manifest,
          // registerType: 'autoUpdate',
          includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
          // switch to "true" to enable sw on development
          devOptions: {
            enabled: false,
          },
          workbox: {
            globPatterns: ['**/*.{js,css,html}', '**/*.{svg,png,jpg,gif}'],
          },
        }),
      ],
      // ...some configs

      server: {
        port: 3000,
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        },
      },
    };
  } else {
    // command === 'build'
    return {
      // build specific config
    };
  }
});
