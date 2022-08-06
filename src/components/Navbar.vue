<template>
  <div class="nav-wrap container">
    <nav class="navbar navbar-expand-lg">
      <router-link class="navbar-brand" to="/"
        ><img src="../assets/images/new/logo.png" alt="" width="150px"
      /></router-link>

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

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
          <li class="nav-item px-3" v-for="(link, i) in links" :key="i">
            <router-link :to="link.to">{{ link.title }}</router-link>
          </li>
        </ul>
      </div>

      <div class="btn-signup">
        <v-btn class="btn-sign" to="/auth">{{ auth }}</v-btn>
      </div>
    </nav>
  </div>
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
  methods: {
    signOut() {
      localStorage.removeItem("access_token");
      this.$router.push("/auth");
    },
  },
};
</script>
<style lang="scss" scoped>
.nav-wrap {
  width: 100%;
}
.navbar {
  width: 100%;
  display: flex;
  .navbar-brand {
    img {
      min-width: 100px;
    }
  }
}
.btn-sign {
  min-width: 140px !important;
  padding: 10px 20px !important;
  font-weight: bold !important;
  background: linear-gradient(to right, #602167, #b25abf);
}
a {
  color: #00ada8 !important;
}
a.router-link-exact-active,
a:hover {
  color: #602167 !important;
}
</style>
