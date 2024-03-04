const time = document.getElementById("clock")
let i =0;
setInterval(()=>{

    //Dont use Date.now as it will give current timestamp and not current time.
    const date = new Date();

    //To get time out of the whole Date
    //Use .toLocaleTimeString()
    time.innerHTML = date.toLocaleTimeString();
},200)

//time interval 200 milliseconds as we want the time to load quickly as our website reloads