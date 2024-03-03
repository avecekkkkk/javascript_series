const score = 100;  //This is the basic define of variable
console.log(score);  //Output : `100`

const balance = new Number(400);
console.log(balance); //Output : `[Number: 400]`

//Converting Number into String using the Number Object Method, In total there are 7 method.
// 1: toString()
console.log(balance.toString()); // Output : `400` Which is string and since it converted into string we can use the string method too

console.log(balance.toString().length); //Output : `3`

// 2: toFixed
console.log(balance.toFixed(3)); // Output: `400.000`

// 3: toPrecision
const otherNumber = 123.9860;
console.log(otherNumber.toPrecision(2)); //Output : `1.2e+2`
console.log(otherNumber.toPrecision(3)); //Output : `124`
console.log(otherNumber.toPrecision(4)); //Output : `124.0`

const otherNum = 124.2308;
console.log(otherNum.toPrecision(3)); //Output : `124`

// 4: toLocaleString

const amount = 1000000;
console.log(amount.toLocaleString()); //Output : `1,000,000`
console.log(amount.toLocaleString('en-IN')); //Output : `10,00,000`


//+++++++++++++++++++++++++++++++++++++++++ MATH ++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math); //Output: Object [Math] {}

console.log(Math.abs(-6)); //Output : `6`
console.log(Math.round(2.45)); // Output : `2`
console.log(Math.ceil(2.45)); //Output : `3`
console.log(Math.floor(2.98)); //Output : `2`
console.log(Math.max(2, 4 ,5 ,6)); //Output : `6`

console.log(Math.random()); //Output: Any random value Range From 0 to 1

console.log(Math.random() * 10 + 1);
const min = 23;
const max = 32;

console.log(Math.random() * (max-min) + 23); // now it generate the random value from 23 to 32

//what if we dont need the decimal value
console.log(Math.floor(Math.random() * (max-min) + 23));
