<template lang='pug'>
.topics-container(:class='{ activeTab }')
  transition(:name='transition')
    ul.topic-list
      li.item(v-for='item in topics[activeTab]' :key='item.id')
        Avatar(:author='item.author')
        | {{item.reply_count}}/{{item.visit_count}}
        | {{item.title}}
</template>
<script>
import { mapActions, mapState } from 'vuex';

import Avatar from '../components/Avatar.vue';

export default {
  components: {
    Avatar
  },
  data: () => ({
    transition: 'slide-right'
  }),
  asyncData: ({ store, route: { params } }) => {
    return store.dispatch('getTopics', params);
  },
  computed: {
    ...mapState(['topics', 'activeTab'])
  },
  methods: {
    ...mapActions(['getTopics'])
  }
};
</script>
