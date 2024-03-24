//Prototypal behaviour

// Js possesses prototypal behaviour ,i.e above and above
// --> It means it keeps on searching for an items in the upper layers, till it finds it
// --> That is, it accesses an element's parent, grandparents, etc till it finds the thing it is looking for
//It is prototype, through which we got "new" keyword, classes, this , prototypal inheritance or inheritance


//Every object type datatype (Array, String, Object) has a prototype of its own, and it forms a chain of referenced prototypes i.e 
// Every prototype has a reference of its parent prototype also

// e.g :- Array 
// Array ==> Object ==> null 

// e.g :- String
// String ==> Object ==> null


//Hence, Array and String, both have a refence of their parent prototype that is object
// Even primitive data types declared through new keyword is also a child of object, e.g :- Number, Boolean, etc