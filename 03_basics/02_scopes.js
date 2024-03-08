//{} => this is called scope if any variable declared inside the scope it cannot be used outside the scope but var is exception that can be accessed outside the scope which is the problem
let a = 100;
const b = 200;
var c = 400; //as you can see the console print the block sccope varible value not the global

if(true){
    let a =10
    console.log("Inner a :", a); //10
    const b =20
    console.log("Inner b:", b); //20
    var c =30
}
 console.log(a); //100
console.log(b); //200
console.log(c); // 30

function one(){
    const username = "avecek"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website); Output : Error occured because it is out of scope{}
    two() //output : avecek
}
//one() will not execute

if(true){
    const username ="hiran"
    if(username === "hiran"){
        const website = "facebook"
        console.log(username + website); // Execute
    }
    //console.log(website); Error sccoured due to scope
}
//console.log(username); Same goes here

//********************** interesting Scenario ********************
console.log(addone(5)); //Output : 6
function addone(num){
    return num + 1
}

addtwo(100) // Cannot Execute before initialization , [Hoisting scenarios]
const addtwo = function(num){ // expression
    return num + 5
}
