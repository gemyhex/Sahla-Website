<template>
  <div>
    <div class="banner">
      <div class="curve">
        <img src="../assets/images/card.png" alt="" />
        <p class="payment">
          Make your<br />
          Payment<br />
          More Easy
        </p>
      </div>
      <div class="overlay">
        <img src="../assets/images/pic-02.png" alt="" />
      </div>
    </div>
    <div class="banner-alt">
      <div class="curve">
        <img src="../assets/images/card2.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }
  .curve {
    width: 100%;
    height: 80vh;
    position: relative;
    z-index: 1;
    // background-image: url("../assets/images/card.png");
    // mask-image: url("../assets/images/mask.jpg");
    // mask-repeat: no-repeat;
    // background-size: cover;
    // background-position: center;
    // background-repeat: no-repeat;

    // &:before {
    //   content: "";
    //   position: absolute;
    //   left: 0;
    //   bottom: 0px;
    //   width: 100%;
    //   height: 100%;
    //   // background: #000;
    //   background: url("../assets/images/mask.jpg") no-repeat;
    //   background-size: 100%;
    //   background-position: center;
    //   mix-blend-mode: screen;
    // }
    .payment {
      position: absolute;
      top: 12%;
      left: 7%;
      font-size: 50px;
      font-weight: bold;
      color: #fff;
    }
  }
  .overlay {
    position: absolute;
    width: 100%;
    // height: 100%;
    top: 0%;
    left: 0;
    z-index: 0;
  }
}
.banner-alt {
  position: relative;
  width: 100vw;
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