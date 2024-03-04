//1) Fetch() API :- use to fetch response from network stream
// For syntax :- Go to the last three parts of 03_promise.js file in the same directory.

fetch("https://api.github.com/users/ItsMe1104")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    return data.public_repos;
})
.then((pub_rep)=>{
    console.log(pub_rep);
})
.catch((error)=>{
    console.log(error);
})



//Fetch API came to Node JS back in Feb 2022
//Earlier we use to get reponse through the XMLHttpRequest that is the XhrRequest
//It was really difficult to work with JS framework like Jquery
//Hence the fetch() API came as a successor of XMLHttpRequest
//Fetch Api was earlier very heavily dependent on Browser and NodeJS didnt have browser and its APIs along with AbortController to cancel the request send by fetch()
//Node JS hence wrote its own Stream API's and then included fetch()


//Fetch() :- It is a global method used to start the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available



//INTERVIEW QUESTION
//-> If we requested through a promise and we got an error code :- 404
//Where will it be headed? resolve or reject?
// --> Resolved as a response
//fetch() promise does not reject on HTTP errors
// A then() handler must check the response and its properties
// Error is only in the case browser was not able to request




//2) How to send data using fetch()
//Like sending username, password or POST request
//use the second parameter of fetch()
//mostly data will be send as an Json of object

// fetch("URL", {b})
// b --> data in form of object itself

//creating json
//same like object but even the keys need to be string
const headers = {
    "Name" : "Hrithik",
    "Age" : 23
}

fetch("https://api.github.com/users/ItsMe1104", {headers});
 



//3) In event loop, all the asynchronous callbacks made through fetch() does not go to the normal task Queue which makes us look JS is multi threaded along with the Event loop

//Instead they go to a special type of priority queue called Micro Task queue (also called fetch queue)

//Hence these callbacks are executed before than the callbacks from task queue (provided they execute after same interval; if their wait interval is not same then first come first serve basis)




//4) Internal mechanism of fetch()

// fetch() divides its mechanism in two parts

// a) Data, OnFulfilled[], onRejected[] :- to reserve space in memory and variables 
// b) Web Browser / Native Node :- to handle browser/ node API request


//Mechanism :-
// const response = fetch("URL")

//i) First (a) part executes
// It reserves space for an unaccessible variable , OnFulfilled[] and OnRejected[] arrays
//OnFulfilled[] is also unaccessible and made specially for resolve
//OnRejected[] is also unaccessible and made specially for reject


//ii) Now the part (b) starts
// Fetch() accesses a Web based API or Node based API
//From his API a network request is made whose resources can only be provided by the Browser or any other runtime environment like Node
//From this network request, the request is sent which can either reach the network or not reach
//If reached, and any response is sent by the network (even any HTTP error like 404),  it goes to the OnFulfilled[] as resolved
//If the request cannot reach the network, then the error goes to the OnRejected[] as rejected


//iii) The data that is undefined in part(a) is now fulfilled with the data from either Onfulfilled[] or OnRejected[] through their specific functions
// Once the data is fulfilled now it returns the fulfilled promise to the Global memory where the fetch() was referenced. (here response variable)



