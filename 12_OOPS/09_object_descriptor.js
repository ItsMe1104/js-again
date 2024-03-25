// getOwnPropertyDescriptor()
//==> tells some hidden things about the objects



//Question :- Can we overwrite the value of Math.PI ?
// ==> NO, but why?
//e.g :-

console.log(Math.PI);
Math.PI = 4;            //trying to change
console.log(Math.PI);   //didnt change


// Reason :- Math is a object behind the scene in JS, while PI is the property
console.log(Math);    //Object


//There are some hidden properties of Object which we dont see in the console or node terminal
// ==> to see those properties, we need to use Object.getOwnPropertyDescriptor()

//Syntax :-
// Object.getOwnPropertyDescriptor(object_name,"property_name");
//It returns the hidden properties in terms of an object

const descriptor = Object.getOwnPropertyDescriptor(Math,"PI");
console.log(descriptor);

//hidden properties are :-

//        {
//            value: 3.141592653589793,
//            writable: false,
//            enumerable: false,     //looping
//            configurable: false
//         }


// hence the 'writable' property has been turned false and has been hardcoded in C++ that we can never make them writable or enumerable or configurable


//********************************************************************************************************************************************************************************************************************************************************************************************************** */


//2) How to alter these hidden properties in our created objects


const chai = {
    name : "gingerchai",
    price : 250,
    isAvailable : true,

    oderChai : function() {
        console.log("Chai received");
    }
}


// Every object has its own descriptor properties
const descriptor2 = Object.getOwnPropertyDescriptor(chai, "name")
console.log("\n\n Chai Object's descriptor properties :-");
console.log(descriptor2);



//To alter the descriptor properties use :-
// Object.defineProperty(a,"b",{c})

// a ==> obj_name
// b ==> property_name
// c ==> object to define our values in the descriptor properties as a key value pair

//Note :- whichever properties we define will change, rest will stay the same


Object.defineProperty(chai, "name", {
    writable: false,
    enumerable : false,
})

console.log("\n\nAfter altering the writable & enumerable properties :-");
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

//Now we cannot alter the value of name property (writable)
//And we cannot even loop on the "name" key-value pair... i.e :- while looping on the key-value pairs of the object, the "name" key-value pair will be ignored


chai.name = "Blue Tea";  //trying to change the value of name property in name

console.log("\n\nValue of 'chai.name' even after updating is :-", chai.name);   //gingerchai    :- hence cannot be overwritten


//To check for looping
//using for-of loop


//To iterate in objects using for-of loop, we must use Object.entries(obj_name) instead of obj_name in for-of loop

console.log("\n\nTrying to iterate on chai object :- ");

for (const [key,value] of Object.entries(chai)) {
   
    //very important check to ignore function properties
    //Industry standard check
    if(typeof value != 'function')
    {
        console.log(`${key} : ${value}`);
    }
}


//Hence to make all the properties non-iterable, we have to define them one by one in Object.defineProperty() or use Object.defineProperties() to define them together
