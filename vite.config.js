import { defineConfig } from 'vite';
import { resolve } from 'path';



export default defineConfig({
  base: './', 
  build: {
    outDir: 'dist', 
    assetsDir: 'assets', 
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        photos: resolve(__dirname, 'src/pages/photos/photos.html'),
        videos: resolve(__dirname, 'src/pages/videos/videos.html'),
        collections: resolve(__dirname, 'src/pages/collections/collection.html'),
        favorites: resolve(__dirname, 'src/pages/favorite/favorite.html'),
        photoDetail: resolve(__dirname, 'src/pages/photos/photo_detail.html'),
        videoDetail: resolve(__dirname, 'src/pages/videos/video_detail.html'),
        collectionDetail:resolve(__dirname,'src/pages/collections/collection_detail.html')
      },
      output: {
        entryFileNames: 'assets/js/[name].js',
        assetFileNames: 'assets/[ext]/[name].[ext]',
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
    historyApiFallback: true,
  }
});
