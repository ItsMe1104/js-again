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
        console.log("\n1) Async task is completed");
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
        console.log("\n2a) Async task2 is complete");

        resolve();
    }, 1500);

    
})

promiseTwo.then(()=>{
    console.log("PromiseTwo consumed");
})





//************************************************************************************************************************************************ */


//2 b) Without referencing a promise

new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("\n2b) Async task");
        resolve();
    }, 2000);
})
.then(function() {
    console.log("Async 2 resolved");
})





// ************************************************************************************************************************************************************************************************************




//3) Passing data received in the asynchronous operation like in network call
//the data received will always be passed using resolve()
//This data will always be received by then()

const promiseThree = new Promise((resolve,reject)=>{

    setTimeout(() => {

        console.log("\nAsync task 3 :-");
        resolve({username: "Hrithik", email : "hrithik_shaw@gmail.com"})
    }, 2500);
})

promiseThree.then((data)=>{
    //printing the object
    console.log(data);
})



// ******************************************************************************************************************************************************************************************************************************************




//4) Returning more refined value from then()
//Callback Hell

// If we want to return some value from then(), it will go to the next then()
// Hence we can create a chain of then() ... refining the data at each step
/*
.then(()=>{
    ...
    return user.name;
})
.then((name)=>{
    ...
    console.log("Received name")
})
*/


// We cant store the value returned by then() in a variable 
/*
    //WONT WORK :-

    const username = promiseFour.then((data)=>{

        return data.username;
    })

    console.log(username);
*/


const promiseFour = new Promise((resolve,reject)=>{

    setTimeout(() => {

        console.log("\nAsync task 4:-");
        resolve({username: "Hrithik", email : "hrithik_shaw@gmail.com"})

    }, 3000);
})



promiseFour.
then((user)=>{
   
    //printing the object
    console.log("--> Whole User in first then() :- \n",user);

    //printing only username :- will work
    console.log("--> Only Username from first then() :- ",user.username);
   
    //to return
    return user.username;
})
.then((username)=>{
    console.log("--> Username in second then() :- ",username);
})





// ***************************************************************************************************************************************************************************************************************************************************



// 5) PROMISE GETTING REJECTED
//i.e some error happened while doing the asynchronous task
//and the promise could not be completed

//We will check if some error occured or not...
// If it hasn't then resolve() will send its data to then() normally
// If it has then reject() will send some message or error type to the catch()

//catch block is attached after the last then()
// catch(a)
// a --> callback

//There can only be one catch() block and many then()
/*
.then(()=>{
    ...
})
.catch((error)=>{
    ...
})
*/

const promiseFive = new Promise((resolve,reject)=>{

    setTimeout(() => {
        let error = true;
        console.log("\nAsync task 5:-");

        if(!error)
        {
            resolve({username: "Hrithik", email : "hrithik_shaw@gmail.com"})
        }
        else{
            reject("Error : Something went wrong")
        }
    }, 3500);
})


promiseFive
.then((data)=>{
    //printing the object
    console.log("--> Whole User in first then() :- \n",data);

    //to return
    return data.username;
})
.then((username)=>{
    console.log("--> Username in second then() :- ",username);
})
.catch((error)=>{
    console.log("Error received :- ",error);
})



// ***************************************************************************************************************************************************************************************************************************************************

// 6) Finally() block
//To know that our promise has ended
//And the promise got either rejected or resolved

//This block is after the catch()
// finally(a)
// a --> callback

//If defined, it will always get executed
/*
.then(()=>{
    ...
})
.then(()=>{
    ...
})
.catch(()=>{
    ...
})
.finally(()=>{
    ...
})


*/

const promiseSix = new Promise((resolve,reject)=>{

    setTimeout(() => {
        let error = false;
        console.log("\nAsync task 6:-");
        if(!error)
        {
            resolve({username: "Hrithik", email : "hrithik_shaw@gmail.com"})
        }
        else{
            reject("Error : Something went wrong")
        }
    }, 4000);
})


promiseSix
.then((data)=>{

    //to return
    return data.username;
})
.then((username)=>{
    console.log("--> Username in second then() :- ",username);
})
.catch((error)=>{
    console.log("--> Error received :- ",error);
})
.finally(()=>{
    console.log("--> The promise is either resolved or rejected. In finally()");
})

