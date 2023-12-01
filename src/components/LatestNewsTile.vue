<template>
  <div id="news">
    <div class="container">
      <div class="row">
        <h1 class="title">Latest Updates for International Students</h1>
        <br />
        <br />
        <div id="news-section" v-if="displayedNews.length">
          <div v-for="newselement in displayedNews" :key="newselement.position">
            <h2 class="news-title">{{ truncatedTitle(newselement.title) }}</h2>
            <p class="news-snippet">
              {{ truncatedSnippet(newselement.snippet) }}
            </p>
            <br/>
            <a :href="newselement.link" target="_blank">Click here</a> to visit the link.
          </div>
        </div>
        <br />
        <button
          v-if="displayedNews.length < news.length"
          @click="loadMore"
          class="load-more"
        >
          Load More
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import UpdatesService from "@/services/UpdatesService.vue";

export default class LatestNewsTile extends Vue {
  news: Array<any> = [];
  displayedNews: Array<any> = [];
  maxTitleLength = 50;
  maxSnippetLength = 150;
  itemsToShow = 4;

  

  truncatedTitle(title: string): string {
    return title.length > this.maxTitleLength
      ? title.slice(0, this.maxTitleLength) + "..."
      : title;
  }

  truncatedSnippet(snippet: string): string {
    return snippet.length > this.maxSnippetLength
      ? snippet.slice(0, this.maxSnippetLength) + "..."
      : snippet;
  }

  mounted() {
    UpdatesService.getNews().then((response) => {
      this.news = response.news_results;
      this.displayedNews = this.news.slice(0, this.itemsToShow);
    });
  }

  loadMore() {
    this.itemsToShow += 4;
    this.displayedNews = this.news.slice(0, this.itemsToShow);
  }
}
</script>

<style scoped lang="scss">
#news {
  padding: 100px 100px;
}

#news-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 40px;
  margin-top: 20px; /* Adjusted margin-top */
}

#news-section div {
  background: #f9f9f9;
  font-size: medium;
  font-weight: 300;
  color: black;
  border-radius: 10px;
  transition: background 0.5s, transform 0.5s;
  padding: 20px; /* Adjusted padding */
}

#news-section div i {
  font-size: 50px;
  margin-bottom: 10px; /* Adjusted margin-bottom */
}

#news-section div h2 {
  font-size: 20px;
  font-weight: 450;
  margin-bottom: 10px; /* Adjusted margin-bottom */
  word-wrap: break-word;
}

#news-section div a {
  text-decoration: none;
  color: blue; /* Removed unnecessary $color variable */
  font-size: 15px;
  display: inline-block;
}

#news-section div:hover {
  background: white;
  color: black;
  transform: translateY(-10px);
}

.load-more {
  cursor: pointer;
  color: black;
  margin-top: 10px;
  display: inline-block;
  background-color: black; 
  border: none; 
  color: white; 
  padding: 15px 32px; 
  text-align: center;
  text-decoration: none; 
  display: inline-block; 
  font-size: 16px; 
  margin: 10px 2px; 
  cursor: pointer; 
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.title {
  text-align: center;
  width: 100%;
  margin-top: 0px;
  font-size: 46px; 
  color: black;
}
</style>
