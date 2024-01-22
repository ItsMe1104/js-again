//1) for-each loop :- A loop that has been injected in the properties of an array
//Most used loop in arrays
/* Syntax :-

     arr_name.forEach(call_back func( item, index, arr ){
        ...
    })
*/
// Callback_function :- A function called inside function parameter. 
// Inside a function parameter, the callback function does'nt require a name
// It can be a normal function or arrow function
// The key as first parameter inside the call_back function parameter takes the form of elements of the array one by one in each iteration
// The index as second parameter inside the callback function paarameter takes the form of element's index one by one
// The arr as third parameter takes the form of whole array for every iteration

console.log("\n1) Printing all the elements of coding array using forEach loop :-");

const coding = [ "js", "ruby", "java", "python", "cpp" ];

//Using normal function
console.log("a) Using normal function :-");
coding.forEach( function(item){
    console.log(item);
})


//Using arrow function :-
console.log("\nb) Using arrow function :-");
coding.forEach((item)=>{
    console.log(item);
})




//2) Defining callback function outside parent function's parameter :-

// If we define the callback function outside the parent function's parameter, then the callback function must have a name so that we can call it from the parent function's parameter
// In such a case we just need to provide the reference of callback function inside the parant function's parameter and we don't need to execute it

console.log("\n\n2) Using the callback() defined outside the forEach() to print elements of coding2 array :-");

const coding2 = [ "js", "ruby", "java", "python", "cpp" ];

function printMe(item)
{
    console.log(item);
}

coding2.forEach(printMe);  //passing only the reference of printMe()
// coding2.forEach(printMe()); // will give error






//3) Printing all the three parameters of callback function together