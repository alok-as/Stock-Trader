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

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
