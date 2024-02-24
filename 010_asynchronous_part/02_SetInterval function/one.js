//1) setInvertal() :- 
//First it waits for a time interval to do a task and then,
// It continues to repeat the task after certain interval of time as specified
//It runs indefintely unless stopped using clearInterval();

//Syntax :-
// clearInterval(a(),b,c)
// a -> handler / callback
// b -> time in milliseconds after which the task assigned by the callback is to be repeated
// c (optional) -> a third paramenter which we can receive in our callback to perform some task 



//One way :- To define the callback within setInteval()
/*
setInterval(() => {
    console.log("Hrithik");
},3000)
*/




//Two way :- To define the callback function outside and pass its reference to the setInterval()

/*
const printMyName = ()=>{
    console.log("Hrithik");
}
setInterval(printMyName,3000)
*/




//Third Way :- We can also pass a third parameter in setTimeout which we can receive in our callback function and use it as a variable

/*

const printMyName = (str)=>{
    console.log(str,"Hrithik");
}
setInterval(printMyName,3000, "HIIIII")

*/




//***************************************************************************************************************************************************************************************************** */


//2) clearInterval() :- It is used to stop the continuous repitition of setInterval()

//Syntax :- 
// clearInterval(a)
// a -> reference to the setInterval function

const printMyName = (str)=>{
    console.log(str,"Hrithik");
}
const print = setInterval(printMyName,3000, "HIIIII")

clearInterval(print);

//But then there is no point of using setInterval if we direcly use clearInterval after it. 
//Hence we should use clearInterval with some eventListener mostly



// ***************************************************************************************************************************************************************************************************





//4) Using clearInterval with EventListener


//Assignment to start printing your name along with current date when we click on Start button and to Stop it when we click on Stop button

const start = document.querySelector("#start");

//VVI :- that we declare the reference_name of setTimeout() outside the eventListener to make it global, else we will not be able to access it in clearInterval() because of its limited scope;
let print_name_date;


//To start printing
//Target the start button
start.addEventListener("click",()=>{
    console.log("Start clicked");
    print_name_date = setInterval(()=>{
        console.log("Hrithik",Date.now());
    },500)
})


//To stop printing
//Target the stop button
const stop = document.querySelector("#stop");
stop.addEventListener("click",()=>{
    console.log("Stop clicked");
   clearInterval(print_name_date)
})

