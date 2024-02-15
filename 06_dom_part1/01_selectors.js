//Selectors :- help us to target a specific HTML element based on its attributes so that we can perform operations on it.


//1) GetElementById("id_name")  :- Targets elements by their id
// returns a single HTML element as ids are always unique.

const title = document.getElementById("title");

//a) to get "id" of this captured element we use ".id" operator
console.log("1a) : ",title.id);

//b) to get "class" of this captured element we use "."
console.log("1b) : ",title.class);      // will give undefined

//c) to get "class" of this captured element we use ".className" 
console.log("1c) : ",title.className);


//Why did class didnt work but className did (even though we use class attribute inside HTML elements)
// -> class is a reserved keyword in js used for OOPS
// -> hence even though we write class, Js document portrays it as className behind the scenes



// d) to get the value of any attribute using the captured element use ".getAttribute("x")"
// x = is the attribute name like id, class (not className), etc
console.log("1d) : ",title.getAttribute("class"));
console.log("1d) : ",title.getAttribute("id "));


//e) to set the value of any attribute using the captured element use " .setAttribute("x","y1 y2") "
// It always overwrites the existing value of that attribute
// doesnt return anything 

// x = is the attribute name like id, class (not className), etc
// y1 = is the first value of that attribute
// y2 = is the second value of that attribute

// will overwrite the earlier value class that was "heading"
title.setAttribute("class", "text");
console.log("1e) : ",title.getAttribute("class"));

// to set more than one values in attribute and overwriting the earlier ones
title.setAttribute("class", "text heading");
console.log("1e) : ",title.getAttribute("class"));


 


//f) to set any style property to the captured element
// Use ".style.x = "y" "
// x -> css property name we want to set
// y -> value of that css property 
// overwrites the existing css property

// setting the padding
title.style.padding = "15px";

// setting the border radius
title.style.borderRadius = "5px";

// setting background color
title.style.backgroundColor = "green";




// g)To get the content inside any element like in h1,h2,p,etc

// three ways are there
//a) textContent
//b) innerText
//c) innerHTML

// for normal text content they give almost same value
console.log("1f) Using textContent: ",title.textContent);
console.log("1f) Using innerText: ",title.innerText);
console.log("1f) Using innerHTML: ",title.innerHTML);


// Difference between textContent, innerText, innerHTML

// innerText :- gives only the visible content inide that element hence if some content is hidden by css then it wont show that

// textContent :- gives both the visible and non visible content unlike innerText

// innerHTML :- gives everything that is present inside the target element's content including visible contents, non visible contents, inner elements, properties, etc 

const span_text = getElementById("sp");
span_text.style.display = "none";

console.log("\nAfter adding a span tag and display property to it: ");
console.log("Using innerText: ",title.innerText);
console.log("Using textContent: ",title.textContent);
console.log("Using innerHTML: ",title.innerHTML);




//h) To set the content of any element :-
// use innerText, textContent, innerHTML with "="
// it overwrites the earlier content
// doesnt return anything

//Note:- for setting an HTML element as content always use innerHTML

title.innerText = "DOM Learning with CHAI"
console.log("\nh) Using innerText: ",title.innerText);


title.textContent = "JS :- DOM Learning with CHAI"
console.log("\nh) Using textContent: ",title.textContent);


//getting the previous content back
 title.innerHTML = "DOM - Document Object Model Learning <span id = 'sp'>test text</span>"

console.log("\nh) Using innerHTML: ",title.innerHTML);





//********************************************************************************************************************************************** */

//2) querySelector("x") :- selects an HTML element just like in CSS

// x = #id_name
// x = .class_name
// x = element (e.g -> h1,h2,etc)
// x = input[type = "password"]  (input type of password)
// x = y:first_child    (y = element_name.... gives the first child of yth element)

// returns the first element with the matched profile


//selecting h1
const first_h2 = document.querySelector("h2");
console.log("2) Query Selector to get first h2 :-\n", first_h2);


//selecing element with id = title
let ele = document.querySelector("#title");
console.log("2) Query Selector to get element with id = title :-\n", ele);


//selecing element with class = heading
ele = document.querySelector(".heading");
console.log("2) Query Selector to get element with class = heading :-\n", ele);



//selecing element which is an input type of password 
ele = document.querySelector("input[type = password]");
console.log("2) Query Selector to get element which is an input type password :-\n", ele);



//Just like we apply query selector on document
//We can also apply it on a target element
//Then query selector will search for items within the children of that target element

// target_ele.querySelector();

// exercise :-
// To change the text color, backgroundColor, padding, content of the first list item

const first_ul = document.querySelector("ul");
const first_li = first_ul.querySelector("li");
console.log(first_li);

first_li.style.color = "green";
first_li.style.backgroundColor = "white";
first_li.style.padding = "15px";
first_li.innerText = "1 = one";





//********************************************************************************************************************************************** */
//3) querySelectorAll("x") :- exactly like query selector but it gives all the elements that matches the condition inside it

// It returns a NodeList which looks like an array but it is not
// An array has both a map as well as a forEach property through which we can loop
// NodeList on the other hand only has forEach property for looping but no map
// Although we can use its indexes just like an array to access an element at specific position
//Indexing is 0 based like in array



//a) selecting all the list items
const tempList = document.querySelectorAll("li");



//b) applying any property directly on the whole NodeList will give error 
// hence we have to specify single element wise using indexes

// tempList.style.color = "orange";  //wont work
tempList[1].style.color = "orange";



// c) Using forEach loop to apply property to all the elements of NodeList
// We can set multiple properties in the same iteration
tempList.forEach((ele)=>{
    ele.style.backgroundColor = "blue";
    ele.style.padding = "10px";
})





// **********************************************************************************************************************************************************************************************************************************

//4) GetElementByClassName("class_name")  :- Targets elements by their class
// returns an HTML collection which looks like an array but is not
// It is even different than NodeList
// It does not contain any map or forEach property like in array

const li_items = document.getElementsByClassName("list-item")

//forEach and map wont work as they are not defined for HTML collections and hence will give error

//In HTML collections we can only have for-loop to loop through the elements and access them through their indexes.
//Use .length property to know its size

//There is no for each loop or map


//Using for loop to iterate in HTML collection
console.log("4) Using for loop to print all the elements with class = 'list-item'");
for(let i = 0; i < li_items.length; i++)
{
    console.log(li_items[i]);
}


//Hence we need to first convert it to an array using Array.from() function to use forEach and map properties.


//**************************** */

// Array.from(x) function first converts and then returns the converted array
// x = NodeList, HTML collections

// ****************************

const myConvertedArr = Array.from(li_items);

myConvertedArr.forEach((li)=>{
    li.style.color = "yellow";
    li.style.backgroundColor = "black"
    li.style.padding = "10px";
    li.innerText = "Hrithik"
})

//It is very useful if some elements are returned by Database in form of HTML Collections.
//Hence we can convert them in Array and then apply forEach or map in it.