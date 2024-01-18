// IIFE :- Immediately Invoked Function Expression
// Functions that are executed as soon as they are mounted to the stack, these functions are known as Immediately Invoked Function Expressions or IIFEs
//Useful for files having database connection because we want that out database is connected as soon as our file starts


//1) Two reasons to use IIFEs :-

// a) To execute as soon as they are mounted to the stack so that they free up their memory from RAM and the work done by function is executed as early as possible
// e.g Database connection

// b) To avoid pollution from global scope :- Sometimes variables from global scope create problems for variables inside functions




//Solution 1: Immediately call the function just after its declaration/expression

function chai() {
 console.log("DB Connected");   
}
chai();

//With this the first purpose of executing it as soon as possible is served but how to save it from global pollution?



//Solution 2: USE IIFE :- 
// a) wrap the function definition inside parantheses 
// b) immediately use another set of parantheses for function execution
// c) after calling parantheses we must end with semicolon else we will get error

// (function_definition)();
// IIFE can be named or anonymous (without name)


//Named IIFE
(function chai2() 
{
    console.log("DB2 Connected");   
})();            //very important semi colon




//Anonymous IIFE
(function chai3() 
{
    console.log("DB3 Connected");   
})(); 




//2) IIFE in terms of arrow function
(()=>
{
    console.log("DB4 Connected"); 
})();




//3) IIFE with arrow function, parameters and arguments

//normal IIFE with parameters and functions
(function chai4(username) 
{
    console.log(`DB5 Connected ${username}`);   
})("Hrithik"); 



//arrow function IIFE with parameters and functions
((username)=> 
{
    console.log(`DB5 Connected ${username}`);    
})("Rihan"); 




//4) Remember if we want to write two or more IIFEs one after the other, we must close every IIFE with semi colon ';' else we will get and error

/*
(function_declaration1)();
(function_declaration2)();
(function_declaration3)();
*/