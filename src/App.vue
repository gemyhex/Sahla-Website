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
  components: { Navbar, Footer },
  name: "App",
  data() {
    return {
      content: localStorage.getItem("access_token"),
    };
  },
};
</script>
