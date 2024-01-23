//1) Map method in arrays
//Best replacement for ForEach loop
//It is just like the filter method but,
//It doesnt return items based on condition, rather it returns all the items like For-each loop
// It also has the power to return items after changing their original values from the items
// It doesnt update the parent array

/*
Syntax :-

    arr_name.map(callback_func(x,y,z){
        return ...
    })
*/

//E.g :- If we want to store all the elements of parent array to a new array but after adding 3 to all the elements of parent array

console.log("\n\n1) Storing all the elements of myNums array after adding 3 to them , using map method :-");

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.map((items)=>{
    return items + 3;
})

console.log("Parent Array (myNums) :-\n",myNums);
console.log("Child array (newNums) :-\n", newNums);





//2) Chaining in loops :-
// We can chain any number of methods like filter(), map(), reduce() , together.
// We can chain with same or a mix of different functions altogether
// The returned values of first method from LHS is processed for the next method.
// This process contines till we all the methods are over and finally we get all the processed elements in an array returned .

/*
Syntax :-
    child arr = arr_name.map((item)=>{
        return ...
    }).filter((item) =>{
        return condition
    }).map((item) =>{
        return ...
    })
*/
//The value of the first chain is passed to the next chain

console.log("\n\n2) Using chaining of methods on myNums2 array :-");
const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums2 = myNums2
                    .map((num )=> num * 10)
                    .map((item)=>{
                        return item + 1;
                    })
                    .filter((num)=>{
                        return num >= 40;
                    })

console.log(newNums2);

//original array :- [1,2,3,4,5,6,7,8,9,10]
//first map :- [10,20,30,40,50,60,70,80,90,100]
//second map :- [11,21,31,41,51,61,71,81,91,101]
//third filter :- [41,51,61,71,81,91,101]
