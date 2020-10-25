import Vue from "vue";
import Buefy from "buefy";
import {firestorePlugin,rtdbPlugin} from "vuefire"
import  {auth} from './firebase'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/scss/global.scss";
import "buefy/dist/buefy.css";

Vue.use(Buefy);
Vue.use(firestorePlugin);
Vue.use(rtdbPlugin);

Vue.config.productionTip = false;

let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})