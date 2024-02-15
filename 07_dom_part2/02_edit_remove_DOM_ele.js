//1) Adding elements using function

//a) add more list items to the ul using function, you will only be provided with the language name which will be used as content


// i) Unoptimised way by using innerHTML
function add_lang(lang_name)
{
    const li = document.createElement("li");
    li.innerText = lang_name;
    
    // const ul = document.querySelector("ul");
    // ul.appendChild(li);
    document.querySelector("ul").appendChild(li)
}

add_lang("Python");
add_lang("Java");
add_lang("TypeScript");

//using innerHTML, we have to traverse first in all the li to search if that element is already present or not for the intention of overwriting.
//After that while appending we again have to traverse till last and then append.
//Hence, two round trips.


// ii) Optimised way by using text Node and appending it with the created li which takes o(1) time

function add_lang_optimized(lang_name)
{
    const li = document.createElement("li");
    const addText = document.createTextNode(`${lang_name}`);
    li.appendChild(addText);
    // const ul = document.querySelector("ul");
    // ul.appendChild(li);
    document.querySelector("ul").appendChild(li);
}

add_lang("GoLang");
add_lang("Cpp");
add_lang("PHP");

//Hence here we saved one round trip due to inner text
//The above is industry level practice and good approach





/********************************************************************************************************************************************************************************************************************** */

// 2) EDITING already existing elements
// first target that element






/********************************************************************************************************************************************************************************************************************** */

// 3) REMOVING already existing elements
// first target that element
// use "target_ele.remove()"