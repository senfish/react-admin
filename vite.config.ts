import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// import { codeInspectorPlugin } from "code-inspector-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // codeInspectorPlugin({
    //   bundler: "vite",
    //   hideConsole: true,
    // }),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@hooks": path.resolve(__dirname, "./src/hooks/index"),
    },
  },
});
