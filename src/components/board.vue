<template>
  <div class="root">
      <section class="subContent">
          <post></post>
          <post></post>
          <post></post>
          <post></post>
          <post></post>
          <post></post>
      </section>
  </div>
</template>

<script>
// import axios from 'axios'
import post from './pageElements/post.vue'
export default {
  name: 'board',
  components: {
    post
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
