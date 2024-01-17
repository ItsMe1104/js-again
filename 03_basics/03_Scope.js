// JavaScript Scope is the area where a variable (or function) exists and is accessible.

//Global vs local scope

// Global scoped:- Everything we write directly in the JS file is global scoped
// For browser console and nodeJS, global scopes are different for both of them


// Local / Block scoped :- Anything inside braces '{}' is local scoped
//Except object declaration, even functions, if-else, loops, etc have local scopes
//inside local scope we can declare variables wih same name that are already present in global as well as other local scopes


//2) let vs const vs var

// let = local scoped
// which means changes done to this variable WILL NOT AFFECT other global or local scoped variables with same name


// const = local scoped
// which means changes done to this variable WILL NOT AFFECT the values of other global or local scoped variables with same name


// var = global scoped
// which means changes done to this variable WILL AFFECT the values of other global or local scoped variables with same name
//even if we dont write var,let,const, before variable name, it will be treated as var
// 'var' should never be used in code for good practice


let a = 10;
const b = 20;
var c = 30;
d = 40;       //JS treats it as var

console.log("\nBefore if-else block scope :-");
console.log("let a =", a);
console.log("const b =", b);
console.log("var c =", c);
console.log("d =", d);

//local scope of if-else
if(true)   //means it will always execute
{
    let a = 111;
    const b = 121;
    var c = 131;
    d = 141;

    console.log("\nInside if-else block scope :-");
    console.log("let a =", a);       //own scope used
    console.log("const b =", b);     //own scope used
    console.log("var c =", c);       //own scope used
    console.log("d =", d);           //own scope used
}


console.log("\nAfter if-else block scope :-");
console.log("let a =", a);    //unchanged 
console.log("const b =", b);     //unchanged
console.log("var c =", c);      //changed by if-else
console.log("d =", d);      //changed by if-else

// Hence if some other module using "var" comes and changes the value of some variable in our main file then it will be a problem
// Hence 'var' should never be used while declaring variables