//1) To target the body of HTML document 
// So that we can apply changes to the body
//Treat it like an element only
const body = document.querySelector("body");


//2) We use event listener whenever we want something to change onset of an event like mouse click, key press, form submit,etc

//3) To add eventListener to a particular element
// we use :- target_ele.addEventListener(function(e){...})
//e -> the event object which gives various details regarding the event and the target element
// e.target -> gives the target_element as a whole on which eventListener is applied

 

//4) If we applied event listener on a bunch of items in a loop and we want every element should respond to the event differently 
// Then we can define separate "if conditions" inside the callback of event listener.
// so that the event listener can function differently for different elements
//or add separate eventListener to individual elements





//5) 






//since we have defined event listener only once for all elements (here buttons) inside the loop and not individually hence, we have to give conditions when the individual elements will response. 
//If all buttons gave same response then there was no point including conditions, which is not the point here.