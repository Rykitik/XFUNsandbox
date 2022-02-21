import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMeta from "vue-meta";

Vue.use(VueMeta, {
  keyName: "metaInfo",
  attribute: "data-vue-meta",
  ssrAttribute: "data-vue-meta-server-rendered",
  tagIDKeyName: "vmid",
  refreshOnceOnNavigation: true
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
