
// interview question
function setUsername (username){
  this.username = username
  console.log("called")
}

function createUser(username, email,password){
    // setUsername(username)
    setUsername.call(this,username)  // call hai jo hamer current executed function kis or function pass kar deta hai
  
    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@feb.com", "123")
console.log(chai)