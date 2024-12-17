import { defineConfig } from 'vite';
import path from 'path'
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/',
  server: {
    port: 8080
  },
  resolve: {
    alias: [
      { find: '@src', replacement: path.resolve('./src') },
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/assets/scss/global.scss";`,
      },
    },
  },
});
