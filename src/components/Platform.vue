<template>
  <div class="useSahla">
    <div class="container">
      <v-row class="px-lg-8 pt-0" justify="center" align="center">
        <v-col cols="12" lg="6" md="6">
          <v-img src="@/assets/images/new/plat.png"></v-img>
        </v-col>
        <v-col cols="12" lg="6" md="6">
          <div class="wrap">
            <div class="item py-2">
              <h2>Building your own platform from scratch?</h2>
              <h3>Sahla Pay REST API Integration</h3>
            </div>
            <ul class="mt-6">
              <li>
                Looking forward taking control over the look and feel of your
                checkout page? our set of comprehensive server side APIs are
                ready for you. With our set of APIs you can:
              </li>
              <li class="mt-3">Make payments using Cards.</li>
              <li class="mt-3">
                Issue tokens for your clients' Cards so a more secure payments.
              </li>
              <li class="mt-3">
                Receive payments at any of our Sahla Pay POS retail store.
              </li>
              <li class="mt-3">
                Take full control of checkout UI/UX elements.
              </li>
              <li class="mt-3">
                Design your client’s payment options selection form.
              </li>
            </ul>
            <v-btn class="btn-start mt-3">Learn More</v-btn>
          </div>
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
  margin-top: 0 !important;
  background: linear-gradient(
    to right,
    rgba($color: #fff, $alpha: 0),
    rgba($color: #e6c8ed, $alpha: 0.45)
  );
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
