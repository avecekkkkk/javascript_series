const myArr = [0, 1, 2, 3, 4, 5]
const heroes =["superman", "spiderman"]

const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[1]);

//Array Method
myArr.push(6,7);
console.log(myArr); //output: [0,1,2,3,4,5,6,7]
myArr.pop();
console.log(myArr); //output: [0,1,2,3,4,5,6]

myArr.unshift(9);
console.log(myArr); ////output: [9,0,1,2,3,4,5,6]

myArr.shift();
console.log(myArr); //output: [0,1,2,3,4,5,6]

console.log(myArr.includes(9)); //output : false
console.log(myArr.indexOf(10)); //output : -1 which mean there is no vlaue in index 10 or non existance of index 10
console.log(myArr.indexOf(4)); //output: 4

const newarr = myArr.join();
console.log(newarr); //output : 0,1,2,3,4,5,6 in string form
console.log(typeof newarr); //output: string

//Slice and Splice

console.log("A ", myArr); //output: A [0,1,2,3,4,5,6]
const mynewarr1 = myArr.slice(1, 3);
console.log(mynewarr1); //output: [ 1, 2 ]

console.log("B ", myArr); //output: A [0,1,2,3,4,5,6]
const mynewarr2 = myArr.splice(1, 3);
console.log("c ", myArr);
console.log(mynewarr2);