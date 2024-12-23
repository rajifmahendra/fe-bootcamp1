// store.js (Vuex Store)
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      isLoading: false,
      accessToken: localStorage.getItem('access_token') || null,
    };
  },
  mutations: {
    setLoading(state, status) {
      state.isLoading = status;
    },
    setAccessToken(state, token) {
      state.accessToken = token;
      if (token) {
        localStorage.setItem('access_token', token);
      } else {
        localStorage.removeItem('access_token');
      }
    },
  },
  actions: {
    startLoading({ commit }) {
      commit('setLoading', true);
    },
    stopLoading({ commit }) {
      commit('setLoading', false);
    },
    setToken({ commit }, token) {
      commit('setAccessToken', token);
    },
    logout({ commit }) {
      commit('setAccessToken', null);
      localStorage.removeItem('access_token');
    },
  },
  getters: {
    isLoading: (state) => state.isLoading,
    getAccessToken: (state) => state.accessToken,
  },
});

export default store;
