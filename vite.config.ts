import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/css/app.css',
        'resources/scss/app.scss',
        'resources/ts/index.tsx',
      ],
      refresh: true, // Enable hot module replacement (HMR)
    }),
    react(), // Enable React support
  ],
});
