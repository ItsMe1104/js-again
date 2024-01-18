//1) this :- tells us about the current context that is current block
//If we want to access any variable or data within the object we use the this keyword
const user = {
    username : "hrithik",
    price : 999,

    welcomeMeasssage : function() {
        // console.log(`\n${username}, welcome to website`);   //correct but not good practice

        console.log(`\n${username}, welcome to website`);

    }
}