//With literal Object we cannot create a singleton object but can be possible with constructor object
const mysym = Symbol("key1");
const jsuser = {
    name: "avecek",
    age : 21,
    [mysym] : "mykey2",
    location : "jhapa",
    email: "avecek.google.com",
    isloggedIn: false,
    lastLoggedIn : ["sunday", "Monday"]

}

console.log(jsuser.email);
console.log(jsuser["name"]);
console.log(jsuser.mysym); //output :mykey2 as string not object
console.log(typeof jsuser.mysym); //string
console.log(jsuser[mysym]); //mykey2


jsuser.email = "avecek.chatgpt.com"
//Object.freeze(jsuser);
jsuser.email ="avecek.microsoft.com"
console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello Javascript");
}
console.log(jsuser.greeting());
jsuser.greetingTwo = function(){
    console.log(`Hello JS` ${name});
}
