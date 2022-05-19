<template>
  <div class="container-fluid auth-wrap text-center">
    <v-row>
      <v-col
        xl="6"
        lg="5"
        md="4"
        class="left-side d-none d-xl-flex d-lg-flex d-md-flex"
      >
        <div class="container">
          <p>
            Easy Way to <br />
            <span>Payment</span>
          </p>
          <img src="../assets/images/auth.png" alt="auth" />
        </div>
      </v-col>
      <v-col xl="6" lg="7" md="12" class="right-side">
        <div class="container">
          <div class="close">
            <div class="container d-flex justify-content-end">
              <router-link to="/">
                <v-icon>{{ icons.close }}</v-icon>
              </router-link>
            </div>
          </div>
          <v-card>
            <v-card-title class="text-center justify-center py-6">
              <!-- <h1 class="font-weight-bold text-h2 basil--text">BASiL</h1> -->
              <img src="../assets/images/logo.svg" alt="" width="50%" />
            </v-card-title>

            <v-tabs v-model="tab">
              <v-tab v-for="item in items" :key="item">
                {{ item }}
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item>
                <v-card flat>
                  <v-card flat>
                    <v-row>
                      <v-col>
                        <v-text-field
                          v-model="user.email"
                          placeholder="E-Mail"
                          outlined
                          dense
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col>
                        <v-text-field
                          v-model="user.password"
                          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="show2 ? 'text' : 'password'"
                          placeholder="Password"
                          @click:append="show2 = !show2"
                          outlined
                          dense
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col></v-col>
                      <v-spacer></v-spacer>
                      <router-link to="/auth"></router-link>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-btn v-if="!pending" color="#602167" @click="Login"
                          >Sign in</v-btn
                        >
                        <v-btn v-else>
                          <button class="btn" type="button" disabled>
                            <span
                              class="spinner-border spinner-border-sm"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Please Wait...
                          </button>
                        </v-btn>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <p>
                          Don't have an account?
                          <router-link to="/auth">Sign up</router-link>
                        </p>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <h6>Or</h6>
                        <p class="network">With your social network</p>
                        <div
                          class="
                            d-flex
                            justify-content-center
                            align-items-center
                          "
                        >
                          <router-link to="/auth">
                            <div class="icon-bg mx-2">
                              <img
                                :src="require('../assets/images/google.png')"
                                alt=""
                              />
                            </div>
                          </router-link>
                          <router-link to="/auth">
                            <div class="icon-bg mx-2">
                              <img
                                :src="require('../assets/images/facebook.png')"
                                alt=""
                              />
                            </div>
                          </router-link>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-row>
                    <v-col>
                      <v-text-field
                        placeholder="Username"
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-text-field
                        placeholder="E-Mail"
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-text-field
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show1 ? 'text' : 'password'"
                        placeholder="Password"
                        @click:append="show1 = !show1"
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-text-field
                        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show2 ? 'text' : 'password'"
                        placeholder="Confirm Password"
                        @click:append="show2 = !show2"
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-btn color="#602167">Register</v-btn>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <p>
                        Aleardy have an account?
                        <router-link to="/auth">Sign in</router-link>
                      </p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <h6>Or</h6>
                      <p class="network">With your social network</p>
                      <div
                        class="d-flex justify-content-center align-items-center"
                      >
                        <router-link to="/auth">
                          <div class="icon-bg mx-2">
                            <img
                              :src="require('../assets/images/google.png')"
                              alt=""
                            />
                          </div>
                        </router-link>
                        <router-link to="/auth">
                          <div class="icon-bg mx-2">
                            <img
                              :src="require('../assets/images/facebook.svg')"
                              alt=""
                            />
                          </div>
                        </router-link>
                      </div>
                    </v-col>
                  </v-row>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      pending: false,
      tab: null,
      items: ["Sign in", "Sign up"],
      show1: false,
      show2: false,
      icons: {
        facebook: "",
        google: "../assets/images/google.png",
        close: "far fa-times",
      },
    };
  },
  methods: {
    Login() {
      this.pending = true;
      const user = {
        email: "admin@admin.com",
        password: "123456",
      };
      if (
        (user.email = this.user.email && user.password == this.user.password)
      ) {
        this.pending = false;
        localStorage.setItem("access_token", "token");
        localStorage.setItem("content", true);
        this.$router.push("/");
      } else {
        this.pending = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.auth-wrap {
  background: #d08cd8;
  min-height: 100vh;
  .left-side {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      color: #fff;
      font-size: calc(1vw + 1vh);
      font-weight: bold;
      line-height: 5vh;
      span {
        font-size: calc(2vw + 2vh);
        font-weight: bolder;
      }
    }
    img {
      width: 75%;
    }
  }
  .right-side {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    .v-sheet.v-card {
      box-shadow: none !important;
      width: 80%;
      margin: calc(1vw + 1vh) auto;
      p {
        margin-bottom: 0 !important;
        color: #707070;
        &.network {
          color: #602167;
          font-size: 0.85rem;
          margin-bottom: 0.5rem !important;
        }
      }
    }
    .v-text-field__details {
      display: none !important;
    }
    .v-tab {
      color: #602167;
      font-weight: bold;
      text-transform: none;
    }
    .v-tabs-slider-wrapper {
      height: 3px !important;
      background-color: #602167;
      color: #602167;
      border-radius: 5px;
    }
    .v-slide-group__content {
      justify-content: center;
    }
    a,
    h6 {
      color: #602167;
    }
    h6 {
      position: relative;
      &:before {
        position: absolute;
        top: 50%;
        left: -3%;
        content: "";
        width: 50%;
        background: #707070;
        height: 0.5px;
      }
      &:after {
        position: absolute;
        top: 50%;
        right: -3%;
        content: "";
        width: 50%;
        background: #707070;
        height: 0.5px;
      }
    }
    .icon-bg {
      width: 50px;
      height: 50px;
      background: #fff;
      border-radius: 50%;
      box-shadow: 0px 2px 2px #70707071;
      line-height: 50px;
      img {
        width: 35px;
        height: 35px;
      }
      &:first-child {
        img {
          width: 25px;
          height: 25px;
        }
      }
    }
    .v-btn {
      width: 50%;
      height: 45px;
    }
  }
}
</style>