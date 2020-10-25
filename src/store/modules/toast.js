/* eslint-disable no-unused-vars */
import { ToastProgrammatic as Toast } from "buefy";

const state = () => ({});

const mutations = {};

const actions = {
  success({ commit }, payload) {
    //
    Toast.open({
      message: `${payload}`,
      type: "is-success"
    });
  },
  error({commit},payload) {
    Toast.open({ duration: 5000,
      message: `${payload}`,
      // position: 'is-bottom',
      type: 'is-danger'})
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
