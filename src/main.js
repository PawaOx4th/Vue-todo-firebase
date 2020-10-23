import Vue from "vue";
import Buefy from "buefy";
import {firestorePlugin,rtdbPlugin} from "vuefire"
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./firebase";
import "./assets/scss/global.scss";

import "buefy/dist/buefy.css";

Vue.use(Buefy);
Vue.use(firestorePlugin);
Vue.use(rtdbPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
