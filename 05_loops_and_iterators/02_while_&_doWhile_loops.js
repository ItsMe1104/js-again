//1) while loop :-

//It is an entry controlled loop
//i.e we first check the condition then we execute the lines in that iteration just like in for loop

/*Syntax 

    while (condition) 
    {
        ...
    }

*/

// The initialization phase is always declared outside the while-loop scope
// the condition phase is in the parantheses of while loop
// the increment decrement phase should always be done inside the while loop else we will get stuck in an infinite loop
// In case our terminal gets stuck in an infinite loop, use Ctrl + C to terminate it.
// Both break and continue statements can be used in while loop

console.log("\n1) Printing multiples of 2 from 2 to 10 using while-loop :-");

let i = 2;                //Initialization phase
while(i <= 10)             //Condition phase
{
    console.log(i);
    i = i + 2;            //Incrememnt / Decrement phase
}




// 2) Applying while-loops on arrays :-
// We will again loop on indexes to access the elements of array

console.log("\n\n2) Printing all the elements of heroes array using while-loop :-");

let heroes = ["flash", "batman", "superman", "aquaman"];
// console.log(heroes.length); 

let j = 0;
while(j < heroes.length)
{
    console.log(`Element is ${heroes[j]}`);
    j++;
}





// 3) do-while loop
// It is an exit controlled loop
// i.e first it executes its block of code, then it goes to the checking phase for each iteration
// Due to this nature no matter what the condition is , it will always run for atleast one time brfore termination through condition phase.
// This nature is useful for making games where the game runs for first time automatically and then asks the user if he/she wants to continue playing or not

/*
Syntax :-

do {
   ... 
} while (condition);

*/

// The initialization phase is always declared outside the do-while loop scope
// the condition phase is in the parantheses of do-while loop
// the increment decrement phase should always be done inside the do-while loop else we will get stuck in an infinite loop
// Both break and continue statements can be used in do-while loop

console.log("\n\n3) Printing multiples of 2 from 2 to 10 using do-while loop :-");

let score = 2;
do{
    console.log(score);
    score = score + 2;
}while(score <=10)




//Exception case in do-while loop
console.log("\nException case in do-while loop when it runs for first time even if condition is false :-");

let score2 = 11;
do{
    console.log(score2);
    score2 = score2 + 2;
}while(score2 <=10)