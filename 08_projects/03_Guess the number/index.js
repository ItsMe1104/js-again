//Gives decimal number between 0 and 1 
console.log(Math.random());

//Gives decimal number between 0 and 100
console.log(Math.random()*100);

//Gives decimal number between 1 and 100
console.log(Math.random()*100 + 1);

//Gives integer number between 1 and 100
console.log(parseInt(Math.random() * 100 + 1));



//Lessons To Learn :-
//How to use the game over and restarting feature and how to newly create elements and use them
//How to divide our task in subparts into functions

//generating random number
let randomNum = parseInt(Math.random() * 100 + 1);
console.log(randomNum);

//sumbit button
const submit = document.querySelector("#subt");
//userInput
const userInput = document.querySelector("#guessField");
//all guesses
const guessSlot = document.querySelector(".guesses");
//chances remaining
const remaining = document.querySelector(".lastResult");
//message low or High
const lowOrHi = document.querySelector(".lowOrHi");
//message to start over
const startOver = document.querySelector(".resultParas");


//VVI :- To create a button from p tag to restart the game on clicking the start button
const p = document.createElement("p");

//will contain all the guesses in an array
let prevGuess = [];

//Number of chances
let chance_count = 10;

//Very important for games that we set a variable that decides if we could play further or not.
let playGame = true;


// Starting the flow only if we can play the game
if(playGame === true)
{
    //play will start when user enters the value 
    //and enters the submit button
    submit.addEventListener("click",(e)=>{

        //to prevent the userInput from sending value into database
        e.preventDefault();

        //user's guess
        //remeber to turn it into integer
        let guess = parseInt(userInput.value);
        console.log(guess);

        //to check if user gave the number within its boundaries
        validateGuess(guess);
    });
}


//to check if user gave the number within its limits
function validateGuess(guess) {
    if(isNaN(guess))
    {
        alert("Please enter a valid number");
    }
    else if(guess > 100)
    {
        alert("Please enter a number less than 100");
    }
    else if(guess < 1)
    {
        alert("Please enter a number more than 1");
    }
    else   // valid guess
    {   
        //put it in guess array
        prevGuess.push(guess);

        //check if its his last guess
        if(chance_count === 1)
        {
            //to check if the number is equal to randomNum or not / in last chance ... if it is then print and endGame
            if(guess === randomNum)
            {
                displayMessage(`You Won.`);
                endGame();
                return;
            }

            // If the last guess is also incorrect than print message and endGame to disable the input field and then subsequently call startGame.
            chance_count--;
            remaining.innerHTML = `${chance_count}`
            displayMessage(`Game Over. Random number was ${randomNum}.`);
            endGame();
        }
        else
        {
            checkGuess(guess);  
            displayPrevGuessAndRemChance(guess);
            //Dont diplay any message till we check if the guess is correct or less or more            
        }
    }
}



//To compare the input value wrt to randomNumber and send the message accordingly
function checkGuess(guess) {
    if(guess === randomNum)
    {
        displayMessage(`You Won.`);
        endGame();
    }
    else if(guess < randomNum)
    {
        displayMessage(`Guessed number is TOOO low.`);
    }
    else if(guess > randomNum)
    {
        displayMessage(`Guessed number is TOOO high.`);
    }
}


//To update and display the span tags of previous guesses and remaining chances
function displayPrevGuessAndRemChance(guess) {
    //flushing out current userInput value because its already got used
    userInput.value = '';

    //Instead of showing whole array of guesses
    guessSlot.innerHTML += `${guess} `

    //Update chances and decrement by 1 before updating in the span tag
    chance_count--;
    remaining.innerHTML = `${chance_count}`
}



//To display the message that we receive in the span tag
function displayMessage(message) {
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}



//To end the game and add a start button inorder to restart the game again 
function endGame() {


    userInput.value = '';
    
    //To end the game first disable the input button to input anymore value
    userInput.setAttribute("disabled", "");
    
    //To add a className to newly created button
    p.classList.add("button")
    
    //Changing the p tag to H2 tag that will act as a button for restarting
    p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
    
    //To add the new h2 button as the last child
    startOver.appendChild(p);
    
    //make play Game boolean as false till its again made true on restarting the game
    playGame = false;
    
    //To give chance of restarting new Game if newly created startButton is clicked
    newGame();
}


function newGame() {

    //to start the new Game on "Start new game" button
    const newGameButton = document.querySelector("#newGame");

    // reset all the values and then again start inputing new values 
    newGameButton.addEventListener("click",function(e) 
    {
        //new random Number for new game
        randomNum = parseInt(Math.random() * 100 + 1);
        
        //make guessArray empty
        prevGuess = [];

        //Again replenish the chances
        chance_count = 10;

        //Make the previous guesses span tag empty
        guessSlot.innerHTML = '';
        
        //Make the chnaces span tag back to 10
        remaining.innerHTML = `${chance_count}`;

        //Again enable the User Input field which was earlier disabled
        userInput.removeAttribute("disabled");

        //Remove the start button which was created on Game Over
        startOver.removeChild(p);

        //Again make the playGame boolean = true for starting new game again
        playGame = true;
    });
}
 