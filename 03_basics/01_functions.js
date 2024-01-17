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

console.log("\n\nDifferent outputs for different data types in function arguments :-\n");
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
