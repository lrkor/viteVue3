import { createRouter, createWebHistory } from "vue-router";

import Index from "../views/index.vue";

// 路由信息
const routes = [
  {
    path: "/",
    name: "Index",
    component: () => Index,
  },
];

// 导出路由
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
