import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/magic-tour/',
  server: {
    port: 3000,
  },
  publicDir: 'assets',
  build: {
    outDir: 'public',
    assetsDir: 'assets',
    sourcemap: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  plugins: [react()],
});
