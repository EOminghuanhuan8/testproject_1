import layoutHeaderAside from "@/layout/header-aside"; //整个页面布局

let meta = { auth: true };//开启验证，页面跳转时，判断用户是否处于登陆状态
// const _import = require("@/libs/util.import." + process.env.NODE_ENV);

export default {
  path: "/basic_information_management",
  name: "basic_information_management",
  meta: { meta, title: "基础信息管理" },
  redirect: { name: "basic_information_management-attachment_management" },
  component: layoutHeaderAside,
  children: [
    {
      path: "page1",
      component: () => import("@/page/city/page1"),
      meta: { meta, title: "附件管理" }
    }
  ]
};
