import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        bash: resolve(__dirname, "pages/bash.html"),
        powershell: resolve(__dirname, "pages/powershell.html"),
        gitRedirect: resolve(__dirname, "pages/git.html"),
      },
    },
  },
});
