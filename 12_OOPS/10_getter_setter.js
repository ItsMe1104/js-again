class User{
    constructor(email,password)
    {
        this.email = email;
        this.password = password
    }
}

const hrithik = new User("h@hrithik.ai", "abcd")

console.log(hrithik.password);



//For fine grain control we use, getters and setters :-
//To sometime return encrypted password or no password


//getters and setters :-
//They are by default present in every class, but they show their default behaviour unless customized
//All the properties that we write inside class, we can make separate getters and setters for them

//NOTE :- 
// If we define getter for a property, we have to also define setter for that propertywd


//Problem while using constructor and getter-setters together
// Race Condition :- Maximum call stack size exceeded
// Because constructor and getter-setters keep on continuously setting the values again and again

class User2{
    constructor(email,password)
    {
        this.email = email;
        this.password = password
    }

    get password(){
        return this.password.toUpperCase();
    }

    set password(value)
    {
        this.password = value;
    }

    get email(){
        return this.email;
    }

    set password(value)
    {
        this.email = value;
    }

}