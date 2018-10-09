<template lang="pug">
.avatar
  img(:src="author.avatar_url" :title="author.loginname")
</template>
<script>
export default {
  name: 'avatar',
  props: {
    author: {
      type: Object,
    },
  },
};
</script>
<style lang="scss">
.avatar {
  display: inline-block;
  img {
    width: 36px;
    height: 36px;
  }
}
</style>

