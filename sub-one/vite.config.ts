import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
const { name } = require("./package");
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  plugins: [vue()],
  build: {
    outDir: {
      library: `${name}-[name]`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
  alias: {
    "@/": path.resolve(__dirname, "./src"),
  },
});
