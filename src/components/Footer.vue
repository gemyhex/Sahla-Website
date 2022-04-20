<template>
  <div class="footer">
    <v-container>
      <v-row justify="center" align="center">
        <v-col lg="3" md="12" sm="12" class="brief">
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
        <v-col lg="9" md="12" sm="12" class="links">
          <v-row>
            <v-col lg="4" md="6" sm="6" v-for="(list, i) in lists" :key="i">
              <h4>{{ list.head }}</h4>
              <ul>
                <li v-for="(item, i) in list.items" :key="i">
                  <v-icon class="px-2">{{ item.icon }}</v-icon>
                  <router-link :to="item.to">{{ item.title }}</router-link>
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
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
        list1: {
          head: "Company",
          items: [
            { to: "/offers", icon: "", title: "Offers" },
            { to: "/network", icon: "", title: "Our Network" },
            { to: "/merchant", icon: "", title: "Join as a Merchant" },
            { to: "/contact", icon: "", title: "Contact Us" },
          ],
        },
        list2: {
          head: "Get Help",
          items: [
            { icon: "", to: "/about", title: "About Us" },
            { icon: "", to: "/contact", title: "Contact Us" },
            { icon: "", to: "/policy", title: "Privacy-Policy" },
          ],
        },
        list3: {
          head: "Company",
          items: [
            { to: "", icon: "fal fa-mobile", title: "Mobile: 0114-357-8414" },
            {
              to: "",
              icon: "fal fa-envelope",
              title: "Email: info@smarttechno.co",
            },
            {
              to: "",
              icon: "far fa-map-marker-alt",
              title:
                "Address: 86 Ahmed El-Zomor St, Al Manteqah Ath Thamenah,Nasr City, Cairo",
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