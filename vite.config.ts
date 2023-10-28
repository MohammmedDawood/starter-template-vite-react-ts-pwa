import * as path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import manifest from './manifest.json';

function handleBooleanEnv(env: string) {
  return env === 'false' ? false : env === 'true' ? true : undefined;
}
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
        // env.PORT is injected by loadEnv()
        // port: parseInt(env.PORT) || 3000,
        port: +env.VITE_PORT,
        open: handleBooleanEnv(env.VITE_OPEN),
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        },
      },
    };
  } else {
    // command === 'build'
    // build specific config
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
          // add this to cache all the imports

          workbox: {
            globPatterns: ['**/*.{js,css,html}', '**/*.{svg,png,jpg,gif}'],
          },
        }),
      ],
      // ...some configs
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        },
      },
      build: {
        outDir: './build',
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
      },
    };
  }
});
