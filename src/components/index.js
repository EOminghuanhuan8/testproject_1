import Vue from "vue";

import d2Container from "./d2-container";

// 注意 有些组件使用异步加载会有影响
Vue.component("d2-container", d2Container);
Vue.component("d2-icon", () => import("./d2-icon"));
Vue.component("d2-icon-svg", () => import("./d2-icon-svg/index.vue"));
Vue.component("my-table", () => import("./my-table")); //全局注册可在任何一个文件使用，该文件在main.js里引入进行全局注册
