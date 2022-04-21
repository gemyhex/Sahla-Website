<template>
  <div class="offers-wrap py-12">
    <v-container>
      <v-row>
        <v-col class="offers text-center">
          <h4>Latest <span>Offers</span></h4>
        </v-col>
      </v-row>
      <v-row>
        <v-col lg="4" md="6" sm="12" class="offer-item">
          <div class="badge_s">
            <img src="../assets/images/logo_tra.png" alt="" />
          </div>

          <v-card class="mx-auto text-center">
            <div
              class="laptop d-flex justify-content-center align-items-center"
            >
              <img
                class="white--text align-end"
                src="@/assets/images/laptop.png"
              />
            </div>
            <v-card-text class="text-center">
              <v-card-title class="card-title-p justify-content-center">
                <p>Enjoy <span> 0% </span> interest at Dell!</p>
              </v-card-title>
              <div>
                Get all the mobile phones &amp; electronics you need online and
                in-store from Mobilaty and pay with 0 interest and 0 down
                payment on 6 months with Sahla Pay
              </div>
            </v-card-text>

            <v-card-actions class="justify-content-center">
              <v-btn color="#602167"> Offer Details </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col lg="4" md="6" sm="12" class="offer-item">
          <div class="badge_s">
            <img src="../assets/images/logo_tra.png" alt="" />
          </div>
          <v-card class="mx-auto text-center">
            <div
              class="iphone d-flex justify-content-center align-items-center"
            >
              <img
                class="white--text align-end"
                src="@/assets/images/iphone.png"
              />
            </div>

            <v-card-text class="text--primary">
              <v-card-title class="card-title-p justify-content-center"
                ><p>Enjoy <span> 0% </span> interest at Tradeline!</p>
              </v-card-title>
              <div>
                Get all the mobile phones &amp; electronics you need online and
                in-store from Mobilaty and pay with 0 interest and 0 down
                payment on 6 months with Sahla Pay
              </div>
            </v-card-text>

            <v-card-actions class="justify-content-center">
              <v-btn color="#602167"> Offer Details <span>></span> </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col lg="4" md="6" sm="12" class="offer-item">
          <div class="badge_s">
            <img src="../assets/images/logo_tra.png" alt="" />
          </div>
          <v-card class="mx-auto text-center">
            <div
              class="electro d-flex justify-content-center align-items-center"
            >
              <img
                class="white--text align-end"
                src="@/assets/images/electronics.png"
              />
            </div>
            <v-card-text class="">
              <v-card-title class="card-title-p justify-content-center"
                ><p>Enjoy <span> 0% </span> interest at LG!</p>
              </v-card-title>
              <div>
                Get all the mobile phones &amp; electronics you need online and
                in-store from Mobilaty and pay with 0 interest and 0 down
                payment on 6 months with Sahla Pay
              </div>
            </v-card-text>

            <v-card-actions class="justify-content-center">
              <v-btn color="#602167"> Offer Details </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-content-center">
        <v-col class="d-flex justify-content-center mt-5" lg="3" md="3" sm="4">
          <v-btn color="#602167" to="/offers"> Show More </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.offers-wrap {
  background: #f7f7f7;
  .offers {
    h4 {
      color: #602167;
      font-weight: bold;
      span {
        color: #00ada8;
      }
    }
    .v-card__title {
      font-size: 1rem !important;
    }
  }
  .offer-item {
    .v-card__title {
      font-size: 1rem !important;
      p {
        color: #602167;
        margin: 0;
        span {
          color: #00ada8;
        }
      }
    }
    position: relative;
    .badge_s {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 999;
      width: 100px;
      margin: 0 25px;
      padding: 12px;
      background: #fff;
      box-shadow: 0px 11.1px 29.3px rgba(0, 0, 0, 0.099),
        0px 48px 263px rgba(0, 0, 0, 0.1);
      fill-opacity: 30%;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: -9.5px;
        z-index: -1;
        //   background: #b8afaf;
        border-bottom: 12px solid #b8afaf;
        border-left: 10px solid transparent;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .laptop {
      height: 200px;
      background: #00ada8;
    }
    .iphone {
      height: 200px;
      background: #602167;
    }
    .electro {
      height: 200px;
      background: #00ada8;
    }
  }
}
</style>