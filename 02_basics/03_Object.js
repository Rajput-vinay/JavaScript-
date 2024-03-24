// singleton
// Object.create  // consturctor method

//  object literals
// object -> key value for

const mySum = Symbol("keys1")

const JsUser = {
    name:"Vinay", 
    "full name": "Vinay Rajput",
    [mySum]:"mykey1",  // access the symbol 
    age : 20,
    location:"Jaipur",
    email:"vinayr@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.name)  // way to fetch the object value with the dot notation
// console.log(JsUser["name"]) // second way to fetch the object value with square bracket 
// console.log(JsUser["full name"])
// console.log(JsUser[mySum])



JsUser.email = "vinayrajput@chatgpt.com",
// Object.freeze(JsUser)   // after doing a freeze we do not change value again or after while doing freeze the value

JsUser.email = "vinayrajput@microrsoft.com"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello Js User")
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())


