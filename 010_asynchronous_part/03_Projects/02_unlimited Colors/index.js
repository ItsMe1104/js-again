

const arr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

let start_coloring;
start.addEventListener("click",()=>{
    
    if(!start_coloring)
    start_coloring = setInterval((e) => {    
    
    let hex_value = "";
    for(let i = 0; i < 6; i++)
    {
        let random_index = Math.floor(Math.random()*16);
        hex_value += arr[random_index];
    }
    document.body.style.backgroundColor = `#${hex_value}`
    },500);
})


stop.addEventListener("click",()=>{
    clearInterval(start_coloring);

    //After every clearInterval, always flush out the setInterval reference so that edont need to overwrite it with new setInterval everytime we click on start Button
    //Very Good Practice for industry
    start_coloring = null;


    //Since we will be making it null, hence we cannot always put a safety check while resassigning it in the start eventListener 
})






