const myNums = [1,2,3]

// const myTotal =myNums.reduce(function (acc,currval){
    
//     console.log(`acc: ${acc} and currval:${currval}`)
//     return acc + currval
// },0)


const myTotal = myNums.reduce((acc,currval)=>(acc+currval),0)
// console.log(myTotal);


const shoppingCart = [
    {
        itemName:"js Course",
        price:"255"
    },
    {
        itemName:"cpp Course",
        price:"555"
    },
    {
        itemName:"Python",
        price:"999"
    },
    {
        itemName:"mobile Development",
        price:"1599"
    },
]

const priceToPay = shoppingCart.reduce((acc,item) => (acc + item.price),0)
console.log(priceToPay);