import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import PageNotFound from "./views/PageNotFound.vue";
import BehindTheScenes from "./views/BehindTheScenes.vue";
import Parsing from "./views/Parsing.vue";
import Layout from "./views/Layout.vue";

Vue.use(Router);

// TODO: Fix lazy loading to render on production

export default new Router({
  mode: "history",
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
      component: BehindTheScenes
      // component: () => import("./views/BehindTheScenes.vue")
    },
    {
      path: "/parsing",
      name: "Parsing CSS",
      show: true,
      component: Parsing
    },
    {
      path: "/cssgrids-flexbox",
      name: "CSS Grids vs Flexbox",
      show: true,
      component: Layout
      // component: () => import("./views/Layout.vue")
    },
    {
      path: "/*",
      name: "Page Not Found",
      show: false,
      component: PageNotFound
    }
  ]
});
