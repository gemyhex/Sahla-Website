<template>
  <div>
    <div class="banner">
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
  }
  .curve {
    height: 86vh;
    position: relative;
    z-index: 1;
    // background-image: url("../assets/images/Sahla Pay-01.png");
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
      width: 100%;
      height: 100%;
      position: absolute;
      top: 5%;
      left: 0%;
      font-size: calc(4vw + 3.5vh);
      font-weight: bold;
      color: #fff;
      line-height: 7vw;
    }
  }
  // .overlay {
  //   position: absolute;
  //   width: 100%;
  //   // height: 100%;
  //   top: 0%;
  //   left: 0;
  //   z-index: 0;
  // }
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