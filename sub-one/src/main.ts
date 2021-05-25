import "./public-path";
import { createApp } from "vue";
import App from "./App.vue";
import routers from "./router/index";
import { createRouter, createWebHistory } from "vue-router";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import "./style/index.scss";

const app = createApp(App);

app.use(routers);
app.use(ElementPlus);
app.mount("#app");

let router = null;
let instance: any = null;
function render(props = {}) {
  const { container } = props;
  router = createRouter({
    base: window.__POWERED_BY_QIANKUN__ ? "/app-vue/" : "/",
    mode: "history",
    routers,
  });

  instance = createApp({
    routers,
    render: (h) => h(App),
  }).mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}
export async function mount(props: any) {
  console.log("[vue] props from main framework", props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}
