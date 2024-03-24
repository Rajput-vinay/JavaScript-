const marvel_heros = ["thor", "IronMan", "spiderman"]
const dc = ["superman", "flash","batman"]


// marvel_heros.push(dc);// In this result show the array inside the array

// console.log(marvel_heros)
// console.log(marvel_heros[3][1]);


// const allHeros = marvel_heros.concat(dc)
// console.log(allHeros)


const all_new_heros =[...marvel_heros, ...dc]  // spead work like a concat
// console.log(all_new_heros);


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)  //flat me sub array ko simple array me convert kar deta hai
console.log(real_another_array)


console.log(Array.isArray("Hitesh"))  // return true or false
console.log(Array.from("hitesh")) // convert the array
console.log(Array.from({name:"hitesh"}))   /// interesting 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))