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
    name: "Hrithik",
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




// *******VERY IMPORTANT FOR INTERVIEW ***********8
//b) Using symbols as keys inside objects

// we can simply declare key-value pair for symbol inside objects just like other data types 

//while accessing with dot '.' we might get the right value for the symbol key 

//But the data type of symbol key will be string and not symbol and the interviewers will not be happy


//Declaring Symbol
const mySym = Symbol("key1");

const JsUser3 = {
    name : "Hrithik",
    "full name" : "Hrithik Shaw",
    mySym : "myKey1"
} 

console.log("\n\nAccessing normal declaration of symbol key's value in object :-",JsUser3.mySym);
console.log("The data type for the same key is string but the key is also string:-", JsUser3);


//Inorder to get the correct syntax we have to :-
// i) while declaring we have to put the symbol key in brackets
// ii) while accessing we have to use brackets [] instead of dot '.'

const JsUser4 = {
    name : "Hrithik",
    "full name" : "Hrithik Shaw",
    [mySym] : "myKey2"
} 

console.log("\nAccessing bracket declaration of symbol key's value in object JsUser4 :-", JsUser4[mySym]);
console.log("The data type for the same value is string but the key is symbol :-\n", JsUser4);




//4)Overwriting values of any key inside the object
//Simply overwrite like we overwrite in variables

JsUser4.name = "Hrithik Kumar Shaw";
console.log("\n\nOverwriting name in JsUser4 object :-\n",JsUser4);




//5) Freezing the object so that no after changes can be made without an error
//Use Object.freeze(obj)

const JsUser5 = {
    name: "Hrithik",
    age : 18,
    location : "Howrah",
    email : "hrithik@gmail.com"
} 

Object.freeze(JsUser5);
JsUser5.age = 23;  //wont update the value of age inside JsUser5 object

console.log("\n\nFreezing UserJs5 from updating its age from 18 to 23 :-\n", JsUser5);




//6) Adding new key-value pairs in object after declaration 

JsUser4.id = 1125;
console.log("\n\nAdding id of JsUser4 :-\n",JsUser4);



//7) Adding function as a key value pair inside object
JsUser4.greetings = function(){
    console.log("Hello");
}
console.log("\n\nAdding function in JsUser4 :-\n",JsUser4);

//running the function in JsUser4
console.log("Running the function inside JsUser4 :-\n",JsUser4.greetings());


//if we dont add parantheses after function name
//function will not execute but its reference will be returned back
console.log("Calling the function without parantheses inside JsUser4 :-\n",JsUser4.greetings);


//'this' keyword is used to reference the current object 
console.log("\n\nCalling greetings2 function from JsUser4 object :-");

JsUser4.greetings2 = function(){
    console.log(`Hello Js User ${this["full name"]}`);
}
console.log(JsUser4.greetings2());




