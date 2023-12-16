let score = 33

console.log(typeof score);
console.log(typeof(score));


//Converting string to number
console.log("\nConverting string to number");
let score1 = "33"
let valueInNumber = Number(score1);
console.log(typeof valueInNumber);
console.log(valueInNumber);


//Nan --> not a number also has a data type of number
console.log("\nNan is also a number");
let score2 = "33abc"
let valueInNumber1 = Number(score2);
console.log(typeof valueInNumber1);
console.log(valueInNumber1);
//hence always beware because a string that cannot be converted to number will be converted to the number data type


//null is converted to number = 0
console.log("\nnull is also a number");
let score3 = null;
let valueInNumber2 = Number(score3);
console.log(typeof valueInNumber2);
console.log(valueInNumber2);


//undefined is also converted to number = 0
console.log("\nundefined is also a number");
let score4 = undefined;
let valueInNumber4 = Number(score4);
console.log(typeof valueInNumber4);
console.log(valueInNumber4);



//true => 1
//false => 0
console.log("\ntrue is 1 and false is 0 in number");
let score5 = true;
let valueInNumber5 = Number(score5);
console.log(typeof valueInNumber5);
console.log(valueInNumber5);



//"33" => 33
// "33abc" => NaN
// true => 1; false => 0



//Converting number or string to boolean
console.log("\nConverting number or string to boolean");
let age2 = 1;
let age3 = 172;
let age4 = 0;
let boolAge2 = Boolean(age2);
let boolAge3 = Boolean(age3);
let boolAge4 = Boolean(age4);
console.log(typeof boolAge2);
console.log( boolAge2);
console.log(typeof boolAge3);
console.log( boolAge3);
console.log(typeof boolAge4);
console.log( boolAge4);

let names = "";
let names2 = "Hrithik";
let boolNames2 = Boolean(names);
let boolNames3 = Boolean(names2);
console.log(typeof boolNames2);
console.log(boolNames2);
console.log(typeof boolNames3);
console.log(boolNames3);





console.log("\nConverting number or boolean to string");

let bool1 = true;
let str1 = String(bool1);


let num1 = 33;
let str2 = String(num1);

console.table([str1,str2]);
console.table([typeof str1, typeof str2]);




//OPERATIONS
console.log("\n\nOperations");
let value = 3;
let negValue = -value;
console.log(negValue);

console.table([2+2,2-2,2*2,2/3,2**2,2%3])
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/3);
// console.log(2**2);  // power 2^2
// console.log(2%3);   // remainder



let str3 = "hello";
let str4 = "hrithik"
let str5 = str3 + str4;
console.log(str5);

//Everything will be converted to string except when the operation for number comes before the string (a+b +"c") = (a+b)c
// console.log("1" + 2);   //12
// console.log(1 + "2");   //12
// console.log("1" + 2 + 2);  //122
// console.log(1+2+"5");  //35
console.table(["1" + 2,1 + "2","1" + 2 + 2,1+2+"5", "7" * "4"])


//Tricky conversions
console.log("\nTricky Conversions");
console.log(3+4 * 5 % 3);    //use parantheses to improve readability

console.log(true);
console.log(+true);   //1
// console.log(true+);    //gives error

console.log(+"");
// console.log(""+);   //gives error


//not readable way
let num, num2, num3;
num = num2 = num3 = 2*2;


//***************************************** ******* */
//POSTFIX AND PREFIX
console.log("Prefix and Postfix");

let gameCounter = 100;
console.table([gameCounter++,++gameCounter]);

// postfix => a++ means first use the value then increment/decrement it
// prefix => ++a means first increment the value then use it

//same goes for --a and a--
