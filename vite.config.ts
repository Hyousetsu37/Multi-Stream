import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // This adds the error overlay in your browser
    checker({
      typescript: true,
      eslint: {
        // Points the checker to your new ESLint flat config
        useFlatConfig: true,
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // This dynamically grabs the exact absolute path to your src folder, safely
      '@': path.resolve(__dirname, './src'),
    },
  },
});
