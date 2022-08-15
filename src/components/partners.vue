<template>
  <div class="partner-wrap py-12">
    <v-container>
      <v-row class="px-8">
        <v-col>
          <div class="heading text-center">
            <h3>Our Partners</h3>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="px-0">
          <carousel
            :items="6"
            :loop="true"
            :margin="30"
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
              400: {
                items: 2,
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
            <img src="@/assets/images/new/partner.png" alt="Partner" />
            <img src="@/assets/images/new/partner.png" alt="Partner" />
            <img src="@/assets/images/new/partner.png" alt="Partner" />
            <img src="@/assets/images/new/partner.png" alt="Partner" />
            <img src="@/assets/images/new/partner.png" alt="Partner" />
            <img src="@/assets/images/new/partner.png" alt="Partner" />
            <img src="@/assets/images/new/partner.png" alt="Partner" />
            <img src="@/assets/images/new/partner.png" alt="Partner" />
            <img src="@/assets/images/new/partner.png" alt="Partner" />
            <img src="@/assets/images/new/partner.png" alt="Partner" />
            <img src="@/assets/images/new/partner.png" alt="Partner" />
            <img src="@/assets/images/new/partner.png" alt="Partner" />
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
    position: relative;
    h3 {
      font-weight: bolder;
      color: #602167;
      font-size: calc(2.99vw);
      &:after {
        content: "Our Partners";
        // display: flex;
        // transform: rotateX(180deg);
        width: 100%;
        position: absolute;
        top: 10%;
        left: 50%;
        -webkit-background-clip: text;
        color: #602167;
        transform: translate(-50%, -50%);
        opacity: 0.1;
        font-size: calc(3.2vw);
      }
    }
  }
}
</style>
