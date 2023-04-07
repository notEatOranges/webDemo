/*
 * @Description:
 * @Date: 2022-06-10 10:54:40
 * @LastEditors: huangly
 * @LastEditTime: 2023-04-04 17:18:59
 * @FilePath: /vite-project/src/main.js
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

createApp(App).use(router).use(ElementPlus).mount("#app");
