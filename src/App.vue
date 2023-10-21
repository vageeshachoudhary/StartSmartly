<template>
  <!-- Template section containing the application's layout structure -->
  <nav>
    <!-- Navigation bar component -->
    <Navbar />
  </nav>
  <!-- Router view component to display the content based on routes -->
  <router-view />
</template>

<script lang="ts">
// Importing necessary components and modules
import Navbar from "@/components/Navbar.vue";
import { Options, Vue } from "vue-class-component";

// Vue class with imported Navbar component
@Options({
  components: {
    Navbar,
  },
})
export default class App extends Vue {}
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
  padding: 0;
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
  /* Background with linear gradient and image */
  background: linear-gradient(
      45deg,
      rgba(14, 35, 36, 0.575),
      rgba(0, 37, 22, 0.644)
    ),
    url("https://freeagent-res.cloudinary.com/image/upload/c_limit,w_1200/dpr_auto,f_auto/website-images/netlify/guides__small-business__stu-loans__OG.png")
      center center;
  background-size: cover;
  min-height: 100vh;
}

/* Styling for the navigation bar */
nav {
  padding: 1% 1% 0.5% 1%;
  min-width: max-content;
  background-color: #0005;
  height: max-content;
  
  /* Styling for navigation links */
  a {
    font-weight: bold;
    color: #42b983;
  }
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
  background: var(--main-color);
  color: #42b983;
}

/* Main button hover state */
.btn-main:hover {
  color: var(--white-color);
  border-color: var(--main-color);
}
</style>
