//1) this :- tells us about the current context that is current block

//Industry practice
//If we ae inside a context/object and,
//If we want to access any variable or data within the object/context we use the this keyword
const user = {
    username : "Hrithik",
    price : 999,

    welcomeMeasssage : function() {
        // console.log(`\n${username}, welcome to website`);   //correct but not good practice

        console.log(`1) ${this.username}, welcome to website`);
    }
}


user.welcomeMeasssage();

user.username = "Ritzzz";
console.log("\nAfter changing username inside user :-");
user.welcomeMeasssage();



// 2) If we try to print 'this' keyword from inside an object/context then it will print the entire definition of the object/context
//This is because it is referenced to the entire context

console.log("\n\n2) Printing the entire object user2 using 'this' keyword");
const user2 = {
    username : "Rihan",
    price : 1296,

    welcomeMeasssage : function() {
        // console.log(`\n${username}, welcome to website`);   //correct but not good practice

        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user2.welcomeMeasssage();




//3) In NODE environment, under global scope that is not inside any other object or local block scope, 'this' keyword always refers to an empty object
// this --> {}
console.log("\n\n3) In global cope of Node enviroment :-");
console.log("'this' -->",this);





//******************* IMPORTANT FOR INTERVIEW *********** ******************** */
//3) In BROWSER environment, under global scope that is not inside any other object or local block scope, 'this' keyword always refers to the 'Window' object
//this --> Window object {}
//hence we could capture the browser events

//This is because earlier there was only one way to execute JS that is through browser
//The Engine to execute JS was only found inside browsers
//Today we have standalone engines like Node, Dino, Bun




//********************************************************************************************************* */




// 4) 'this' keyword inside function
// Printing 'this' inside a function in a node environment will gives out a global object with many properties like performance, microtasks, etc

console.log("\n\n4) Printing 'this' inside a function func1() :-");
function func1(){
    console.log(this);
}
func1();





// 5) Using 'this' keyword inside a function ,we cannot access other variables of that function unlike in object where we can
// It will show undefined
// this.variable_name --> undefined

console.log("\n\n5) Trying to access username inside function func2() with 'this' keyword gives :-");
function func2(){
    
    let username = "Ram";
    console.log(this.username);
}
func2();





//6) Arrow function :- A new syntax of function
// Dont use the 'function' keyword
// Parameters inside parantheses like earlier
// After parantheses add an arrow
// Rest remains same 
// () => { ... }
//Mostly used in React and loops like forEach(), etc

console.log("\n\n6) Using Arrow function func3() to print username :-");

const func3 = () =>{
    let username = "Shyam";
    console.log(username);
}

func3();




//7) Printing this inside arrow function gives an empty object
// this -> {}

console.log("\n\n7) Printing 'this' inside a function func4() gives :-");

const func4 = ()=>{
    console.log(this);
}
func4();




// 8) Using 'this' keyword inside an arrow function ,we cannot access other variables of that arrow function unlike in object where we can
// It will show undefined
// this.variable_name --> undefined

console.log("\n\n8) Trying to access username inside arrow function func5() with 'this' keyword gives :-");

const func5 = () => {
    let username = "Laxman";
    console.log(this.username);
}
func5();






// 9) Arrow function vs Normal function in terms of 'this' keyword

// a) In both arrow and normal function , accessing variables of that function using 'this' keyword will give undefined value

// b) In arrow function, accessing this keyword directly gives an empty object while in normal function, accessing this keyword directly gives a global object with many properties like performance, microtasks etc.





// **************************************************************************************************************************

// 10) Basic syntaxes of Arrow Function

   console.log("\nBasic syntaxes of Arrow function :-")

// a) Normal syntax :-

    const addTwo = (num1, num2) => {
        console.log(num1 + num2);
    }


// b) Explicit return :-
// we have to explicitly use the return statement to return values from arrow function
// If we use curly braces {} with arrow function then to return something we always need to use 'return' keyword.

    const addTwo2 = (num1, num2) => {
        return num1 + num2;
    }



// c) Implicit return :-
// we can implicitly without using the return statement to return values from arrow function
// The arrow fnction should have a one line command only that is the statement for returning only

    const addTwo3 = (num1, num2) => num1 + num2;
   
    console.log("\n\n10 c)Implicit return on arrow function addTwo3() with arguments (3,5) :-", addTwo3(3,5));


// d) Implicit return with parantheses :-
// Just wrap the one liner return statement within parantheses
//Very useful in React

    const addTwo4 = (num1, num2) => (num1 + num2);

    console.log("\n10 d)Implicit return with parantheses on arrow function addTwo4() with arguments (3,5) :-", addTwo3(3,5));



//Note: Curly braces mei wrap hua toh return keyword likhna padega
// Paranthese mei wrap hua toh return keyword nahi likhna padega



// *********************************************************************************************************************
//IMPORTANT FOR INTERVIEWS :-

//e) We can only return object using Implicit return with parantheses and not simply Implicit return

const addTwo5 = () => {username: "Hrithik Shaw"};

console.log("\n\n10 e) Returning object implicitly WITHOUT parantheses using arrow function addTwo5() gives :-\n",addTwo5());


const addTwo6 = () => ({username: "Hrithik Shaw"})
console.log("\n10 e) Returning object implicitly WITH parantheses using arrow function addTwo6() gives :-\n",addTwo6());