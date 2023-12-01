<template>
	<div class="container-fluid">
		<div class="col-md-12 our_story">
			<div class="row m-0">
				<div class="col-md-6 mx-auto story wow animated fadeIn">
					<h3 class="text-center">About Us</h3>
					<h1 class="text-center"></h1>
					<p>
                        At StartSmartly, we understand that beginning your international 
                        academic journey is both thrilling and challenging. As you step into 
                        a new chapter of your life, a myriad of questions and doubts may 
                        cloud your mind. That's why we are here – to be your dedicated 
                        companion throughout this transformative experience.
                        <br />
                        <br/>
                        StartSmartly is more than just a platform; it's your trusted guide, 
                        offering comprehensive explanations and unwavering support every step 
                        of the way. We simplify your doubts, provide expert guidance, and 
                        connect you with a thriving peer community, allowing you to expand 
                        your network and enrich your global experience.
					</p>
				</div>
			</div>
		</div>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class AboutTile extends Vue {}
</script>

<style lang="scss">

.our_story {
	background: url(../img/background2.jpg);
	padding: 80px 100px 80px 100px;
}

.our_story .story {
	border: 8px solid #000;
	padding: 100px 200px 100px 200px;
	text-align: center;
}

.our_story .story h3 {
	color: #ff512f;
	font-size: 36px;
	font-family: 'Beyond', sans-serif;
	padding-bottom: 8px;
}

.our_story .story h1 {
	color: #000;
	font-size: 40px;
	font-family: 'ZCOOL XiaoWei', serif;
	font-weight: 700;
}


.our_story .story p {
	font-size: 17px;
	color: #777;
	font-family: 'Montserrat-UltraLight', Arial, sans-serif;
	line-height: 25px;
	padding-top: 30px;
}
</style>

