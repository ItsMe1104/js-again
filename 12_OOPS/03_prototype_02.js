//1) Understanding prototype

let myName = "Hrithik"
console.log(myName.length);   //7
// '.length' property will give the total length of the string
// since .length property was by default present at the prototype of String which we could access using '.'


let myName2 = "Hrithik    "
console.log(myName2.length);    //11

//Can we create some function() in the prototype, so that we can find the true length of the string, neglecting the white spaces?
//It can be done using .trim().length
console.log(myName2.trim().length);

//But we want to build our own functionality which should work for all strings




//1) Starting with  objects

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    spidyPower : function () {

        //using this.spiderman, to let inner function know it is talking about outer function's spiderman property
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


//How to add some property/function in the prototype of an Object, such that when any object is declared, it should have that property

// declare a property/function in the Object prototype itself

Object.prototype.Hrithik = function () {
    console.log("Hrithik is present in all objects");
}


//Now every object will have the Hrithik() by default
console.log("\nFrom''heroPower' Object :-");
heroPower.Hrithik();


// a) Even the newly created Objects will have this Hrithik()

let abc = {
    abcd : 123,
    2345 : 789
}

console.log("From 'abc' Object :-");
abc.Hrithik();     //Hrithik() is accessible by abc



// b) Even all the Arrays, Strings, Functions, and every data type (number, boolean, etc) will have this Hrithik()
// This is because Hrithik() has been declared in Object's prototype which is the parent of all data types, whether primitive or non primitive


let num1 = 12;     //Number
console.log("\nFrom num1 'number' :-");
num1.Hrithik();    // will work


let num2 = new Number(12);
console.log("From num2 'Number' :-");
num2.Hrithik()      //will work


let bool1 = true;
console.log("From bool1 'Boolean' :-");
bool1.Hrithik();


let arr1 = [1,2,"abcd", 3];
console.log("From arr1 'Array' :-");
arr1.Hrithik();


let func1 = function(){
    console.log("Hello");
}
console.log("\nFrom func1 'Function' :-");
func1.Hrithik();


console.log("From String :-");
"I am String".Hrithik();



//Hence any function/property, we define inside the prototype of the parent will also be accessible by the child



//******************************************************************************************************************************************************************************************************************************* */


//Can any function/property, we define inside the prototype of the child be accessible by the parent?
// ===> NO



Array.prototype.Ritzz = function () {
    console.log("\n\nI am from Array prototype");
}

const arr2 = [1,2,3,4,5]

const obj2 = {
    1:2,
    3:4
}

console.log("From arr2 'Array' :-");
arr2.Ritzz();    //will work

// obj.Ritzz();   
//wont work as Objct is the parent of Array, hence Object cannot access the properties/functions defined in Array



//************************************************************************************************************************************************************************************************************************************************************************************* */

//3) Inheritance


// a) Outdated Approach

//If we want that the properties of some object are also inherited by some other object then,
//use the property of '__proto__' from the prototype property of the object in which we want to inherit

// Syntax :-
// -->   __proto__ = parent_class_name

//Either declare it within the child object itself or outside the child object

console.log("\n\nPrototypal inheritance :-");


const User = {
    name : "Hrithik",
    email : "Hrithik@abc.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TA_Support = {
    makeAssignment : "JS assignment",
    fulltime : true,

    //inheriting the properties of TeachingSupport object
    __proto__ : TeachingSupport
}

console.log("From TASupport :-",TA_Support.isAvailable);



//Accessing Teacher object's properties into TeachingSupport object

TeachingSupport.__proto__ = Teacher;
console.log("From TeachingSupport :-",TeachingSupport.makeVideo);





// b) Modern Syntax
//Use 'Object.setPrototypeOf( child_object, parent_object )'


//Teacher object inheriting the properties of User
Object.setPrototypeOf(Teacher, User);

console.log("From Teacher :-", Teacher.name);


//This prototypal inheritance is used behind the scenes for inheritance purpose inside classes in JS using 'extends'




//******************************************************************************************************************************************************************************************************************************* */


//Defining a trueLength() method for every string

const str1 = "Hrithik Shaw     ";

String.prototype.trueLength = function(){
    
    //this = current context i.e current string itself
    //jisne call kiya wahi "this" hai
    console.log("\n",this);    //will print current string which called this methhod
    
    console.log(`True Length is : ${this.trim().length}`);
}

console.log("\n\nLength of string 'str1' :-", str1.length);

//TrueLength of str1
str1.trueLength();



//Will work on every string from now onwards :-
"Hello Everyone".trueLength();

"iceTea".trueLength();