<template>
  <div
    class="mt-6 py-6"
    :style="{
      'background-image': `url(${require('@/assets/images/new/BACKGROUND.png')})`,
      'background-size': '100% 100%'
    }"
  >
    <v-container>
      <v-row justify="space-around" align="center" class="px-lg-8">
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
              'font-size': '2rem',
              color: '#602167',
              'font-weight': 'bolder',
            }"
          >
            Payment link to scan QR code
          </h3>
          <p :style="{ 'font-size': '1.2rem' }">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            nulla eros, condimentum id leo a, laoreet eleifend ipsum. Aliquam at
            sodales elit, sit amet cursus dui. Maecenas venenatis tincidunt
            lacus id mollis. In ex justo, consequat a elit in, tincidunt
            vulputate odio. Pellentesque pellentesque quis elit ut feugiat.
          </p>
        </v-col>
        <v-col
          cols="12"
          xl="6"
          lg="6"
          md="6"
          sm="8"
          justify="center"
          align="center"
        >
          <v-img
            :src="require('@/assets/images/new/OBJECTS.png')"
            max-width="360px"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
