<template>
<div id="guidelines">
    <div class="container">
      <div class="row">
        <h1 class="serviceTitle">Our Services: Your Comprehensive Guide to a Seamless Transition</h1>
        <div class="services-list">
          <div class="services">
            <img src="../img/resumeWork.avif">
            <div class="layer">
              <h3>After-visa procedures</h3>
              <p>
                After successfully obtaining a visa to study in Canada, international students are required to complete several important procedures to ensure a smooth transition and comply with Canadian regulations. Here's an overview of the post-visa procedures for international students in Canada:
              </p>
              <a href="">Learn</a>
            </div>
          </div>
          <div class="services">
            <img src="../img/guidelines-header.jpg">
            <div class="layer">
              <h3>Study permits</h3>
              <p>
                Studying in Canada as an international student involves several immigration formalities, with obtaining a study permit being a key requirement. Here's a detailed description of the study permit immigration process for international students in Canada:
              </p>
              <a href="">Learn</a>
            </div>
          </div>
          <div class="services">
            <img src="../img/laptop.webp">
            <div class="layer">
              <h3>Work permits</h3>
              <p>
                International students in Canada have the opportunity to apply for work permits, allowing them to gain valuable work experience while studying or after completing their studies. Here's an overview of the work permit and immigration formalities for international students in Canada:
              </p>
              <a href="">Learn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class GuidelinesTile extends Vue {

}
</script>

<style lang="scss">

#guidelines{
  padding: 50px 0;
}

.services-list{
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
  grid-gap: 40px;
  margin: 50px 20px 0 20px;
}

.services{
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  height: 70%;
}

.serviceTitle{
  font-size: 46px;
  color: black;
  justify-content: center;
  margin-left: 10px;
  
}

.services img{
  width: 100%;
  border-radius: 10px;
  display: block;
  height: 100%;
}

.layer{
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6));
  border-radius: 10px;
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  color: white;
  text-align: center;
}

.layer h3{
  font-size: 20px;
  margin-bottom: 20px;
}

.layer a{
  margin-top: 20px;
  color: #ff004f;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  text-align: center;
  background: #fff;
}

</style>