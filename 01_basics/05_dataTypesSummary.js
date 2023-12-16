/*
Categorization on
-> Based on how the data types are stored
-> How we can access it 
*/

// Primitive or Non-Primitive(Reference)

/* Primitive
 7 types : String, Number, Boolean, null, undefined, Symbol (to make a vlue unique), BigInt

** THESE ARE ALWAYS PASSED BY VALUES **
*/

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;

//undefined
let userEmail = undefined  //or
let userEmail2;

const id = Symbol("123");
const anotherId = Symbol("123");
//Although they look same but they are different 
console.log(id === anotherId);   //false


const bigNumber = 3456435356353453637;   //will not give accurate value as it goes above 2^53

const bigNumber2 = 3456435356353453637n;    //the "n" at last automatically turns it to bigInt and hence will now give accurate results

console.table([bigNumber,bigNumber2]);



/* Non Primitives (Reference)

    //Array, Objects, Functions
    ** THESE ARE PASSED BY REFERENCES **
*/

//array
const heroes_arr = ["shaktiman", "naagraj","doga"];

//object
const details_obj = {
    name : "Hrithik",
    age : 23,
    adult : true
}
//LHS(properties) -> can be written directly
//RHS(value) -> proper data types rules like "" for string should be applied
//RHS-> can be any other data type like function,array or an object itself


//function
const myFunction = function(){
    console.log("Hello World");
}

// ************************************************
//JS -> statically typed or dynamically typed

//since in JS while declaring a variable we dont need to define the data type hence it is a dynamically typed language
//In JS, we can automatically convert the variable from one data type to another by just changing the value 

let num_to_str = 123;
num_to_str = "Hrithik";



//typeof opearator / function
console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof anotherId);
console.log(typeof userEmail);
console.log(typeof bigNumber);
console.log(typeof bigNumber2);

console.log(typeof outsideTemp);  //object
console.log(typeof heroes_arr);
console.log(typeof details_obj);
console.log(typeof myFunction);  //although returns function but it is actually "object function"

//All non primitive data types return object except function which returns function but it is a function object