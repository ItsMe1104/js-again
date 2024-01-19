// switch case :- Just like multiple if-else statements
// It is mainly used for checking equality of a value with a series of other values. 
// Whichever value from that series of value proves to be equal, we execute that block of code

// 1) Syntax :-
/*
switch (key) {
    case value:
        ...
        break;

    default:
        break;
}
*/
// key is the value we want to check
// default: :- is the default case which runs its block if no other cases from above matches the required value and runs their block

// Since we do not define blocks for every cases with braces {}, hence we need to add a 'break' statement for every case block marking its end. 

//If we dont put break statement then it will execute all the cases below the matched case too till the default case or if it encounters a break statement in between. This is called fall through

//No need to use break statement in default case
//Note :- any cases below the default case will never be executed


// Note : How to duplicate lines in VS Code :-
// a) select the lines to dulicate down
// b) Alt + Shift + down_arrow_key 

console.log("\n1) Using switch case with number key to determine month :-");
const month = 3;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Default case match");
        break;
}


//e.g :- Using switch statement with 

const month2 = "may";
console.log("\n1) Using switch case with string key to determine month2 :-");
switch(month)
{
    case "jan":
        console.log("January");
    case "feb":
        console.log("February");
    case "march":
        console.log("March");
    case "april":
        console.log("April");
    default:
        console.log("Default case matched");
        break;
}





//2) Truthy and Falsy Values :-
// Values that are assumed to be true or false themselves.
// Hence, we dont need to equate them inside a condition to get the 

// a) Falsy values :- false, 0, -0, BigInt 0n, "", null, undefined, NaN

// b) Truthy values :- Every values except Falsy values are truthy values 
// '0', 'false', " ", [], {}, function(){}





//3) How to check an array is empty or not in a condition
// Because [] is a truthy value
// we use .length property to check if an array is empty or not
//Remember its .length and not length() 

console.log("\n\n3) Checking if an Array is empty or not using length property :-");

const emp_arr = [];
const one_arr = ["abc"];

//emp_arr
if(emp_arr.length == 0)
{
    console.log("emp_arr Array is empty.");
}

//one_arr
if(one_arr.length == 0)
{
    console.log("one_arr Array is empty.");
}
else
{
    console.log("one_arr Array is not empty.");
}



//4) How to check an object is empty or not in a condition
// Because {} is a truthy value.
// We calculate how many keys ae there in it.
// We first use Object.keys(obj_name) to getall the keys of obj_name object in an array
// we use .length property over that key array to check if it is empty or not
//Remember its .length and not length() 

console.log("\n\n3) Checking if an object is empty or not using [Object.keys().length] property :-");

const emp_obj = {};
const one_obj = {
    name  : "Hrithik"
};

//emp_obj
if(Object.keys(emp_obj).length == 0)
{
    console.log("emp_obj Object is empty.");
}

//one_obj
if(Object.keys(one_obj).length == 0)
{
    console.log("one_obj Object is empty.");
}
else
{
    console.log("one_obj Object is not empty.");
}




// 5) Remember some expressions for interview :-
// a) false == 0   :- true
// b) false == ''  :- true
// c) 0 == ''      :- true

console.log("\n\n5) Some expressions giving true value are :-");
console.log("false == 0 :-",false == 0);
console.log("false == '' :-",false == '');
console.log("0 == '' :-",0 == '');