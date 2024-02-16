// 1) If we want to check a variable is number or not 
// use "isNaN(x)"
// x -> variable we want to check

//returns 1 if variable is NaN
//returns 0 if variable is number



// *****************************************************************************************************************************************************************


//2) Extracting the values when user hits submit button
// We should only extract values when the submit event occurs and not at the starting
// Since the script immediately loads as the document loads and at that time the values will be empty
// Hence will only extract values inside the submit eventListener




// *****************************************************************************************************************************************************************


//3) Since the submit button is inside the form  and all the input tags containing values we want to extract also belongs to form
// Hence we have to add event listener to form and not to the button
// so that at the time of submit we can extract the values from input tags



// *****************************************************************************************************************************************************************


//4) Inside the form, every button click means a submit event
// Hence we have to apply "submit" event on form only ,to extract values at the time of submit



// *****************************************************************************************************************************************************************


//5) Inside a form addListener with a submit event, we always need to use the ".preventDefault()"

// As the form by default sends the values to database using get/post method
// But we want that the form sends the values to our eventListener
//Hence, always use the "e.preventDefault()" indide the eventListener of form

//e.g
const form = document.querySelector("form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
})




//6) Since using ".value" to get the values from the input tag will always return a string

//Hence if we want to do mathematic calculations
// use "parsInt(x)" to convert it to a number
// x -> value we are trying to convert
