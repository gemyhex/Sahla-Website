<template>
  <div class="">
    <div class="heading d-flex flex-column justify-center">
      <p>How to use <span>Sahla Pay</span>?</p>
      <span>Only 4 Easy Steps!</span>
    </div>
    <v-row class="first-wrap mt-5" justify="center" align="center">
      <v-col lg="3" md="6" sm="6" class="item" justify="center" align="center">
        <v-img
          :src="require('@/assets/images/new/mob1.png')"
          width="285px"
        ></v-img>
      </v-col>
      <v-col lg="3" md="6" sm="6" class="item" justify="center" align="center">
        <v-img
          :src="require('@/assets/images/new/mob2.png')"
          width="285px"
        ></v-img>
      </v-col>
      <v-col lg="3" md="6" sm="6" class="item" justify="center" align="center">
        <v-img
          :src="require('@/assets/images/new/mob3.png')"
          width="285px"
        ></v-img>
      </v-col>
      <v-col lg="3" md="6" sm="6" class="item" justify="center" align="center">
        <v-img
          :src="require('@/assets/images/new/mob1.png')"
          width="285px"
        ></v-img>
      </v-col>
    </v-row>
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
    <v-row
      class="mt-6 py-6"
      :style="{
        'background-image': `url(${require('@/assets/images/new/BACKGROUND.png')})`,
      }"
      justify="space-around"
      align="center"
    >
      <v-col
        cols="12"
        xl="5"
        lg="5"
        md="6"
        sm="12"
        justify="start"
        align="start"
      >
        <h3
          :style="{
            'font-size': '2.2rem',
            color: '#602167',
            'font-weight': 'bold',
          }"
        >
          Payment link to scan QR code
        </h3>
        <p :style="{ 'font-size': '1.2rem' }">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nulla
          eros, condimentum id leo a, laoreet eleifend ipsum. Aliquam at sodales
          elit, sit amet cursus dui. Maecenas venenatis tincidunt lacus id
          mollis. In ex justo, consequat a elit in, tincidunt vulputate odio.
          Pellentesque pellentesque quis elit ut feugiat.
        </p>
      </v-col>
      <v-col
        cols="12"
        xl="6"
        lg="6"
        md="6"
        sm="12"
        justify="center"
        align="center"
      >
        <v-img
          :src="require('@/assets/images/new/OBJECTS.png')"
          width="478px"
        ></v-img>
      </v-col>
    </v-row>
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
  p {
    color: #602167;
    font-weight: bold;
    font-size: calc(2vw + 3vh);
    margin-bottom: 5px;
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
  &:not(:last-child):after {
    content: "";
    position: absolute;
    top: 50%;
    left: 93%;
    width: 67px;
    height: 50px;
    background: url("../assets/images/new/arrow.png");
    background-size: 35% 75%;
    background-repeat: no-repeat;
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
}
</style>
