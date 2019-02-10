<template>
  <div class="root">
    <navigation></navigation>
    <router-view id="content" :user="user">
    </router-view>
  </div>
</template>

<script>
import navigation from './components/pageElements/nav.vue'

export default {
  data: function () {
    return {
      user: {}
    }
  },
  name: 'app',
  components: {
    navigation
  }
}
</script>
<style>
  @import './assets/css/styles.css';
</style>
