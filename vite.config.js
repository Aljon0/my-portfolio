import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000", // This should be the URL where your Express server is running
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
