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

//**************************** Function Object************************

function CalculateCartprice(...num1){ // `...is the rest operator that take the all argument and in some case it also known as spreader
    return num1;
}

//CalculateCartprice(100, 200, 300); Only Print Out 200 as output

console.log(CalculateCartprice(200, 300, 400)); //Output : [ 200, 300, 400 ]

const objectuser = {
    usrname: "avecek",
    age: 20
}

function object(anyobject){
    return(`Username is ${anyobject.usrname} and age is ${anyobject.age}`)
}


console.log(object(objectuser)); // must pass object as argument
//we can also pass an value via object
// object(objectuser{
//     usrname: "aveekkkk",
//     age :23
// })

const MynewArray = [100, 300, 400];
function thisarray(newarray){
   return newarray[2]
}


//console.log(thisarray(MynewArray)); //400
console.log(thisarray([200, 400, 600]));

