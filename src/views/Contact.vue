<template>
  <div class="contact">
    <div class="container-fluid p-0">
      <div
        class="bread-item d-flex flex-column justify-content-center align-items-center"
      >
        <h3>Contact Us</h3>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Contact Us
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <v-container class="py-12">
      <v-row align="center" justify="center">
        <v-col cols="12" lg="6" md="6">
          <v-img src="../assets/images/new/abt_1.png" max-width="500px"></v-img>
        </v-col>
        <v-col class="form-wrap" cols="12" lg="6" md="6">
          <div class="form-ww">
            <p>Please fill in this form or call us on 00000</p>
            <v-row>
              <v-col cols="12">
                <input
                  type="text"
                  class="form-control-d form-control"
                  id="exampleFormControlInput1"
                  placeholder="Name"
                />
              </v-col>
              <v-col cols="12">
                <input
                  type="text"
                  class="form-control-d form-control"
                  id="exampleFormControlInput1"
                  placeholder="Phone"
                />
              </v-col>
              <v-col cols="12">
                <input
                  type="text"
                  class="form-control-d form-control"
                  id="exampleFormControlInput1"
                  placeholder="E-Mail"
                />
              </v-col>
              <v-col cols="12">
                <textarea
                  class="form-control-d form-control"
                  id="exampleFormControlTextarea1"
                  rows="6"
                  placeholder="Message"
                ></textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn color="#E0B1E5">Send</v-btn>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.contact {
  .over {
    // height: 600px;
    .cross {
      position: relative;
      // top: 0;
      // left: 0;
      // width: 100%;
      // height: 100%;
      z-index: 1;
      img {
        // width: 42vw !important;
        // height: 84vh;
        width: 100%;
      }
      .overlay {
        position: absolute;
        top: 15%;
        left: 15%;
        width: 100%;
        height: 100%;
        // transform: translate(-50%, -50%);
        background: rgba($color: #602167, $alpha: 0.3);
        border-radius: 30px;
        transform: rotate(45deg);
        z-index: 0;
      }
    }
  }
  .form-wrap {
    position: relative;

    .form-ww {
      width: 80%;
      margin: auto;
      // position: absolute;
      // top: 50%;
      // transform: translateY(-50%);
      p {
        color: #602167;
        font-weight: bold;
        font-size: calc(1.2vw + 1vh);
      }
      .v-btn {
        max-width: 150px;
        width: 150px;
        height: 40px;
        padding: 10px;
      }
    }
  }
  .subs-cont {
    background: rgba($color: #f7f7f7, $alpha: 0.7);
  }
}
</style>
