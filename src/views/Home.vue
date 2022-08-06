<template>
  <div class="container-fluid home px-0">
    <div>
      <div class="">
        <Banner></Banner>
      </div>
      <div class="useSahla">
        <UseSahla></UseSahla>
      </div>
      <div class="mt-12">
        <PaymentLink></PaymentLink>
      </div>
      <div class="container">
        <why-sahla></why-sahla>
      </div>
      <div class="container-fluid partners">
        <partners></partners>
      </div>
    </div>
    <div
      class="box"
      :style="{
        'background-image': `url(${require('@/assets/images/new/dots.png')})`,
      }"
    >
      <!-- <v-img src="@/assets/images/new/dots.png"></v-img> -->
    </div>
    <div
      class="box"
      :style="{
        'background-image': `url(${require('@/assets/images/new/dots.png')})`,
      }"
    >
      <!-- <v-img src="@/assets/images/new/dots.png"></v-img> -->
    </div>
    <div
      class="box"
      :style="{
        'background-image': `url(${require('@/assets/images/new/dots.png')})`,
      }"
    >
      <!-- <v-img src="@/assets/images/new/dots.png"></v-img> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import UseSahla from "../components/UseSahla.vue";
// import Offers from "../components/Offers.vue";
import WhySahla from "../components/whySahla.vue";
import Partners from "../components/partners.vue";
import PaymentLink from "../components/PaymentLink.vue";
// import Subscribe from "../components/subscribe.vue";
// import locomotiveScroll from "locomotive-scroll";

export default {
  name: "Home",
  components: {
    Banner,
    UseSahla,
    // Offers,
    WhySahla,
    Partners,
    PaymentLink,
  },
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  .useSahla {
    margin-top: 72px;
  }
  .box {
    width: 414px;
    height: 242px;
    position: absolute;
    top: 17%;
    left: -20%;
    z-index: 0;
    // transform: translate(-50%, -50%);
    &:nth-child(1) {
      top: 18%;
      left: -20%;
    }
    &:nth-child(2) {
      left: 90%;
      top: 37%;
    }
    &:nth-child(3) {
      left: -5%;
      top: 90%;
    }
  }
}
</style>
