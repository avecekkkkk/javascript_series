function addTwonumber(number1, number2){
    let result = number1 + number2;
    return result;
}
const result = addTwonumber(10,20);
console.log("Result is :", result);

function user(username){
    return `${username} just logged in`;
}
console.log(user("avecek"));

function loggedin(user = "jack"){
    if(!user){
        console.log("Please enter your name");
        return
    }
    return `${user} just logged in`;
}
console.log(loggedin());