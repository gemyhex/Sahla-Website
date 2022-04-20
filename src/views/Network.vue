<template>
  <div class="network">
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
        <v-col xl="3" lg="3" class="d-none d-xl-block d-lg-block">
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
        <v-col xl="10" lg="10"></v-col>
      </v-row>
    </v-container>
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
}
</style>