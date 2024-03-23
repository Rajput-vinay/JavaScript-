const name ="Vinay"
const repoCount = 50

// console.log(name + repoCount + "Value")

//  not used in modern day above syntax

// console.log(`Hello my name is ${name} ans my repo Count is ${repoCount}`)
//  above syntax is used in modern name


const gameName = new String('hitesh') // object string

// console.log(gameName[0])
// console.log(gameName.__proto__)

console.log(gameName.length)  // find out the length of string
console.log(gameName.toUpperCase()) // convert string in uppercase
console.log(gameName.charAt(2))  // find out the character which character are available on that index
console.log(gameName.indexOf('t'))  // find out the index of character

const newString = gameName.substring(0,4) // find out the substring of an string last index are not taken 
console.log(newString)

const anotherString = gameName.slice(-8,4)  // taken substring from the end
console.log(anotherString);

const newStringOne = "  hitesh   "
console.log(newStringOne)
console.log(newString.trim())  // trim remove or ignore the white space from start and end only apply on white space 
const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-')) // replace the %20 to - from the url

console.log(url.includes('sunder')) // check the value are include in the string or not

console.log(gameName.split('-')); // split convert the string into the array