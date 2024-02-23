
//directly targetting the parent of images that is <ul> else we have to addEventListener one by one in image
//If there are 100 image then what to do?

const images_parent = document.getElementById("images");
images_parent.addEventListener("click",(e)=>{

    //e.target :- 
    // gives th exact node on which the event occured (can be the element on which eventListener is applied or event its child)
    //here :- event.target = <img>

    //e.target.parentNode :-
    //gives the parent node of the event.target element 
    //here :- event.target.parentNode = <li>

    //since we need to remove the whole li , else the bullet points will stay and the image will be deleted if we delete event.target only

    let ele = e.target.parentNode;
    ele.remove();
})

