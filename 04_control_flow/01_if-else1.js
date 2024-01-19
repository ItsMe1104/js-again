//Control Flow or logic flow :-
//How the logic will flow based on some conditions


// 1) Conditional operators:-

//a) <      :- less than (2 < 3)
//b) >      :- greater than (4 > 3)
//c) <=     :- less equal to (2 <= 2)
//d) >=     :- greater equal to (3 >= 3)
//e) ==     :- equal to (2 == 2)  or (2 == '2')
//f) !=     :- not equal to (2 != 3) or 
//g) ===    :- strictly equal to (2 === 2)
//h) !==    :- strictly not equal to (2 !== '2')


// Difference between == (abstract equal to ) and === (strict equal to)
// == :- only checks for the value of two sides
// === :- checks both the value as well as the data type

console.log("1) Checking if 2 equal to '2' with == :-", 2 =='2');     //true
console.log("Checking if 2 equal to '2' with === :-", 2 ==='2');     //false




// 2) if statement 
// Syntax is :- if(question/condition){...}
// if the question or the condition returns true then only we can enter the 'if' statement block and execute its lines
// After the 'if' block is over the lines below the block will always be executed.

console.log("\n\n2) Using if statement to check temperature < 50 or not", );

const temperature = 41;
if(temperature < 50)
{
    console.log("Temperature is less than 50.");
}
console.log("if statement over");




// 3) if-else statement 
// Syntax is :- 
/*
if(question/condition)
{...} 
else 
{...}
*/
// if the question or the condition inside the 'if' parantheses returns true then only 'if' block executes its lines otherewise if the condition returns false we will enter the 'else' block and execute the else 
// Only one of the two that is the 'if' or the 'else' block will be executed
// true --> if, false --> else

// After the if and else block is over the lines below the block will always be executed. 

console.log("\n\n3) Using if-else block to check temperature < 50 or not", );

const temperature2 = 53;
if(temperature2 < 50)
{
    console.log("If block got executed :-");
    console.log("Temperature is less than 50.");
}
else
{
    console.log("else block got executed :-");
    console.log("Temperature is greater than 50.");
}
console.log("if-else block over");




//4) Variables outside if-else block that is in global scope can be accessed inside if-block but not vice versa except when the variables inside if block use var keyword

const score = 200;
if(score > 100)
{
    let power = "fly";
    var power2 = "jump";
    console.log("\n\n4) Accessing score, power, power2 from inside 'if' block :-");
    console.log(`The score is ${score} and the powers are :-`,power, power2); 

}

// console.log("Accessing power(let) from outide 'if' block :-",power);  //gives error as not defined

console.log("Accessing power2(var) from outide 'if' block :-",power2);   //runs fine as var has by default global scope




//5) ShortHand if-else block with implicit scope
// Only one line statement can be executed with this shorthand
//No braces required
// If we want to write multiple statements then we have to use comma ',' after eac statement instead of semi colon and the last statement should have semi colon instead of comma. (NOT GOOD INDUSTRY PRACTICE)


console.log("\n\n5) Using shorthand if-else block :-");
const balance = 1000;
if(balance > 1500)
    console.log("balance is greater than 1500.");
else
    console.log("balance is greater than 1500.");



console.log("\n\n6) Using shorthand if-else block with multiple statements :-");

const balance2 = 1200;
if(balance2 > 1200)
    console.log("Inside if-block ") ,
    console.log("balance is greater than 1500.");
    
else
    console.log("Inside else-block ") ,
    console.log("balance is greater than 1500."); 





// 7) if - else if - else block :-
// If we want to create multiple blocks and execute code according to various conditions
// There is only one if, one else , but many else if blocks
// Any one block of the whole if - else if - else block statement is executed according to the true condition
// If multiple else-if conditions are true, then the first true else-if block is executed
// At last if none of the 'if' as well as 'else-if' blocks are executed

/*Syntax :-

if(condition1)
{...}
else if(condition2)
{...}
else
{...}

*/

console.log("\n\n7) Checking balance using the if - else if - else block :-");
const balance3 = 1500;

if(balance3 < 1000)
{
    console.log("Inside if-block :-");
    console.log("Balance is less than 1000.");
}
else if(balance3 < 1200)
{
    console.log("Inside else if block1 :-");
    console.log("Balance is less than 1200");
}
else if(balance3 === 1500)
{
    console.log("Inside else if block2 :-");
    console.log("Balance is equal to 1500");
}
else{
    console.log("Else block2 :-");
    console.log("Balance is greater than 1500");
}