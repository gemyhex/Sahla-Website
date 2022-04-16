<template>
  <v-container fluid class="home">
    <v-row>
      <v-col class="px-0">
        <div class="curve">

        </div>
      </v-col>
    </v-row>
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
        <v-col class="">
          <div class="mx-auto shape">
            <div class="circle"></div>
          </div>
          <p class="text-center">Create an account</p>
        </v-col>
        <v-col class="">
          <div class="mx-auto shape">
            <div class="circle"></div>
          </div>
          <p class="text-center">Link your bank account</p>
        </v-col>
        <v-col class="">
          <div class="mx-auto shape">
            <div class="circle"></div>
          </div>
          <p class="text-center">Enjoy shopping</p>
        </v-col>
        <v-col>
          <div class="mx-auto shape">
            <div class="circle"></div>
          </div>
          <p class="text-center">Pay with Sahla Pay</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-center">
          <v-btn color="#602167">Start Now</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
.home {
  min-height: 1000px;
  .curve {
    height: 400px;
    position: relative;
    // background: linear-gradient(90deg, #f0027f, #75489f);
    background: url("../assets/images/business-online-shopping-sale-concept.png");
    background-size: cover;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100px;
      background: url("../assets/images/border.svg");
    }
  }
  .heading {
    text-align: center;
    p {
      color: #602167;
      font-weight: bold;
      font-size: 1.5rem;
      span {
        color: #00ada8;
      }
    }
    span {
      font-weight: lighter;
      color: #602167;
    }
  }
  .shape {
    width: 100px;
    height: 100px;
    background: transparent;
    border-radius: 50%;
    border: 1px solid #602167;
    .circle {
      width: 95px;
      height: 95px;
      background: #00ada8;
      margin: 2px auto;
      border-radius: 50%;
    }
  }
}
</style>
