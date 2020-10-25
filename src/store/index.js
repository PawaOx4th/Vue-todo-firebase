import Vue from 'vue';
import Vuex from 'vuex';

// Module Import
import user from './modules/user'
import toast from './modules/toast'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    toast
  },
});
