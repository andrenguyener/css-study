import Vue from "vue";
import Vuetify from "vuetify";
import "normalize.css/normalize.css";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import "vuetify/dist/vuetify.min.css";
import App from "./App.vue";
import router from "./router";
Vue.use(Vuetify, {
  iconfont: "mdi" // 'md' || 'mdi' || 'fa' || 'fa4'
});
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
