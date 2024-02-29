let score = "33"

console.log(typeof score); //string
console.log(typeof(score));//string

let valueInNumber = Number(score);
console.log(typeof valueInNumber); //says output as number

let nextScore = "33abc"
console.log(typeof nextScore); //says output as string

let valueInNumbernext = Number(nextScore); //Conversion into the number
console.log(typeof valueInNumbernext); //says output as number
console.log(valueInNumbernext); //says output as Nan => Not in number

let nullvalue = null;
console.log(typeof nullvalue); //object
let newnull = Number(nullvalue); // conversion
console.log(typeof newnull); //after conversion the null into the number the console output shows a number
console.log(newnull); //says output as 0 in null  case

//Undefined Case

let Undefinedvalue = undefined;
console.log(typeof Undefinedvalue); //output as undefined
let newUndefinedvalue = Number(Undefinedvalue);
console.log(typeof newUndefinedvalue); //output as Number
console.log(newUndefinedvalue); //output as NaN

// "33" => 33
// "33abc" => NaN
// true => 1 , false => 0;

let Quest = "Boolean Conversion with 1"
console.log(Quest);

let isLoggedIn = 1;
let booleanisLoggedIn = Boolean(isLoggedIn);
console.log(booleanisLoggedIn); //output as true

let Quest1 = "Boolean Conversion with Empty String"
console.log(Quest1);

let isString = "";
let booleanisString = Boolean(isString);
console.log(booleanisString); //output as false

//In summary boolena conversion 1 => true 0 => false
// "" => flase "avecek" => true