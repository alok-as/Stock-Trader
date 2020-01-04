<template>
    <div class="stock">
        <div class="header">
            <span class="title">{{stock.name}}</span>
            <span class="price">(Price: {{stock.price}})</span>
        </div>
        <div class="body">
            <input type="number" placeholder="Quantity" v-model="quantity">
            <button class="buy" @click="buyStock" :disabled="quantity<=0 || Number.isInteger(quantity)">BUY</button>
        </div>
    </div>
</template>

<script>
export default {
    props:["stock"],
    data(){
        return{
            quantity:0
        }
    },
    methods:{
        buyStock(){
            const order={
                stockID:this.stock.id,
                stockPrice:this.stock.price,
                stockQuantity:this.quantity
            };
            console.log(order);
            this.quantity=0;
        }
    }
}
</script>

<style scoped>
.stock{
    border: 1px solid black;
}

.stock .header{
    background-color:var(--primaryBg);
    padding: 0.2rem 1rem;
    border-bottom: 1px solid black;
    color:white;
    display: flex;
    justify-content: space-between;
    align-items: center;
} 

.stock .header .title{
    font-weight: 500;
}

.stock .header .price{
    font-size: 0.8rem;
}



.stock .body{
    padding: 1rem 2rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 2rem;
}

.stock .body input,
.stock .body button{
    font-family: var(--primaryFont);
}

.stock .body input{
    padding: 0.3rem 0.6rem;
}

.stock .body button{
    color: white;
    background-color: var(--primaryBg);
    outline: none;
    border: none;
    font-size: 0.8rem;
    letter-spacing: 2px;
    cursor: pointer;
}

.stock .body button:disabled{
    opacity: 0.6;
}

</style>