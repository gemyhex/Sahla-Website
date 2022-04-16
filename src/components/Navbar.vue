<template>
  <nav class="d-flex flex-nowrap justify-space-between align-items-center">
    <div class="logo">
      <img src="../assets/images/logo.svg" alt="" width="150px" />
    </div>
    <div class="links">
      <ul class="d-flex">
        <li class="px-3" v-for="(link, i) in links" :key="i">
          <router-link :to="link.to">{{ link.title }}</router-link>
        </li>
      </ul>
    </div>
    <div class="auth">
      <v-btn color="#602167" elevation="2">{{ auth }}</v-btn>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: "Home", to: "/" },
        { title: "About Us", to: "/aboutus" },
        { title: "Offers", to: "/offers" },
        { title: "Our Network", to: "/network" },
        { title: "Jion as a Merchant", to: "/merchant" },
        { title: "Contact Us", to: "/contactus" },
      ],
      auth: "Sign Up",
    };
  },
};
</script>

<style lang="scss" scoped>
.theme--light.v-application {
  .auth {
    .v-btn {
      color: #fff !important;
    }
  }
}
</style>
