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
      path: "/database",
      name: "DataBase",
      meta: {
        title: "数据库"
      },
      component: RouterPassThrough,
      children: [
        {
          path: "indexedDB",
          name: "indexedDB",
          meta: {
            title: "IndexedDB"
          },
          component: () => import("@/views/database/indexedDB/index.vue")
        }
      ]
    }, {
      path: "/system",
      name: "System",
      meta: {
        title: "系统"
      },
      component: RouterPassThrough,
      children: [
        {
          path: "relations",
          name: "Relations",
          meta: {
            title: "人情系统"
          },
          redirect: "relations/index",
          component: () => import("@/views/system/Relations/Index.vue"),
          children: [{
            path: "personInfo",
            name: "PersonInfo",
            meta: {
              title: "人员信息"
            },
            component: () => import("@/views/system/Relations/PersonInfo.vue")
          },
          {
            path: "personInfoDetail",
            name: "PersonInfoDetail",
            meta: {
              title: "人员信息"
            },
            component: () => import("@/views/system/Relations/PersonInfoDetail.vue")
          },
          {
            path: "index",
            name: "Relations",
            meta: {
              title: "人情来往"
            },
            component: () => import("@/views/system/Relations/Relations.vue")
          },
          {
            path: "myThings",
            name: "MyThings",
            meta: {
              title: "我的"
            },
            component: () => import("@/views/system/Relations/MyThings.vue")
          },
          ]
        }
      ]
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
    },
    {
      path: "/ElementUI",
      name: "ElementUI",
      meta: {
        title: "ElementUI"
      },
      component: RouterPassThrough,
      children: [
        {
          path: "el-button",
          name: "el-button",
          meta: {
            title: "el-button"
          },
          component: () => import("@/views/elementUI/elButton/Index.vue")
        }
      ]
    }
  ]
});
