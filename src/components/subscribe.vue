<template>
  <div class="subs-wrap py-5 mb-5">
    <v-container>
      <v-row>
        <v-col>
          <div class="heading text-center">
            <p>Subscribe To Our <span>Newsletter</span></p>
          </div>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-content-center">
        <v-col lg="6" class="d-flex justify-content-center">
          <!-- <v-text-field
            outlined
            dense
            placeholder="E-Mail"
            hide-details
          ></v-text-field> -->

          <div class="input-group mb-3">
            <input
              type="email"
              class="form-control"
              placeholder="E-Mail"
              aria-label="E-Mail"
              aria-describedby="basic-addon2"
            />
            <!-- <span class="input-group-text" id="basic-addon2">@example.com</span> -->
            <v-btn color="#602167" class="input-group-text" id="basic-addon2">
              Subscribe
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.subs-wrap {
  .heading {
    p {
      font-weight: bold;
      color: #602167;
      font-size: 2rem;
      span {
        color: #00ada8;
      }
    }
  }
}
</style>