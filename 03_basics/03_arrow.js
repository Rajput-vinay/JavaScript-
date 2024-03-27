const user = {
    username:"hitesh",
    price:999,

    welcomeMessage: function(){ 
         console.log(`${this.username}, welcome to website`) // this means to refer a current context
             console.log(this)
        }
}

// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()

// console.log(this)  //return the empty object

//  window ke ander gobal function  window object hai



// function chai (){
//     let username = "vinay"
//     console.log(this)
// }

// chai();

const chai = ()=>{
    let username = "vinay"
    console.log(this)
}

// chai()

// const addTwo=(num1,num2)=>{
//     return num1 + num2
// }

// console.log(addTwo(2,3))


// const addTwo=(num1,num2)=> num1 + num2
// const addTwo=(num1,num2)=> (num1 + num2) // use curly bracket we used return keyword  but in simple bracket we not used return keyword 
const addTwo = (num1,num2)=>({username:"hitesh"});  // way to return the array 
console.log(addTwo(2,3))



