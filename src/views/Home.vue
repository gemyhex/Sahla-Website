<template>
  <div class="container-fluid home px-0">
    <div>
      <v-row>
        <v-col class="pt-0 px-0">
          <Banner></Banner>
        </v-col>
      </v-row>
      <div class="mt-6">
        <UseSahla></UseSahla>
      </div>
      <div class="container">
        <v-row>
          <v-col>
            <why-sahla></why-sahla>
          </v-col>
        </v-row>
      </div>
      <div class="container-fluid partners">
        <partners></partners>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner";
import UseSahla from "../components/UseSahla.vue";
// import Offers from "../components/Offers.vue";
import WhySahla from "../components/whySahla.vue";
import Partners from "../components/partners.vue";
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
    // Subscribe,
  },
  mounted() {
    // const _self = this;
    // this.$nextTick(function () {
    //   _self.initLocoScroll();
    // });
    localStorage.setItem("content", true);
  },
  methods: {
    // initLocoScroll() {
    //   const _self = this;
    //   this.scroll = new locomotiveScroll({
    //     el: _self.$refs["scrollSections"],
    //     smooth: true,
    //     smoothMobile: false,
    //     getDirection: true,
    //   });
    // },
  },
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  width: 100%;
  min-height: 100vh;
  max-height: fit-content;
  overflow: hidden;
  .offers {
    background: #f7f7f7;
  }
  .useSahla {
    background-size: cover;
  }
  // .box {
  //   width: 32vw;
  //   height: 65vh;
  //   background: rgba($color: #00ada8, $alpha: 0.3);
  //   border-radius: 50px;
  //   transform: rotate(45deg);
  //   position: absolute;
  //   // transform: translate(-50%, -50%);
  //   &:first-child {
  //     top: 32%;
  //     left: -20%;
  //   }
  //   &:nth-child(2) {
  //     right: -20%;
  //     top: 55%;
  //   }
  //   &:nth-child(3) {
  //     left: -20%;
  //     top: 73%;
  //   }
  // }
}
</style>
