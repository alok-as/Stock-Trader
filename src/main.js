import Vue from 'vue'
import App from './App.vue'


// Using the Vue Router
import VueRouter from "vue-router";
Vue.use(VueRouter);


// Setting Up the Router
import {routes} from "./routes";
const router = new VueRouter({
  routes:routes,
  mode:"history"
});


//Setting up Vuex
import {store} from "./store/store";

new Vue({
  el: '#app',
  router:router,
  store:store,
  render: h => h(App)
})
