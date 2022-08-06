<template>
  <div class="about">
    <!-- <div class="box"></div> -->
    <div class="content">
      <div
        class="bread-item d-flex flex-column justify-content-center align-items-center text-center"
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
        <v-row class="abt__t py-10" justify="space-between" align="center">
          <v-col cols="6" class="d-none d-lg-block px-8">
            <v-container>
              <div class="abt__image">
                <img :src="require('@/assets/images/new/abt_2.png')" alt="" />
              </div>
            </v-container>
          </v-col>
          <v-col cols="6" class="">
            <v-container class="px-8">
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
            </v-container>
          </v-col>
        </v-row>

        <v-row class="abt__b" justify="center" align="center">
          <div class="heading d-flex flex-column justify-center">
            <p>Our Mission <span>&amp;</span> Vision</p>
          </div>
          <v-col cols="6">
            <v-container class="px-8">
              <div>
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
            </v-container>
          </v-col>
          <v-col cols="6" class="d-none d-lg-block d-md-block">
            <div class="abt__image">
              <v-img
                :src="require('@/assets/images/new/abt_1.png')"
                class="m-auto"
                max-width="500px"
              ></v-img>
            </div>
          </v-col>
          <v-col cols="12" class="rats">
            <v-row justify="center" align="center" class="text-center">
              <v-col cols="6" lg="3" md="6">
                <h4>90 K</h4>
                <p>Active User</p>
              </v-col>
              <v-col cols="6" lg="3" md="6">
                <h4>70 K</h4>
                <p>Download App</p>
              </v-col>
              <v-col cols="6" lg="3" md="6">
                <h4>60 K</h4>
                <p>Client</p>
              </v-col>
              <v-col cols="6" lg="3" md="6">
                <h4>60 K</h4>
                <p>Active User</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <div class="py-8 useSahla">
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
  .heading {
    text-align: center;
    position: relative;
    p {
      font-weight: bold;
      color: #602167;
      font-size: calc(3vw);
      span {
        color: #00ada8;
      }
      &:after {
        content: "Our Vision & Mission";
        // display: flex;
        // transform: rotateX(180deg);
        position: absolute;
        top: 10%;
        left: 50%;
        -webkit-background-clip: text;
        color: #602167;
        transform: translate(-50%, -50%);
        opacity: 0.1;
        font-size: calc(3.5vw);
      }
    }
  }
  .abt__t,
  .abt__b {
    background: linear-gradient(to bottom, #fff, #e6c8ed 100%);
    .abt__image {
      // width: 90%;
      margin: auto;
      img {
        width: 100%;
      }
    }
    p {
      margin-bottom: 3rem;
      margin-left: 20px;
    }
    h6 {
      color: #00ada8;
      font-weight: bold;
    }
    ul {
      list-style-type: disc;
      li {
        margin-left: 30px;
      }
    }
  }
  .abt__b {
    margin-top: 100px;
    background: transparent;
    .rats {
      margin-top: 70px;
      background: linear-gradient(to bottom, #fff, #e6c8ed 100%);
      h4 {
        color: #00ada8;
        font-weight: bold;
        font-size: calc(3vw);
      }
      p {
        color: #602167;
        font-weight: bold;
        font-size: calc(1.5vw);
      }
    }
  }
  .useSahla {
    margin-top: 100px;
  }
  h2 {
    margin-bottom: 1.5rem;
    color: #602167;
    font-weight: bold;
    span {
      color: #00ada8;
    }
  }
}
</style>
