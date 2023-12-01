<template>
  <div class="home">
    <nav>
      <!-- Navigation bar component -->
      <Navbar />
    </nav>
    <div id="title">
      <!-- Page Title -->
      <h1>Welcome to StartSmartly</h1>
      <h2>Elevating your FreshStart</h2>
    </div>
  </div>
  <AboutTile></AboutTile>
  <LatestNewsTile></LatestNewsTile>
  <GuidelinesTile></GuidelinesTile>
  <!-- <router-link to="/profile">Profile Page</router-link> -->
</template>

<script lang="ts">
import AboutTile from "@/components/AboutTile.vue";
import GuidelinesTile from "@/components/GuidelinesTile.vue";
import LatestNewsTile from "@/components/LatestNewsTile.vue";
import Navbar from "@/components/Navbar.vue";
import { Options, Vue } from "vue-class-component";


@Options({
  components: {
    Navbar,
    LatestNewsTile,
    AboutTile,
    GuidelinesTile,
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
.home {
  // Global styles for the home section

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

  h2 {
    // Styles for the subheading
    margin-top: 3%;
    font-family: cursive;
    font-size: 100%;
  }

  #title {
    font-size: 250%;
    padding: 12% 0 0 0;
  }

  /* Styling for the navigation bar */
  nav {
    padding: 1% 1% 0.5% 1%;
    min-width: max-content;
    background-color: rgba($color: #344749, $alpha: 01);
    height: max-content;

    /* Styling for navigation links */
    a {
      font-weight: bold;
      color: #42b983;
    }
  }
}
</style>
