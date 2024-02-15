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
// then apply changes on it


//a) change the content of target element using textContent, innerHTML, etc

//e.g:- let's say we want to edit the 2nd list item from "Python" to "Dart"

const second_lang = document.querySelector("li:nth-child(2)");
second_lang.innerHTML = "Dart";





//b) to create a new element similar to the one we are replacing, add content to it and then,
// use "target_ele.replaceWith(x)" 

//target_ele -> node we are trying to replace
// x -> the replacing element we created


//e.g:- let's say we want to edit the 3rd list item from "Java" to "Mojo"

 const third_lang = document.querySelector("li:nth-child(3)");

 const new_li = document.createElement("li");
 new_li.appendChild(document.createTextNode("Mojo"));

 third_lang.replaceWith(new_li);





//c) using .outerHTML to directly change the whole existing tag with its content to our required tag and desired content
//first we need to target the element to be replaced

//e.g:- let's say we want to edit the 5th list item from "GoLang" to "C#"

const fifth_lang = document.querySelector("li:nth-child(5)")
fifth_lang.outerHTML = "<li>C#</li>"



// innerHTML vs outerHTML

//innerHTML -> only gives the visible content from inside the element
//outerHTML -> gives the inside visible content along with the target element's tag... i.e the whole target element itself

// e.g -> <li> abcd </li>
// innerHTML --> abcd
// outerHTML --> <li> abcd </li>





/********************************************************************************************************************************************************************************************************************** */

// 3) REMOVING already existing elements
// first target that element
// use "target_ele.remove()"

//e.g:- let's say we want to remove the last list-item.

const last_lang = document.querySelector("li:last-child");
last_lang.remove();





//CSS :-  how to select first-child, last-child, nth-child(x)  from a bunch of HTML elements.

// i) first-child 
// tag_name : first-child {...}

// ii) last-child
// tag_name : last-child {...}

// iii) nth-child
// tag_name : nth-child(n) {...}
// n --> which child no. we want to select





