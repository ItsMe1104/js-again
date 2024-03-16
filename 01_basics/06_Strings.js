//Strings
//both double and single quotes are accepted
const abc = "hello"
const abcd = 'hi'


//concatenating strings
const name = "Hrithik"
const repoCount = 50

//outdated syntax to concaenate strings
const final_str = name + repoCount + "Value"
console.log(final_str);

//modern syntax to concatenate strings (use backticks and ${})
//also called string interpollation
const modern_str = `Hello my name is ${name} and my repo Count is ${repoCount}`
//for injecting variables -> ${variable_name}


//Another way to declare string using String object

const gameName = new String("hrithik-HS");

//It is of object type and not a string type but it has more functionalities than string
console.log(typeof gameName);


//Similarly we can declare object syntax for other JS data types as well
const new_num = new Number(23);
console.log(typeof new_num);


//************************************************** */
//Accessing any letter of string with its index
console.log(gameName[2]);

//Accessing methods of String object using dot operator
console.log(gameName.length);  //gives the length of string
console.log(gameName.toUpperCase());   //doesnt change the original string but just gives the whole string in uppercase characters

//we can also use these methods on normal strings as well
console.log(name.length);
console.log(name.toUpperCase());


//Other methods:-

//*** to get the character at a specific index
console.log(gameName.charAt(3));

//*** to get the index of a particular character in the string
//it gives the first available character's index
//if the character is not present it gives -1

console.log(name.indexOf('i'));
// console.log(name.indexOf(i));   will give error
console.log(name.indexOf('2'));   //gives -1


//*** Getting a substring out of our string 
//use .substr(start_index, no. of characters)
//node the last character is excluded
//if we give negative values in the start_index it will by default start from 0
//if only start_index is given then it prints from start_index till end
const newStr = gameName.substr(2,7);
console.log(newStr);



//*** Getting substring in modern day
// using .slice(start_index, end_index)
// end_index character is not included.
const anotherString = gameName.slice(3,7);
console.log("\n\nUsing split() :-",anotherString);

//If we dont give end_index, it will take end_index = length of string (n)
const anotherString = gameName.slice(3);
console.log(anotherString);


//we can use negative indexes to no. of characters from back
const anotherString = gameName.slice(-5)   //5 characters from back
console.log(anotherString);

// In case of negative indexes
//using .slice( no. of characters from back, end_index)
// end_index character is not included.
const anotherString = gameName.slice(-8,9)   //8 characters from back and till 9th index (excluding 9)
console.log(anotherString);



//***To trim the starting and ending spaces from a string
//mostly used in user form
//it can trim white space as well as line terminators
let fName = "   hrithik   "
console.log(fName);     //normal string
console.log(fName.trim())    //trimmed string


//***To trim only the starting and ending spaces separately
//Use .trimStart(), .trimEnd()
console.log(fName.trimStart());
console.log(fName.trimEnd());



//**TO replace a part of string with domething else*/
//Use .replace("string_to_replace", "string_with_which_we_want_to_replace")
//If "string_to replace is not present", we ignore the operation
const url = "https://hrithik.com/hrithik%20shaw"
console.log(url.replace("%20shaw","SHAW"));
console.log(url.replace("Shaw","SHAW"));


//*** To search if some string is some substring is present in our string or not  */
//Case sensitive
//Use .includes() method
//returns true or false
console.log(url.includes("%20"));    //true 
console.log(url.includes("SHAW"));   //false



//*** To divide string to array elements based on some specific character as dividors
//Use .split()
const str = "hrithik-shaw-1104"

console.log(str.split('-'));   //splitting string on the basis of '-'

//splitting string on basis of every character
console.log(str.split('')); 

//we can provide limit to the number of splits... i.e we can define the number of elements we want, after that the rest elements will be excluded
console.log(str.split('-',2));  //gives only 2 out of 3 elements
