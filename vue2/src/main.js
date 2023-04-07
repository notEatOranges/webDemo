/*
 * @Author: hly
 * @Description:
 * @Date: 2023-02-10 10:54:55
 * @LastEditTime: 2023-02-10 11:01:38
 * @FilePath: /vue2/src/main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/style/element-reset.css";

Vue.config.productionTip = false;
Vue.use(ElementUI, { size: "small" });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
