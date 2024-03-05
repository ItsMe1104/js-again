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



//constructor functions :-

const promiseOne = new Promise();
const date = new Date();

