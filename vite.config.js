import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  server: {
    port: 5173,
    host: true,
    open: 'http://www.localcricket-varaprasadapp.com:5173'
  },
  build: {
    outDir: 'dist',
    minify: 'terser'
  }
});
