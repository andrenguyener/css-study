import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import PageNotFound from "./views/PageNotFound.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      show: false,
      component: Home
    },
    {
      path: "/behind-the-scenes",
      name: "Behind the Scenes",
      show: true,
      component: () => import("./views/BehindTheScenes.vue")
    },
    {
      path: "/cssgrids-flexbox",
      name: "CSS Grids vs Flexbox",
      show: true,
      component: () => import("./views/Layout.vue")
    },
    {
      path: "/*",
      name: "Page Not Found",
      show: false,
      component: PageNotFound
    }
  ]
});
