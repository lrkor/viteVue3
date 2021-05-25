import { createRouter, createWebHistory } from "vue-router";

import Index from "../views/index.vue";
import PageOne from "../views/pages/page-one.vue";

// 路由信息
const routes = [
  {
    path: "/",
    name: "Index",
    component: () => Index,
    children: [
      {
        path: "/",
        name: "PageOne",
        component: () => PageOne,
      },
    ],
  },
];

// 导出路由
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
