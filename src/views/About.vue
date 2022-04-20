<template>
  <div class="about">
    <v-container>
      <v-row>
        <v-col class="d-none d-lg-block">
          <img src="@/assets/images/about.png" alt="" />
        </v-col>
        <v-col class="d-flex justify-content-center flex-column">
          <h2>About <span>Sahla Pay</span></h2>
          <p>
            SahlaPay is a consumer finance company established in 2022. Sahla's
            mission is to provide seamless technology-driven financial
            solutions.
          </p>
          <p>
            These solutions increase financial inclusion and improve the lives
            of many. Due to the escalating financial difficulties that everyone
            is experiencing, the demand for consumer finance and creative
            financial solutions has increased in the UAE,
          </p>
          <p>
            and our goal at Sahla Pay is to combine our financial and business
            knowledge to develop solutions that relieve some of these pressures,
            allowing our customers to enjoy an amazing shopping experience.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-content-center flex-column">
          <div>
            <h2 class="mb-5">Our Vision <span>&amp;</span> Mission</h2>
            <h6>We aspire to</h6>
            <ul>
              <li>
                Be able to consistently provide our customers with a seamless
                user experience that surpasses their expectations.
              </li>
              <li>
                Be the preferred payment method for merchants across all
                categories.
              </li>
              <li>
                Be recognized as a top employer in the field and the region.
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-5">Our Vision <span>&amp;</span> Mission</h2>
            <h6>Our mission</h6>
            <p>
              is to offer financial solutions to all consumer segments in the
              Egyptian market, with special emphasis on underbanked and
              non-banked segments. Through our offerings, we are creating a
              society with fuller financial inclusion and a higher standard of
              living. Our vision is to set new standards as an innovative and
              responsible company that is both accessible and affordable to all
              consumer segments.
            </p>
          </div>
        </v-col>
        <v-col class="over d-none d-lg-block">
          <div class="cross">
            <img src="../assets/images/Mask Group 5.png" alt="" />
          </div>
          <div class="overlay"></div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <use-sahla></use-sahla>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <partners></partners>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import Partners from "../components/partners.vue";
import UseSahla from "../components/UseSahla.vue";
export default {
  components: { UseSahla, Partners },
};
</script>

<style lang="scss" scoped>
.about {
  img {
    max-height: 600px;
    height: 600px;
  }
  h2 {
    color: #602167;
    font-weight: bold;
    span {
      color: #00ada8;
    }
  }
  h6 {
    color: #00ada8;
    font-weight: bold;
  }
  ul {
    list-style: disc;
  }
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
}
</style>