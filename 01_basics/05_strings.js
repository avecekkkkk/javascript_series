const name = "avecek"
const repo = 1;

console.log("my name is " +name + "repo count is" + repo); //this is the standard way to concatinate which is not industalized standard

console.log(`my name is ${name} and my repo count is ${repo}`); //this is the industralized standard practice to used concat which is also called as `string interpolation`

//++++++++++++++++++Object String ++++++++++++++++++++

const userName = new String("avecek");
console.log(userName);

//While running the above code in the web console it shows as this 
// String {'avecek'}
// 0
// : 
// "a"
// 1
// : 
// "v"
// 2
// : 
// "e"
// 3
// : 
// "c"
// 4
// : 
// "e"
// 5
// : 
// "k"
// length
// : 
// 6
// [[Prototype]]
// : 
// String
// [[PrimitiveValue]]
// : 
// "avecek"
console.log(userName[0]); //output shows as `a` since  0 key value is a

//accessing the prototype method of string object
console.log(userName.length); //output shows as 6
console.log(userName.toUpperCase()) //since every prototype method is the function we must include the `()` after the function like 'toUppercase()'
//aslo since the userName variable is a string Object and we changed it to uppercase it doesnt mean the original value changed into upperccase, why? cuz the object use the heap memory which is reference type

console.log(userName.charAt('2')); //output shows as `e`
console.log(userName.indexOf('e')); //output shows as `2`

console.log(userName.substring(0, 3)); //output shows as `ave`

console.log(userName.slice(-4,4));

const anotherstring = "    avecek    ";
console.log(anotherstring); //output shows as `    avecek    `
console.log(anotherstring.trim()); //output shows as `avecek`

const url = "http://avecekbobrajbanshi.com"
console.log(url.replace('bob', '-'));

const newname = "avecekandemail"
console.log(newname.split('e'));

