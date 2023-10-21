<template>
  <div class="home">
    <!-- Page Title -->
    <h1>Welcome to StartSmartly</h1>
    <h2>Elevating your FreshStart</h2>
    <div id="search">
      <span>
        <!-- Input for search criteria -->
        <input type="text" id="searchfield" placeholder="Enter your search criteria here" v-model="searchcriteria" />
      </span>
      <span>
        <!-- Input for location with dropdown -->
        <input type="text" id="locationfield" v-model="query" @input="searchLocation" placeholder="Enter a location" />
        <!-- Predictions dropdown -->
        <ul v-if="predictions.length > 0" class="predictions">
          <li v-for="(prediction, index) in predictions" :key="index" @click="selectLocation(prediction)">{{
            prediction.description }}</li>
        </ul>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
declare const google: any;

export default class HomeView extends Vue {
  // Data properties
  searchcriteria = '';
  query = '';
  predictions: any = [];

  // Function to search for location predictions
  searchLocation() {
    if (this.query) {
      const placesService = new google.maps.places.AutocompleteService();
      placesService.getPlacePredictions(
        { input: this.query, types: ['(cities)'], componentRestrictions: { country: 'CA' } },
        (results: any, status: string) => {
          if (status === 'OK' && results) {
            this.predictions = results;
          }
        }
      );
    } else {
      this.predictions = [];
    }
  }

  // Function to select a location prediction
  selectLocation(prediction: any) {
    this.query = prediction.description;
    this.predictions = [];
  }
}
</script>

<style scoped lang="scss">
.home {
  // Global styles for the home section
  padding: 12% 0 0 0;
  font-size: 250%;

  h2 {
    // Styles for the subheading
    margin-top: 3%;
    font-family: cursive;
    font-size: 100%;
  }

  #search {
    // Styles for the search container
    width: 80%;
    padding: 3% 3% 3% 25%;
  }

  #searchfield {
    // Styles for the search input
    padding-left: 3%;
    width: 50%;
    min-height: 2rem;
    border-radius: 1rem;
    background-color: #0005;
    color: white;
    opacity: 1;

    &::placeholder {
      // Styles for the input placeholder
      color: white;
    }
  }

  #locationfield {
    // Styles for the location input
    margin-left: 3%;
    padding-left: 3%;
    width: 37%;
    min-height: 2rem;
    border-radius: 1rem;
    background-color: #0005;
    color: white;
    opacity: 1;

    &::placeholder {
      // Styles for the input placeholder
      color: white;
    }
  }

  .predictions {
    // Styles for the predictions dropdown
    position: absolute;
    width: 18.5%;
    margin: 0 20% 0 55.5%;
    background-color: #fff;
    /* Background color for the dropdown */
    border: 1px solid #ccc;
    border-radius: 0 0 5% 5%;
    /* Rounded bottom corners */
    margin-top: 5px;
    /* Adjust as needed to control spacing */
    max-height: 200px;
    /* Adjust as needed for maximum height */
    overflow-y: auto;
    list-style: none;
    padding: 0;
    left: 0;
    display: block;
    z-index: 1;
    text-align: left;
    color: black;
    font-size: small;

    li {
      // Styles for individual prediction items
      padding: 10px;
      cursor: pointer;
      border-bottom: 1px solid #ccc;

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        background-color: #f0f0f0;
        /* Highlight on hover */
      }
    }
  }
}
</style>
