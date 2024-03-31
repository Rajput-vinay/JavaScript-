const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log(`Async task is completed`);
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed")
})

// no need to store promise into variable

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log(`Async task 2 is completed`)
        resolve()
    },1000)
}).then(function(){
    console.log(`Promise 2 Consumed`)
})

const  promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai", email:"chai@example"})
    },1000)
})
promiseThree.then(function(user){
console.log(user);
})


const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "hitesh", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or reject"));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;

    if (!error) {
      resolve({ username: "javaScript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

async function getAllUser() {
  try {
    const response = await fetch(`https://jsonplacehoder.typicode.com/user`);
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

getAllUser();



fetch(`https://jsonplacehoder.typicode.com/user`)
.then((response) => {return response.json})
.then((data)=>{
    console.log(data)
})
.catch((e)=>
    console.log(e)
)