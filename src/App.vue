<template>
  <nav>
    <Navbar />
  </nav>
  <router-view />
</template>

<script lang="ts">
import Navbar from "@/components/Navbar.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    Navbar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
:root {
  --main-color: rgba(41, 32, 97, 0.842);
  --white-color: #dfdfdf;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fcfdfd;
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

nav {
  padding: 1% 1% 0.5% 1%;
  min-width: max-content;
  background-color: #0005;
  height: max-content;


  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

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

.btn:hover,
.btn:active {
  transform: scale(1.05) translateY(-0.1rem);
}
.btn-main {
  background: var(--main-color);
  color: var(--white-color);
}
.btn-main:hover {
  color: var(--white-color);
  border-color: var(--main-color);
}
</style>
