// const tinderuser = new Object(); //Output : {} Singleton object
// const tinderuser1 = {}; //Output : {} Non-singleton object

const regularuse = {
    email : "avecek@google.com",
    fullname :{
        userfullname : {
                firstname : "avecek",
                lastname : "rajbanshi"
        }
    }
}
console.log(regularuse.fullname); //Output : { userfullname: { firstname: 'avecek', lastname: 'rajbanshi' } }

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = Object.assign({},obj1,obj2);
const obj3 = {...obj1,...obj2}
console.log(obj3);

const blankdata = [
    {
        name: "avecek",
        email: "a@gmail.com"
    },
    {
        name: "hiran",
        email:"h@gmail.com"
    }
]
blankdata[1].email;
const tinder ={
    name: "avecek",
    email: "avecek@gmail.com",
    location: "nepal",
    isloggedin: false
}
console.log(Object.keys(tinder)); //Output: [ 'name', 'email', 'location', 'isloggedin' ] object data are stored in array form which we can access using loop too
console.log(Object.values(tinder));
console.log(tinder.hasOwnProperty('isloggedin')); //true

//****************Object Destructuringo */

const course = {
    coursename : "javascript",
    isntructor : "hitesh sir",
    price: "0"
}

const {coursename} = course;
console.log(coursename);