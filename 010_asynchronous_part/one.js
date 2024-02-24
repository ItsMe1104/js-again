//Asynchronous code in JS

//setTimeout() :- It is a method which also calls an API
//The window object in the console has options like setInterval, setTimeout, clearInterval, clearTimeout which are mapped with their respective functions 
//Hence these functions can only be found through browser and other other APIs also like in Node, Deino, etc.
//JS engine only contains a call stack and a memory but these functions go through the event loop




//1) Using setTimeout(a,b)
//It helps us to perform a task after a certain time interval.
//It only runs once unlike setInterval which keeps on running.

//a -> handler (a function without name) .... or a simply a callback function
//b -> no. of milliseconds we want to wait before the execution of our callback function starts  
// 1 second = 1000 millisecond


//one way :- defining callback inside timeout
setTimeout(()=>{
    console.log("i) Learner is Hrithik");
},2000)

//Note it only runs once



//2nd way :- using a reference of function inside timeout
const sayHrithik = function(){
    console.log("ii) Learner is Hrithik");
} 
setTimeout(sayHrithik, 3000);




// **********************************************************************************************************************************************************************************************************



//2) Changing elements inside setTimeout()
//e.g :- change the heading to "Welcome Everyone" from "Javascript Learnings" after 3 second of loaded website
//Same process happens when we see a popup for ads after few seconds of us loading a website 

const changeHeading1 = ()=>{
    document.querySelector("h1").innerHTML = "Welcome Everyone";
}
//Now use this function as callback to setTimeout function

setTimeout(changeHeading1,3000);




// **********************************************************************************************************************************************************************************************



//3)clearTimeout() :-
// Use to stop the setTimeout function
//It removes the callback function of that setTimeout from the task queue.

// Syntax :-  clearTimeout(a);
// a -> reference of the setTimeOut function we are trying to stop

//e.g :- 

const makeItStop = setTimeout(() => {
    console.log("3) I needed to be stopped");
}, 2000);

clearTimeout(makeItStop);
//Note :- we have to send the reference of the whole setInterval() and not of the callback inside it




// ***********************************************************************************************************************************************************************




//4) Using clearTimeOut with EventListener :-
//But whats the point of than using setTimeout() if we have to define clearTime()?
// Hence define clearTimeout() only in the happening of some event

//e.g :- Change the 2nd heading of h2 after 3 seconds from "The Second Heading will change after 3 seconds" to "Heading 2 Changed"
//But dont change if the user clicks on the stop button before 3 seconds

const changeHeading2 = ()=>{
    document.querySelector("h2").innerHTML = "Heading 2 Changed";
}

const heading_change = setInterval(changeHeading2,3000);


document.querySelector("#stop").addEventListener("click",()=>{
    clearTimeout(heading_change);
    console.log("Stopped");
})
