<template>
  <div class="subs-wrap py-8">
    <div class="container">
      <v-row align="center" justify="center">
        <v-col class="col-xl-5 col-lg-5 col-md-8 col-sm-12 col-12">
          <div class="heading text-center">
            <p>Subscribe To Our <span>Newsletter</span></p>
          </div>

          <div class="d-flex justify-content-center align-items-center">
            <div class="input-group mb-3 d-flex justify-content-center align-items-center">
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
          </div>
        </v-col>
      </v-row>
    </div>
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
  .form-control {
    border: 1px solid #00ada8;
  }
  .heading {
    p {
      font-weight: bold;
      color: #602167;
      font-size: calc(1vw + 1vh);
      span {
        color: #00ada8;
      }
    }
  }
  .input-group-text {
    width: 140px;
  }
}
</style>