import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    itemsPerPage: Number(localStorage.getItem('itemsPerPage')) || 5,
    sortField: localStorage.getItem('sortField') || 'cc',
    sortDesc: localStorage.getItem('sortOrder') === 'desc',
    filterTxt: localStorage.getItem('filterTxt') || '',
    filterCC: localStorage.getItem('filterCC') || '',
  },
  mutations: {
    setItemsPerPage(state, value) {
      state.itemsPerPage = value;
      localStorage.setItem('itemsPerPage', value);
    },
    setSortField(state, value) {
      state.sortField = value;
      localStorage.setItem('sortField', value);
    },
    setSortOrder(state, value) {
      state.sortDesc = value;
      localStorage.setItem('sortOrder', value ? 'desc' : 'asc');
    },
    setFilterTxt(state, value) {
      state.filterTxt = value;
      localStorage.setItem('filterTxt', value);
    },
    setFilterCC(state, value) {
      state.filterCC = value;
      localStorage.setItem('filterCC', value);
    },
  },
  actions: {
    initializeStore({ commit, state }) {
      if (localStorage.getItem('itemsPerPage')) {
        commit('setItemsPerPage', state.itemsPerPage);
      }
      if (localStorage.getItem('sortField')) {
        commit('setSortField', state.sortField);
      }
      if (localStorage.getItem('sortOrder')) {
        commit('setSortOrder', state.sortDesc);
      }
      if (localStorage.getItem('filterTxt')) {
        commit('setFilterTxt', state.filterTxt);
      }
      if (localStorage.getItem('filterCC')) {
        commit('setFilterCC', state.filterCC);
      }
    },
  },
});
