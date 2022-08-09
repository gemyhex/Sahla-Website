<template>
  <div class="why py-8">
    <v-container>
      <v-row>
        <v-col>
          <div class="heading text-center">
            <p>Why use <span>Sahla Pay</span>?</p>
          </div>
        </v-col>
      </v-row>
      <v-row justify="space-around" align="center">
        <v-col
          class="why-item text-center mb-5"
          cols="12"
          xl="3"
          lg="4"
          md="6"
          sm="6"
        >
          <div class="content">
            <div class="logo">
              <img src="@/assets/images/new/sec1.png" alt="" />
            </div>
            <h5>Easy Payment</h5>
            <p>
              You can pay your bills easily and anytime through Sahla pay wallet
            </p>
          </div>
        </v-col>
        <v-col
          class="why-item text-center mb-5"
          cols="12"
          xl="3"
          lg="4"
          md="6"
          sm="6"
        >
          <div class="content">
            <div class="logo">
              <img src="@/assets/images/new/sec2.png" alt="" />
            </div>
            <h5>Customer Care</h5>
            <p>
              Our expert team is ready to deal with your concerns all day long.
            </p>
          </div>
        </v-col>
        <v-col
          class="why-item text-center mb-5"
          cols="12"
          xl="3"
          lg="4"
          md="6"
          sm="6"
        >
          <div class="content">
            <div class="logo">
              <img src="@/assets/images/new/sec3.png" alt="" />
            </div>
            <h5>Safe &amp; Secure</h5>
            <p>
              protects your money from online fraud through advanced and secure
              technology
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.why {
  .heading {
    text-align: center;
    position: relative;
    p {
      font-weight: bold;
      color: #602167;
      font-size: calc(3.6vw);
      span {
        color: #00ada8;
      }
      &:after {
        content: "Why use Sahla Pay?";
        // display: flex;
        // transform: rotateX(180deg);
        width: 100%;
        position: absolute;
        top: 10%;
        left: 50%;
        -webkit-background-clip: text;
        color: #602167;
        transform: translate(-50%, -50%);
        opacity: 0.1;
        font-size: calc(4vw);
      }
    }
  }
  .why-item {
    // padding: 10px;
    border-radius: 10px;
    // background: #00ada8;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
    .content {
      border-radius: 10px;
      min-height: 330px;
      border: 2px dashed #c797d3;
      padding: 2rem 0;
    }
    h5 {
      color: #602167;
      font-weight: bold;
      margin: 10px 0;
    }
    p {
      width: 80%;
      margin: auto;
    }
  }
}
</style>
