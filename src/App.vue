<template>
  <v-app>
    <div class="nav px-5" v-if="content">
      <navbar></navbar>
    </div>
    <v-main>
      <router-view />
    </v-main>
    <div class="foot" v-if="content">
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
      content: localStorage.getItem("content") || false,
    };
  },
};
</script>
