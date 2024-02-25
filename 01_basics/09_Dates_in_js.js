// Date objects represent a single moment in time in a platform independent format
//The moment is defined from JAN 1, 1970
//Dates are usually calculated in milliseconds
//Proposal is going for Temporal Object but it will take time to be launched


//1) Declaring a date
let myDate = new Date();


//******************************************************* */


//2) Date is an object (Interview ques)
console.log("Data type of Date --> " + typeof(myDate));


// *************************************************


//3) Normally printing date will give unreadable outputs
console.log("\n\nUnreadable output -->",myDate);


// ****************************************************


//4) Converting Date object output to readable strings

//a)use toString()    --> IMP
console.log("\nUsing toString() :\n" + myDate.toString());
// or concatenate with string
console.log("\nUsing Concatenation with string :\n" + myDate);

//b) use toLocaleString()   --> IMP
console.log("\nUsing toLocaleString() :\n" + myDate.toLocaleString());

//c) use toDateString()   --> IMP
console.log("\nUsing toDateString() :\n" + myDate.toDateString());


//d) use toLocaleDateString()   --> IMP
//To get the Date separately out of whole Date and Time readable format
console.log("\nUsing toLocaleDateString\() :\n" + myDate.toLocaleDateString());


//e) use toLocaleTimeString()     --> IMP
//To get the time separately out of whole Date and Time readable format
console.log("\nUsing toLocaleTimeString\() :\n" + myDate.toLocaleTimeString());


//f) use toJSON()   --> IMP
console.log("\nUsing toJSON() :\n" + myDate.toJSON());


//g) use ISOString()  
console.log("\nUsing toISOString() :\n" + myDate.toISOString());





// **************************************************************


//5) Creating our own date
//use new keyword

// let myCreatedDate = new Date();  gives current date and time

//to create our own date
//-> format is yyyy,m,dd
//-> m ranges from 0 to 11 instead of 1 to 12  (0 = Jan, 1 = Feb , ... , 11 = Dec)

//first method

let myCreatedDate = new Date(2024,11,23);
console.log("\n\nCrated Date in format 1:- " + myCreatedDate); 
console.log(myCreatedDate.toDateString());   //very important to convert the date object to string if we are not concatenating else we will get unreadable output


//Second format
//format is yyyy,m,dd,h,m,s   (h = hour, m = minute, s = second)
//12 hour format ouput but we can give values in 24 hour format also
//if we dont specify h,m or s then they will by default be 0
let myCreatedDate1 = new Date(2024,11,23,23,5,7);
console.log("\nFormat 2 :- " + myCreatedDate1.toLocaleString()); 
console.log(); 



//Third Format
//Normal format using '-' in between
// --> yyyy-m-dd     (both m and mm accepted) 
// --> m-dd-yyyy

// --> dd-m-yyyy  --> not valid

//input will be in string
//mm will range from 01 - 12 and not from 0 to 11
//output will always be in m-dd-yyyy format

//m-dd-yyyy format
let myCreatedDate2 = new Date("3-31-2024");
console.log("Format 3 :- " + myCreatedDate2.toLocaleString()); 

//yyyy-m-dd format
let myCreatedDate3 = new Date("2024-03-17");
console.log("Format 3 :- " + myCreatedDate3.toDateString()); 



// *******************************************************************************


// 6) Getting info about date,day,month,year,hour,minutes,seconds,milliseconds separately from a given date

//use getDate(), getDay(), getMonth(), getFullYear() getHours(), getMinutes(), getSeconds() ... using '.' operator
//day

//Day -> range from 0 to 6 marking Sunday to Saturday (0 = Sunday, 1 = Monday... 6 = Saturday)
//Month --> range from 0 to 11  (at last we can add 1 to make it even)

//to get correct year use getFullYear() and not getYear() as getYear() will give no. of years passed from 1900


console.log("\n\nInfo seaprately from date '2024-03-15' :- ");
console.log("Day :- " + myCreatedDate3.getDay());
console.log("Month :- " + (myCreatedDate3.getMonth() + 1)) ;
console.log("Year :- " + myCreatedDate3.getFullYear());
console.log("Hours :- " + myCreatedDate3.getHours());      //0
console.log("Minutes :- " + myCreatedDate3.getMinutes());      //0
console.log("Seconds :- " + myCreatedDate3.getSeconds());     //0
console.log("MilliSeconds :- " + myCreatedDate3.getMilliseconds());     //0 

//since we didnt set the time hence we will get hours,minutes,seconds as 0

//Normally use string interpollation i.e `${}` way to write complete dates


// **********************************************************************************


// 7) Changing format of toLocaleString()

//we define an object inside this method
//first option is internalization (mostly we use default)
//second is the object about how we want to format the output

console.log("\n\nFormatting the toLocaleString() method :- ");

//Press CTRL + Space after clicking inside the object to see the properties and values we can use to format
console.log(myDate.toLocaleString('default',{
    weekday: "long",
    day: "numeric",
    month:"long"
}));


//************************************************* */



// TIMESTAMPS  --> useful in quiz or poles apps to know which player answered fast
console.log("\n\n\n********************************* TIMESTAMP ****************************\n");

//1) Declaring timestamps

//use Date.now()
//it will give the value in milliseconds that have passed from Jan 1 1970
let myTimeStamp = Date.now();
console.log("\n\nCurrent Date and time TimeStamp in milliseconds :- " + myTimeStamp);

// **********************************************************


//2) Getting timestamps from our created date so that we can compare them in hotel or booking apps'
let myNewDate = new Date("4,11,2000");

let myDateTimeStamp = myNewDate.getTime();
console.log("TimeStamp for my date '4-11-2000' in milliseconds :- " + myDateTimeStamp);

//Hence we can compare who booked first or who answered first


//3) Converting milliseconds TimeStamp to seconds

//Divide by 1000
//Use Math.floor or Math.round() to delete the decimal part

console.log("\n\nTimeStamp of current time in milliseconds :- " + Date.now());
console.log("TimeStamp of current time in milliseconds :- " + Math.floor(Date.now()/1000));