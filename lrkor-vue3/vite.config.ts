import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  plugins: [vue()],
  alias: {
    "@/": path.resolve(__dirname, "./src"),
  },
});
