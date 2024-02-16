const form = document.querySelector("form");
const result = document.querySelector("#results");

// let height = document.querySelector("#height");
// let weight = document.querySelector("#weight");

//will give empty values of height and weight as the script will load just when the document loads and at that time the user hasnt entered anything
//we only want the values of height and weight when the user has hit the submit button that is when the submit event happens
//hence we need to only extract values of height and weight after the user hit the submit button 

form.addEventListener("submit",(e)=>{
    // to stop the form from sending values to database which is its default action
    e.preventDefault();

    let height = document.querySelector("#height");
    let weight = document.querySelector("#weight");

    // as the value returned will always be a string, hence get it to become integer
    height = parseInt(height.value);
    weight = parseInt(weight.value);
    const bmi = (weight / (height * height)).toFixed(2);  

    let valid = true;

    //checking for valid height and weight
    if(height < 0 || isNaN(height))
    {
        valid = false;
        result.innerText = "Please enter a valid height";
    }
    else if(weight < 0 || isNaN(weight))
    {
        valid = false;
        result.innerText = "Please enter a valid weight";
    }
    else
    {
        result.innerText = bmi;
    }

    //assignment :- to also show a message regarding BMI 
    
    // to show result text only when height and weight are valid
    if(valid)    
    {
    //creating a new element to show result text according to bmi value
    const result_text = document.createElement("div");

    if(bmi < 18.6)
    {
        result_text.innerText = "Under Weight";
    }
    else if(bmi >= 18.6  && bmi <= 24.9)
    {
        result_text.innerText = "Normal Range";
    }
    else{
        result_text.innerText = "Over Weight";
    }

    // appending the result text
    result.appendChild(result_text);
    }
})