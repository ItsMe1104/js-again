//1) Inheritance :-

// To inherit a class we use the 'extends' keyword 
// Hence, all the properties and methods will be inherited by the base(child) class 


// Syntax :-

/*
class child_class extends parent_class{
    // ... 
}
*/




//2) Super()

//we use 'super()' to invoke 'call'  behind the scene

//Syntax :-

// super(a,b,c);
//a,b,c = variables/properties we want to extract from parent class by sending our current class's context using current class's this.

//it will by default send the current context's 'this' to the class which is extended   


class User{
    
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}


class Teacher extends User{
    
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}



console.log("From User class :-");

const User1 = new User("Ritzzz")
User1.logMe();
// User1.addCourse();    User doesnt have access to any of Teacher class's properties or methods



console.log("\nFrom Teacher class :-");

const hrithik = new Teacher("hrithik", "hrithik@gmail.com", "123456")
hrithik.addCourse()
hrithik.logMe()        // will work as logMe() is inherited by Teacher class from User class




//*********************************************************************************************************************************************************************************************************************************** */


//3) instanceof Operator

// :- Use to check if an object is an instance of a particular class or not
// returns a boolean
// NOTE :- The base class if inheriting parent class, then the object of base class is also considered an instance of parent class


//e,g :- hrithik is an instanceof its own class
console.log("\n", hrithik instanceof Teacher);


//e,g :- hrithik is an instanceof its parent class
console.log("\n", hrithik instanceof User);


