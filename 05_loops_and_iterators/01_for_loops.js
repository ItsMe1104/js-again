// Loops are also called iterators
// When we want to do the same task again and again with minor changes everytime


// 1) For loop
//Syntax :-
/*
for (initialization ; condition ; increment/decrement ) 
{  ...  }

for( let i = 0; i < 10 ; i++ )
{
    ....
}
*/

//The contol flow :-
//a) first starts from initialization phase of iterator (here 'i'), then goes to condition phase(Note: initialization phase is only entered once)
//b) if condition is true then it goes inside the loop to execute its lines between the braces
//c) after all lines are over we go to the increment/decrement phase for the iterator where we increment or decrement the value of the current iterator
//d) Then we again go to the checking phase and if condition is true then it goes inside the loop to execute its lines between the braces again.
//e) After that we again go to the increment/decrement phase and the cycle continues till the condition becomes false
//f) Once the condition is false, we exit from the loop block.


console.log("\n1) Printing numbers 1 to 5 with the help of for loop:-");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}




// 2) Accessibility is same like other block scopes :-
// We can access the variables that are outside the for loop block into the for loop block
// But we cannot access the variables from inside the for loop block outside its scope unless the variables are declared using var keyword.
//Hence if we declare the iterator inside the for loop parantheses, we cannot access its value outside the for loop scope as parantheses are also a part of for loop scope


for (let index = 0; index < 10; index++) {
    const element = index;
}

// console.log(element);      will give error     
// console.log(index);        will give 





//3) Using if-else inside for-loops

console.log("\n\n3) Finding if loop from 0 to 9 reaches number 5 or not :- ");

for (let index = 0; index < 10; index++) 
{
    if(index == 5)
        console.log("Got number 5.");
}



//4) Loops under loops

// For every iteration of the outer loop , the whole inner loop will run
//Remember the inner loop can access the values of outer loop but not vice versa.
//To protect the values of outer loop ,we need to use different variables names in outer and inner loop
// e.g :- iterator name for both outer and inner loops should not be same

console.log("\n\n4) Printing table of all numbers from 1 to 4 using outer and inner loops");
for (let i = 1; i <=4 ; i++) 
{
    console.log(`\nTable of ${i} :-`);
    for (let j = 1; j <=10 ; j++) 
    {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}





//5) Using for loops in Arrays :-
// In arrays if we want to access its values, then we use its indexes
// Hence we will loop on the indexes to get every element of array
// remember indexes range from 0 to size - 1.

// Note:- In JS, there is no outOfBound exception hence if we try to access the nth index of array which is not present then we will get an undefined.

console.log("\n\n5) Printing all the elements of heroes array using for loop");

let heroes = ["flash", "batman", "superman"];
// console.log(heroes.length);       3

for (let i = 0;  i < heroes.length; i++) 
{
    const element = heroes[i];
    console.log(element);    
}





//6) Infinite for loops:-
// if we forgot to give any incrememnt / decrement phase or our condition is such that it can never be false
// Hence, the for loop will run forever and it will consume more and more memory until the program crashes
/*
    
for (let index = 0; index < array.length; index) {
    const element = array[index];  
}

for (let index = 0; index ; index++) {
    const element = array[index];  
}

*/



//7) Break and Continue :-

// a) break :- It is used to terinate the entire loop when it is encountered
// Note:- It is also block specific hence it will only terminate a loop that is in its scope and not the loops outside that scope
// i.e , if break is applied on inner loop then it will terminate only the whole inner loop for that iteration of outer loop but it wont be able to terminate the outer loop
// But if break is applied on outer loop then all the inner loops will also get terminated immediately

//Breaking the loop from 1 to 5 on encountering 3 

console.log("\n\n7 a) Using 'break' to terminate the loop from 1 to 5 on encountering 3");
for (let i = 1; i <= 5; i++) {   
    if(i == 3)
    {
        console.log("Detected 3");
        break;
    }

    console.log(i);
}



// b) continue :- It is used to skip the current iteration at the point where it is encountered and take control flow to the next iteration
// Note:- It is also block specific hence it will only skip the current iteration of that loop that is in its scope and not the loops outside that scope
//But when applied on outer loop, then it will skip the entire inner loops for that iteration of outer loop

console.log("\n\n7 b) Using 'continue' to skip the iteration on encountering 3 in a loop counting squares of 1 to 5 ");
for (let i = 1; i <= 5; i++) {   
    if(i == 3)
    {
        console.log("Detected 3");
        continue;
    }

    let sq = i * i;
    console.log(`${i} * ${i} = ${sq}`);
}

//Hence the square of 3 is not printed as its iteration was skipped.