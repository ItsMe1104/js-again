// In global execution context :-
// --> Window access (Browsers) --> Window object
// --> Node environment --> empty object {}


//Using 'call' keyword


function SetUsername(username)
{
   //complex DB calls
    this.username = username;
}


// make a function which takes username, password and email
// email and password will be set by itself
// username will be set by SetUsername function
function User(username, password, email)
{
    SetUsername(username)
    
    this.email = email;
    this.password = password;
}

//very important to use 'new' inorder to get separate instance of user1
const user1 = new User("Hrithik", "abcd", "abcd@gmail.com")
console.log("User :-", user1);

//Problem :- 
// ==> We couldnt get username in the user1
// ==> this is because user was holding the reference of User()
// ==> Setusername() was called and the username was set inside its local variables
// ==> It was refering to its own context using 'this'
// ==> As soon as its task got over all its variables got flushed out
// ==> Hence, inorder to hold the reference of all the variables used by SetUsername()
// ==> We have to use the call keyword
// ==> We have to pass User() function's 'this' to the SetUsername() so that it uses the context of User() function and not its own context to set the variables
// ==> 'this' will be send as the first parameter of the function call involving call keyword

//Syntax :-
// Inside calling function

// called_func.call(this, variable_1, variable2...)


function SetUsername2(username)
{
   //complex DB calls
    this.username = username;
}

function User2(username, password, email)
{
    //using call
    SetUsername2.call(this,username)
    
    this.email = email;
    this.password = password;
}


const user2 = new User2("Ritzzz","jklm","jkl@abcd.com")
console.log("User :-", user2);