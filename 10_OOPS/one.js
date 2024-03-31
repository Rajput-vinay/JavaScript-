// const user ={
//     username:"vinay",
//     loginCount: 8,
//     signedIn:true,

//     getUserDetails:function(){
//         // console.log("got user details from database")
//         // console.log(`username :${this.username}`)
//         console.log(this)
//     }
// }
// //  whenever we used this keyword its means we talk the current instance
// const {username} = user
// console.log(user.username)
// console.log({username})
// console.log(user.getUserDetails())
// console.log(this)



function user(username,loginCount,isLoggedIn){
    this.username = username,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn,

    this.greeting = function(){
        console.log(`
        welcome ${this.username}`)
    }
    return this
}

// without uses of new keyword they overwrite the value

// const userOne = user("vinay",12,true)
// const usertwo = user("Chaiaurcode",11,false)

// 4. with uses of new keyword they create a new instances 
// 3. when we use new keyword firstly create new empty object is called a instances
// 2. constructor function call because of new keyword
// 1. this keyword ke ander sabhi argument inject ho jate hai

const userOne =new user("vinay",12,true)
const usertwo =new user("Chaiaurcode",11,false)
// console.log(userOne)
console.log(userOne.constructor)