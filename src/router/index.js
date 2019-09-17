import Vue from "vue";
import Router from "vue-router";

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
      component: () => import("@/views/home/Home")
    },
    {
      path: "/pupeteer",
      name: "Pupeteer",
      component: () => import("@/views/pupeteer")
    }
  ]
});
