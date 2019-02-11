<template>
  <div class="root">
    <banner></banner>
    <sortingBy></sortingBy>
  </div>
</template>

<script>
import banner from './pageElements/banner.vue'
import sortingBy from './pageElements/sortingBy.vue'
// import axios from 'axios'

export default {
  name: 'board',
  components: {
    banner,
    sortingBy
  },
  mounted () {
    /*
    const options = {
      url: 'http://127.0.0.1:8000/api/token/',
      method: 'POST',
      data: {
        username: 'testuser01',
        password: 'hunter2'
      }
    }
    axios(options)
      .then(function (response) {
        // console.log(response);
      })
      .catch(function (error) {
        // console.log(error);
    });
    */
  }
}
</script>
