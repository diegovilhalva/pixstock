import { defineConfig } from 'vite';
import { resolve } from 'path';
import dotenv from 'dotenv';


dotenv.config();

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        photos: resolve(__dirname, 'public/pages/photos/photos.html'),
        photo_detail: resolve(__dirname, 'public/pages/photos/photo_detail.html')
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.pexels.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/v1'),
        headers: {
          
          Authorization: process.env.VITE_PEXELS_API_KEY
        }
      }
    },
    cors:true
  },
  publicDir: 'public'
});