<template>
  <header>
    <nav>
      <div id="navbar">
        <div class="reverse">
          <div id="logo">
            <router-link class="navbar-brand" to="/"
              ><img src="@/assets/images/new/logo.png" alt="" width="100px"
            /></router-link>
          </div>
          <div
            class="mobile-btn"
            style="font-size: 30px; cursor: pointer; font-weight: bold"
            @click="openNav"
          >
            &#9776;
          </div>
        </div>
        <div id="links">
          <router-link v-for="(link, i) in links" :key="i" :to="link.to">{{
            link.title
          }}</router-link>
        </div>
        <v-btn
          color="#602167"
          class="d-none d-xl-block d-lg-block d-md-block"
          >{{ auth }}</v-btn
        >
      </div>
    </nav>
    <!-- Mobile Menu -->
    <div id="mySidenav" class="sidenav">
      <a style="cursor: pointer" class="closebtn" @click="closeNav">&times;</a>
      <router-link v-for="(link, i) in links" :key="i" :to="link.to">{{
        link.title
      }}</router-link>
      <router-link to="/auth"> Sign Up </router-link>

      <!-- <router-link to="/">Gallery</router-link>
      <router-link to="/">Blog</router-link>
      <router-link to="/">Portfolio</router-link>
      <router-link to="/">Contact</router-link> -->
    </div>
  </header>
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
      opened: false,
    };
  },
  methods: {
    signOut() {
      localStorage.removeItem("access_token");
      this.$router.push("/auth");
    },
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    },
  },
};
</script>
<style lang="scss" scoped>
#navbar {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 9999;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 90px;
  grid-auto-flow: column;
  //   background-color: #fcfcfc;
  //   background-image: linear-gradient(to bottom, #30b5ec, #fff);
  // background: linear-gradient(
  //   180deg,
  //   rgba(48, 181, 236, 1) -50%,
  //   rgba(48, 181, 236, 1) -50%,
  //   rgba(255, 255, 255, 1) 80%
  // );
  grid-gap: 1.5em;
  padding: 0 40px;
  //   -webkit-box-shadow: -1px 4px 5px 0px rgba(209, 205, 209, 1);
  //   -moz-box-shadow: -1px 4px 5px 0px rgba(209, 205, 209, 1);
  //   box-shadow: -1px 4px 5px 0px rgba(209, 205, 209, 1);
}

#logo {
  width: 150px;
  display: grid;
  justify-content: center;
  align-content: center;
}

#links {
  display: grid;
  justify-content: right;
  align-content: center;
  grid-auto-flow: column;
  grid-gap: 1.5em;
}

#links a {
  text-decoration: none;
  color: #00ada8;
  // text-transform: uppercase;
  // font-weight: normal;
  text-overflow: ellipsis;
}

#links a:hover {
  color: #602167;
}
#links a.router-link-exact-active {
  color: #602167 !important;
}

/* =======================
******* Mobile Menu ******
========================*/
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  background-color: #707070;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 32px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #fff;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #fff;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

a {
  font-family: "Open Sans", sans-serif;
}

/* Mobile to Tablet  */
@media (max-width: 767px) {
  .reverse {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #links,
  .mobile-menu {
    display: none;
  }
  #logo {
    display: inline-grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;
    grid-gap: 0px;
  }
}

/* Tablet to Desktop */
@media (min-width: 768px) {
  .mobile-btn {
    display: none;
  }
}
</style>
