import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import {
  BootstrapVue,
  BootstrapVueIcons
} from 'bootstrap-vue'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "@/assets/scss/fonts/css/all.css";
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "@/assets/scss/main.scss";
import "@/assets/js/custom.js";
import Vuelidate from 'vuelidate'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost/sahla/public/api/'

Vue.use(Vuelidate)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");