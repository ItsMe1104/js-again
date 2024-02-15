// 1) Creating elements in HTML file & DOM through JS

//use 'document.createElement("x")' 
//Always document only as elements can only be created inn document
//*) x -> is the tag name which we want to creat like h1,div,input,etc
//returns the newly created element which we can store in a variable


const div = document.createElement("div");
const heading = document.createElement("h1");

console.log("1) Creating a div using 'document.createElement()' :-\n",div);


// Note:- Since the created element is a node, it has all the properties like class,id,etc.
// Just that they are not set, hence we need to set them according to our need


// a) Setting class property to our newly created element
// use new_ele.className = "name_of_class";

div.className = "main";



// b) Setting id property to our newly created element
// use new_ele.id = "name_of_id";

//div.id = "unique";
div.id = Math.round(Math.random() * 10 + 1);



// c) Setting custom attributes (e.g type, target, etc) to our newly created element
// use 'new_ele.setAttributes("x","y");
// x -> attribute_name
// y -> that attribute's value
//Hence accepts a key value pair

div.setAttribute("title","generated title");



// d) Setting css style properties (e.g color,padding, border, etc) to our newly created element
// use 'new_ele.style.x = "y"'

// x -> property name, y -> propertie's value

div.style.backgroundColor = "green";
div.style.padding = "12px";



//e) To set content like text inside our newly created element
// i) use 'new_ele.innerText = "x" '
// x -> value of content
div.innerText = "Hey Everyone";


// ii) use document.createTextNode("x")
// x-> text-content 
// returns a text content node
// NOTE:- doesnt overwrite already present text content.

// we need to append this in ournewly created element as a child using 'new_ele.appendChild(y)'
// y -> variable storing created TextNode

const addText = document.createTextNode("Hey EveryOne!!! What's Up!!!");
div.appendChild(addText);





//******************************************************************************************************************************************************** */
//2) Using setAttribute as a whole

// NOTE:- using .className, .id, .innerText to set values to our newly created element is not a good practice
//Since they overwrite the original values
//Hence first they bring the original values into the memory and then overwrites them
//Hence two round trips


// BUT :- setAttribute() doesnt overwrite the value, rather it just adds them
// Hence it doesnt bring the original values into memory
//Therefore one round trip is saved
//It only sets one attribute at a time




//******************************************************************************************************************************************************** */
//3) Adding created node to our document
// -> Till now we created the node but its still in the memory
// -> If we want to add that child in our HTML document, we use appendChild()
// It adds the newly created element as the last child of its target_parent

//use "target_parent.appendChild(x)"
// x -> newly created element

const parent = document.querySelector(".parent");
parent.appendChild(div);


//if we want the newly created element inside body
//use "document.body.appendChild(x)"   (and not body.appendChild() only)

document.body.appendChild(div);


//Note if we append the same created element trice or more.. it gets deleted from its old place and gets placed to the last appended location

//e.g
parent.appendChild(div);
document.body.appendChild(div);

//hence the node "div" will only be present in body and not with the parent div... as append child overwrites its previous position

