<template>
  <div class="partner-wrap">
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
          <v-carousel
            cycle
            height="250"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item v-for="(slide, i) in partners" :key="i">
              <!-- {{ slide }} -->

              <v-row class="fill-height" align="center" justify="center">
                <v-col v-for="(sim, i) in slide" :key="i">
                  <img :src="sim.imgSrc" alt="Partner" />
                </v-col>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
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