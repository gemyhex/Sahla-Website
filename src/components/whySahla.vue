<template>
  <div class="useSahla">
    <div class="container">
      <v-row class="">
        <v-col cols="12" lg="6" md="6">
          <div class="wrap">
            <div class="item py-2">
              <h2>
                Reaching your customers through Android/iOS mobile applications?
              </h2>
              <h3>Sahla Pay Mobile SDks</h3>
            </div>
            <ul class="mt-6">
              <li>
                Sahla Pay empowers partners with mobile SDKs satisfying the
                emerging need of mobile technology.
              </li>
              <li class="mt-3">
                We offer mobile payment payment SDKs readily available for
                integration in your native mobile application.
              </li>
              <li class="mt-3">
                We provide both, Android and iOS native payment plugins.
              </li>
            </ul>
            <v-btn class="btn-start mt-3">Learn More</v-btn>
          </div>
        </v-col>
        <v-col cols="12" lg="6" md="6">
          <v-img src="@/assets/images/new/mob.png" contain></v-img>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: {
        user: "fas fa-user",
        credit: "fas fa-credit-card-front",
        shopping: "fas fa-shopping-cart",
        pay: "fas fa-coins",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.useSahla {
  margin-top: 60px;

  .wrap {
    .item {
      border-bottom: 2px dashed #602167;
      h2 {
        // color: linear-gradient(to right, #602167, #b25abf);
        color: #602167;
        // font-size: 2.9vw;
        font-weight: bolder;
      }
      h3 {
        color: #00ada8;
        // line-height: 1.5rem;
      }
    }
    ul {
      li {
        font-weight: 600;
      }
    }
    .btn-start {
      background: linear-gradient(to right, #602167, #b25abf) !important;
      font-weight: bold;
      min-width: 140px;
    }
  }
}
.item {
  position: relative;
  .mob-logo {
    box-shadow: 0 10px 10px #707070;
    border-radius: 16px;
  }
}
.headings-wrap {
  p {
    font-size: calc(1.2rem);
    font-weight: lighter;
    color: #602167;
  }
}
.first-wrap {
  background: linear-gradient(to left, #fff, #e6c8ed);
  .item__wrap {
    position: relative;
    z-index: 1;
  }
}
</style>
