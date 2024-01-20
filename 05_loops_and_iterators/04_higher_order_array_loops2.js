//1) For-in loop in objects:-
// Main objective is to iterate in objects and access its key and values from key-value pairs separately.
// We can only access keys of objects by iterating through for-in loop
// Values can be accessed by brackets [] notation, obj_name[key]

console.log("\n1) Accessing keys and values separately of myObject2 object using for-in loop :- ");

const myObject2 = {
    js : "Javascript",
    cpp : "C plus plus",
    rb : "raby",
    swift : "swift by apple"
}

for(const key in myObject2)
{
    console.log(`${key} shortcut is for --> ${myObject2[key]}`);
}





//2) For-in loop in arrays:-
// We can only access keys of array by iterating through for-in loop in arrays
// The keys of arrays are its indexes starting from 0.
// Values can be accessed by brackets [] notation, arr[key]

console.log("\n\n2) Accessing elements of 'arr' array using for-in loop :- ");

const arr = ["js", "rb", "py", "java", "cpp"];

for(const key in arr)
{
    console.log(`${key}th index --> ${arr[key]}`);
}



//2) For-in loop in maps:-
// Since maps are not iteratable hence we cannot iterate on maps using for in loop
// Though it wont give an error but it won't print any value either

console.log("\n\n3) Accessing elements of 'map' using for-in loop :- ");


const map = new Map();
map.set("IN", "India");
map.set("USA", "United State of America");
map.set("FR", "France");

for(const key in map)
{
    console.log(`${key}th index --> ${map[key]}`);
}

console.log("Won't print any values,since maps are not iteratable.");
