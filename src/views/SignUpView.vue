<template>
  <!-- Signup form container -->
  <div id="signuppage">
    <!-- Main heading for the signup form -->
    <h1>Sign Up</h1>
    <!-- Signup form with input fields and validation messages -->
    <form @submit.prevent="signup">
      <!-- First Name input field with validation message -->
      <div
        id="firstname"
        class="form-group"
        :class="{ error: errors.firstName }"
      >
        <label for="firstName">First Name:</label>
        <input type="text" v-model="firstName" />
        <span v-if="errors.firstName" class="error-message">{{
          errors.firstName
        }}</span>
      </div>

      <!-- Last Name input field with validation message -->
      <div id="lastname" class="form-group" :class="{ error: errors.lastName }">
        <label for="lastName">Last Name:</label>
        <input type="text" v-model="lastName" />
        <span v-if="errors.lastName" class="error-message">{{
          errors.lastName
        }}</span>
      </div>

      <!-- Email input field with validation message -->
      <div id="email" class="form-group" :class="{ error: errors.email }">
        <label for="email">Email ID:</label>
        <input type="email" v-model="email" />
        <span v-if="errors.email" class="error-message">{{
          errors.email
        }}</span>
      </div>

      <!-- Password input field with validation message -->
      <div id="password" class="form-group" :class="{ error: errors.password }">
        <label for="password">Password:</label>
        <input type="password" v-model="password" />
        <span v-if="errors.password" class="error-message">{{
          errors.password
        }}</span>
      </div>

      <!-- Confirm Password input field with validation message -->
      <div
        id="confirmpassword"
        class="form-group"
        :class="{ error: errors.confirmPassword }"
      >
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" v-model="confirmPassword" />
        <span v-if="errors.confirmPassword" class="error-message">{{
          errors.confirmPassword
        }}</span>
      </div>

      <!-- Signup button -->
      <button class="btn" type="submit">Sign Up</button>
    </form>

    <!-- Sign In message with a link to login page -->
    <div id="signup">
      Already have an account?
      <router-link to="/login">Sign In here</router-link>
    </div>
  </div>
</template>

<script lang="ts">
// Import necessary modules and components
import { Vue } from "vue-class-component";
import { errors } from "undici-types";
import UpdatesService from "@/services/UpdatesService.vue";

// Export the SignUpView component class
export default class SignUpView extends Vue {
  // Data properties for form fields and validation errors
  firstName = "";
  lastName = "";
  email = "";
  password = "";
  confirmPassword = "";
  errors: any = {};

  // Method to handle form submission
  signup() {
    this.errors = {}; // Clear previous errors

    // Basic validation for fields
    if (!this.firstName) {
      this.errors.firstName = "First Name is required.";
    }
    if (!this.lastName) {
      this.errors.lastName = "Last Name is required.";
    }
    if (!this.email) {
      this.errors.email = "Email ID is required.";
    } else if (!this.isValidEmail(this.email)) {
      this.errors.email = "Invalid email format.";
    }
    if (!this.password) {
      this.errors.password = "Password is required.";
    }
    if (!this.confirmPassword) {
      this.errors.confirmPassword = "Confirm Password is required.";
    } else if (this.confirmPassword !== this.password) {
      this.errors.confirmPassword = "Passwords do not match.";
    }

    // Perform signup logic if there are no errors
    if (Object.keys(this.errors).length === 0) {
      // Add your new data to the object
      const userDeatils = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      };

      UpdatesService.insertUserProfileData(userDeatils)
      .then((response) => {
        // Handle success response
        sessionStorage.setItem("userProfileID", response.insertedId);
        sessionStorage.setItem("userDeatils", JSON.stringify({ firstName: userDeatils.firstName }));
        this.$router.push("/login");
      })
      .catch((error) => {
        // Handle error response
        console.error(error);
      });
    }
  }

  // Method to validate email format using regex
  isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Method to reset the input fields and errors
  reset() {
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.password = "";
    this.confirmPassword = "";
    this.errors = {};
  }
}
</script>

<style scoped lang="scss">
/* Scoped styles for the SignUpView component */

#signuppage {
  /* Styles for the signup form container */
  background-color: white;
  padding: 3% 0 3% 0;
  color: black;
  max-width: 60%;
  margin: 5% 0 5% 20%;

  form {
    /* Styles for the form inside the signup container */
    display: inline-block;
    min-width: 100%;
  }

  div {
    /* Styles for generic div elements inside the signup container */
    text-align: left;
    margin: 2% 0 0 33%;
  }

  h1 {
    /* Styles for the main heading */
    font-size: 60px;
    font-weight: bold;
    font-family: Arial, sans-serif;
    text-transform: uppercase;
    text-align: center;
    margin: 0 0 5% 0;
  }

  label {
    /* Styles for labels */
    font-size: 120%;
    font-weight: 500;
  }

  input {
    /* Styles for input fields */
    min-height: 1.5rem;
  }

  /* Styles for specific input fields */
  #firstname input {
    /* Styles for first name input fields */
    margin: 0 0 0 12%;
  }

  #lastname input {
    /* Styles for last name input fields */
    margin: 0 0 0 12.5%;
  }

  #email input {
    /* Styles for email input field */
    margin: 0 0 0 16%;
  }

  #password input {
    /* Styles for password input field */
    margin: 0 0 0 14.5%;
  }

  #confirmpassword input {
    /* Styles for confirm password input field */
    margin: 0 0 0 2.2%;
  }

  .btn {
    /* Styles for buttons */
    margin: 6% 0 0 2%;
    display: inline;
    cursor: pointer;
    font-size: 120%;
  }

  .btn:hover,
  .btn:active {
    /* Styles for button hover and active states */
    background-color: rgba(45, 85, 24, 0.759);
    color: white;
  }

  #signup {
    /* Styles for the "Sign Up" button */
    margin: 4% 0 0 2%;
    font-size: 120%;
    font-weight: 500;
    text-align: center;
  }

  .error-message {
    /* Styles for error messages */
    margin-left: 5%;
    color: red;
  }
}
</style>
