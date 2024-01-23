//1) For-each loop might be efficient but it doesn't return anything even if we use the return statement explicitly
// Hence, if we want the vaues returned by for-each loop to get stored in a variable we cannot do it directly

console.log("\n1) Directly storing the values returned by the for-each loop");
const coding = [ "js", "ruby", "java", "python", "cpp" ];

const values = coding.forEach((item)=>{
    return item;
})

console.log(values);




//2) To store every item returned by the for-each loop in an array
// We have to push them in the array one by one instead of directly storing them in a variable

console.log("\n\n2) Correct way to store returned items by the forEach loop in values2 array :-");

const values2 = [];

coding.forEach((item)=>{
    values2.push(item);
});

console.log(values2);





//3) To store this values directly in a variable, we use another version of for-Each loop that is filter()
// Syntax :-
/*
    arr_name.filter(callback(x,y,z){
        return condition;
    })

    or

    //Implicit return
    arr_name.filter(callback(x,y,z)(condition))
*/

// x,y,z parameters hold same value as in forEach loop
// condition :- all the main array elements which will satisfy the condition will be returned by the filter method

//The main difference between between forEach loop and filter method is that the filter method returns the items which satisfy the condition while the forEach loop doesnt.

//we can store the values returned by filter method directly in a variable

console.log("\n\n3) Returning all numbers divisible by 2 returned by filter method in myNums[], in div_2 array :-");

const myNums = [1,2,3,4,5,6,7,8,9,10];

const div_2 = myNums.filter((item)=>{
    return (item % 2) == 0;
})

console.log(div_2);


//using implicit return :-

const divisi_2 = myNums.filter(
     (item) => (item % 2 == 0)
)

console.log("Using implicit return :-",divisi_2);






//Same thing to do with forEach loop, we have to use a condition inside

console.log("Storing all numbers divisible by 2 returned by the filter method in myNums[], in div_2 array :-");

const myNums2 = [1,2,3,4,5,6,7,8,9,10];
const div2b = [];

myNums2.filter((item)=>{

   if(myNums2 % 2 == 0)
   {
    div2b.push(item);
   }
        
})

console.log(div_2);




//4) Some exercises using filter method()

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  //a) getting all books from above array of objects whose genre is History

  console.log("\n\n4a) Getting all books from the array of objects -> books, whose genre is History :-");

  const user_hist = books.filter((items)=>{
        return items.genre === "History";
  })

  console.log(user_hist);




   //b) getting all books from above array of objects that are published after 2000

   console.log("\n4b) Getting all books from the array of objects -> books, that are published after 2000:-");

   const user_publ = books.filter((items)=>{
         return items.publish >= 2000;
   })
 
   console.log(user_publ);


   //c) getting all books from above array of objects whose genre is History and published after 1995

  console.log("\n\n4a) Getting all books from the array of objects -> books, whose genre is History :-");

  const user_hist_publ = books.filter((item)=>{
        return item.genre === "History" && item.publish >= 1995;
  })

  console.log(user_hist_publ);