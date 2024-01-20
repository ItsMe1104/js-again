// 1) for-of loop :-just like for each loop in Cpp or Java
// Array,objects,strings are iterable
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
    console.log(itr);
}


const greetings = "Hello world"
console.log("\nUsing for-in loop to access all characters of string greetings:-");
