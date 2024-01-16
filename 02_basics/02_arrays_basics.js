const marvel_heroes = ["Thor", "Ironman","Spiderman"];
const dc_heroes = ["Superman","Flash","Batman"];

//1) if we try to use push() to push one array into another
// all the elements of arr2 will not be added in arr 1 but arr2 itself will be added as a separate element at the end of the arr1
//changes the original array 1

marvel_heroes.push(dc_heroes)
console.log("\nUsing push() to merge dc_heroes array into marvel_heroes array :-\n",marvel_heroes);
//here dc_heroes array will be treated as a single element


//Inorder to access elements of dc_heroes array from marvel_heroes array, we have to use syntax of 2d array index arr1[a][b]
// a -> means index of inner array
// b -> means index of inner array element
console.log("\n\n1st element of dc_heroes array from marvel_heroes array :-", marvel_heroes[3][1]);



//3) concat(x_arr) :- combines the elements of both array (first arr1 then arr2)
//returns a new array

const marvel_heroes2 = ["Thor", "Ironman","Spiderman"];
const dc_heroes2 = ["Superman","Flash","Batman"];

const allHeroes = marvel_heroes2.concat(dc_heroes2);
console.log("\n\nAll superheroes after concanating marvel and dc heroes into allheroes_array :-\n", allHeroes);



// 4) Spread operator :- [...]
// It also helps to combine the elemengts of one or more arrays
//[...arr1, ...arr2, ...arr3]

const allNewHeroes = [...marvel_heroes2,...dc_heroes2];
console.log("\n\nUsing spread operator to combine both marvel and dc heroes into allNewHeroes_array :-\n", allNewHeroes);



//5) flat(deg) :- To make all the subarrays to destroy themselves and put their elements in the main array
// deg -> refers to the degree of subarray inside the main array [a,b,[c,d,[e,f,g]]]
//use deg = Infinity to get all the inner array elements into main array
//returns new array
const another_arr = [1, 2, 3, [4, 5, 6], 7, [6,7, [4,5]]];
const real_another_arr = another_arr.flat(Infinity);
console.log("\n\nUsing flat() to destroy all the inner subarrays from another_arr :-/n",real_another_arr);




//6) How to know if some data is Array or not so that we can loop onto it
//use Array.isArray(x)
//returns boolean

console.log("\n\nUsing Array.isArray() to know if 'Hrithik' is array or not :-",Array.isArray("Hrithik"));



//7) How to convert an array from a set of elements?
//elementscan be variables,arrays or objects
//returns a new array
//Use Array.of(x,y,z,...);

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log("\n\nConverting variables of score1,score2 and score3 into an array:-\n",Array.of(score1,score2,score3));



//8)Converting a string into an array of characters
//returns a new array
//Use Array.from(x)

//INTERVIEW QUESTION
//x can be string or even objects but for objects we have to specify whether to make an array of keys or values
//if we dont specify then it gives an empty array [] incase of object

console.log("\n\nConverting string 'Hrithik' into an array of characters using Array.from() :-\n",Array.from("Hrithik"));

console.log("Empty array on converting object to array using Array.from() without specifying properly\n",Array.from({
    name: "Hrithik"
}));