<template>
  <div class="root">
    <banner></banner>
    <sortingBy></sortingBy>
  </div>
</template>

<script>
import banner from './pageElements/banner.vue'
import sortingBy from './pageElements/sortingBy.vue'

export default {
  name: 'chat',
  components: {
    banner,
    sortingBy
  }
}
</script>
