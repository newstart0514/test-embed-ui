import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    state: {
      name: "hxy",
    },
  },
  getters: {
    getName: (state) => {
      return state.name;
    },
  },
  mutations: {
    setName(state, name) {
      state.name = name;
    },
  },
  actions: {
    setName({ commit }, name) {
      commit("setName", name);
    },
  },
  modules: {},
});
