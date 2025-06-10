import { defineConfig } from 'vite';
import path from 'path'
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/',
  server: {
    host: '0.0.0.0', // If loca run, changte to '127.0.0.1'
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
        additionalData: `@use "@src/assets/scss/global.scss" as *;`,
      },
    },
  },
});
