<template>
  <div class="root">
    <form action="http://127.0.0.1:8000/auth/login" method="post">
        Username: <input type="text" name="user_id"><br>
        Password: <input type="text" name="password"><br>
        <input type="submit" value="Submit">
    </form> 
  </div>
</template>

<script>

export default {
  name: "login",
  components: {
  }
}
</script>
