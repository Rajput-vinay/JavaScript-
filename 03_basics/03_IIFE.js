// Immediately Invoked Function Expression (IIFE)

//  IIFE: jo function immediately execute hojaye 
//  golbal scope se pollution hoti hai kai baar us pollution or global declaration ko remove karne ke liya IIFE ka use kiya


(function chai(){
    console.log(`DB Connected`);
})()

// use ; to revoke or simply say the stop the function execution so we used the ; at the end of the IIFF statement


//  arrow function

((name)=>{
    console.log(`DB Connected two ${name}`)
})('hitesh');