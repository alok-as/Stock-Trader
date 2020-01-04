import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);


// Importing the Modules
import stocks from "./modules/stocks";

export const store = new Vuex.Store({
    modules:{
        stocks
    }
});
