//Class in JS was introduced in after ES6 as a syntactical sugar
//Behind the scenes,'new' keyword, prototypal inheritance works only.

//1) Making a class 
// ==> use keyword 'class'
// ==> no need to declare the variables here
// ==> just initialize the required variables using constructor
// constructor is automatically invoked when an object of that class is creates
// properties and methods can be initialized in a class


class User {
    constructor(username, email, password)
    {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}123efg`;
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}


const abc = new User("abc", "abc@gmail.com", "abcdefg")

console.log("Through class :-",abc.encryptPassword());
console.log("Through class :-",abc.changeUsername());




//behind the scenes
//Although its a function but it also behaves like an object

function User2(username,email,password) {
    
    this.username = username;
    this.email = email;
    this.password = password;
}

User2.prototype.encryptPassword = function(){
    return `${this.password}123efg`;
}

User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const hrithik = new User2("hrithik", "hrithik@gmail.com", "123abcd");


console.log("Through function :-",hrithik.encryptPassword());
console.log("Through function :-",hrithik.changeUsername());
