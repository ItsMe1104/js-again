// 1) Prototypal behaviour

// Js possesses prototypal behaviour ,i.e above and above
// --> It means it keeps on searching for an items in the upper layers, till it finds it
// --> That is, it accesses an element's parent, grandparents, etc till it finds the thing it is looking for
//It is prototype, through which we got "new" keyword, classes, this , prototypal inheritance or inheritance


//Every object type datatype (Array, String, Object) has a prototype of its own, and it forms a chain of referenced prototypes i.e 
// Every prototype has a reference of its parent prototype also

// e.g :- Array 
//Parent = object
// Array ==> Object ==> null 

// e.g :- String
// String ==> Object ==> null


//Hence the parent prototype of Object is null
//Hence, Array and String, both have a refence of their parent prototype that is object
// Even primitive data types declared through new keyword is also a child of object, hence they will alo contain a prototype and will also ccontain the prototype reference of Object, e.g :- Number, Boolean, etc




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
console.log(multiplyBy5.prototype); // {} = object


//Points :-
//--> Everything in JS is an object
// --> e.g :- Function is a function but also an object
// --> Its working will behave like a function but it can be made to behave like an object also (because at the end everything meets at the prototype of object)




//******************************************************************************************************************************************************************** */


function createUser() {
    
}

