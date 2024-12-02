const accountId = "123485930"
let accountmail = "avecek@gmail.com"
var accountpassword = "password123"
accountCity = "Birtamod"

//accountId = "87942749" With Const Keyword once it defined and assigned a value to particular Varibale then it can't be reassigned.
accountmail ="ram@gmail.com"
accountpassword ="pass123"
accountCity = "Birtabazar"

let accountState;

/*
We dont use var because of issue with block scope and functional scope
*/

console.table([accountId, accountmail, accountpassword, accountCity, accountState]);