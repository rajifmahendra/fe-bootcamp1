// src/store/index.js
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      isLoading: false, // Global loading state
    };
  },
  mutations: {
    setLoading(state, status) {
      state.isLoading = status;
    },
  },
  actions: {
    startLoading({ commit }) {
      commit('setLoading', true);
    },
    stopLoading({ commit }) {
      commit('setLoading', false);
    },
  },
});

export default store;
