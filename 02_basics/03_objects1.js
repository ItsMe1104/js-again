// OBJECTS IN JS

// 1)Objects in JS can be declared using 
//a) Literals
//b) Constructors

//When we make objects from constructors then the object created is singleton i.e one of its kind
//Object.create()

//When we create objects using literals then its multiple instances are made and hence its not singleton

//data is in the form of keys and values
//An array is also an object in JS with its by default key is its indexes


//In objects we dont need to define quotes for keys even if they are strings because JS by default understands it

//a value can be any data type including objects

//Object Literals
const JsUser = {
    name: "Hitesh",
    age : 18,
    location : "Howrah",
    email : "hrithik@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    company : {
        comp_name : "Google",
        id : 36
    }
} 




//2) Accessing values of specific keys inside objects :-
//There are two ways
//Use dot "." or use brackets []


//Using dot --> "."
console.log("\n\nEmail of JsUser from its object using dot '.' :-\n",JsUser.email);

//Using brackets []
//note here we cannot directly give the keys in strings but we have to give them under quotes

// console.log(Jsuser[email]);  will give error
console.log("\nEmail of JsUser from its object using bracket [] :-\n",JsUser["email"]);



//3) dot vs brackets for accessing

//a) Accessing keys with spaces in their names
//with dot '.' we can never access keys with spaces in their name
//but with brackets [] we can
//Note we also have to give quotes for keys with spaces in their names

const JsUser2 = {
    name : "Hrithik",
    "full name" : "Hrithik Shaw"
} 

// console.log(JsUser2."full name");   //gives error

// console.log(JsUser2.full name);   //gives error

console.log("\n\nAccessing 'full name' from JsUser2 object using brackets [] :-\n", JsUser2["full name"]);



//b) Using symbols as keys inside objects