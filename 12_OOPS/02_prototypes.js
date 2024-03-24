// 1) Prototypal behaviour

// Js possesses protot-ypal behaviour ,i.e above and above
// --> It means it keeps on searching for an items in the upper layers, till it finds it
// --> That is, it accesses an element's parent, grandparents, etc till it finds the thing it is looking for
//It is prototype, through which we got "new" keyword, classes, this , prototypal inheritance or inheritance


//Every datatype (Array, String, Object, Number, Boolean, etc) has a prototype of its own, and it forms a chain of referenced prototypes i.e 
// Every prototype has a reference of its parent prototype also

// e.g :- Array 
//Parent = object
// Array ==> Object ==> null 

// e.g :- String
// String ==> Object ==> null


//Hence the parent prototype of Object is null
//Hence, Array and String, both have a refence of their parent prototype that is object
// Even primitive data types is also a child of Obbject, hence they will also contain a prototype and will also ccontain the prototype reference of their parent i.e Object, e.g :- number, boolean, etc




//********************************************************************************************************************************************************************************************************** */


// 2) Function and its prototype

//Function ==> Object ==> null

function multiplyBy5(num) {
    return num*5;
}

//Can a function has properties which we can set?
//--> Yes
multiplyBy5.abc = 2;

console.log(multiplyBy5(5))   // 25 
console.log(multiplyBy5.abc);   // 2
console.log(multiplyBy5.prototype); // {} = object, it contains all the properties of the prototype + the properties came due to this (e.g this.username = username)


//Points :-
//--> Everything in JS is an object
// --> e.g :- Function is a function but also an object
// --> Its working will behave like a function but it can be made to behave like an object also (because at the end everything meets at the prototype of object)




//******************************************************************************************************************************************************************** */

// 3) Function and this with prototype :-

function createUser(username, price) {
    this.username = username;
    this.price = price;
}


//Normally, in Array , String, we get so many functionalities(properties) from Prototype by default like .slice() , .map() , etc.

// Similarlies in function, can we inject some functionalities(properties) through its prototype?
// ==> YES, since function afterall is also an object


//going object inside object 
createUser.prototype.increment = function() {
    // price++;      wont work since it doesnt know about which price variable (parameter or variable)

    this.price++;   //will work, because the current context of increment() is createUser()
}


createUser.prototype.printMe = function(){
    
    //since we dont know which price (parameter or our variable)
    console.log(`price is ${this.price}`);
}


// const chai = createUser("chai", 25);
// const tea = createUser("Tea", 250);
// won't work till we use the 'new' keyword (Reason below)


const chai = new createUser("chai", 25);
const tea = new createUser("Tea", 250);

//calling the injected function

// since like in Arrays, we just access the prototype properties using '.' only (e.g :- .map(), .slice())
// hence we can call the injected frunction property directly without using '.prototype' in between as JS takes care of that



//V.V.I (interviews)
//won't work till we use the new keyword
// Because since we defined the increment() and printMe() functions outside the createUser()
// Hence even though they are injected in createUser()
// the variables at the time of getting initialized from the function createUser() doesn't know about the injected function properties and will give error due to undefined function calls
// Hence, this problem is taken care of by 'new' keyword at the time of declaring variable which invokes the constructor.
// If the increment() and printMe() functions were defined inside the createUser(), then this problem could have been solved without "new" keyword.

chai.increment();
console.log("\nPrice of chai is :-");chai.printMe();       

tea.increment();
console.log("Price of tea is :-");
tea.printMe();  



//Short Summary :-

/*
//Functionality of new keyword:-

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

