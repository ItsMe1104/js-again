// Destructuring in objects
// mostly helpful while importing/exporting in React or while using props


const course = {
    name: "JS again",
    price: 999,
    courseInstructor : "Hrithik"
}

//To access these values we can use the dot or bracket operators but for industry level code :-


// 1) Use destructuring
//when we have to access the same data multiple times

// const {k1,k2,...} = obj_name
//k1,k2 -> keys we want to access
//after that we can directly use k1,k2,... wherever we want without dot or brackets

const {courseInstructor} = course;
console.log("\nDestructuring and accessing 'courseInstructor' :-",courseInstructor);



// 2) If we want to use other names for our keys
const {courseInstructor : sir} = course;
console.log("Destructuring and accessing 'courseInstructor' as 'sir' :-",sir);


//Use in react
/*
    //component file
    const navbar = ({company})=>
    {
        ...
    }

    //here the {company} acts as props

    //main file
    navbar(company = "hrithik")
*/




//*************************************************************************************** */
// 3) API :- Application programming Interface
// Api's are values from backend which we have to show in frontend

//Api values are 99% times given out in JSON format
//JSON :- Javascript Object Notation


// *****************************************************
/*
4) MOST COMMON JS FORMAT 

a) normal object without a name assigned to it hence its not a complete object data type
//keys are also in strings
//90% times we will get this format

    {
        name : 'Hrithik',
        age : 23,
        location : "West Bengal"
        isAdult : true
    }


b) Sometimes an array of objects or nested objects

    [
        {},
        {},
        {}
    ]

    .) search "randomuser me api" in google
    .) use json formatter
*/


