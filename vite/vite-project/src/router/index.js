/*
 * @Description:
 * @Date: 2023-04-04 17:07:19
 * @LastEditors: huangly
 * @LastEditTime: 2023-04-04 17:21:41
 * @FilePath: /vite-project/src/router/index.js
 */
import { createRouter, createWebHistory } from "vue-router";

//路由数组
const routes = [
  {
    path: "/",
    name: "testTitle",
    component: () => import("@/views/testTitle/index"),
  },
];

//路由对象
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, //上面的路由数组
});

//导出路由对象，在main.js中引用
export default router;
