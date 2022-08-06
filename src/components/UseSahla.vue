<template>
  <div class="">
    <div class="heading d-flex flex-column justify-center">
      <p>How to use <span>Sahla Pay</span>?</p>
      <span>Only 4 Easy Steps!</span>
    </div>
    <div class="first-wrap mt-5">
      <v-container>
        <v-row class="item__wrap px-8" justify="space-between" align="center">
          <v-col
            lg="2"
            md="5"
            sm="5"
            class="item"
            justify="center"
            align="center"
          >
            <v-img
              :src="require('@/assets/images/new/mob1.png')"
              width="285px"
            ></v-img>
          </v-col>
          <v-col
            lg="2"
            md="5"
            sm="5"
            class="item"
            justify="center"
            align="center"
          >
            <v-img
              :src="require('@/assets/images/new/mob2.png')"
              width="285px"
            ></v-img>
          </v-col>
          <v-col
            lg="2"
            md="5"
            sm="5"
            class="item"
            justify="center"
            align="center"
          >
            <v-img
              :src="require('@/assets/images/new/mob3.png')"
              width="285px"
            ></v-img>
          </v-col>
          <v-col
            lg="2"
            md="5"
            sm="5"
            class="item"
            justify="center"
            align="center"
          >
            <v-img
              :src="require('@/assets/images/new/mob1.png')"
              width="285px"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container>
      <v-row class="headings-wrap">
        <v-col lg="3" md="6" sm="6">
          <p class="text-center mt-3">
            Point your phone<br />
            at the QR code
          </p>
        </v-col>
        <v-col lg="3" md="6" sm="6">
          <p class="text-center mt-3">Scan the QR code</p>
        </v-col>
        <v-col lg="3" md="6" sm="6">
          <p class="text-center mt-3">
            Wait for the page<br />
            to load
          </p>
        </v-col>
        <v-col lg="3" md="6" sm="6">
          <p class="text-center mt-3">Access the information</p>
        </v-col>
      </v-row>
    </v-container>
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
  p {
    color: #602167;
    font-weight: bold;
    font-size: calc(4.2vw);
    margin-bottom: 5px;

    span {
      color: #00ada8;
    }
    &:after {
      content: "How to use Sahla Pay?";
      // display: flex;
      // transform: rotateX(180deg);
      position: absolute;
      top: 10%;
      left: 50%;
      -webkit-background-clip: text;
      color: #602167;
      transform: translate(-50%, -50%);
      opacity: 0.1;
      font-size: calc(4.6vw);
    }
  }
  span {
    font-weight: lighter;
    color: #602167;
  }
}
.item {
  position: relative;
  &:not(:last-child):after {
    content: "";
    position: absolute;
    top: 50%;
    left: 120%;
    width: 150px;
    height: 40px;
    background: url("../assets/images/new/arrow.png");
    background-size: 25% 75%;
    background-repeat: no-repeat;
  }
  @media screen and (max-width: 1200px) {
    &:after {
      left: 150%;
    }
  }
}
.headings-wrap {
  p {
    font-size: calc(1.3rem);
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
