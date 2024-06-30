const user = {
    username: "avecek",
    age: 25,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to heaven`);
        console.log(this);
    }
}
user.welcomemessage() //avecek, welcome to heaven
user.username = "wolves"
user.welcomemessage() //wolves, welcome to heaven
console.log(this); //output : {}
// this : refer to the current context

function chai(){
    let username = "aveceeeekk"
    console.log(this.username);
}
chai() //undefined , inside function 'this' cannot run it shows as undefined but only be using in object.

const coffee = function(){
    let username = "avecekkkk"
    console.log(this.username);
}
coffee() //Undefined

const latte = () => {
    let username = "avecekkkk"
    console.log(this.username);
}
latte(); //undefined
///////////////////////////////////// EXPLICIT RETURN

const addtwo = (num1, num2) => {
     return num1 + num2
}
console.log(addtwo(3,5)); //8
/////////////////////////////

const sub = (num3 , num4) =>{
    return num3-num4
}
console.log(sub(6,3)); //3  if we use the curly braces we need to use return keyword to return the value but howerver if we want to use bracket we dont need to use return keyword
//////////////////////////////////

//IMPLICIT RETURN
const value = (num1,num2) => num1+num2
console.log(value(3,5)); //8

//OBJECT RETURN

const context = (val1,val2) => ({username:" avecek"})
console.log(context(3,5)); //OUTPUT : { username: ' avecek' }