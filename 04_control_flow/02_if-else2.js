// 1) LOGICAL OPERATORS:-
// a) AND (&&) :- 
    // all conditions true = true
    // even one condition false = false
// b) OR (||) :-
    // even if one condition true = true
    // all condition false = false




// 2) Short-circuiting with logical operators

// a) AND :- If && operator finds any condition as false from LHS then it will directly return false without checking other conditions to its right


// b) OR :- If || operator finds any condition as true from LHS then it will directly return true without checking other conditions to its right




//3) Using if-else statement with Logical conditions
// Used when we need to check multiple conditions together

console.log("\n3) Using logical operators with if-else block :-");

const userLoggedIn = true;
const debitCard = false;

//a) Using &&
if(userLoggedIn && debitCard)
{
    console.log("&& :- Both logged in and debitCard are true");
}
else{
    console.log("&& :- Both logged in and debitCard are not true");
}


//b) Using ||
if(userLoggedIn || debitCard)
{
    console.log("|| :- Atleast one among loggedIn and debitCard are true");
}
else{
    console.log("|| :- Both logged in and debitCard are false");
}



// c) Using multiple && and || in one condition
let loggedInFromGoogle = true;
let loggedInFromEmail = true;
let loggedInGuestUser = true;


// && multiple times
if(loggedInFromEmail && loggedInFromGoogle && loggedInGuestUser)
{
    console.log("&& && :- All are logged in from all three Google,Email,GuestUser");
}
else
{
    console.log("&& && :- Not logged in from any one of the three Google,Email,GuestUser");
}


// || multiple times
if(loggedInFromEmail || loggedInFromGoogle || loggedInGuestUser)
{
    console.log("|| || :- Atleast one logged in from Google,Email or GuestUser");
}
else
{
    console.log("|| || :- Not logged in from any of the three Google,Email,GuestUser");
}




// d) Using && and || together
// remember to use parantheses to avoid unavoidable disturbances
loggedInFromGoogle = false;
loggedInFromEmail = false;
loggedInGuestUser = true;

if((loggedInFromEmail && loggedInFromGoogle) ||loggedInGuestUser)
{
    console.log("&& || :- Logged in from both Email and Google or logged in from GuestUser");
}
else
{
    console.log("let :- Not logged in from any one of the three Google,Email,GuestUser");
}
