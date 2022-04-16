<template>
  <v-app>
    <div class="nav px-5 py-2">
      <navbar></navbar>
    </div>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: { Navbar },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
