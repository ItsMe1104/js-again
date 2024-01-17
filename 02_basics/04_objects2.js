//Singleton object
//Objects created with constructor

//Both literal object and constructor object have same functions except,

const tinderUser = new Object();
const tinderUser2 = {}

console.log("\nConstructor Object (empty) :-", tinderUser);
console.log("Literal Object (empty) :-", tinderUser2);



//1) Adding values in constructor object is same as in literal object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false;
console.log("\n\nAfter adding values in tinderUser object :-\n",tinderUser);


// 2) Nested objects
const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstname: "hrithik",
            lastname: "shaw"
        }
    }
}

console.log("\n\nNested Object 'regularUser' :-\n",regularUser);




//2) Accessing values of nested objects
//Use nested dot '.' notation
console.log("\n\nAccessing values of nested objects :-\n",regularUser.fullName.userFullName.firstname);

//Sometimes we also use optional chaining while accessing data from api
//if some object we are trying to access is not present then,
//we use ? before that object else it will give error

// regularUser.fullName?.userFullName.firstname




//3) Merging two objects
const obj1 = {1:'a', 2:'b'};
const obj2 = {3:'c', 4:'d'};
const obj3 = {5:'e', 6:'f'};
const obj4 = {7:'g', 8:'h'};

// a) Putting object1 and object2 inside a third object
//obj = {obj1,obj2}
//but this will give nested objects and not all key-value pairs inside a single object

const obj_new = {obj1,obj2};
console.log("\n\nMerging obj1, obj2 inside a third object will give us nested objects :-\n",obj_new);



//b) Using Object.assign(a,b1,b2,b3,..)
// a = target
// b1,b2,b3 = sources
//means we are putting all the elements of source in the target
// returns the target object
// it will change the target object

const obj_new2 = Object.assign(obj1,obj2);
console.log("\n\nMerging obj1 and obj2 into obj_new2 using assign() :-\n",obj_new2);
console.log("Original obj1 will also be changed as it was the target object :-\n",obj1);  


// c) Using Object.assign() to not change the original objects
// Industrial level code
// Use an empty object {} as the target and other objects as source

const obj_new3 = Object.assign({},obj2,obj3);
console.log("\n\nMerging obj2 and obj3 into obj_new3 using assign() :-\n",obj_new3);
console.log("Original obj2 will not also be changed as the target was {} :-\n",obj2); 




//c) (BEST METHOD) Using spread operator
// {...obj1,...obj2,...obj3,...}
//Unlike array we will use {} instead of []
//returns a new object
//doesnt change the original objects

const obj_new4 = {...obj2,...obj3,...obj4};
console.log("\n\nMerging obj2,obj3,obj4 using spread operator {...} :-\n", obj_new4);




//4) In databases
// We mostly get an array of objects
// To access their values f any object :-
//a) either use map() to loop through the objects
//b) Use array indices to access values of the object :- arr[2].email
const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 2,
        email : "p@gmail.com"
    },
    {
        id : 3,
        email : "hp@gmail.com"
    }
]

console.log("\n\nAccessing email from third object of the array of objects :-\n", users[2].email);



//5) Object.keys(x) :- To get all the keys from an object
// returns an array of keys
console.log("\n\nGetting all the keys of tinderUser object :-\n",Object.keys(tinderUser));


//6) Object.values(x) :- To get all the values from an object
// returns an array of values
console.log("\nGetting all the values of tinderUser object :-\n",Object.values(tinderUser));



//7) Object.entries(x) :- To get all the keyvlue pairs as a separate nested array from an object
// returns an array of nested arrays with key-value pairs as elements of every nested array
console.log("\nGetting all the key-value pairs in separate arrays of tinderUser object :-\n",Object.entries(tinderUser));



// 9) hasOwnProperty("x") :- To check if an object has a specific key or not
// x = key_name
// x must be inside quotes
//returns a boolean

console.log("\n\nChecking if 'isLoggedIn' key is present in tinderUser object :-\n", tinderUser.hasOwnProperty("isLoggedIn"));

console.log("Checking if 'isMarked' key is present in tinderUser object :-\n", tinderUser.hasOwnProperty("isMarked"));