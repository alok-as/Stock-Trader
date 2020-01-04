import Home from "./components/Home.vue";

const Portfolio= resolve=>{
    require.ensure(["./components/Portfolio/Portfolio.vue"],()=>{
        resolve(require("./components/Portfolio/Portfolio.vue")); 
    });
}

const Stocks= resolve=>{
    require.ensure(["./components/Stocks/Stocks.vue"],()=>{
        resolve(require("./components/Stocks/Stocks.vue")); 
    });
}

export const routes=[
    {path:"",component:Home},
    {path:"/portfolio",component:Portfolio},
    {path:"/stocks",component:Stocks},
    {path:"*",redirect:"/"}
]
