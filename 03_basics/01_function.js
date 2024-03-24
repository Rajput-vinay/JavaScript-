

// function

function sayMyName(){
    console.log("vinay")
}

// sayMyName();

// function AddTwoNumber(number1,number2){
//     console.log( number1 + number2);
// }

function AddTwoNumber(number1,number2){
    //    let result = number1 +number2
    //    return result
    
    
    return number1 + number2
    }
const result = AddTwoNumber(5,5)
// console.log("Result value :",result)

function loginUserMessage (username = "sam"){
if(!username){
    console.log("Please enter a username")
    return
}

    return `${username} just logged in`
}
// console.log(loginUserMessage("ram"))
// console.log(loginUserMessage())  // if we are not passed any value it return undefined



// function calculateCartPrice(...num1){   // ... rest operator or spread operator are same syntax it is based on used case
// return num1
// }


function calculateCartPrice(val1,val2,...num1){   // ... rest operator or spread operator are same syntax it is based on used case
return num1
}
// console.log(calculateCartPrice(2,200,400,500,2585))



const user ={
    username :"hitesh",
    price:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)

handleObject({
    username:"sam",
    price:399
})


const myNewArray =[200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))


console.log(returnSecondValue([200,400,500,900]))