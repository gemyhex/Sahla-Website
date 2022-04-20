<template>
  <div class="network">
    <v-row>
      <v-col>
        <div
          class="
            bread-item
            d-flex
            flex-column
            justify-content-center
            align-items-center
          "
        >
          <h3>Our Network</h3>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Our Network
              </li>
            </ol>
          </nav>
        </div>
      </v-col>
    </v-row>
    <v-container>
      <v-row justify="center" align="center">
        <v-col class="d-flex">
          <p>Shop from over 2,500 stores, service providers and websites</p>
          <v-spacer></v-spacer>
          <v-btn color="#602167">Join as a Merchant</v-btn>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col>
          <v-row class="d-flex justify-content-center">
            <v-col class="d-flex justify-content-center">
              <div class="input-group mb-3">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Search..."
                  aria-label="Search..."
                  aria-describedby="basic-addon2"
                />
                <v-btn
                  color="#602167"
                  class="input-group-text"
                  id="basic-addon2"
                >
                  <i class="fal fa-search"></i>
                </v-btn>
              </div>
              <v-btn color="#602167" class="ml-2">Filter</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>
            <b-card no-body>
              <b-tabs pills card vertical>
                <b-tab v-for="(tab, i) in tabs" :key="i" :title="tab">
                  <v-row align="center" justify="center">
                    <v-col xl="2" lg="3" md="4" sm="6" class="item-lvl m-2">
                      <div class="item">
                        <div class="logo">
                          <img src="@/assets/images/net1.png" alt="TradeLine" />
                        </div>
                        <v-btn color="#602167">TradLine</v-btn>
                      </div>
                    </v-col>
                    <v-col xl="2" lg="3" md="4" sm="6" class="item-lvl m-2">
                      <div class="item">
                        <div class="logo">
                          <img src="@/assets/images/net1.png" alt="TradeLine" />
                        </div>
                        <v-btn color="#602167">TradLine</v-btn>
                      </div>
                    </v-col>
                    <v-col xl="2" lg="3" md="4" sm="6" class="item-lvl m-2">
                      <div class="item">
                        <div class="logo">
                          <img src="@/assets/images/net1.png" alt="TradeLine" />
                        </div>
                        <v-btn color="#602167">TradLine</v-btn>
                      </div>
                    </v-col>
                    <v-col xl="2" lg="3" md="4" sm="6" class="item-lvl m-2">
                      <div class="item">
                        <div class="logo">
                          <img src="@/assets/images/net1.png" alt="TradeLine" />
                        </div>
                        <v-btn color="#602167">TradLine</v-btn>
                      </div>
                    </v-col>
                    <v-col xl="2" lg="3" md="4" sm="6" class="item-lvl m-2">
                      <div class="item">
                        <div class="logo">
                          <img src="@/assets/images/net1.png" alt="TradeLine" />
                        </div>
                        <v-btn color="#602167">TradLine</v-btn>
                      </div>
                    </v-col>
                    <v-col xl="2" lg="3" md="4" sm="6" class="item-lvl m-2">
                      <div class="item">
                        <div class="logo">
                          <img src="@/assets/images/net1.png" alt="TradeLine" />
                        </div>
                        <v-btn color="#602167">TradLine</v-btn>
                      </div>
                    </v-col>
                    <v-col xl="2" lg="3" md="4" sm="6" class="item-lvl m-2">
                      <div class="item">
                        <div class="logo">
                          <img src="@/assets/images/net1.png" alt="TradeLine" />
                        </div>
                        <v-btn color="#602167">TradLine</v-btn>
                      </div>
                    </v-col>
                    <v-col xl="2" lg="3" md="4" sm="6" class="item-lvl m-2">
                      <div class="item">
                        <div class="logo">
                          <img src="@/assets/images/net1.png" alt="TradeLine" />
                        </div>
                        <v-btn color="#602167">TradLine</v-btn>
                      </div>
                    </v-col>
                    <v-col xl="2" lg="3" md="4" sm="6" class="item-lvl m-2">
                      <div class="item">
                        <div class="logo">
                          <img src="@/assets/images/net1.png" alt="TradeLine" />
                        </div>
                        <v-btn color="#602167">TradLine</v-btn>
                      </div>
                    </v-col>
                    <v-col xl="2" lg="3" md="4" sm="6" class="item-lvl m-2">
                      <div class="item">
                        <div class="logo">
                          <img src="@/assets/images/net1.png" alt="TradeLine" />
                        </div>
                        <v-btn color="#602167">TradLine</v-btn>
                      </div>
                    </v-col>
                    <v-col xl="2" lg="3" md="4" sm="6" class="item-lvl m-2">
                      <div class="item">
                        <div class="logo">
                          <img src="@/assets/images/net1.png" alt="TradeLine" />
                        </div>
                        <v-btn color="#602167">TradLine</v-btn>
                      </div>
                    </v-col>
                    <v-col xl="2" lg="3" md="4" sm="6" class="item-lvl m-2">
                      <div class="item">
                        <div class="logo">
                          <img src="@/assets/images/net1.png" alt="TradeLine" />
                        </div>
                        <v-btn color="#602167">TradLine</v-btn>
                      </div>
                    </v-col>
                    <v-col xl="2" lg="3" md="4" sm="6" class="item-lvl m-2">
                      <div class="item">
                        <div class="logo">
                          <img src="@/assets/images/net1.png" alt="TradeLine" />
                        </div>
                        <v-btn color="#602167">TradLine</v-btn>
                      </div>
                    </v-col>
                    <v-col xl="2" lg="3" md="4" sm="6" class="item-lvl m-2">
                      <div class="item">
                        <div class="logo">
                          <img src="@/assets/images/net1.png" alt="TradeLine" />
                        </div>
                        <v-btn color="#602167">TradLine</v-btn>
                      </div>
                    </v-col>
                    <v-col xl="2" lg="3" md="4" sm="6" class="item-lvl m-2">
                      <div class="item">
                        <div class="logo">
                          <img src="@/assets/images/net1.png" alt="TradeLine" />
                        </div>
                        <v-btn color="#602167">TradLine</v-btn>
                      </div>
                    </v-col>
                    <v-col xl="2" lg="3" md="4" sm="6" class="item-lvl m-2">
                      <div class="item">
                        <div class="logo">
                          <img src="@/assets/images/net1.png" alt="TradeLine" />
                        </div>
                        <v-btn color="#602167">TradLine</v-btn>
                      </div>
                    </v-col>
                    <v-col xl="2" lg="3" md="4" sm="6" class="item-lvl m-2">
                      <div class="item">
                        <div class="logo">
                          <img src="@/assets/images/net1.png" alt="TradeLine" />
                        </div>
                        <v-btn color="#602167">TradLine</v-btn>
                      </div>
                    </v-col>
                    <v-col xl="2" lg="3" md="4" sm="6" class="item-lvl m-2">
                      <div class="item">
                        <div class="logo">
                          <img src="@/assets/images/net1.png" alt="TradeLine" />
                        </div>
                        <v-btn color="#602167">TradLine</v-btn>
                      </div>
                    </v-col>
                    <v-col xl="2" lg="3" md="4" sm="6" class="item-lvl m-2">
                      <div class="item">
                        <div class="logo">
                          <img src="@/assets/images/net1.png" alt="TradeLine" />
                        </div>
                        <v-btn color="#602167">TradLine</v-btn>
                      </div>
                    </v-col>
                    <v-col xl="2" lg="3" md="4" sm="6" class="item-lvl m-2">
                      <div class="item">
                        <div class="logo">
                          <img src="@/assets/images/net1.png" alt="TradeLine" />
                        </div>
                        <v-btn color="#602167">TradLine</v-btn>
                      </div>
                    </v-col>
                    <v-col xl="2" lg="3" md="4" sm="6" class="item-lvl m-2">
                      <div class="item">
                        <div class="logo">
                          <img src="@/assets/images/net1.png" alt="TradeLine" />
                        </div>
                        <v-btn color="#602167">TradLine</v-btn>
                      </div>
                    </v-col>
                    <v-col xl="2" lg="3" md="4" sm="6" class="item-lvl m-2">
                      <div class="item">
                        <div class="logo">
                          <img src="@/assets/images/net1.png" alt="TradeLine" />
                        </div>
                        <v-btn color="#602167">TradLine</v-btn>
                      </div>
                    </v-col>
                    <v-col xl="2" lg="3" md="4" sm="6" class="item-lvl m-2">
                      <div class="item">
                        <div class="logo">
                          <img src="@/assets/images/net1.png" alt="TradeLine" />
                        </div>
                        <v-btn color="#602167">TradLine</v-btn>
                      </div>
                    </v-col>
                    <v-col xl="2" lg="3" md="4" sm="6" class="item-lvl m-2">
                      <div class="item">
                        <div class="logo">
                          <img src="@/assets/images/net1.png" alt="TradeLine" />
                        </div>
                        <v-btn color="#602167">TradLine</v-btn>
                      </div>
                    </v-col>
                    <v-col xl="2" lg="3" md="4" sm="6" class="item-lvl m-2">
                      <div class="item">
                        <div class="logo">
                          <img src="@/assets/images/net1.png" alt="TradeLine" />
                        </div>
                        <v-btn color="#602167">TradLine</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </b-tab>
              </b-tabs>
            </b-card>
          </div>
        </v-col>
        <!-- <v-col xl="3" lg="3" class="d-none d-xl-block d-lg-block">
          <transition
            appear
            enter-class="animate__animated animate__bounceInDown"
            leave-class="animate__animated animate__bounceOutDown"
            :duration="{ enter: 1000, leave: 800 }"
          >
            <ul class="list">
              <li v-for="(tab, i) in tabs" :key="i">
                <v-btn
                  color="#fff"
                  :class="{ active: i == 0 }"
                  @click="selectTab($event)"
                  >{{ tab }}</v-btn
                >
              </li>
            </ul>
          </transition>
        </v-col>
        <v-col xl="3" lg="3" class="d-block d-xl-none d-lg-none"> </v-col>
        <v-col xl="10" lg="10"></v-col> -->
      </v-row>
    </v-container>
    <v-row>
      <v-col>
        <subscribe></subscribe>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import subscribe from "../components/subscribe.vue";
