export default defineConfig({
    server: {
      proxy: {
        '/api': {
          target: 'https://api.pexels.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
          headers: {
            Authorization: process.env.VITE_PEXELS_API_KEY
          }
        }
      }
    }
  });