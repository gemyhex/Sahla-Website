<template>
  <!-- <nav class="navbar">
    <div class="logo">
      <img src="../assets/images/logo.svg" alt="" width="150px" />
    </div>
    <div class="links">
      <ul class="d-flex">
        <li class="px-3 pt-2" v-for="(link, i) in links" :key="i">
          <router-link :to="link.to">{{ link.title }}</router-link>
        </li>
      </ul>
    </div>
    <div class="auth">
      <v-btn color="#602167" elevation="2">{{ auth }}</v-btn>
    </div>
  </nav> -->
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <transition
        enter-active-class="animate__animated animate__backInLeft"
        leave-active-class="animate__animated animate__backInRight"
        appear
      >
        <router-link class="navbar-brand" to="/"
          ><img src="../assets/images/logo.svg" alt="" width="150px"
        /></router-link>
      </transition>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <!-- <span class="navbar-toggler-icon"></span> -->
        <v-icon>{{ icons.menu }}</v-icon>
      </button>
      <transition
        enter-active-class="animate__animated animate__bounceIn"
        leave-active-class="animate__animated animate__bounceIn"
        appear
      >
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto mb-2 mb-lg-0">
            <li class="nav-item px-2" v-for="(link, i) in links" :key="i">
              <router-link :to="link.to">{{ link.title }}</router-link>
            </li>
          </ul>
        </div>
      </transition>
      <transition
        enter-active-class="animate__animated animate__backInRight"
        leave-active-class="animate__animated animate__backInLeft"
        appear
      >
        <div class="btn-signup">
          <v-btn color="#602167">Sign Up</v-btn>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: "Home", to: "/" },
        { title: "About Us", to: "/about" },
        { title: "Offers", to: "/offers" },
        { title: "Our Network", to: "/network" },
        { title: "Jion as a Merchant", to: "/merchant" },
        { title: "Contact Us", to: "/contactus" },
      ],
      auth: "Sign Up",
      icons: {
        menu: "fal fa-bars",
      },
    };
  },
};
</script>
 <style lang="scss" scoped>
.navbar {
  width: 100%;
}
a {
  color: #00ada8 !important;
}
a.router-link-exact-active {
  color: #602167 !important;
}
</style>