//Declaring Number variables
//1st method
const score = 400;
console.log(score);

//2nd method -> using Number object 
//It will be of object type
//It will give various properties
//It will be specified in output separately as a Number
const balance = new Number(100)
console.log(balance);


//***Converting Number or Number object to String 
//Use toString()
console.log(balance.toString());  //doesnt change the original variable
console.log(typeof balance);  //still object
console.log(typeof balance.toString());
//Now we can use the methods of string after converting it into string
console.log(balance.toString().length);        //gives 3



//*** TO Show a fixed number of precision values after decimal point

console.log(balance.toFixed(2));   //will give 100.00



//*** To provide precision upto a particular number of digits from LHS
//returns a string
// the number of digits can range from 1 to 21 only 
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));    //123.9
console.log(typeof otherNumber.toPrecision(4));
console.log(otherNumber.toPrecision(3));   //124
console.log(otherNumber.toPrecision(2));   //1.2e+2




//***Making a number more readable by giving it commas according to American Number system
//Use .toLocaleString()
//Converts it top string

const hundreds = 10000000
console.log(hundreds.toLocaleString());      //10,000,000
console.log(typeof hundreds.toLocaleString());     //string