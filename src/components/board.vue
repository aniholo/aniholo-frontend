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
import axios from 'axios'
import post from './pageElements/post.vue'
export default {
  name: "board",
  components: {
    post
  },
  mounted() {
    var bodyFormData = new FormData();
    bodyFormData.set('user_id', '')
    bodyFormData.set('password', '')

    const options = {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      url: "http://127.0.0.1:8000/auth/login",
      method: "POST",
      data: bodyFormData
    };
    axios(options)
      .then(function(response) {
        // console.log(response);
      })
      .catch(function(error) {
        // console.log(error);
    });
  }
}
</script>
