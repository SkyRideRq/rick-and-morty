import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchData: {
      type: "",
      value: "",
    },
    favoritesCharactersIds: [],
    error: false,
    switch: "characters",
  },
  getters: {
    getSearchData: (state) => {
      return state.searchData;
    },
    getFavoritesCharactersIds: (state) => {
      return state.favoritesCharactersIds;
    },
  },
  mutations: {
    changeSearchData(state, data) {
      state.searchData = data;
    },
    changeFavoritesCharactersIds(state, data) {
      state.favoritesCharactersIds = data;
    },
    error(state, data) {
      state.error = data;
    },
    switchPage(state, data) {
      state.switch = data;
    },
  },
  actions: {},
});
