<template>
  <div class="user-profile-view">
    <h2>Your Skill Swap Profile</h2>
    <div v-if="userProfile" class="profile-info">
      <p>
        <strong>Full Name:</strong>
        {{ userProfile.fullName || "Not Available" }}
      </p>
      <p><strong>Email:</strong> {{ userProfile.email || "Not Available" }}</p>
      <p>
        <strong>Skills:</strong> {{ userProfile.skills || "Not Available" }}
      </p>
      <p><strong>Bio:</strong> {{ userProfile.bio || "Not Available" }}</p>
      <p><strong>Profile Image:</strong></p>
      <img
        :src="userProfile.profileImage"
        alt="Profile Picture Not Available"
        class="profile-picture"
      />
    </div>
    <router-link :to="{ name: 'user-profile-edit' }" class="edit-link"
      >Edit Profile</router-link
    >
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

interface UserProfile {
  fullName?: string;
  email?: string;
  skills?: string;
  bio?: string;
  profileImage?: string;
}

@Options({
  components: {
    Navbar,
  },
})
export default class UserProfileView extends Vue {
  public userProfile: UserProfile | null = null;

  public created(): void {
    axios
      .post("http://localhost:3000/getuserprofiledata", {
        userProfileID: sessionStorage.getItem("userProfileID"),
      })
      .then((response) => {
        // Handle success response
        console.log(response.data[0]);
        this.userProfile = response.data[0];
      })
      .catch((error) => {
        // Handle error response
        console.error(error);
      });
  }
}
</script>

<style scoped>
.user-profile-view {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.edit-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.profile-info {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  color: black;
}

.profile-info p {
  margin: 5px 0;
  color: black;
}

.profile-picture {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
  border-radius: 4px;
}
</style>
