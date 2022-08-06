<template>
  <div class="network">
    <div class="container-fluid p-0">
      <div
        class="bread-item d-flex flex-column justify-content-center align-items-center"
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
    </div>
    <div class="container">
      <v-row justify="center" align="center">
        <v-col class="d-flex">
          <p>Shop from over 2,500 stores, service providers and websites</p>
          <v-spacer></v-spacer>
          <v-btn color="#E0B1E5">Join as a Merchant</v-btn>
        </v-col>
      </v-row>
      <v-row class="mb-12" justify="center" align="center">
        <v-col cols="12">
          <b-card no-body>
            <b-tabs pills vertical class="tab-list">
              <b-tab v-for="(tab, i) in tabs" :key="i" :title="tab">
                <v-row align="center" class="">
                  <v-col
                    cols="12"
                    class="d-flex justify-content-center search-wrap"
                  >
                    <div class="input-group mb-3">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Search..."
                        aria-label="Search..."
                        aria-describedby="basic-addon2"
                      />
                      <v-btn
                        color="#E0B1E5"
                        class="input-group-text"
                        id="basic-addon2"
                      >
                        <i class="fal fa-search"></i>
                      </v-btn>
                    </div>
                    <v-btn color="#33D6D3" class="ml-2">Filter</v-btn>
                  </v-col>
                  <v-col cols="6" lg="2" md="4" sm="4" class="item-lvl">
                    <div class="item">
                      <div class="logo">
                        <v-img
                          src="@/assets/images/net1.png"
                          alt="TradeLine"
                          max-width="210px"
                          height="137px"
                          contain
                        ></v-img>
                      </div>
                      <v-btn color="#E0B1E5" to="/checkout">TradLine</v-btn>
                    </div>
                  </v-col>
                  <v-col cols="6" lg="2" md="4" sm="4" class="item-lvl">
                    <div class="item">
                      <div class="logo">
                        <v-img
                          src="@/assets/images/new/2b.png"
                          alt="TradeLine"
                          max-width="210px"
                          height="137px"
                          contain
                        ></v-img>
                      </div>
                      <v-btn color="#E0B1E5" to="/checkout">TradLine</v-btn>
                    </div>
                  </v-col>
                  <v-col cols="6" lg="2" md="4" sm="4" class="item-lvl">
                    <div class="item">
                      <div class="logo">
                        <v-img
                          src="@/assets/images/new/sw.png"
                          alt="TradeLine"
                          max-width="210px"
                          height="137px"
                          contain
                        ></v-img>
                      </div>
                      <v-btn color="#E0B1E5" to="/checkout">TradLine</v-btn>
                    </div>
                  </v-col>
                  <v-col cols="6" lg="2" md="4" sm="4" class="item-lvl">
                    <div class="item">
                      <div class="logo">
                        <v-img
                          src="@/assets/images/new/db.png"
                          alt="TradeLine"
                          max-width="210px"
                          height="137px"
                          contain
                        ></v-img>
                      </div>
                      <v-btn color="#E0B1E5" to="/checkout">TradLine</v-btn>
                    </div>
                  </v-col>
                  <v-col cols="6" lg="2" md="4" sm="4" class="item-lvl">
                    <div class="item">
                      <div class="logo">
                        <v-img
                          src="@/assets/images/new/xm.png"
                          alt="TradeLine"
                          max-width="210px"
                          height="137px"
                          contain
                        ></v-img>
                      </div>
                      <v-btn color="#E0B1E5" to="/checkout">TradLine</v-btn>
                    </div>
                  </v-col>
                  <v-col cols="6" lg="2" md="4" sm="4" class="item-lvl">
                    <div class="item">
                      <div class="logo">
                        <v-img
                          src="@/assets/images/net1.png"
                          alt="TradeLine"
                          max-width="210px"
                          height="137px"
                          contain
                        ></v-img>
                      </div>
                      <v-btn color="#E0B1E5" to="/checkout">TradLine</v-btn>
                    </div>
                  </v-col>
                  <v-col cols="6" lg="2" md="4" sm="4" class="item-lvl">
                    <div class="item">
                      <div class="logo">
                        <v-img
                          src="@/assets/images/new/2b.png"
                          alt="TradeLine"
                          max-width="210px"
                          height="137px"
                          contain
                        ></v-img>
                      </div>
                      <v-btn color="#E0B1E5" to="/checkout">TradLine</v-btn>
                    </div>
                  </v-col>
                  <v-col cols="6" lg="2" md="4" sm="4" class="item-lvl">
                    <div class="item">
                      <div class="logo">
                        <v-img
                          src="@/assets/images/new/sw.png"
                          alt="TradeLine"
                          max-width="210px"
                          height="137px"
                          contain
                        ></v-img>
                      </div>
                      <v-btn color="#E0B1E5" to="/checkout">TradLine</v-btn>
                    </div>
                  </v-col>
                  <v-col cols="6" lg="2" md="4" sm="4" class="item-lvl">
                    <div class="item">
                      <div class="logo">
                        <v-img
                          src="@/assets/images/new/db.png"
                          alt="TradeLine"
                          max-width="210px"
                          height="137px"
                          contain
                        ></v-img>
                      </div>
                      <v-btn color="#E0B1E5" to="/checkout">TradLine</v-btn>
                    </div>
                  </v-col>
                  <v-col cols="6" lg="2" md="4" sm="4" class="item-lvl">
                    <div class="item">
                      <div class="logo">
                        <v-img
                          src="@/assets/images/new/xm.png"
                          alt="TradeLine"
                          max-width="210px"
                          height="137px"
                          contain
                        ></v-img>
                      </div>
                      <v-btn color="#E0B1E5" to="/checkout">TradLine</v-btn>
                    </div>
                  </v-col>
                  <v-col cols="6" lg="2" md="4" sm="4" class="item-lvl">
                    <div class="item">
                      <div class="logo">
                        <v-img
                          src="@/assets/images/net1.png"
                          alt="TradeLine"
                          max-width="210px"
                          height="137px"
                          contain
                        ></v-img>
                      </div>
                      <v-btn color="#E0B1E5" to="/checkout">TradLine</v-btn>
                    </div>
                  </v-col>
                  <v-col cols="6" lg="2" md="4" sm="4" class="item-lvl">
                    <div class="item">
                      <div class="logo">
                        <v-img
                          src="@/assets/images/new/2b.png"
                          alt="TradeLine"
                          max-width="210px"
                          height="137px"
                          contain
                        ></v-img>
                      </div>
                      <v-btn color="#E0B1E5" to="/checkout">TradLine</v-btn>
                    </div>
                  </v-col>
                  <v-col cols="6" lg="2" md="4" sm="4" class="item-lvl">
                    <div class="item">
                      <div class="logo">
                        <v-img
                          src="@/assets/images/new/sw.png"
                          alt="TradeLine"
                          max-width="210px"
                          height="137px"
                          contain
                        ></v-img>
                      </div>
                      <v-btn color="#E0B1E5" to="/checkout">TradLine</v-btn>
                    </div>
                  </v-col>
                  <v-col cols="6" lg="2" md="4" sm="4" class="item-lvl">
                    <div class="item">
                      <div class="logo">
                        <v-img
                          src="@/assets/images/new/db.png"
                          alt="TradeLine"
                          max-width="210px"
                          height="137px"
                          contain
                        ></v-img>
                      </div>
                      <v-btn color="#E0B1E5" to="/checkout">TradLine</v-btn>
                    </div>
                  </v-col>
                  <v-col cols="6" lg="2" md="4" sm="4" class="item-lvl">
                    <div class="item">
                      <div class="logo">
                        <v-img
                          src="@/assets/images/new/xm.png"
                          alt="TradeLine"
                          max-width="210px"
                          height="137px"
                          contain
                        ></v-img>
                      </div>
                      <v-btn color="#E0B1E5" to="/checkout">TradLine</v-btn>
                    </div>
                  </v-col>
                </v-row>
              </b-tab>
            </b-tabs>
          </b-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
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
  mounted() {
    // var tab = document.querySelector(".tab-list ul");
    // tab.classList.remove("flex-column");
  },
  methods: {
    selectTab(ev) {
      ev.target.classList.add("active");
      ev.target.parentElement.classList.add("active");
    },
  },
};
</script>

<style lang="scss" scoped>
.network {
  p {
    color: #000;
  }

  .nav-pills {
    .nav-item {
      margin: 5px;
    }
  }

  .list {
    li {
      .v-btn {
        width: 100%;
        margin: 5px 0;
        color: #000 !important;

        &.active {
          background: #e0b1e5 !important;
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
    margin: 5px;
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

  .subs-cont {
    background: rgba($color: #f7f7f7, $alpha: 0.7);
  }
}
</style>
