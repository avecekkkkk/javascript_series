//console.log( 2>1);
// console.log(2<1);
// console.log(2>=1);
// console.log(2==1);
// console.log(2<=1);
//The code above is the comparison of the number where there is no such rule or  exception

console.log("2" > 1); //true
console.log("02" > 1); //true "The reason behind it output says as true is that it convert the first operand string into number"

//Null Comparison
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true the reason behind it true output is that js coerce `null` to `+0` in numeric comparison and since 
// `null` is not less than `0` , the comparison `null >= 0` result in `true`.

//Undefined Comparison
console.log(undefined == 0); //false
console.log(undefined > 0);//false
console.log(undefined < 0); //false

//Strict Comparison ===
console.log("2" === 2); //false