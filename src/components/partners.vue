<template>
  <div class="partner-wrap py-12">
    <v-container>
      <v-row>
        <v-col>
          <div class="heading text-center">
            <p>Our <span>Partners</span></p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <carousel
            :items="6"
            :loop="true"
            :margin="5"
            :nav="false"
            :mouseDrag="true"
            :responsiveClass="true"
            :dots="false"
            :autoHeight="true"
            :autoplay="true"
            :smartSpeed="1500"
            :responsive="{
              0: {
                items: 1,
              },
              600: {
                items: 3,
              },
              1000: {
                items: 5,
                loop: false,
              },
              1300: {
                items: 7,
                loop: false,
              },
            }"
          >
            <img src="@/assets/images/partner.png" />
            <img src="@/assets/images/partner.png" />
            <img src="@/assets/images/partner.png" />
            <img src="@/assets/images/partner.png" />
            <img src="@/assets/images/partner.png" />
            <img src="@/assets/images/partner.png" />
            <img src="@/assets/images/partner.png" />
            <img src="@/assets/images/partner.png" />
            <img src="@/assets/images/partner.png" />
            <img src="@/assets/images/partner.png" />
            <img src="@/assets/images/partner.png" />
            <img src="@/assets/images/partner.png" />
          </carousel>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  data() {
    return {
      partners: {
        slide1: [
          { imgSrc: require("@/assets/images/partner.png") },
          { imgSrc: require("@/assets/images/partner.png") },
          { imgSrc: require("@/assets/images/partner.png") },
          { imgSrc: require("@/assets/images/partner.png") },
          { imgSrc: require("@/assets/images/partner.png") },
        ],
        slide2: [
          { imgSrc: require("@/assets/images/partner.png") },
          { imgSrc: require("@/assets/images/partner.png") },
          { imgSrc: require("@/assets/images/partner.png") },
          { imgSrc: require("@/assets/images/partner.png") },
          { imgSrc: require("@/assets/images/partner.png") },
        ],
      },
    };
  },
  components: { carousel },
};
</script>

<style lang="scss" scoped>
.partner-wrap {
  .heading {
    p {
      font-weight: bold;
      color: #602167;
      font-size: 2rem;
      span {
        color: #00ada8;
      }
    }
  }
}
</style>