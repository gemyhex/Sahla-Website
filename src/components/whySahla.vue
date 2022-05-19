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
      <v-row>
        <v-col class="why-item text-center" lg="3" md="6" sm="6">
          <div class="logo">
            <img src="@/assets/images/sec1.png" alt="" />
          </div>
          <h5>Easy Payment</h5>
          <p>
            You can pay your bills easily and anytime through Sahla pay wallet
          </p>
        </v-col>
        <v-col class="why-item text-center" lg="3" md="6" sm="6">
          <div class="logo">
            <img src="@/assets/images/sec2.png" alt="" />
          </div>
          <h5>Easy Shopping</h5>
          <p>Huge options of online shops and services you can shop from</p>
        </v-col>
        <v-col class="why-item text-center" lg="3" md="6" sm="6">
          <div class="logo">
            <img src="@/assets/images/sec3.png" alt="" />
          </div>
          <h5>Customer Care</h5>
          <p>
            Our expert team is ready to deal with your concerns all day long.
          </p>
        </v-col>
        <v-col class="why-item text-center" lg="3" md="6" sm="6">
          <div class="logo">
            <img src="@/assets/images/sec4.png" alt="" />
          </div>
          <h5>Safe &amp; Secure</h5>
          <p>
            protects your money from online fraud through advanced and secure
            technology
          </p>
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
    p {
      font-weight: bold;
      color: #602167;
      font-size: calc(2vw + 2vh);
      span {
        color: #00ada8;
      }
    }
  }
  .why-item {
    h5 {
      color: #602167;
      font-weight: bold;
    }
    p {}
  }
}
</style>