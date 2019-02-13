<template>
  <div class="root">
    <navigation :user="user"></navigation>
    <transition name="fade" mode="out-in">
      <router-view id="content" :user="user"></router-view>
    </transition>
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
