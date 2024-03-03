//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//operations like network stream, file access from system.
//promise future mei jaake complete hota hai

//It is an object, hence to create it use "new" keyword


// A promise is in one of these states 


// pending :- initial state, neither fulfilled nor rejected.
// fulfilled :- meaning that the operation was completed successfully
// rejected :- meaning that the operation has failed.



//1) Creating promises :-
// Promise(a(b,c){...})
// a --> callback function
// b --> resolve :- promise is fulfilled
// c --> reject :- promise is not fulfilled

const promiseOne = new Promise(function(resolve, reject) {
    //Do an async task
    //DB calls, cryptography, network 

    setTimeout(() => {
        console.log("Async task is completed");
    }, 1000 );
});



//************************************************************************************************************************* */



// 2) Consuming the promise
// .then() is used to consume promises
// .then(a)
// a --> callback


// . then() has clear relation with resolve
//Inorder to connect the then() and resolve
// --> we use the resolve() method inside the created promise
//resolve method can also pass data to the then function

//first the callback inside the created promise will run and then only the callback inside then() will run


const promiseTwo = new Promise((resolve,reject)=>{
    
    setTimeout(() => {
        console.log("Async task is complete");

        resolve();
    }, 1000);

    
})

promiseTwo.then(()=>{
    console.log("Promise consumed");
})