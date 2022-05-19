<template>
  <div class="about">
    <!-- <div class="box"></div> -->
    <div class="content">
      <div
        class="
          bread-item
          d-flex
          flex-column
          justify-content-center
          align-items-center
          text-center
        "
      >
        <h3>About Us</h3>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">About Us</li>
          </ol>
        </nav>
      </div>
      <div class="container-fluid px-0">
        <div class="container">
          <v-row>
            <v-col class="d-none d-lg-block">
              <img src="@/assets/images/about.png" alt="" />
            </v-col>
            <v-col class="d-flex justify-content-center flex-column">
              <h2>About <span>Sahla Pay</span></h2>
              <p>
                SahlaPay is a consumer finance company established in 2022.
                Sahla's mission is to provide seamless technology-driven
                financial solutions.
              </p>
              <p>
                These solutions increase financial inclusion and improve the
                lives of many. Due to the escalating financial difficulties that
                everyone is experiencing, the demand for consumer finance and
                creative financial solutions has increased in the UAE,
              </p>
              <p>
                and our goal at Sahla Pay is to combine our financial and
                business knowledge to develop solutions that relieve some of
                these pressures, allowing our customers to enjoy an amazing
                shopping experience.
              </p>
            </v-col>
          </v-row>
        </div>
        <div class="container">
          <v-row>
            <v-col class="d-flex justify-content-center flex-column">
              <div>
                <h2 class="mb-5">Our Vision <span>&amp;</span> Mission</h2>
                <h6>We aspire to</h6>
                <ul>
                  <li>
                    Be able to consistently provide our customers with a
                    seamless user experience that surpasses their expectations.
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
                  is to offer financial solutions to all consumer segments in
                  the Egyptian<br />
                  market, with special emphasis on underbanked and non-banked<br />
                  segments. Through our offerings, we are creating a society
                  with fuller<br />
                  financial inclusion and a higher standard of living. Our
                  vision is to set<br />
                  new standards as an innovative and responsible company that is
                  both<br />
                  accessible and affordable to all consumer segments.
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
        </div>

        <div class="py-8 mt-8 useSahla">
          <use-sahla></use-sahla>
        </div>
        <div class="parters">
          <partners></partners>
        </div>
      </div>
    </div>
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
  position: relative;
  .box {
    width: 32vw;
    height: 65vh;
    background: rgba($color: #00ada8, $alpha: 0.3);
    border-radius: 50px;
    transform: rotate(45deg);
    position: absolute;
    z-index: 0;
    // transform: translate(-50%, -50%);
    &:first-child {
      top: 13%;
      left: -10%;
    }
  }
  img {
    max-height: 600px;
    height: 600px;
    z-index: 1;
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
  .useSahla {
    background: #f7f7f7;
  }
}
</style>