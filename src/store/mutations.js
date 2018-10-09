import Vue from 'vue';

export const state = {
  activeType: null,
  activeTab: null,
  itemsPerPage: 20,
  topics: {
    all: [],
    ask: [],
    share: [],
    job: [],
    good: [],
    dev: []
  }
};

export default {
  set_active_tab: (state, { tab }) => {
    state.activeTab = tab;
  },
  set_topics: (state, { tab, data }) => {
    Vue.set(state.topics, tab, data);
  }
};
