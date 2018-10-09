import { topicList, topicDetail, createTopic, updateTopic } from '../api';

export default {
  async getTopics({ commit, dispatch, state }, { tab, page }) {
    commit('set_active_tab', { tab });
    try {
      const resp = await topicList({
        tab,
        page,
        limit: state.pageSize || 15
      });
      commit('set_topics', { tab, data: resp.data });
    } catch (err) {
      console.log(err);
    }
  }
};
