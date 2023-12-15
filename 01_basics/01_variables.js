const accountId = 144553
let accountEmail = "hrithik@google.com"
var accountPassword = "12345"

//without let or var but not recommended
accountCity = "Jaipur";

//if we dont assign value it will be treated as undefined
let accountState;

//const means we cannot change this value
// accountId = 2 will give error as not allowed
console.log(accountId);

/*
//prefer not to use var
because of issue in block scope and functional scope
*/
accountEmail = "abc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.table([accountId,accountEmail,accountPassword,accountCity])
