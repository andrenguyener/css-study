import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import PageNotFound from "./views/PageNotFound.vue";
import PageLayout from "./views/PageLayout.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Introduction",
      show: false,
      component: Home
    },
    {
      name: "How CSS Works",
      path: "",
      show: true,
      component: PageLayout,
      children: [
        {
          path: "/behind-the-scenes",
          name: "Behind the Scenes",
          show: true,
          component: () => import("./views/BehindTheScenes.vue")
        },
        {
          path: "/cascade-specificity",
          name: "The Cascade and Specificity",
          show: true,
          component: () => import("./views/CascadeAndSpecificity.vue")
        }
      ]
    },
    {
      path: "/cssgrids-flexbox",
      name: "CSS Grids vs Flexbox",
      show: false,
      component: () => import("./views/Layout.vue")
    },
    {
      path: "/ghost",
      name: "Ghost",
      show: false,
      component: () => import("./views/GhostCSS.vue")
    },
    {
      path: "/*",
      name: "Page Not Found",
      show: false,
      component: PageNotFound
    }
  ]
});
