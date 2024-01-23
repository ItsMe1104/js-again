// 1) Reduce Method :- executes an user supplied reducer
// At last returns a single value
/*
Syntax :-

    arr_name.reduce(callback_func(x,y){
        return (operation)
    } , z)

    x = accumulator (an empty variable)
    y = current element value from array
    z = initial value
    operation =  some operation between the accumulator and the initial value.    
*/


//Steps :-
//a) First, the initial value (z) is assigned to the accumulator in the first iteration.
//b) The initial value (z) is only taken into use in the first iteration, after that its of no use.
//c) Whatever value the operation returns in an iteration after the 1st iteration is taken as the value of the accumulator in the next iteration
//d) after all iteration , the final value of the operation is returned
//Useful in shopping cart where we add the prices of all items entered by the user.


//e.g :- To calculate the sum of al elements in the array

console.log("\n1) Calculating the sum of all elements in the myNum array using reduce() method  :-")
const myNum = [1, 2, 3, 4];

const sum_of_ele = myNum.reduce((acc, ini_val)=>{
    
    console.log(`accumulator : ${acc} and initial_value : ${ini_val}`);
    return acc + ini_val;
}, 0 ) 

console.log(sum_of_ele);




//2) Using reduce function in an array of objects :- 
const shoppingCart = [
    {
        itemName: "js course",
        price : 2999
    },

    {
        itemName: "py course",
        price : 999
    },

    {
        itemName: "Mobile dev course",
        price : 5999
    },

    {
        itemName: "Data science course",
        price : 12999
    }
]

console.log("\n2) Calculating the sum of all prices in the sum_of_prices array of objects using reduce() method  :-")

const sum_of_prices = shoppingCart.reduce((acc, ini_val)=>{
    console.log(`accumulator : ${acc} and initial_value_price : ${ini_val.price}`);

    return acc + ini_val.price;
}, 0)

console.log(sum_of_prices);




