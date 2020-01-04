<template>
    <div class="stocks">
        <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
    </div>
</template>


<script>
import Stock from "./Stock";

export default {
    components:{
        "app-stock":Stock
    },
    computed:{
        stocks(){
            return this.$store.getters.stocks;
        }
    }
}

</script>

<style scoped>
.stocks{
    padding: 0 1.2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
}
</style>