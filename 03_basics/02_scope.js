
// var c =300   // never used again
let a = 300

if(true){
    let a = 10
    const b =20
    // console.log("INNER: " , a)
    // var c =30 
}
// console.log(a)
// console.log(b)
// console.log(c)



function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website) // thrown error

    two();
}


// one()



if(true){
    const username ="hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        // console.log(username + website);
    }
//   console.log(website) // thrown error
}

// console.log(username) // thrown error




// +++++++++++++++++++++++++++++++++++++  interesting  +++++++++++++++++++++++++++

console.log(addone(5));  // allow this way
function addone (num){
  return num +1;
}





addTwo(5);   // not allow this way it is called a hoisting
const addTwo = function(num){
    return num +2;
}
