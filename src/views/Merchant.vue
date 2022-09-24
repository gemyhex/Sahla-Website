<template>
  <div class="merchant pb-12">
    <div class="container-fluid p-0">
      <div
        class="bread-item d-flex flex-column justify-content-center align-items-center"
      >
        <h3>Join as a Merchant</h3>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Join as a Merchant
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <v-container>
      <v-row class="my-12 pa-8" justify="center" align="center">
        <v-col cols="12" lg="7" md="6" sm="12" class="merchantt">
          <div class="merch-wrap">
            <p>Benefits of joining Sahla Pay’s merchant network</p>
            <ul class="list">
              <li>
                Bridging the gap between customer needs and financial
                capabilities.
              </li>
              <li>
                Providing customers with easy solutions that best suit their
                needs.
              </li>
              <li>
                Leveraging common business acumen to achieve customer
                satisfaction.
              </li>
              <li>
                Leveraging common business acumen to achieve customer
                satisfaction.
              </li>
              <li>
                Leveraging common business acumen to achieve customer
                satisfaction.
              </li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" lg="5" md="6" sm="12" class="merchantu">
          <v-img
            src="@/assets/images/new/merchantu.png"
            max-width="400px"
          ></v-img>
        </v-col>
      </v-row>
      <v-row align="center" justify="center" class="subs text-center">
        <v-col>
          <h3>Join us <span>now</span>!</h3>
          <h6>Become a Sahla Pay Merchant</h6>
        </v-col>
      </v-row>
      <v-row class="pa-8" justify="center" align="center">
        <v-col cols="12" lg="8">
          <v-row>
            <v-col>
              <input
                type="text"
                class="form-control form-control-d"
                id="exampleFormControlInput1"
                placeholder="Name"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <input
                type="text"
                class="form-control form-control-d"
                id="exampleFormControlInput1"
                placeholder="Merchant Name"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <input
                type="text"
                class="form-control form-control-d"
                id="exampleFormControlInput1"
                placeholder="Mobile"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <input
                type="text"
                class="form-control form-control-d"
                id="exampleFormControlInput1"
                placeholder="Industry"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <input
                type="text"
                class="form-control form-control-d"
                id="exampleFormControlInput1"
                placeholder="Address"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <textarea
                class="form-control form-control-d"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="Message"
              ></textarea>
            </v-col>
          </v-row>
          <v-row justify="center" align="center">
            <v-col class="d-flex justify-content-center">
              <v-btn style="width: 50%" color="#E0B1E5">Send</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.merchant {
  .merch-wrap {
    width: 100%;
    p {
      color: #602167;
      font-weight: bold;
      font-size: 1.3rem;
    }
    .list {
      list-style: disc inside;
      li {
        height: 100%;
      }
      ::marker {
        font-size: calc(2vw);
      }
    }
  }
  .subs {
    h3 {
      font-weight: bold;
      color: #602167;
      span {
        color: #00ada8;
      }
    }
    h6 {
      font-size: 0.8rem;
      color: #602167;
      font-weight: 300;
    }
    .send-btn {
      width: 50% !important;
    }
  }
}
</style>
