 const state = () => ({
    user : {
        
    }
  });

 const mutations = {
     SET_USER(state,data){
         state.user = {...data.user}
     }

}

 const actions = {
     setUser({commit}, payload){
         commit('SET_USER',payload)
     }

}

 const getters = {
    getUserName(state){
        return state.user.displayName;
    },
    getUserEmail(state){
        return state.user.email;
    },
    getUserProfiles(state){
        return state.user.photoURL;
    }

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}