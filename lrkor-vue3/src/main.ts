import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import "./style/index.scss";
import { registerMicroApps, start } from "qiankun";

const app = createApp(App);

registerMicroApps([
  {
    name: "sub one", // app name registered
    entry: "//localhost:7100",
    container: "#subOne",
    activeRule: "/yourActiveRule",
  },
  {
    name: "sub two",
    entry: { scripts: ["//localhost:7100/main.js"] },
    container: "#subTwo",
    activeRule: "/yourActiveRule2",
  },
]);

start();

app.use(router);
app.use(ElementPlus);
app.mount("#app");
