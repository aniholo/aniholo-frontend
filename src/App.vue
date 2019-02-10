<template>
  <div class="root">
    <router-view :user="user"></router-view>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      user: {}
    }
  },
  name: 'app',
  components: {
  }
}
</script>
<style>
  @import './assets/css/styles.css';
</style>
