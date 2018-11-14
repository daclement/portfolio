import Vue from "vue";
import PrismicVue from "prismic-vue";
import linkResolver from "./prismic/link-resolver";
import htmlSerializer from "./prismic/html-serializer";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver,
  htmlSerializer
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
