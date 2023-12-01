<template>
  <div class="skillswap">
    <nav>
      <!-- Navigation bar component -->
      <Navbar />
    </nav>
    <div class="cover-photo">
      <!-- Cover page photo with sliding animation -->
      <div class="cover-photo-container">
        <img
          src="https://raw.githubusercontent.com/vageeshachoudhary/images/main/skillswap_cover.jpeg"
          alt="Cover Photo"
          class="cover-photo-img"
        />
        <div class="cover-text" :class="{ 'slide-in': showText }">
          <h1>Welcome to Skill Swap!</h1>
          <br />
          <p>
            Unlock the doors to a world of knowledge and friendship at Skill
            Swap. Whether you're eager to learn a new skill or share your
            expertise, this platform connects students and teachers in a unique
            cultural exchange experience.
          </p>
          <br />
          <p>
            Discover a new language, delve into the art of coding, master
            culinary delights, or explore any skill that piques your interest.
            Skill Swap is more than just a learning platform; it's a chance to
            connect with individuals from diverse backgrounds, creating
            friendships that last a lifetime.
          </p>
        </div>
      </div>
    </div>
    <div class="how-it-works">
      <h2>How It Works</h2>
      <br />
      <div class="steps">
        <div class="step">
          <img
            src="https://raw.githubusercontent.com/vageeshachoudhary/images/main/number-one.png"
            alt="Step 1 Icon"
          />
          <p>Sign up and create your profile.</p>
        </div>
        <div class="step">
          <img
            src="https://raw.githubusercontent.com/vageeshachoudhary/images/main/number-2.png"
            alt="Step 2 Icon"
          />
          <p>Browse through a variety of skills offered by our community.</p>
        </div>
        <div class="step">
          <img
            src="https://raw.githubusercontent.com/vageeshachoudhary/images/main/number-3.png"
            alt="Step 3 Icon"
          />
          <p>Connect with someone who shares your passion.</p>
        </div>
        <div class="step">
          <img
            src="https://raw.githubusercontent.com/vageeshachoudhary/images/main/number-four.png"
            alt="Step 4 Icon"
          />
          <p>
            Swap skills, make friends, and embark on a journey of mutual growth.
          </p>
        </div>
      </div>
    </div>
    <div class="create-profile">
      <div class="left-content">
        <img
          src="https://raw.githubusercontent.com/vageeshachoudhary/images/main/skill.jpg"
          alt="Left Image"
          class="left-image"
        />
      </div>
      <!-- Text on the right -->
      <div class="right-content">
        <h2>Create Your Profile</h2>
        <p>
          Join Skill Swap and start your learning journey today! Click the
          button below to create your profile.
        </p>
        <div>
          <div v-if="!isLoggedIn">
            <router-link to="/login" class="profile-button">
              Login to View Profile
            </router-link>
          </div>
          <div v-if="isLoggedIn">
            <router-link to="/my-profile" class="profile-button">
              Create Profile
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <br />
    <SkillsSlideshowTile></SkillsSlideshowTile>
  </div>
</template>

<script lang="ts">
import Navbar from "@/components/Navbar.vue";
import { Options, Vue } from "vue-class-component";
import SkillsSlideshowTile from "@/components/SkillsSlideshowTile.vue";

@Options({
  components: {
    Navbar,
    SkillsSlideshowTile,
  },
})
export default class SkillSwapView extends Vue {
  // Your Vue.js component logic here
  showText = false;
  isLoggedIn = sessionStorage.getItem("userProfileID");

  mounted() {
    // Trigger animation after the component is mounted
    this.animateCoverPhoto();
    this.showText = true; // Set showText to true to trigger text animation
  }

  animateCoverPhoto() {
    // Add a class to trigger the sliding animation
    const coverPhoto = document.querySelector(".cover-photo");
    coverPhoto?.classList.add("slide-in");
  }
}
</script>

<style lang="scss">
.skillswap {
  nav {
    padding: 1% 1% 0.5% 1%;
    min-width: max-content;
    background-color: rgba($color: #344749, $alpha: 01);
    height: max-content;
  }

  .cover-photo {
    margin-top: 20px;
    margin-left: 20px;
    text-align: center;
    overflow: hidden; /* Hide the part of the image that is initially off-screen */

    .cover-photo-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &.slide-in .cover-photo-img {
      animation: slideIn 1s ease; /* Add a transition effect */
      max-width: 50%; /* Adjust the image width as needed */
    }

    .cover-text {
      max-width: 70%; /* Adjust the text width as needed */
      padding: 20px;
      box-sizing: border-box;
      text-align: left;
      transform: translateX(
        100%
      ); /* Initial position off-screen to the right */
      color: black;
    }

    /* Sliding animation class for text */
    &.slide-in .cover-text {
      transform: translateX(0); /* Final position on-screen */
      animation: slideInText 1s ease;
    }
  }

  .how-it-works {
    text-align: center;
    margin: 50px 0;

    h2 {
      font-size: 2em;
      margin-bottom: 20px;
      color: black;
    }

    .steps {
      display: flex;
      justify-content: space-around;

      .step {
        max-width: 200px;
        text-align: center;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 8px;

        img {
          max-width: 80px;
          margin-bottom: 10px;
        }
        p {
          color: black;
        }
      }
    }
  }
  .create-profile {
    background-color: lightblue;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
  }
  .left-content {
    flex: 1; /* Take up as much space as possible */
  }

  .left-image {
    max-width: 100%; /* Make sure the image is responsive */
    border-radius: 8px; /* Optional: Add border-radius for a rounded image */
  }

  .right-content {
    flex: 1; /* Take up as much space as possible */
    text-align: left;
    padding: 30px; /* Adjust the padding as needed */
  }

  h2 {
    font-size: 2em;
    margin-bottom: 10px;
  }

  p {
    font-size: 0.95em;
    color: #555;
    padding-bottom: 10px;
  }
  .profile-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #3498db;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #2980b9;
    }
  }

  @keyframes slideIn {
    from {
      transform: translateX(
        -100%
      ); /* Initial position off-screen to the left */
    }
    to {
      transform: translateX(0); /* Final position on-screen */
    }
  }

  @keyframes slideInText {
    from {
      transform: translateX(
        100%
      ); /* Initial position off-screen to the right */
    }
    to {
      transform: translateX(0); /* Final position on-screen */
    }
  }
}
</style>