export default {
  components: { subscribe },
  data() {
    return {
      selected: null,
      tabs: [
        "Mobile Devicies.",
        "Computer, Labtop.",
        "Elctronics.",
        "Home Appliences.",
        "Housewares.",
        "Household.",
        "Jewellery.",
        "Furniture.",
        "Fashion.",
        "Medical Services.",
        "Cosmatics.",
        "Vehicle Services.",
        "Hyper Markets.",
        "Travel.",
        "Stationery.",
      ],
    };
  },
  methods: {
    selectTab(ev) {
      ev.target.classList.add("active");
      ev.target.parentElement.classList.add("active");
    },
  },
};
</script>

<style  lang="scss" scoped>
.network {
  p {
    color: #602167;
  }
  .list {
    li {
      .v-btn {
        width: 100%;
        margin: 5px 0;
        color: #000 !important;
        &.active {
          background: #602167 !important;
          color: #fff !important;
        }
      }
    }
  }
  .card {
    border: none !important;
  }
  .item-lvl {
    background: #fff;
    padding: 0 !important;
    border-radius: 8px;
    // border: 1px solid #707070;
    box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.2);
    .item {
      .logo {
        padding: 12px;
        img {
          width: 100%;
        }
      }
      .v-btn {
        width: 100%;
        height: 40px;
        padding: 5px;
        border-radius: 0;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
      }
    }
  }
  .subs-wrap {
    background: rgba($color: #f7f7f7, $alpha: 0.7);
  }
}
</style>