<template>
  <div class="footer">
    <v-row justify="center" align="center" class="mx-4">
      <v-col cols="12" lg="10" md="10" class="subs-wrap d-flex py-6">
        <v-row justify="center" align="center">
          <v-col cols="3" lg="3" md="3">
            <v-img
              :src="require('@/assets/images/new/subs.png')"
              max-width="200px"
            ></v-img>
          </v-col>
          <v-col cols="12" lg="8" md="9" sm="12" class="heading px-8">
            <p class="">Subscribe To Our Newsletter</p>
            <div class="searchbox-wrap">
              <input type="text" placeholder="Your Email Address" />
              <button><span>></span></button>
            </div>
          </v-col>
          <v-col cols="2" class="d-none d-xl-block d-lg-block"> </v-col>
          <div class="cube"></div>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center" class="footer-wrap pt-8">
      <v-col class="brief col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
        <div class="bb-sec">
          <img src="../assets/images/new/logo_c.png" alt="" />
          <div class="mt-5">
            <span :style="{ color: '#602167' }">Follow us on Social Media</span>
            <ul class="social_links d-flex mt-2">
              <li
                v-for="(link, i) in icons"
                :key="i"
                class="d-flex text-center"
              >
                <router-link :to="link.to">
                  <v-icon>{{ link.icon }}</v-icon>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </v-col>
      <v-col
        class="links pt-0 pb-8 col-xl-9 col-lg-9 col-md-8 col-sm-12 col-12"
      >
        <v-row justify="center">
          <v-col cols="12" lg="3" md="6" sm="6">
            <h4>Company</h4>
            <ul>
              <li>
                <div class="mx-2"></div>
                <router-link to="/offers" class="d-flex align-items-start">
                  <v-icon class="px-0.5 pt-1"></v-icon>
                  Offers
                </router-link>
              </li>
              <li>
                <div class="mx-2"></div>
                <router-link to="/network" class="d-flex align-items-start">
                  <v-icon class="px-0.5 pt-1"></v-icon>
                  Our Network
                </router-link>
              </li>
              <li>
                <div class="mx-2"></div>
                <router-link to="/merchant" class="d-flex align-items-start">
                  <v-icon class="px-0.5 pt-1"></v-icon>
                  Join as a Merchant
                </router-link>
              </li>
              <li>
                <div class="mx-2"></div>
                <router-link to="/contact" class="d-flex align-items-start">
                  <v-icon class="px-0.5 pt-1"></v-icon>
                  Contact Us
                </router-link>
              </li>
            </ul>
          </v-col>
          <v-col cols="12" lg="3" md="6" sm="6">
            <h4>Get Help</h4>
            <ul>
              <li>
                <div class="mx-2"></div>
                <router-link to="/about" class="d-flex align-items-start">
                  <v-icon class="px-0.5 pt-1"></v-icon>
                  About Us
                </router-link>
              </li>
              <li>
                <div class="mx-2"></div>
                <router-link to="/contact" class="d-flex align-items-start">
                  <v-icon class="px-0.5 pt-1"></v-icon>
                  Contact Us
                </router-link>
              </li>
              <li>
                <div class="mx-2"></div>
                <router-link to="/privacy" class="d-flex align-items-start">
                  <v-icon class="px-0.5 pt-1"></v-icon>
                  Privacy-Policy
                </router-link>
              </li>
            </ul>
          </v-col>
          <v-col class="col-xl-6 col-lg-6 col-md-9 col-sm-12 col-12">
            <h4>Company</h4>
            <ul>
              <li v-for="(item, i) in lists.list3.items" :key="i">
                <div v-if="item.icon != ''"></div>
                <router-link :to="item.to" class="d-flex align-items-start">
                  <v-icon class="px-0.5 pt-1 m-0 mr-1">{{ item.icon }}</v-icon>
                  <h6 class="px-1 pt-0.25 m-0 ml-1">{{ item.title }}</h6>
                  <p class="m-0">{{ item.content }}</p>
                </router-link>
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <div class="bottom-foot text-center white--text">
      <p>&copy; All Rights Reserved by Sahla Pay 2022</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        { to: "", icon: "fab fa-facebook-f" },
        { to: "", icon: "fab fa-twitter" },
        { to: "", icon: "fab fa-linkedin-in" },
        { to: "", icon: "fab fa-instagram" },
        { to: "", icon: "fab fa-youtube" },
      ],
      lists: {
        list3: {
          head: "Company",
          items: [
            {
              to: "",
              icon: "fal fa-mobile",
              title: "Mobile:",
              content: " 0114-357-8414",
            },
            {
              to: "",
              icon: "fal fa-envelope",
              title: "Email:",
              content: "info@smarttechno.co",
            },
            {
              to: "",
              icon: "far fa-map-marker-alt",
              title: "Address:",
              content:
                " 86 Ahmed El-Zomor St, Al Manteqah Ath Thamenah,Nasr City, Cairo",
            },
          ],
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  // min-height: 250px;
  background: linear-gradient(to bottom, #fff, #e6c8ed 100%);
  .subs-wrap {
    background: #c797d3;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    .searchbox-wrap {
      display: flex;
      // max-width: 500px;

      input {
        flex: 1;
        padding: 15px;
        font-size: 1.1em;
        outline: none;

        -webkit-border-top-left-radius: 40px;
        -webkit-border-bottom-left-radius: 40px;
        -moz-border-radius-topleft: 40px;
        -moz-border-radius-bottomleft: 40px;
        border-top-left-radius: 40px;
        border-bottom-left-radius: 40px;
        box-shadow: none;
        border: none;
        // box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.19);
        background: #fff;
      }

      button {
        padding-right: 10px;

        background-color: #fff;
        -webkit-border-top-right-radius: 40px;
        -webkit-border-bottom-right-radius: 40px;
        -moz-border-radius-topright: 40px;
        -moz-border-radius-bottomright: 40px;
        border-top-right-radius: 40px;
        border-bottom-right-radius: 40px;
        border: none;
        cursor: pointer;
        cursor: hand;

        span {
          margin-left: 8px;
          padding: 15px 20px;

          // font-size: 0.9em;
          text-transform: uppercase;
          font-weight: 300;
          color: #fff;
          background-color: #c797d3;

          border-radius: 50%;
          box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.19);

          &:hover {
            background-color: #c797d3;
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.19);
          }
        }
      }
    }
    .heading {
      p {
        font-size: calc(2.99vw);
        color: #fff;
        font-weight: bolder;
      }
    }
    .cube {
      position: absolute;
      top: 49px;
      right: -85px;
      background: rgba(155, 91, 162, 0.2);
      width: 222px;
      height: 200px;
      border-radius: 16px;
      transform: rotate(60deg) translate(0px, -65px);
    }
  }
  .footer-wrap {
    // width: %;
  }
  .brief {
    .bb-sec {
      width: fit-content;
      // margin: auto;
    }
    img {
      width: 70%;
    }
    .social_links {
      padding: 0;
      li {
        border-radius: 5px;
        max-width: 50px;
        width: 22px;
        height: 22px;
        max-height: 50px;
        background: #00ada8;
        margin-right: 0.5rem;
        a {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          i {
            font-size: 14px;
            font-weight: bold;
            color: #fff;
          }
        }
      }
    }
    p {
      color: #fff;
      font-size: calc(0.6vw + 1vh);
    }
  }
  .links {
    color: #602167;
    h4 {
      font-size: 1.5rem;
      font-weight: bold;
      position: relative;
      padding: 5px 0;
      &:before {
        content: "";
        width: 55px;
        position: absolute;
        bottom: 0;
        left: 0;
        border-bottom: 3px solid #00ada8;
      }
    }
    ul {
      padding: 0;
      li {
        i {
          font-size: 14px;
          color: #602167;
        }
        a {
          width: fit-content;
          color: #602167;
        }
      }
    }
  }
  .bottom-foot {
    background: #c797d3;
    padding: 8px;
    p {
      margin: 0;
      color: #602167;
      font-weight: 900;
    }
  }
}
</style>
