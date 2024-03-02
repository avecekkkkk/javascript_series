//  Primmitive Types

// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;  //Types: NUmber
const scoreValue = 100.3 //Types: Number
const isLoggedIn = false; // Types : Boolean
const outsideTemp =  null; // Types : Object
let userEmail; //Types: Undefined

const id = Symbol('100'); //Types : Function
const anotherId = Symbol('100');
console.log(id === anotherId);
const BigNumber = 238498302498372842n; //Types: BigInt

// Reference Types (Non-Primitive)

//Array, Object, Function

const heroes = ["Spiderman", "Superman", "Batman"]; //Types: Object

let myidentification = {

    name: "avecek",
    age: 22,
    degree: "Bachelor",

} //Types: Object

const myfunc = function(){
    console.log("Hello world");
}
// Anyfunction typesof called as function which also mean the Object Function
console.log( typeof heroes);
