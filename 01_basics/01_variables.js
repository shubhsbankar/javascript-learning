const accountId = 122345
let accountEmail = "shubham@gmail.com"
var accountPassword = "12345"

accountCity = "Yavatmal"
let accountState

// accountId = 2 //not allowed

accountEmail = "sb@sb.com"
accountPassword = "123123"
accountCity = "Pune"

let arr = ["Shubham",23,true,function(){console.log("Hi")}];

/*
 var is not preferred to use because of issue of
 block and functional scope.
*/

console.log(accountId)
console.table([accountEmail,accountId,accountPassword,accountState,accountCity]);
console.table(arr)