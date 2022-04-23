<template>
  <div class="subs-wrap py-12">
    <div class="container">
      <div class="heading text-center">
        <p>Subscribe To Our <span>Newsletter</span></p>
      </div>

      <div class="d-flex justify-content-center">
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
      </div>
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
  width: 50%;
  margin: auto;
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