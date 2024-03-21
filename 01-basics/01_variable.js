

const accountId = 144553
let accountEmail = "hitesh@gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let accountState;   // print undefined
// accountId = 2   // not allowed

accountEmail = "hc@gmail.com"
accountPassword="21354"
accountCity="Bangaluru"
console.log(accountId);


/*

Prefer not to use var

because of issue in block scope and functional scope

*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])