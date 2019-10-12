import Vue from "vue";
import Router from "vue-router";
import RouterPassThrough from "@/views/layout/RouterPassThrough.vue";

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "Home",
      meta: {
        title: "首页",
        icon: ""
      },
      component: () => import("@/views/home/Home")
    },
    {
      path: "/pupeteer",
      name: "Pupeteer",
      meta: {
        title: "爬虫"
      },
      component: () => import("@/views/pupeteer")
    },
    {
      path: "/simpleTemplate",
      name: "SimpleTemplate",
      meta: {
        title: "图案"
      },
      component: () => import("@/views/simpleTemplate/Index.vue")
    },
    {
      path: "/tool",
      name: "Tool",
      meta: {
        title: "工具",
        icon: "el-icon-s-tools"
      },
      component: () => import("@/views/tool/Index.vue")
    },
    {
      path: "/ceshi",
      name: "Ceshi",
      meta: {
        title: "测试"
      },
      component: RouterPassThrough,
      children: [
        {
          path: "test",
          name: "Test",
          meta: {
            title: "测试"
          },
          component: () => import("@/views/test/Index.vue")
        }
      ]
    }
  ]
});
