import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import PageNotFound from "./views/PageNotFound.vue";
import PageLayout from "./views/PageLayout.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
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
          path: "/good-html-css",
          name: "Three Pillars of Good HTML/CSS",
          show: true,
          component: () => import("./views/ThreePillarsGoodHTMLCSS.vue")
        },
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
        },
        {
          path: "/value-processing",
          name: "Value Processing Part 1",
          show: true,
          component: () => import("./views/ValueProcessing.vue")
        },
        {
          path: "/value-processing2",
          name: "Value Processing Part 2",
          show: true,
          component: () => import("./views/ValueProcessing2.vue")
        },
        {
          path: "/inheritance",
          name: "Inheritance",
          show: true,
          component: () => import("./views/Inheritance.vue")
        },
        {
          path: "/visual-formatting-model",
          name: "Visual Formatting Model",
          show: true,
          component: () => import("./views/VisualFormattingModel.vue")
        },
        {
          path: "/css-architecture",
          name: "CSS Architecture Components and BEM",
          show: true,
          component: () => import("./views/CSSArchitecture.vue")
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
      show: true,
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
