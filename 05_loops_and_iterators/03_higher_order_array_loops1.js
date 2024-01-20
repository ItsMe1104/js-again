// 1) for-of loop :-just like for each loop in Cpp or Java
// Array, objects, strings are iterable normally but for-of loop doesnt work in objects 
// Though maps are not iteratable but still for-of loops works in that
// mostly these are array specific loop
// mostly api calls will give ["","",""] or [{},{},{}]
/* Syntax
    for (const iterator of object) 
    {...}
*/
//here object doesnt mean object data type only but every datat type that is iterable like Array,objects,strings



console.log("\nUsing for-in loop to access elements of array arr :-");
const arr = [1,2,3,4]

for(const num of arr)
{
    console.log(num);
}


const greetings = "Hello world"
console.log("\nUsing for-in loop to access all characters of string greetings:-");




// 2) MAP :-
// It is an object that holds key-value pairs and remembers the original insertion order of the keys.
// Any primitive data type or object, array can be used as a key or a value
// All the keys are unique


//Creation :-
const map = new Map();


//Insertion :-
//Done through set(key,value);

map.set("IN", "India");
map.set("USA", "United State of America");
map.set("FR", "France");
map.set("IN", "India");   // will not be stored as IN is already present as a key


console.log("Printing the entire map with its key-value pairs :-\n", map);




// 3) for-of loop in maps
//Iterating and accessing key value pairs using for of loops in maps will provide all the key-value pairs in separate arrays 

console.log("\n\n3) Accessing key-value pairs of map together using for of loop :-");
for (const itr of map) {
    console.log(itr);
}




// 4) Destructuring to access key & value separately from key-value pairs in for-of loop
// Instead of using iterator directly, we will destructure it into two values [key, value]

console.log("\n\n4) Accessing key,value separately of key-value pairs in map using for-of loop :-");
for (const [key,value] of map) {
    console.log(`${key} -> ${value}`);
}



// 5) We cannot use for-of loop to iterate in objects even if its iterable 
// The error that will come is that the object is not iterable 

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}


const myObject2 = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}
// Both objects will give the same error 

// for (const [key,value] of myObject) {
//     console.log(`${key} -> ${value}`);
// }
// Will give error
