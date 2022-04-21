<template>
  <div ref="scrollSections" data-scroll-container class="container-fluid home">
    <div class="box d-none d-lg-block"></div>
    <div class="box d-none"></div>
    <div class="box d-none d-lg-block"></div>
    <v-row>
      <v-col class="px-0 pt-0">
        <Banner></Banner>
      </v-col>
    </v-row>
    <div class="container">
      <v-row>
        <v-col>
          <UseSahla data-scroll-section></UseSahla>
        </v-col>
      </v-row>
    </div>
    <div class="container-fluid">
      <v-row>
        <v-col>
          <Offers data-scroll-section></Offers>
        </v-col>
      </v-row>
    </div>
    <div class="container">
      <v-row>
        <v-col>
          <why-sahla data-scroll-section></why-sahla>
        </v-col>
      </v-row>
    </div>
    <div class="container-fluid">
      <v-row>
        <v-col class="partners-wrapper">
          <partners data-scroll-section></partners>
        </v-col>
      </v-row>
    </div>
    <div class="container">
      <v-row>
        <v-col>
          <subscribe data-scroll-section></subscribe>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner";
import UseSahla from "../components/UseSahla.vue";
import Offers from "../components/Offers.vue";
import WhySahla from "../components/whySahla.vue";
import Partners from "../components/partners.vue";
import Subscribe from "../components/subscribe.vue";

export default {
  name: "Home",
  components: {
    Banner,
    UseSahla,
    Offers,
    WhySahla,
    Partners,
    Subscribe,
  },
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  .partners-wrapper {
    background: #f7f7f7;
  }
  .box {
    width: 500px;
    height: 500px;
    background: rgba($color: #00ada8, $alpha: 0.3);
    border-radius: 50px;
    transform: rotate(45deg);
    position: absolute;
    // transform: translate(-50%, -50%);
    &:first-child {
      top: 32%;
      left: -20%;
    }
    &:nth-child(2) {
      right: -20%;
      top: 54%;
    }
    &:nth-child(3) {
      width: 350px;
      left: -20%;
      top: 73%;
    }
  }
}
</style>
