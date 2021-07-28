import Vue from 'vue';
import Vuex from 'vuex';
import user from '../modules/User/store';
import common from '../modules/Common/store';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    common,
  },
});

export default store;
