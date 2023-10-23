import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// configure aliases

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": "./src",
    },
  },
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "notion-ui",
      fileName: "index",
    },
    rollupOptions: {
      treeshake: true,
      external: ["react", "react/jsx-runtime", "react-dom"],
      output: {
        globals: {
          react: "react",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
  plugins: [react()],
});
