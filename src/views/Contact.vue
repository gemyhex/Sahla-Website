<template>
  <div class="contact">
    <div class="container-fluid p-0">
      <div
        class="
          bread-item
          d-flex
          flex-column
          justify-content-center
          align-items-center
        "
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
      <v-row justify="center" align="center">
        <v-col class="over d-none d-lg-block">
          <div class="cross">
            <img src="../assets/images/Mask Group 5.png" alt="" />
          </div>
          <div class="overlay"></div>
        </v-col>
        <v-col class="text-center form-wrap">
          <div class="form-ww">
            <p>Please fill in this form or call us on 00000</p>
            <v-row>
              <v-col>
                <!-- <v-text-field placeholder="Name" outlined></v-text-field> -->
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Name"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Phone"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="E-Mail"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn color="#602167">Send</v-btn>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div class="container-fluid p-0 subs-cont">
      <subscribe></subscribe>
    </div>
  </div>
</template>

<script>
import subscribe from "../components/subscribe.vue";
export default {
  components: { subscribe },
};
</script>

<style lang="scss" scoped>
.contact {
  .over {
    position: relative;
    height: 600px;
    .cross {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .overlay {
      position: absolute;
      top: 15%;
      left: 15%;
      width: 70%;
      height: 70%;
      // transform: translate(-50%, -50%);
      background: rgba($color: #602167, $alpha: 0.3);
      border-radius: 30px;
      transform: rotate(45deg);
      z-index: 0;
    }
  }
  .form-wrap {
    position: relative;
    .form-ww {
      // position: absolute;
      // top: 50%;
      // transform: translateY(-50%);
      p {
        color: #602167;
        font-weight: bold;
        font-size: 2rem;
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
