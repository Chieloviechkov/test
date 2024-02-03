import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    itemsPerPage: Number(localStorage.getItem('itemsPerPage')) || 5,
    sortField: localStorage.getItem('sortField') || 'cc',
    sortDesc: localStorage.getItem('sortOrder') === 'desc',
  },
  mutations: {
  },
  actions: {
    initializeStore({ commit }) {
      commit('initializeStore');
    },
  },
});
