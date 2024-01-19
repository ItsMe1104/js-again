// Nullish Coalescing Operator (??) :-
// null & undefined keywords are to be looked after
//Its a fallback to handle errors
// We use ?? between two or more values and whichever value from LHS is not null and not undefined is assigned to the variable
// mostly used in firebase, appwrite, database where two response cme together out of which one can be null or undefined response
//Instead of direct values we use values returned by functions
// val1 = func1() ?? func2()
// val1 = func1() ?? func1()

console.log("\nUsing Nullish coalescence to find values of val1 among :- ");

let val1;
val1 = 5 ?? 10;     //5 is the first value from LHS which is not null or undefined
console.log("5 ?? 10 :-",val1);

val1 = null ?? 10;     //10 is the first value from LHS which is not null or undefined
console.log("null ?? 10 :-",val1);

val1 = undefined ?? 15;     //15 is the first value from LHS which is not null or undefined
console.log("undefined ?? 15 :-",val1);

val1 = null ?? 15 ?? 10;    // 15 is the first value from LHS which is not null or undefined
console.log("null ?? 15 ?? 10 :-",val1);





//2) Ternary operator :- Another version of if-else
// Syntax :-  (condition) ? true : false;
// According to condition, true or false statement will be returned
// Note: true always LHS, false always RHS

console.log("\n\n2) Using Ternary Operator to check the price of iceTea :-");

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("more than 80") ;
//hence the false statement side is executed




//3) Using ternary operator to assign values to a variable

console.log("\n\n3) Assigning the price of mango or apple to our fruit");

const mango = 40;
const apple = 70;

const fruit = mango >= 50 ? mango : apple;
console.log("The price of fruit is :-", fruit);    //apple's price

