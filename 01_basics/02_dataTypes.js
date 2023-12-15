"use strict";     //treat all JS code as newer vrsion

// alert(3+3)   //we are using node js not browser

console.log( 3
    +
    3
    );    //very bad practice -> code readability should be high

//DOCUMENTATION --> tc39.es or mdn

////PRIMITIVE
let name = "hrithik"   //string ("" or '')
let age = 18   //Number (range => 2^53)
//bigint
//boolean => true/fase
//null => standalone value  (representation of empty value) 
let n = null;
//undefined => when we didnt specify a value for a variable
//symbol => uniqueness


////NON_PRIMITIVE
//object


//typeof operator
console.log(typeof "hrithik");
console.log(typeof age);
console.log(typeof null);   //object
console.log(typeof undefined);   //undefined
