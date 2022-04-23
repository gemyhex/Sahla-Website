<template>
  <div class="footer">
    <div class="container">
      <v-row justify="center" class="footer-wrap pt-5">
        <v-col class="brief col-xl-2 col-lg-3 col-md-6 col-sm-12 col-12">
          <div class="bb-sec">
            <img src="../assets/images/logo_white.png" alt="" />
            <p class="mt-3">Follow us on Social Media</p>
            <ul class="social_links d-flex">
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
        </v-col>
        <v-col class="links pt-0 pb-8">
          <v-row>
            <!-- <v-col
              class="col-12 col-xl-4 col-lg-4 col-md-6 col-sm-6 pt-0"
              v-for="(list, i) in lists"
              :key="i"
            >
              <h4>{{ list.head }}</h4>
              <ul>
                <li v-for="(item, i) in list.items" :key="i">
                  <div v-if="item.icon != ''"></div>
                  <router-link :to="item.to" class="d-flex align-items-start">
                    <v-icon class="px-0.5 pt-1">{{ item.icon }}</v-icon>
                    <h6 class="px-1 pt-0.25">{{ item.title }}</h6>
                    <p>{{ item.content }}</p>
                  </router-link>
                </li>
              </ul>
            </v-col> -->
            <v-col
              class="d-none d-xl-block d-xl-block col-xl-1 col-lg-1"
            ></v-col>
            <v-col class="col-xl-2 col-lg-3 col-md-6 col-sm-12 col-12 pt-0">
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
            <v-col
              class="d-none d-xl-block d-xl-block col-xl-1 col-lg-1"
            ></v-col>
            <v-col class="col-xl-2 col-lg-3 col-md-6 col-sm-12 col-12 pt-0">
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
            <v-col
              class="d-none d-xl-block d-xl-block col-xl-1 col-lg-1"
            ></v-col>
            <v-col class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 pt-0">
              <h4>Company</h4>
              <ul>
                <li v-for="(item, i) in lists.list3.items" :key="i">
                  <div v-if="item.icon != ''"></div>
                  <router-link :to="item.to" class="d-flex align-items-start">
                    <v-icon class="px-0.5 pt-1">{{ item.icon }}</v-icon>
                    <h6 class="px-1 pt-0.25">{{ item.title }}</h6>
                    <p>{{ item.content }}</p>
                  </router-link>
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>

    <div class="bottom-foot text-center white--text">
      <p>All Rights Reserved by valU 2022</p>
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
  background: #602167;
  .brief {
    .bb-sec {
      width: fit-content;
      margin: auto;
    }
    img {
      max-width: 100%;
    }
    .social_links {
      padding: 0;
      li {
        border-radius: 5px;
        max-width: 50px;
        width: 30px;
        height: 30px;
        max-height: 50px;
        background: #00ada8;
        margin-right: 0.5rem;
        a {
          width: 100%;
          height: 100%;

          i {
            font-size: 16px;
            color: #fff;
          }
        }
      }
    }
    p {
      color: #fff;
    }
  }
  .links {
    color: #fff;
    h4 {
      position: relative;
      padding: 5px 0;
      &:before {
        content: "";
        width: 30%;
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
          color: #fff;
        }
        a {
          color: #fff;
        }
      }
    }
  }
  .bottom-foot {
    background: #00ada8;
    padding: 8px;
    p {
      margin: 0;
    }
  }
}
</style>