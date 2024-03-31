// // ES6
// new way
// class User{
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password} abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }


// const chai = new User("chai","chaiaurcode@gmail.com","1235")
// console.log(chai.encryptPassword())
// console.log(chai.changeUsername())


// behind the scene
//old way

function User(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password} abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("Tea","chaiaurcode@gmail.com","1235")
console.log(tea.encryptPassword())
console.log(tea.changeUsername())