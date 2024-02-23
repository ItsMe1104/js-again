// JS is a sequentially run language i.e line by line
// But sometimes we ignore sequential programming and move towards asynchronous programming
// Same is the case with browser events. These are invoked on some activity only (mouse press, key press, drag and drop, etc) and not according to the squential code.



//1) How to add EventListeners to our elements.

// a) Use onclick="()=>{}", ondblclick="()=>{}", onchange="()=>{}" etc inside that elements tag only

//  <h1 onclick="alert('owl')"> Hi </h1> 

// This is not a feasible approch for apps that would scale alot
// In React when we apply onClick ="()=>{}" , it is already scalable code hence, do not confuse with that





//b) Select the element and use onclick= () => {} event in JS file only

//  document.getElementById("owl").onclick =()=> 
//  {
//     alert("owl clicked");
//  }

// onclick event doesnt give us most of the info and other abilities like propogation;
//hence gives less features




//c) BEST APPROACH
// select and use .addEventListener("a",b,c)
// a = event name we are listening in string
// b = callback function to perform the task on that event. It gives a by default event object which can use as the callback's first parameter.
// c = event propogation info.  {by default its false, hence no need to write the third parameter in most cases}

/*
    document.getElementById("owl").addEventListener("click",()=>{
        alert("Owl clicked via addEventListener()")
    }, false)
*/

document.getElementById("owl").addEventListener("click", (e)=>{
    console.log("owl");
})

//eventobject:- It has various properties related to the event. Mainly regarding browser events and environment events like position etc.

//Properties to know
// type, timestamp, preventDefault
// target, toElement, srcElement (V.V.I), currentTarget
// clientX, clientY, screenX, screenY
//altkey, ctrlkey, shiftkey, keyCode

//type-> keyboard type events, mouse type events
//timestamp :- to change time,date activities
// preventDefault  :- to prevent the default behaviour of a tag, like navigating using anchor tag can be stopped, etc

//keyCode :- to know which key got pressed from keyboard



//d) attachEvent() event :- now depreciated

//e) on() :- in Jquery




// ***************************************************************************************************************************************************




//2) Event Propogation (third parameter of addEventListener):-

//Two types :-
//a) Event bubbling :-  (bydefault)
//b) Event capturing :-


//a) Event bubbling :- 
// just like bubble it goes from (down to up)

//Let's say we had an event listener on the parent, hence if that event occurs on any of its child that eent will be triggered
//e.g -> if some eventListener is attached to <ul>, then if that event occurs to any of its li then that event will be triggered


//hence if there is some event attached to parent, and some other event attached to its child, then,

// i) on parent event :- only parent event happens


// ii) on child event :- both parent and child event will happen


document.getElementById("images").addEventListener("click", ()=>{
    console.log("Parent(ul) here");
})

//for event bubbling
const river = document.getElementById("river");

//for event capturing
const photoshop = document.getElementById("photoshop");


// order:- (depends on event propogation)

// a) if event bubbling :-
// third parameter of child EventListener is false, or by default
// first child event then parent event

river.addEventListener("click",(e)=>{
    console.log("Child(river) here using event bubbling.");
},true);




// b) if event capturing :-
// third parameter is true
// first child event then parent event

photoshop.addEventListener("click",(e)=>{
    console.log("Child(photoshop) here using event capturing.")
},true);