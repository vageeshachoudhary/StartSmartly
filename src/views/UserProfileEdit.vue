<template>
    <nav>
    <Navbar />
  </nav>
  <br>
  <div class="user-profile-edit">
    <h2>Edit Your Skill Swap Profile</h2>
    <form @submit.prevent="submitProfile">
      <div class="form-group">
        <label for="fullName">Display Name:</label>
        <input
          type="text"
          id="fullName"
          v-model="userProfile.fullName"
          required
        />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="userProfile.email" required />
      </div>

      <div class="form-group">
        <label for="skills">Skills (comma-separated):</label>
        <input type="text" id="skills" v-model="userProfile.skills" required />
      </div>

      <div class="form-group">
        <label for="bio">Bio:</label>
        <textarea id="bio" v-model="userProfile.bio" required></textarea>
      </div>

      <div class="form-group">
        <label for="profilePicture">Profile Picture:</label>
        <input
          type="file"
          id="profilePicture"
          @change="handleFileChange"
          accept="image/*"
        />
      </div>

      <button type="submit">Save Changes</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Navbar from "@/components/Navbar.vue";
import UpdatesService from "@/services/UpdatesService.vue";

//expected properties that a user profile object can have
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
export default class UserProfileEdit extends Vue {
  public userProfile: UserProfile = {};

  public created(): void {
    UpdatesService.getUserProfileData()
      .then((response) => {
        // Handle success response
        this.userProfile = response[0];
      })
      .catch((error) => {
        // Handle error response
        console.error(error);
      });
  }

  public handleFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.uploadProfileImage(input.files[0]);
    }
  }

  public uploadProfileImage(profilePicture: Blob): void {
    if (profilePicture) {
      const reader = new FileReader();

      reader.onload = (event: ProgressEvent<FileReader>) => {
        this.userProfile.profileImage = event.target?.result as string;
      };

      reader.readAsDataURL(profilePicture);
    }
  }

  public submitProfile(): void {
    UpdatesService.updateUserProfileData(this.userProfile)
      .then((response) => {
        this.$router.push("/my-profile");
      })
      .catch((error) => {
        // Handle error response
        console.error(error);
      });
  }
}
</script>

<style scoped>
.user-profile-edit {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: black;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  margin-top: 5px;
  color: black;
}

button {
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
