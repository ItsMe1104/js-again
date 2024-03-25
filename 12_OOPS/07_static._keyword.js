//static is used to stop the access of a class's method or property to that class's object
// Even though on inheritance, these static property/methods will be  inherited by the base class but cannot be accessible by the base class's object too

class User {
    constructor(username)
    {
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME : ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}



const hrithik = new User("hrithik")
// console.log(hrithik.createId());   //wont be able to access createId() since it is static


class Teacher extends User {
    constructor(username, email)
    {
        super(username)
        this.email = email;
    }
}


const Ritzzz = new Teacher("Ritzzz", "Ritzz@gmail.com");

Ritzzz.logMe();    //will work since the logMe() is not static

// console.log(Ritzzz.createId());  // wont work since createId() is static, hence it wont be accessible using inheritance also.