//Array

// [] -> brackets
// {} -> braces
// () -> parantheses

//Array -> An object data type that contains one or more elements of same or different data type 
// the data type can be objects and array also.
//Arrays are resizable in JS
const myArr = [7,1,2,11];

const myArr2 = [0,11,12.45,true,7,8,"Hrithik",undefined,null,9,10];

//JS arrays are associative arrays hence they can only be accessed by 0-based indexes
console.log("\nElement at 0th index:", myArr[0]);
console.log("Element at 3rd index:", myArr[3]);


//************************************************************************************************************* */
//NOTE:- Any array coperations create shallow copies who share the same reference point, that is anychanges made will also be reflected in the original array



//************************************************************************************************************************** */
// 1) WAYS to create array

//Way 1
const myHeroes = ["Shaktimaan", "Naagraj"];

//Way 2
const numbers = new Array(1,2,3,4,5);
//remember the elements are not inside []




//*********************************************************************************************************************************************************************** */
// Array Methods
// 1) push(x)  :- To add an element to the end.
// Changes the original array
//it reurns the number of elements in array after addition

    myArr.push(25);
    console.log("\nmyArr after pushing 25", myArr);

// 2) pop() :- To remove an elemet from last 
// Changes the original array

myArr.pop();
console.log("\nmyArr after popping last element", myArr);


// 3) unshift(x)  :- To add an element to the front.
// Changes the original array
//very costly operation hence use wisely

myArr.unshift(25);
console.log("\nmyArr after unshifting 25 at front", myArr);

// 4) shift() :- To remove an elemet from first
// Changes the original array
//very costly operation
myArr.shift();
console.log("\nmyArr after shifting (removing first element) ", myArr);


// 5) includes(x) :- to check if an element is present in the array or not
//returns a boolean
// case sensitive as well as data ype sensitive ,hence 9 != '9'

console.log("\nIf myArr includes 9 :-",myArr.includes(9));


// 6) indexOf(x) :- to know the index of an element in the array 
// returns the index in number 
// returns -1 if the element is not present in the array

console.log("\n9 is present at which index in myArr :-",myArr.indexOf(9));
console.log("11 is present at which index in myArr :-",myArr.indexOf(11));


//7) join() :- Adds all the element in the array to a string
//doesn't change the original array but returns a new one

const newArr = myArr.join()
console.log("\nnewArr after using join() on myArr :-", newArr);
console.log("type of newArr :-",typeof newArr);


//8) slice(a,b) :- gives a part of the array i.e subarray from original array
// a -> included
// b -> not included
//doesnt change the original array

let newArr2 = myArr.slice(1,3);   //gives elements from index 1 to 2
console.log("\nUsing slice to get subarray from index 1 to 3 :-",newArr2);
console.log("Original array doesnt change :-",myArr);


//8) splice(a,b) :- gives a part of the array i.e subarray from original array
// a -> included
// b -> included
// changes the original array

let newArr3 = myArr.splice(1,3);   //gives elements from index 1 to 2
console.log("\nUsing splice to get subarray from index 1 to 3 :-",newArr3);
console.log("Original array changes :-",myArr);



//slice() vs splice()
// a) slice -> last index not included
//    splice -> last index included

// b) slice -> doesnt change original array
//    splice ->  changes original array

