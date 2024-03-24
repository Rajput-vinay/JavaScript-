//  arrays
// array in javascript we perform copy operation they make a shallow copy
//  shallow copy of an object whose properities share the same reference(means change in same memory location)

//  Deep copy of an copy whose properities are not share the same reference(means change not in same memory location and change in copy)4


const myArr = [2,1,2,4,5,9]
const myHeroes = ["Shaktiman","naagraj"]
const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0]);

//  Array Method

// myArr.push(6);
// myArr.push(7);
// myArr.pop()


// myArr.unshift(9)  // unshift se array me starting me add karka hai  
// myArr.shift()

// console.log(myArr.includes(9))  // result boolean type
// console.log(myArr.indexOf(9))// result boolean type

// const newArr = myArr.join() // join se array string me convert hota hai
// console.log(typeof newArr)
// console.log(myArr);



//slice , spice

console.log("A ", myArr)
const myn1 = myArr.slice(1,3)  // print the output from index 1 and index 2 but the can't take index 3 index 3 ignore. they not include the last range
console.log(myn1)
console.log("B" , myArr)

const myn2 = myArr.splice(1,3) // print the output from index 1 and index 2 and index 3 they include the range 
console.log("c" , myArr)
console.log(myn2)