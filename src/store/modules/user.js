const state = () => ({
  user: null
});

const mutations = {
  SET_USER(state, data) {
    state.user = { ...data.user };
  },
  CLEAR_USER(state) {
    state.user = null;
  }
};

const actions = {
  setUser({ commit }, payload) {
    commit("SET_USER", payload);
  },
  clearUser({ commit }) {
    commit("CLEAR_USER");
  }
};

const getters = {
  getUser(state) {
    return state.user;
  },
  getUserName(state) {
    return state.user.displayName;
  },
  getUserEmail(state) {
    return state.user.email;
  },
  getUserProfiles(state) {
    return state.user.photoURL;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
