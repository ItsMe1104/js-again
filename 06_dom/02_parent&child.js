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




//5) ALL child nodes of target element :-
//Here Node refers to the nodes from DOM tree and not merely the child elements of the target element
// Hence no. of child nodes > child elements
// every line break is also a node element

//Use 'target_parent.childNodes' property to get all the child nodes of that target parent
console.log("5) NODES of element with class = 'parent' using '.childNodes' property :-\n",parent.childNodes);   

/*
e.g:-1

<div class="parent">   
        <div class = "day">Monday</div>
        <div class = "day">Tuesday</div>
</div>

For this parent
child nodes = 5
child elements = 2;

BECAUSE :-

<parent>      \n
    <child>   \n
    <child>   \n
<\parent>

'\n' = line breaks
Hence, child elements + \n = 5


//Further every child node will have its own child nodes wrapped in an HTML collection

//Hence, behind the scene , the browser makes such a complex tree structure and hence web will never be totally optimised therefore we need optimised JS



***************************************************************************************************************************
e.g -> 2


After one line break if we give another line break then it wont be counted as a node... Therefore after a line break no other adjacent line break is counted.

<parent>      \n
              \n  (not counted)
    <child>   \n
    <child>   \n
<\parent>

nodes = 5



// ***********************************************************************************************************************************************************************************************************

e.g -> Comments are also counted as nodes

<parent>           \n
    //comment      \n      (both comment and \n will be counted)
    <child>        \n
    <child>        \n
<\parent>

nodes = 4 (\n) + 2 (child) + 1 (comment)
      = 7


Whole React is based on these child nodes manipulation
*/




