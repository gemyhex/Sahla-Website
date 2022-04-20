<template>
  <div class="banner">
    <div class="curve">
      <img src="../assets/images/pic-01.png" alt="" />
    </div>
    <!-- <div class="overlay"></div> -->
    <p class="payment">
      Make your<br />
      Payment<br />
      More Easy
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  padding: 0;
  .curve {
    height: 100vh;
    position: relative;
    // background: url("../assets/images/business-online-shopping-sale-concept.png");
    img {
      width: 100%;
      height: 100%;
      max-width: 100%;
      height: 100%;
    }
    // &:before {
    //   content: "";
    //   position: absolute;
    //   left: 0;
    //   bottom: 0px;
    //   width: 100%;
    //   height: 245px;
    //   background: #000;
    //   background: url("../assets/images/wave.png");
    //   background-size: cover;
    // }
  }
  //   .overlay {
  //     position: absolute;
  //     top: 0;
  //     left: 0;
  //     width: 100%;
  //     height: 100%;
  //     background: linear-gradient(45deg, #00ada8, #602167);
  //     opacity: 0.7;
  //   }
  .payment {
    position: absolute;
    top: 12%;
    left: 7%;
    font-size: 50px;
    font-weight: bold;
    color: #fff;
  }
}
</style>