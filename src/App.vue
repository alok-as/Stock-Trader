<template>
  <div id="container">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>

import Header from "./components/Header";

export default {
  components:{
    "app-header":Header
  },
  created(){
    this.$store.dispatch("initStocks");
  }    
}

</script>

<style>

#container{
  width: 85%;
  margin: 0 auto;
}

</style>
