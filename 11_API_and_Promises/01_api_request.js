//API is nothing but the talking language between two systems.
//It can be between frontend and backend.
//It can be between server and database, etc
//It can also be between two languages
//For testing with api, search api.github.com/users/ItsMe1104
//randomuser.me

//Use Json formatter to add this json data and format and beautify it according to our need (Tree is best )

/*

1) XML HTTP request
//Used AJAX programming

States in AJAX :-
 
0 --> UNSENT : Client has been created. open() not called yet.
1 --> OPENED : open() has been called.
2 --> HEADERS_RECEIVED : send() has been called, and headers and status are available.
3 --> LOADING :	Downloading; responseText holds partial data.
4 --> DONE : The operation is complete.
*/


//XMLHttpRequest :- a class with ready states that is used to send request and receive response

//Make a new object of this
const xhr = new XMLHttpRequest();

//requests are made through open("a","b")

// a --> method (get/post/etc)
// b --> url of api

const requestUrl = "https://api.github.com/users/ItsMe1104";
xhr.open("GET",requestUrl)



//To call open() we, generally use send() method and then only the request will be made

xhr.send();



//To track states we have to use
//onreadstatechange property of XMLHttpRequest object
//It is very important to keep track to know if our request has been received and response has been sent or not
//Last state is 4 and state 1 is not shown as this property only works when the state is changed
//It this property is referenced to our function

/*
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);

    
}
*/


//************************************************************************************************************************** */


//To get our response from the server in Text format (mostly)

// use this.responseText or XMLHttpRequest.responseText inside the function
//But only use it  when the state has reached 4

//   xhr.onreadystatechange = function()
//   {
//       console.log(xhr.readyState);

//       if(xhr.readyState == 4)
//       {
//         if(xhr.readyState == 4)
//         {
//           console.log(this.responseText);
//         }
//       }
//    }



// Since this response is in form of string
// Inorder to access any key's value using dot operator we must convert it into JSON first 
// use JSON.parse(string_data) method

xhr.onreadystatechange = function () {
  
  if(xhr.readyState == 4)
  {
    console.log("Type of responseText :- ",typeof this.responseText);
    const data = JSON.parse(this.responseText)

    console.log("followers :- ",data.followers);
  }
}





//Story about console.log()

// console.log() or the console api is not the part of Javascript
// Similarly document object is also not the part of core Javascript
//console.log() is actually a debugging tool injected by runtime environment

