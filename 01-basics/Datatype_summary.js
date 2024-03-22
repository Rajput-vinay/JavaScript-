//  Primitive

//  7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoaggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)


const bigNumber = 3254895135785n

//  Reference (Non primitive)

//  Array, Objects, Functions


const heros = ["shaktiman", "naagraj", "doga"]

let myObj={
name:"Vinay",
age:22,
}


const myFunction =function (){
    console.log("Hello world")
}


console.log(typeof myFunction)



// ********************************* table datatype **********************************

// Type	            typeof return value	            Object wrapper
// Null	                  "object"	                       N/A
// Undefined	          "undefined"	                   N/A
// Boolean	              "boolean"	                       Boolean
// Number	              "number"	                       Number
// BigInt	              "bigint"	                       BigInt
// String	              "string"	                       String
// Symbol	              "symbol"	                       Symbol