import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    isViewMenu: true
  },
  mutations: {
    changeViewMenu(state) {
      state.isViewMenu = !state.isViewMenu;
    }
  },
  actions: {},
  modules: {},
  plugins: []
});