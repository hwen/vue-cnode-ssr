import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations, { state } from './mutations';
import getters from './getters';

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    state,
    actions,
    mutations,
    getters
  });
}
