<template>
  <div class="mt-6 py-6">
    <v-container>
      <v-row justify="space-around" align="center" class="px-lg-8">
        <v-col
          cols="12"
          xl="7"
          lg="7"
          md="6"
          sm="12"
          class="pa-8"
          justify="start"
          align="start"
        >
<<<<<<< HEAD
          <div class="wrap">
            <div class="item py-2">
              <h2>No website? No problem</h2>
              <h3>Pay By Link</h3>
            </div>
            <p class="mt-6">
              Don’t operate an e-Store? No problem. Whether you do business on
              social media platforms such as Instagram or Facebook or through
              call centers, or you are looking for a way customers can pay
              directly for specific services or subscriptions, Sahla Digital’s
              pay-by-link platform provides a simple and convenient experience
              designed to keep your customers within easy reach. Receive payment
              at any time and place.
            </p>
            <v-btn class="btn-start mt-3">Learn More</v-btn>
          </div>
=======
          <h3
            :style="{
              'font-size': '46px',
              color: '#602167',
              'font-weight': '900',
            }"
          >
            Payment link to scan QR code
          </h3>
          <p :style="{ 'font-size': '1.2rem' }" class="mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            nulla eros, condimentum id leo a, laoreet eleifend ipsum. Aliquam at
            sodales elit, sit amet cursus dui. Maecenas venenatis tincidunt
            lacus id mollis. In ex justo, consequat a elit in, tincidunt
            vulputate odio. Pellentesque pellentesque quis elit ut feugiat.
          </p>
>>>>>>> 1f3f05beb046672e3b25f1ac2ee6a32207bb03cf
        </v-col>
        <v-col
          cols="12"
          xl="5"
          lg="5"
          md="6"
          sm="8"
          justify="center"
          align="center"
        >
          <v-img :src="require('@/assets/images/new/why1.png')"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.wrap {
  .item {
    border-bottom: 2px dashed #602167;
    h2 {
      // color: linear-gradient(to right, #602167, #b25abf);
      color: #602167;
      // font-size: 2.9vw;
      font-weight: bolder;
    }
    h3 {
      color: #00ada8;
      // line-height: 1.5rem;
    }
  }
  ul {
    li {
      font-weight: 600;
    }
  }
  .btn-start {
    background: linear-gradient(to right, #602167, #b25abf) !important;
    font-weight: bold;
    min-width: 140px;
  }
}
</style>
