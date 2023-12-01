<template>
  <div v-if="profiles.length" class="skills-slideshow">
    <h1>Connect and Grow your Skills</h1>
    <br />
    <div
      :class="{ 'profile-info': true, slide: index === currentIndex }"
      v-for="(profile, index) in profiles"
      :key="index"
    >
      <img
        :src="profile.profileImage"
        alt="Profile Picture"
        class="profile-picture"
      />
      <p><strong>Full Name:</strong> {{ profile.fullName }}</p>
      <p><strong>Skills:</strong> {{ profile.skills }}</p>
      <p><strong>Bio:</strong> {{ profile.bio }}</p>
    </div>
    <div class="controls">
      <button @click="prevProfile" :disabled="currentIndex === 0">
        Previous
      </button>
      <button
        @click="nextProfile"
        :disabled="currentIndex === profiles.length - 1"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";

interface UserProfile {
  fullName?: string;
  email?: string;
  skills?: string;
  bio?: string;
  profileImage?: string;
}

@Options({})
export default class SkillsSlideshow extends Vue {
  public profiles: UserProfile[] = [];
  public currentIndex = 0;

  public created(): void {
    axios
      .get("http://localhost:3000/getuserprofiles")
      .then((response) => {
        // Handle success response
        this.profiles = response.data;
      })
      .catch((error) => {
        // Handle error response
        console.error(error);
      });
  }

  public nextProfile(): void {
    if (this.currentIndex < this.profiles.length - 1) {
      this.currentIndex++;
    }
  }

  public prevProfile(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
</script>

<style scoped>
.skills-slideshow {
  position: relative;
}

.profile-info {
  background-color: rgb(200, 244, 245);
}

.profile-picture {
  border-radius: 50%;
  width: 200px;
  height: 200px;
}

.skills-slideshow h1 {
  text-align: center;
  color: black;
}

.slide {
  display: none;
  transition: opacity 0.5s ease-in-out;
}

.slide.active {
  display: block;
  opacity: 1;
}

.skill-image {
  max-width: 100%;
  border-radius: 8px;
}

.skill-details {
  text-align: center;
  margin-top: 10px;
}

.controls {
  margin-top: 20px;
  text-align: center;
}

button {
  padding: 10px 20px;
  margin: 0 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease, color 0.3s ease;
}

button:disabled {
  background-color: #ccc;
  color: #666;
  cursor: not-allowed;
}
</style>
