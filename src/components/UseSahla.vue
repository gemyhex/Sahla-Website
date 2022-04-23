<template>
  <v-container>
    <v-row class="mt-5">
      <v-col>
        <div class="heading d-flex flex-column justify-center">
          <p>How to use <span>Sahla Pay</span> ?</p>
          <span>Only 4 Easy Steps!</span>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="3" md="6" sm="6" class="item">
        <div class="mx-auto shape">
          <div class="circle">
            <v-icon class="badge-ico">{{ icons.user }}</v-icon>
          </div>
        </div>
        <p class="text-center mt-3">Create an account</p>
      </v-col>
      <v-col lg="3" md="6" sm="6" class="item">
        <div class="mx-auto shape">
          <div class="circle">
            <v-icon class="badge-ico">{{ icons.credit }}</v-icon>
          </div>
        </div>
        <p class="text-center mt-3">Link your bank account</p>
      </v-col>
      <v-col lg="3" md="6" sm="6" class="item">
        <div class="mx-auto shape">
          <div class="circle">
            <v-icon class="badge-ico">{{ icons.shopping }}</v-icon>
          </div>
        </div>
        <p class="text-center mt-3">Enjoy shopping</p>
      </v-col>
      <v-col lg="3" md="6" sm="6" class="item">
        <div class="mx-auto shape">
          <div class="circle">
            <v-icon class="badge-ico">{{ icons.pay }}</v-icon>
          </div>
        </div>
        <p class="text-center mt-3">Pay with Sahla Pay</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center my-3">
        <v-btn color="#602167">Start Now</v-btn>
      </v-col>
    </v-row>
  </v-container>
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
  p {
    color: #602167;
    font-weight: bold;
    font-size: 2.5rem;
    span {
      color: #00ada8;
    }
  }
  span {
    font-weight: lighter;
    color: #602167;
  }
}
.item {
  position: relative;
  .shape {
    width: 100px;
    height: 100px;
    background: transparent;
    border-radius: 50%;
    border: 2px solid #60216731;
    position: relative;
    .circle {
      position: absolute;
      width: 90px;
      height: 90px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #00ada8;
      margin: auto;
      border-radius: 50%;
      .badge-ico {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: calc(2vw + 2vh);
        color: #fff;
      }
    }
  }
  p {
    font-weight: bold;
    color: #602167;
  }
  &:not(:last-child):after {
    content: "";
    position: absolute;
    top: 20%;
    left: 70%;
    width: 25vw;
    height: 50px;
    background: url("../assets/images/arrow.png");
    background-size: contain;
    background-repeat: no-repeat;
  }
}
</style>