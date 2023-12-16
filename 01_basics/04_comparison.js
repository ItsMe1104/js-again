//comparisons
console.log(2 > 1);     // greater than
console.log(2 >= 1);    //greater than equal to
console.log(2 < 1);     //less than
console.log(2 == 1);    //equal to (not strict)
console.log(2 != 1);    //not equal to


//comparisons with different data types might or might not give accurate results, hence always make sure that the data types are same while comparing
console.log("2" > 1);     //true
console.log("02" > 1);    //true


//Typescript doesnt even allow to compare two different data types

console.log(null > 0);    //false
console.log(null == 0);   //false
console.log(null >= 0);   //true

//the reason is that == and comparison operators like <= or >= work differenly
// Comparisons convert null or "" to a number i.e 0 before comparing hence 0 >= 0 came true but == doesn't convert and just compares hence Nan != 0 therefore false


console.log(undefined > 0);    //false
console.log(undefined == 0);   //false
console.log(undefined >= 0);   //false

//undefined is not converted to 0 at any case



// **********************************************************************************************
// Strict equality (===) vs Not-Strict Equality (==)

// === --> checks both value and data type to be equal to return true
// == --> only checks for value and not data type   hence ("2" == 2) return true

console.log("\n\n== vs ===");
console.log(2 == "2");   //true
console.log(2 === "2");  //false