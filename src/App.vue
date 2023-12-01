<template>
  <!-- Router view component to display the content based on routes -->
  <router-view />
</template>

<script lang="ts">
// Importing necessary components and modules
import {Options, Vue } from "vue-class-component";



export default class App extends Vue {

}
</script>

<style lang="scss">
/* Styling using SCSS syntax */

/* CSS variables for main and white colors */
:root {
  --main-color: rgba(41, 32, 97, 0.842);
  --white-color: #dfdfdf;
}

/* Resetting default styles */
* {

  margin: 0;
  box-sizing: border-box;
}

/* Styling for the root element of the application */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fcfdfd;
}

/* Styling for buttons */
.btn {
  padding: 0.8rem 2rem;
  display: block;
  border: 1px solid transparent;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 900;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
}

/* Button hover and active states */
.btn:hover,
.btn:active {
  transform: scale(1.05) translateY(-0.1rem);
  color: var(--white-color);
}

/* Main button style */
.btn-main {
  background: #052727;
  color: white;
}

/* Main button hover state */
.btn-main:hover {
  color: var(--white-color);
  border-color: var(--main-color);
}
</style>
