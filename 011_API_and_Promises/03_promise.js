// 1)  ASYNC & AWAIT in promises

//Instead of handelling promises using then() or catch()
//We can use async await keywords
//async - await works such that it waits for the work to be completed and then only moves forward with the response
// It is mostly used during database operations where we only move forward if the database connection is successful


const promise_one = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        console.log("\nAsync task 1:-");

        if (!error) {
            resolve({ username: "Hrithik", password: "123" });
        } else {
            reject("Error: Something went wrong");
        }
    }, 1000);
});


//async keyowrd is used before the function used to consume promise
//await keyword is used before the asynchronous task which like a promise which will take time (like response or while using .json() )
//Since async await doest catch error by itself
//We have to use try-catch block to handle the error

//every work will be done inside try block
//catch block here is same as catch() we used earlier
//here catch is a method receiving error info while there it was a mathod receiving callback

async function consumePromiseOne() {
    try 
    {
        //wait till we get response from the promiseS
        const response = await promise_one;
        console.log("Response inside try block :- ",response);
    } 
    catch (error) 
    {
        console.log("Response by catch block :-",error);
    }
}

//atlast dont forget to call the function
consumePromiseOne();



//************************************************************************************************************************************************************************************************** */


// APPLICATION of Promises :-


// 2) FETCHING data from Link
// How to fetch data from a link and get response from it


// FETCH():- 
// Use fetch() to get response
// It returns a promise station if the response is resolved or rejected

//  fetch("a");
//  a --> URL from where data will be requested 



// a) Using fetch with async await

// since fetch() itself returns a promise, hence no need to create a promise by ourselves
// Instead we will just consume
// Hence use fetch() where we need a response and add await infront of it since its a promise

// response is mostly in string
// hence converting it into json inorder to access its values
// use .json()

// It also is an asynchronous function to convert string to json
// Hence use await while converting to json too using .json()


async function getMyGithub() {
    try {

        console.log("2) Fetching along with async-await :-");
        const response = await fetch("https://api.github.com/users/ItsMe1104");

        //response is mostly in string
        // hence converting it into json inorder to access its values
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}
  getMyGithub();



// b) using fetch with .then() and catch()
//Since fetch() itself returns a promise, hence treat it as a promise
//No need of async-await as we will use then(), catch() block and they execute as sequential blocks

// Note: whenever we use .json() to convert response string to json
// we must return it in the next then() and use the data there


fetch("https://api.github.com/users/ItsMe1104")
.then((response)=>{
    console.log("2b) Fetching along with then-catch :-");
return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
