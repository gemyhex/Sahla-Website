<template>
  <v-row class="banner-wrap m-0" justify="center" align="center">
    <!-- <div class="banner">
      <div class="curve">
        <img src="../assets/images/Sahla Pay-01.png" alt="" />
        <div class="payment">
          <div class="container">
            <transition
              appear
              enter-active-class="animate__animated animate__slideInLeft"
              leave-active-class="animate__animated animate__slideInRight"
            >
              <p class="">
                Make your<br />
                Payment<br />
                More Easy
              </p>
            </transition>
          </div>
        </div>
      </div>
    </div>
    <div class="banner-alt">
      <div class="curve">
        <img src="../assets/images/card2.png" alt="" />
      </div>
    </div> -->
    <!-- <v-col cols="8" class="d-lg-none">
      <v-img src="@/assets/images/new/mobbb.png"></v-img>
    </v-col> -->
    <v-col cols="12" xl="5" lg="12" md="12" sm="12" class="banner__left pt-0 pl-0">
      <v-img
        class="position-absolute top-0 left-0"
        src="@/assets/images/new/ban_f.png"
        width="130px"
      ></v-img>
      <div class="item container px-8">
        <div class="wrap">
          <h4>
            Make everythings easy <br />
            with QR code
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            cursus, massa quis luctus tempor, mauris massa pharetra neque, eu
            cursus eros sem vitae nunc.
          </p>
          <v-btn class="btn-start">Get Start</v-btn>
        </div>
      </div>
    </v-col>
    <v-col cols="12" lg="7" class="banner__right pt-0 pr-0 d-none d-lg-block">
      <v-img
        src="@/assets/images/new/hm_1.png"
        max-height="660px"
        eager
      ></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner-wrap {
  position: relative;
  width: 100%;
  // height: 888px;
  .banner__left {
    .item {
      position: relative;
      z-index: 2;
      width: 100%;
      height: 100%;
      .wrap {
        width: 100%;
        margin-top: 20%;
        margin-left: 10%;
        transform: translate(-10%, -30%);
      }
      h4 {
        // color: linear-gradient(to right, #602167, #b25abf);
        background: -webkit-linear-gradient(#602167, #b25abf);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 3vw;
        font-weight: bolder;
      }
      p {
        color: #00ada8;
        // line-height: 1.5rem;
      }
      .btn-start {
        background: linear-gradient(to right, #602167, #b25abf) !important;
        font-weight: bold;
      }
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
}
.banner-alt {
  position: relative;
  width: 100%;
  // height: 50vh;
  img {
    width: 100%;
    height: 100%;
  }
  // background-image: url("../assets/images/card2.png");
  // background-image: linear-gradient(#ff0, #00f);
  // background-size: cover;
  // &:before {
  //   content: "";
  //   position: absolute;
  //   left: 0;
  //   bottom: 0;
  //   width: 100%;
  //   height: 20%;
  //   max-height: 94px;
  //   background: #000;
  //   background: url("../assets/images/wave2.png") no-repeat;
  //   background-size: 100%;
  // background-position: center;
  // mix-blend-mode: screen;
  // }
}
</style>
