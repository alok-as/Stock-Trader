<template>
    <div class="header">
        <div class="brand"><router-link to="/">Stock Trader</router-link></div>
        <nav class="left-links">
            <ul>
                <li><router-link to="/portfolio">Portfolio</router-link></li>
                <li><router-link to="/stocks">Stocks</router-link></li>
            </ul>
        </nav>
        <nav class="right-links">
            <li><a href="#">End Day</a></li>
            <li>
                <a href="#">Save & Load</a>
            </li>
        </nav>
    </div>
</template>


<script>
export default {
    
}
</script>

<style scoped>
.header{
    background-color: var(--primaryBg);
    padding: 1.2rem;
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}    

.brand{
    font-size: 1.4rem;
    font-weight: 600;
}

.brand a{
    text-decoration: none;
    color: var(--primaryColor); 
}


/* General Nav Links Styling  */
nav li {
    list-style: none;
    display: inline-block;
    margin-right: 1.2rem;
}

nav li  a{
    text-decoration: none;
    color: var(--primaryColor); 
    font-size: 1rem;
    font-weight: 500;
}


</style>