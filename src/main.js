import Vue from "vue";
import App from "./App.vue";
import shadow from "vue-shadow-dom";
import router from "./router";
import store from "./store";
import ViewUI from "view-design";
// import "view-design/dist/styles/iview.css";
import "./theme/theme.less";

Vue.config.productionTip = false;
Vue.use(ViewUI);
Vue.use(shadow);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
