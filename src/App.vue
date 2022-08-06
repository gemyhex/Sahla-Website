<template>
  <v-app>
    <div class="nav px-5" v-if="!$route.meta.hideNavbar">
      <navbar></navbar>
    </div>
    <v-main>
      <router-view />
    </v-main>
    <div class="foot" v-if="!$route.meta.hideNavbar">
      <Footer></Footer>
    </div>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
  name: "App",
  data() {
    return {
      content: localStorage.getItem("access_token"),
    };
  },
};
</script>

<style lang="scss">
// .nav {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   z-index: 99999;
// }
</style>
