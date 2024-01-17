//1) Rest Operator '...x'
//It is a lookalike of spread operator

//When we dont know about the number of arguments passed.
//But we want to get all of them into parameters
//Mostly used in shopping cart when we dont know how many items the user is selecting
//All the arguments will come in the form of an array
// function abc(...x)

//with only one parameter, it will be assigned the first argument only while the rest of the arguments will be wasted
function calculateCartPrice(num1)
{
    return num1;
}

console.log("\nWith only one parameter, we get only first argument :-",calculateCartPrice(200,400,500));



function calculateCartPrice2(...num1)
{
    return num1;
}

console.log("With rest '...' parameter, we get all the arguments in an array :-",calculateCartPrice2(200,400,500));
//later we can loop in this array and apply operations on it




//2) When the rest operator is after some parameters
// With rest '...' parameter after two parameters, we get first two arguments in first two parameters and the leftover arguments in the rest '...' parameter

function calculateCartPrice3(num1,num2,...num3)
{
    return [num1,num2,num3];
}

console.log("\n\nWith rest '...' parameter after two parameters, we get :-\n",calculateCartPrice3(200,400,500,700));

//num1 = 200
//num2 = 400
//num3 = [500,700]





//3) Passing and using objects in function

console.log("\n\nAccessing user object's username from handle_object function :-");

const user = {
    username : "hrithik",
    price : 199
}

function handle_object(any_object)
{
    console.log(`Username is ${any_object.username} and the price is ${any_object.price}`);
}

//a) function call with user object as argument
handle_object(user);


//b) function call with direct object as argument
console.log("\nAccessing direct object's username from handle_object function :-");

handle_object({
    username: 'Ritzzz',
    price : 400
});





//3) Passing and using arrays in function

console.log("\n\nAccessing arr array's second element from returnSecondValue() :-");

const arr = [200, 400, 100, 600];
function returnSecondValue(any_array)
{
    console.log(`Second element of passed array is ${any_array[1]}`);
}

//a) function call with arr array as argument
returnSecondValue(arr);


//b) function call with direct array as argument
console.log("\nAccessing direct array's second element from returnSecondValue() :-");

returnSecondValue([1100, 2500, 4136, 7982]);