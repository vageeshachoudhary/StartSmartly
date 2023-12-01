<template>
    <div class="container">
        <h1>International Student Preferences</h1>
        <form action="#">
            <!-- Personal Information -->
            <h2>Personal Information</h2>
            <label for="fullName">Full Name:</label>
            <input type="text" id="fullName" name="fullName" required>

            <label for="gender">Gender:</label>
            <select id="gender" name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>

            <!-- Academic Information -->
            <h2>Academic Information</h2>
            <label for="institution">Current Institution:</label>
            <input type="text" id="institution" name="institution" required>

            <label for="degree">Degree Program:</label>
            <input type="text" id="degree" name="degree" required>

            <!-- Preferences -->
            <h2>Preferences</h2>
            <label for="accommodation">Preferred Accommodation Type:</label>
            <select id="accommodation" name="accommodation">
                <option value="dormitory">Dormitory</option>
                <option value="apartment">Apartment</option>
                <option value="homestay">Homestay</option>
            </select>

            <label for="dietary">Dietary Preferences/Restrictions:</label>
            <input type="text" id="dietary" name="dietary">

            <input type="submit" value="Submit">
        </form>
    </div>


</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class ProfilePage extends Vue {
  username = "";
  password = "";

  submitForm() {
    this.username = "";
    this.password = "";
  }
}
</script>

<style lang="scss">
#profilepage {
  color: black;
  font-family: Arial, sans-serif;
  padding: 20px;
//   background: url('path-to-your-background-image.jpg') no-repeat center center fixed; 
  background-size: cover; /* Background image */

  .detail.profile {
    background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white */
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;

    h1 {
      margin-bottom: 20px;
      color: #0056b3; /* University color */
    }

    .content-box {
    display: flex; // Use Flexbox
    justify-content: center; // Center the elements
    align-items: center; // Vertically align the elements
    margin-bottom: 20px;

      h3 {
        margin-bottom: 20px;
        color: #0056b3; /* University color */
      }

      input,
      textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        flex-grow: 1; // Allow the input to take up the remaining space
      }
    }

    .btn {
      background-color: #0056b3; /* University color */
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      text-decoration: none;
    }

    .btn:hover {
      background-color: #003f7f; /* Darker university color */
    }
  }

  #signup {
    text-align: center;
  }
}
</style>
