//Scope in inner functions or inner blocks


//1) CLOSURES in js:-

//a) The inner functions or inner block can access all the data or variables from outer blocks from all levels

//b) The outer functions zor outer block cannot access any data or variables from inner blocks even from one level depth.



//2) Scope testing with inner functions
console.log("\nScope testing with inner functions");

function one(){
    const username = "Hrithik"

    function two() {
        const website = "github";
        console.log(username);   //successful as username is an outer function data
    }

    // console.log(website);        will give error as website is an inner function data
    two();
}
one();

//Hence in case of nested functions child functions can access the variables from parent functions but not vice versa





//3) Scope testing with inner if-else blocks
console.log("\n\nScope testing with inner if-else blocks:-");


const price = 199;
if(true)
{
    const username = "Hrithik";
    
    if(username === "Hrithik")
    {
        const website = "Github";
        console.log(username, website, price);     // successful as username, price are outer block variables
    }
    // console.log(website);    //will give error as website is an inner block variable
}

// console.log(username);      //will give error as username in an inner block variables


