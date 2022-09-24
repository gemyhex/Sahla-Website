<template>
  <div class="">
    <div class="container heading d-flex flex-column justify-center">
      <h2>Choose how do you want to <span>integrate</span></h2>
      <p>
        Sahla Pay has a variety of services designed to fit within your business
        needs. Choose the payment service that best fit your business Sahla Pay
        has a variety of services designed to fit within your business needs.
        Choose the payment service that best fit your business..
      </p>
    </div>
    <div class="useSahla">
      <div class="container">
        <v-row class="pa-lg-8" align="center" justify="center">
          <v-col cols="12" lg="6" md="6">
            <v-img src="@/assets/images/new/use1.png"></v-img>
          </v-col>
          <v-col cols="12" lg="6" md="6">
            <div class="wrap">
              <div class="item py-2">
                <h2>Running an E-Commerce market place?</h2>
                <h3>Sahla Pay E-Commerce Plugins</h3>
              </div>
              <ul class="mt-6">
                <li>
                  Sahla Pay empowers partners with payments plugins for leading
                  e-commerce technology solutions
                </li>
                <li class="mt-3">
                  We offer payments plugins for the most leading e-commerce
                  technology solutions, WooCommerce and Shopify, and Magento 2.
                </li>
                <li class="mt-3">
                  Our plugins are designed to give your clients the best
                  checkout experience.
                </li>
              </ul>
              <v-btn class="btn-start mt-3">Learn More</v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
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
.heading {
  text-align: center;
  position: relative;
  h2 {
    color: #602167;
    font-weight: bold;
    // font-size: calc(3.6vw);
    margin-bottom: 5px;

    span {
      color: #00ada8;
    }
    &:after {
      content: "Choose how do you want to integrate";
      // display: flex;
      // transform: rotateX(180deg);
      position: absolute;
      top: 10%;
      left: 50%;
      -webkit-background-clip: text;
      color: #602167;
      transform: translate(-50%, -50%);
      opacity: 0.1;
      // font-size: calc(3vw);
    }
  }
  p {
    width: 70%;
    margin: 0 auto;
    font-weight: lighter;
    color: #000;
  }
}

.useSahla {
  margin-top: 60px;
  background: linear-gradient(
    to left,
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
