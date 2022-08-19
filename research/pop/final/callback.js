let stocks = {
    fruits: [`strawberry`, `grapes`, `banana`, `apple`],
    liquids: [`water`, `ice`],
    holder: [`cone`, `cup`, `stick`],
    toppings: [`chocolate`, `peanuts`],
};
let order = (fruit_name, call_production) => {
    setTimeout (function(){
        console.log(`${stocks.fruits[fruit_name]} was selected`);
        call_production();
    }, 2000)
};

let production = () => {
    setTimeout (() => {
        console.log (`production has started`)
        setTimeout(() => {
            console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]}added`)
            setTimeout(()=>{
                console.log(`start the machine`)
                setTimeout(()=>{
                    console.log(`ice cream placed on ${stocks.holder[1]}`)
                    setTimeout(()=>{
                        console.log(`${stocks.toppings[0]} as toppings`)
                            setTimeout(()=>{
                                console.log(`serve ice cream`)
                            },2000)
                        },3000)
                    },2000)
                },1000)
            },1000)
        },2000)
    }
     
order(3, production);



   