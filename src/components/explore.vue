<template>
  <div class="root">
    <div class="subContent">
      <animeRow></animeRow>
    </div>
  </div>
</template>

<script>
import animeRow from './pageElements/animeRow.vue'

export default {
  name: 'explore',
  components: {
    animeRow
  }
}
</script>
