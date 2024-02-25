//Gives decimal number between 0 and 1 
console.log(Math.random());

//Gives decimal number between 0 and 100
console.log(Math.random()*100);

//Gives decimal number between 1 and 100
console.log(Math.random()*100 + 1);

//Gives integer number between 1 and 100
console.log(parseInt(Math.random() * 100 + 1));

const randomNum = parseInt(Math.random() * 100 + 1);


const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");

const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");

const lowOrHi = document.querySelector("lowOrHi");
const startOver = document.querySelector("resultParas");

 