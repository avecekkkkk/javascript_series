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

// **************************************Operations*****************************************
console.log("String to Number Conversion");

let value = 3;
let negvalue = -value;
console.log(negvalue); //output shows as -3

let str1 = "hello";
let str2 = " world";
let str3 = str1+str2;
console.log(str3); //output shows as "hello world";

console.log("1" + 2); //output shows as 12
console.log(1 + "2"); //output shows as 12
console.log("1" + 2 + 2); //output shows as 122
console.log(1 + 2 + "2") //output shows as 32


//***********************Prefix and Postfix************************** */

let x = 3
let y = x++
console.log(x); //output x shows as 4 and y shows as 3
console.log(y);

let a = 23
let b = ++a
console.log(a); //output a shows as 24 and b shows as 24
console.log(b);
// the fact that whenever there is operator added like "++" before the operand it first increment the value and assigned it to variable
// Whereas in the context of operator added after the operand "b++" then a = b++ & b = 2 ,it first assigned the value of b in to the a which is b = 3 and then increment where it result in a value to 2