<template>
  <div id="loginform">
    <!-- Start of the template section -->
    <h1>Login</h1>
    <!-- Main heading for the login form -->
    <form @submit.prevent="login">
      <!-- Form element with a submit event listener -->

      <div id="username">
        <!-- Container for the username input -->
        <label for="username">Username:</label>
        <!-- Label for the username input -->
        <input type="text" v-model="username" />
        <!-- Input field for entering the username with two-way data binding (v-model) -->
      </div>

      <div id="password">
        <!-- Container for the password input -->
        <label for="password">Password:</label>
        <!-- Label for the password input -->
        <input type="password" v-model="password" />
        <!-- Input field for entering the password with two-way data binding (v-model) -->
      </div>

      <button class="btn" type="submit">
        <!-- Submit button for the form -->
        Login
      </button>
    </form>
    <!-- Sign Up message -->
    <div id="signup">
      Don't have an account?
      <router-link to="/signup">Sign Up here</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import UpdatesService from "@/services/UpdatesService.vue";

export default class LoginView extends Vue {
  username = "";
  password = "";

  login() {
    UpdatesService.getUserLoginData(this.username)
      .then((response) => {
        // Handle success response
        if (response[0].password === this.password) {
          sessionStorage.setItem("userProfileID", response[0]._id);
          sessionStorage.setItem(
            "userDeatils",
            JSON.stringify({ firstName: response[0].firstName })
          );
          this.$router.push("/");
        }
      })
      .catch((error) => {
        // Handle error response
        console.error(error);
      });
  }

  reset() {
    // Method to reset the input fields
    this.username = "";
    this.password = "";
  }
}
</script>

<style lang="scss">
#loginform {
  background-color: white;
  padding: 3% 0 3% 0;
  color: black;
  max-width: 60%;
  margin: 5% 0 5% 20%;

  nav {
    padding: 1% 1% 0.5% 1%;
    min-width: max-content;
    background-color: rgba($color: #344749, $alpha: 01);
    height: max-content;
  }

  h1 {
    font-size: 60px;
    font-weight: bold;
    font-family: Arial, sans-serif;
    text-transform: uppercase;
    text-align: center;
    margin: 4% 0 5% 0;
  }

  #username,
  #password {
    margin: 4% 0 0 0;
    font-size: 30px;
    font-weight: bold;
  }

  .btn {
    margin: 6% 0 0 2%;
    display: inline;
    cursor: pointer;
    font-size: 120%;
  }

  .btn:hover,
  .btn:active {
    background-color: rgba(45, 85, 24, 0.759);
    color: white;
  }

  input {
    margin: 0 0 0 1%;
    min-height: 2rem;
    min-width: 18rem;
  }

  #signup {
    margin: 4% 0 0 2%;
    font-size: 120%;
    font-weight: 500;
  }
}
</style>
