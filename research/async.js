let stocks = {
    fruits: [`strawberry`, `grapes`, `banana`, `apple`],
    liquid: [`water`, `ice`],
    holder: [`cone`, `cup`, `stick`],
    toppings: [`chocolate`, `peanuts`],
};
let isShopOpen = true;
let order = (time, work) => {
    return new Promise ((resolve, reject) => {
        if (isShopOpen){
            setTimeout (() =>{
                resolve(work())
            }, time)
        }
        else {
            reject(console.log(`our shop is closed`))
        }
            })
        };
        order(2000, ()=>console.log(`${stocks.fruits[0]}was selected`))
        
        .then(()=>{
            return order(0000,()=>console.log(`production has started`))
        })
//step 3
.then(()=>{
    return order(2000,()=>console.log(`fruits has been chopped`))
})
//step 4
.then(()=>{
    return order(1000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
    })
    //step 5
    .then(()=>{
        return order(1000,()=>console.log(`start the machine`))
})
//step 6
.then(()=>{
    return order(2000,()=>console.log(`ice cream placed on ${stocks.holder[1]}`))
})
//step 7
.then(()=>{
    return order(3000,()=>console.log(`${stocks.toppings[0]} as toppings`))
})
//step 8
.then(()=>{
    return order(2000,()=>console.log(`serve ice cream`))
})
.catch(()=>{
    console.log(`customer left`)
})
.finally(()=>{
    console.log(`end of day`)
})
