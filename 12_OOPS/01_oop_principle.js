// Javascript and classes
//In java there is actually no classes
//In 2015 , ES6 introduced classes.
//Js is primarily a prototype based language, and its classes are primarily "syntactic sugar" over existing prototype-based inheritance mechanishms.
// It is not an oops language
//In other words, it provides a more familiar syntax for developers coming from class-based languages like CPP, Java but under the hood it works differently



//OOP :- It is a specific programming paradigm () that is the structure of our code

//Object :- collection of properties(variables) and methods (e.g:- toLowerCase())


//Why use OOP :-
//To avoid messed up sphagetti code


//Components
//a) Object literal
//-> literal means literally

//b) Constructor function
//c) Prototypes
//d) Classes
//e) Instances (new, this)



//4 pillars of OOPs
//a) Abstraction :- Hiding the underlying complexity from user and showing only whats needed (e.g :- fetch())
//b)  Encapsulation :- wrapping up of properties and methods into a single entity
//c) Inheritance :- The process through which child classes can inherit the properties and methods of parent class
//d) Polymorphism :- Poly = many, morphism = forms. It is the ability of a message to be displayed in more than one form. e.g :- console.log("hello") and console.log(4);



//Object Literal :-
// To make an object literally
// This is the base unit unlike in CPP, Java where base unit is class

const user = {
    username : "Hrithik",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function() {
        console.log("Got user details from database");
    }
}

console.log(user.username);
console.log(user.getUserDetails);
console.log(user.getUserDetails());   //undefined, as the function is not returning anything


//this Keyword
// means the current context
// e.g :-

const user2 = {
    username : "Hrithik",

    getUserDetails : function() {
        // console.log(username);   //will give error
        console.log(`Username: ${this.username}`);
    }
}

user2.getUserDetails();  

//Why did it give error?
// as every function has its own execution context, hence the function definition went but inside it there was no username as it was defined outside function

//Hence this.username made the function make sure that it was talking about the current context's username in which it was defined 


//Printing the whole current context
const user3 = {
    username : "Hrithik",

    getUserDetails : function() {
        console.log(this);
    }
}
user3.getUserDetails();  




//Printing global context :-
// In Node, global context is empty object
// In Browser, global context is Window object which is global object





//********************************************************************************************************************************************************************************************************************** */


//Constructor functions :-


// --> this new keyword is the constructor function
// --> It allows us to make multiple instances from same object literal

//e.g :-
// const promiseOne = new Promise();
const date = new Date();



// Using functions without constructor

function User(username, loginCount, isLoggedIn) {
    
    //good convention to use the same name
    //use 'this' to define current context
    //no need of let or const
    //LHS = variable
    //RHS = what we are passing
    
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    //we can create our own function using 'this' 
    this.greetings = () =>{
        console.log(`Welcome Username :- ${this.username}`);
    }

    //passing every variable we have set as a variable
    //even if we don't return this, it by default returns "this" i.e current context only 
    //hence it is implicitly defined
    return this;
}

const user01 = User("abc", 55, true);
//many unwanted key-value pairs will also be printed because of node environment
console.log(user01);   //user01 values correct

const user02 = User("cde", 11, false);
console.log(user02);   //user02 values correct


console.log("\n\nOverwritten user01 :-",user01);  // overwritten with the values of user02


//since we were updating values on the same instance of User function

//Hence, if we don't want this to be overwritten :-
// => we have to create new instances for ach user
// => hence use new keyword to create new instances each time


console.log("\n\nUsing 'new' keyword to create new instances");
const user03 = new User("jkl", 24, false);
console.log(user03);    //user03 values correct
const user04 = new User("mno", 33, true);
console.log(user04);    //user04 values correct

console.log(user03);    //user03 values not overwritten





//Some points about "new" keyword :-
// --> First on using 'new' keyword, an empty object is created called instance 
// --> Constructor function is called because of the "new" keyword which packs the arguments and injects it in our variables
// --> All the arguments we passed, the Constructor function injects it to the current context (this keyword)
// --> we get this context through our function


//printing a functions consturctor :-
// It is referenced to the actual function itself
console.log("\n\nConstructor function of User :-",user03.constructor);




//******************************************************************************************************************************************************************************************************************************************  */

// H.W :- Read abour instanceof Operator 

