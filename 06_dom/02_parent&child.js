// 1) To add an external JS file in our HTML doc.
//Add a script tag after body tag
// <script src="JS_file_name.js">  </script>


const parent = document.querySelector(".parent");
console.log(parent);


// *******************************************************************************************************************************


//2) To get all the children of our target element.
// Use .children
//Returns an HTML collection , hence to iterate first convert it to an array

console.log("2) Children of parent using .children property :-\n",parent.children);



//2a) To access any ith element from this HTML collection we can always use its indexes

console.log("2a) 2nd child of parent is :-\n", parent.children[1]);



//2b) To get its value :-
// use innerText :-
console.log("2b) Value of 2nd child of parent is :-\n", parent.children[1].innerText);



//2c) We cam also loop through HTML collection using for loop and access all the children

console.log("2c) Accessing all the children of element with class = 'parent' using for-loop :-\n");
for(let i =0; i < parent.children.length; i++)
{
    console.log(parent.children[i].innerHTML);
}


// 2d) To change the text color and padding of 1st child of parent
//use .style property

parent.children[0].style.color = "orange";
parent.children[0].style.padding= "10px";



// *******************************************************************************************************************************
// 3)To get the first and last child of the target element specifically

// a) use "parent_ele.firstElementChild"    (for first child)
// b) use "parent_ele.lastElementChild"   (for last child)last

console.log("3a) Accessing first of parent element using .firstElementChild property :-\n",parent.firstElementChild);

console.log("3b) Accessing last of parent element using .lastElementChild:-\n", parent.lastElementChild);




//4) To travel from child to parent 
// means the target element will be child and we have to access its parent

//Using query selector to find the parent using its id or class is a costly operation as it has to travel the whole DOM in a thread

//Instead if we already know the child we can directly use "target_child_name.parentElement" property to get its parent immediately


//target_child_element
const dayOne = document.querySelector(".day");


//a) to get the immediate parent of target child element
// use "target_child_name.parentElement" property

console.log("4a) Getting the parent of the first element with class = 'day' using '.parentElement' property :-\n", dayOne.parentElement);


//b) to get the immediate sibling of target child element
// use "target_child_name.nextElementSibling" property
console.log("4b) Getting the parent of the first element with class = 'day' using '.parentElement' property :-\n", dayOne.nextElementSibling);






