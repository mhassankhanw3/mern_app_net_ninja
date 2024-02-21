import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:3001",
    },
  },
  plugins: [react()],
});

// vite.config.js
// export default {
// proxy: {
//   '/api': {
//     target: 'http://localhost:3001', // Your backend server URL
//     changeOrigin: true,
//     rewrite: (path) => path.replace(/^\/api/, '')
//   }
// }
// }
