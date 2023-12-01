<template>
  <header>
    <div class="logo">
      <!-- Logo section -->
      <ul class="nav-ul">
        <!-- Navigation links container -->
        <li class="nav-li">
          <!-- Individual navigation link -->
          <router-link class="nav--link" to="/">Home</router-link>
          <!-- Vue Router link to the Home route -->
        </li>
        <li class="nav-li">
          <router-link class="nav--link" to="/housing">Housing</router-link>
        </li>
        <li class="nav-li">
          <router-link class="nav--link" to="/groceriesNearby"
            >Groceries Nearby</router-link
          >
        </li>
        <li class="nav-li">
          <router-link class="nav--link" to="/skillSwap"
            >Skill Swap</router-link
          >
        </li>
        <li class="nav-li">
          <router-link class="nav--link" to="/jobs">Jobs</router-link>
        </li>
      </ul>
    </div>
    <!-- Toggle menu button -->
    <nav class="navlogin">
      <!-- Navigation menu -->
      <ul class="nav-ul">
        <li class="nav-li">
          <router-link v-if="!userFirstName" class="btn btn-main" to="/login"
            >Login / Sign Up</router-link
          >
          <!-- Vue Router link to the Login/Sign Up route -->
          <span class="firstName" v-else>
            <span>Hello, {{ userFirstName }}!</span>
            <button><span class="logout" v-on:click="logout()">Logout</span></button>
          </span>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Navbar extends Vue {

  userFirstName = null;

  mounted(): void {
    const userDeatils = sessionStorage.getItem("userDeatils");
    this.userFirstName = userDeatils ? JSON.parse(userDeatils).firstName : null;
  }


  logout() {
    // Method to logout the user
    sessionStorage.removeItem("userDeatils");
    sessionStorage.removeItem("userProfileID");
    this.userFirstName = null;
    this.$router.push("/");
  }
}
</script>

<style scoped lang="scss">
/* Styling for the header section and navigation links */
header {
  margin: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: rgba($color: #344749, $alpha: 0.8);
}

.nav-ul {
  flex: 1;
  list-style: none;
  display: flex;
}

.nav-li:not(:last-child) {
  margin-right: 2rem;
}

.nav--link {
  display: block;
  padding: 1rem 3rem;

  text-decoration: none;

  text-transform: uppercase;
  font-weight: 700;
  color: var(--white-color);
  justify-content: center;
  align-items: center;

  transition: all 0.5s ease-in-out;
  position: relative;
}

.nav--link:hover {
  letter-spacing: 1px;
}

.nav--link::before,
.nav--link::after {
  visibility: hidden;
  content: "";
  margin: 0 auto;
  display: block;
  border: 1px solid var(--white-color);
  transition: width 0.5s ease-in-out;
  position: absolute;
  width: 0;
}

.nav--link::before {
  right: 0;
  left: 0;
  top: 0;
}

.nav--link::after {
  right: 0;
  left: 0;
  bottom: 0;
}

.nav--link:hover:before,
.nav--link:hover:after {
  visibility: visible;
  width: 80%;
}

.logo {
  letter-spacing: 2px;
  font-weight: 900;
  font-size: 1rem;
  font-family: "Helvetica", Roboto;
  color: var(--white-color);
  cursor: pointer;
}

.navlogin {
  padding: 0;
  float: right;
}

.firstName {
  color: var(--white-color);
  font-weight: 900;
  font-size: 1rem;
  font-family: "Helvetica", Roboto;
}

.logout {
 
  text-decoration: underline;
  cursor: pointer;
  color: black;
}
</style>
