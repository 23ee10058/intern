import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
      proxy:{
        '/get-product':{
          target:'http://localhost:5000',
          changeOrigin:true,
        },
        '/product/category':{
          target:'http://localhost:5000',
          changeOrigin:true,
        }
  }},
  plugins: [react()],
});
