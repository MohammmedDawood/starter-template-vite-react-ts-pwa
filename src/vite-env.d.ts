/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_VERSION: string;
  readonly VITE_APP_ENV: string;
  readonly VITE_APP_BASE_LAYOUT_CONFIG_KEY: string;
  readonly VITE_APP_BACKEND_BASE_URL: string;
  readonly VITE_APP_BACKEND_PUSHER_URL: string;
  readonly VITE_APP_BACKEND_VERSION: string;
  readonly VITE_APP_GTMID: string;
  readonly VITE_APP_LOG_ROCKET_ID: string;
  readonly VITE_APP_PUPLIC_URL: string;
  readonly VITE_APP_REGISTER_SW: string;

  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
