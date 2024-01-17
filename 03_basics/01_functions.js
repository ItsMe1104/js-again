// function is a keyword in JS 



// 1)
// function_Name :- reference (e.g:- sayMyName)
// function_Name() :- execution (e.g:- sayMyName())

function sayMyName()
{
    console.log("H");
    console.log("R");
    console.log("I");
    console.log("T");
    console.log("H");
    console.log("I");
    console.log("K");
}

console.log("\nReference of sayMyName :-",sayMyName);
console.log("Execution of sayMyName :-");
sayMyName();




//2) function to add two numbers

function addTwoNumbers(number1, number2)
{
    console.log(number1+number2);
}

console.log("\n\nDifferent outputs for different data types in function arguments :-");
addTwoNumbers();    //NaN as both number1 and number2 will be treated as undefined
addTwoNumbers(2,3);     // 5
addTwoNumbers(2,"3");   //23 as both will be treated as string
addTwoNumbers(2,'a');   //2a as both will be treated as string
addTwoNumbers(2,null);  //2 as this is the unexpected behaviour of null



//3) Parameters vs Arguments
/*
    function xyz(a,b)
    {

    }
    
    xyz(c,d);  

    a,b --> parameters   //inside function parantheses
    c,d --> arguments    //during function calls

*/





//4) Storing Value returned by a function in a variable
//Value will only be stored if the function returns a value using 'return keyword'
//No lines after return statement is executed inside a function

let result = addTwoNumbers(5,3);
console.log("\n\nNo value returned by addTwoNumbers(), hence result is :-", result);


//To store in result we have to use return keyword inside the function instead of using console.log()
function add(num1,num2) {
    // Way 1
    // let result = num1 + num2;
    // return result
    // console.log(result);   //unreachable code

    // Way 2
       return num1 + num2;
}

let result2 = add(3,5);
console.log("Value returned by add(3,5) is :-", result2);





// 5) Playing with arguments and parameters
// If some argument is not passed in function call but the function wants it as a parameter then by default function marks that parameter as undefined

function loginUserMessage(username)
{
    return `${username} just logged in`;
}

console.log("\n\nDifferent types of output with different arguments for loginUserMessage() :-");

loginUserMessage("Hrithik");   //  will print nothing as neither we stored it nor we use console.log to print it
console.log(loginUserMessage());      // username parameter will be undefined
console.log(loginUserMessage("Hrithik"));   //username parameter = "Hrithik"



// 6) Putting a check so that the username parameter doesnt go undefined in case there is a function call with no argument

function loginUser(username)
{
    if(username === undefined)
    {
        console.log("Please give a valid name");
        return;
    }
    
    // if(!username)   // "" & undefined :- bydefualt false values
    // {
    //  console.log("Please give a valid name");
    //  return;
    // }

    return `${username} just logged in`;
}

console.log("\n\nValue returned by loginUser() after putting a check for no argumet :-");

console.log("When no argument :-"); 
console.log(loginUser());

console.log("\nWhen argument is 'Hrithik' :-\n", loginUser("Hrithik"));




// 7) Using "Default Parameters" to tackle no argument situation sometimes
// If no argument is provided then the default value becomes the value of the paramater
// If argument is provided then the default value is overwritten with the value of argument passed

function loginUser2(username = "Rihan")
{
    return `${username} just logged in`;
}

console.log("\n\n\nDifferent types of output with different arguments for loginUser2() with default parameters :-");

console.log("\nWhen no argument is given, and the default parameter value is 'Rihan' :-");
console.log(loginUser2());

console.log("When argument is given as 'Hrithik' :-");
console.log(loginUser2("Hrithik"));
