<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class LoginView extends Vue {
  username = "";
  password = "";

  // Methods for handling user interactions
  login() {

    console.log("Logging in with username:", this.username);
    console.log("Password:", this.password);
    
  }
}
</script>
