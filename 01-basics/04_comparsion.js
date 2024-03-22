// console.log(2 > 1)
// console.log(2>=1);
// console.log(2 < 1);
// console.log(2== 1);
// console.log(2 != 1)
//  no problem

// console.log("2" > 1);  // js automatic convert string into number
// console.log("02" <1)
//  problem with datatype change


// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)  // conversion problem in null  

//  the reason is that an equality check == and comparsions > < >=  <= work differently
//  comparisons convert null to a number, treating it as 0.
//  that's why (3) null >= 0 is true and (1) null>0 is false




// console.log(undefined > 0)
// console.log(undefined == 0)
// console.log(undefined >= 0)


// ===

console.log("2" === 2)