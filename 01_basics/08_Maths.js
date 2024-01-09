//Maths library is by default included in JS

//Math is itself an Object with many properties which we access by dot operator
console.log(Math);


//1) to get the PI value use Math.PI
console.log("PI value = " + Math.PI);


//2) to get the mod or absolute value
//use abs()
console.log("\n\nTo get absolute values");
console.table([Math.abs(-4),Math.abs(4)]);    // -4 --> 4  && 4 --> 4
//For decimal values
console.log(Math.abs(-4.5678)); //gives 4.5678



//3) to get the round off integer value 
//use round()
console.log("\n\nTo get round off values");
console.table(["-4.36 --> " + Math.round(-4.36),"-4.57 --> " + Math.round(-4.57)]);  //gives -4 and -5

console.log("Round Off of 4.3 --> " + Math.round(4.3));   //gives 4
console.log("Round Off of 4.5 --> " + Math.round(4.5));  //gives 5



//4) to choose specifically if we want the ceil or floor value of that number
// use ceil() or floor();

//pura hona hoga else converts to int value only
console.log("\n\nFloor Value of 4.9 --> "+ Math.floor(4.9));    //gives 4

//thoda bhi zyada hua then next integer
console.log("Ceil Value of 4.1 --> "+ Math.ceil(4.1));    //gives 5



//5)To get the square root of a number
//use sqrt() 
console.log("\n\nSquare root of " + Math.sqrt(16));
console.log(Math.sqrt(16.16));


//5)To get the value of a a^b
//use pow(a,b) 
console.log("\n\nValue of 16^2" + Math.pow(16,2));
console.log("Value of 2.1^2" + Math.sqrt(2.1,2));


//6) To find the min and max number among a list of numbers
//use min() and max()

console.log("\n\nTo find the min and max among 9,13,4,12,17,12,-3");

console.log("Min value = " + Math.min(9,13,4,12,17,12,-3));
console.log("Max value = " + Math.max(9,13,4,12,17,12,-3));



//7) To generate random numbers
// use random()
// it always gives value between 0 and 1
console.log("Random value between 0 and 1 = " + Math.random());


//to get random value between 0 and 10
//use Math.random() * 10
console.log("Random value between 0 and 10 = " + (Math.random() * 10));


//to get random value between 1 and 10
//use [(Math.random() * 10) + 1]   (use braces to avoid bodmas)
console.log("Random value between 1 and 10 = " + (Math.random() * 10 + 1));


//to supress it to integer values only between 1 and 10
//use floor() with above expression
//use [Math.floor((Math.random() * 10 + 1))]
console.log("Random value between 1 and 10 in integers = " + [Math.floor((Math.random() * 10 + 1))]);



//to get random values between A and B
//replace above expression with
//* 10 --> * (A - B + 1) 
//+ 1 --> + A           (because A se zyada toh chahiye hi chahiye)
//use [(Math.random() * ( A - B + 1) + min] 


console.log("\n\nRandom numbers between 10 and 20 in integers :-");
const mini = 10;
const maxi = 20;

console.log(Math.floor((Math.random() * ( maxi - mini + 1) + mini)))






