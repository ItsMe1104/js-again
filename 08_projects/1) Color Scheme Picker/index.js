//selecting all the buttons together so that we can loop through and apply different CSS properties according to required button

//targetting all the buttons
const buttons = document.querySelectorAll('.button');

//targetting the body as at last we have to style the body only
const body = document.querySelector('body');

//applying an eventListener on all the buttons and inside the event listener doing the work according to the button pressed
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {

    //e :- gives the event name like click, submit, etc
    //e.target :- gives the element on which the element took place

    if (e.target.id === 'grey') {
      body.style.backgroundColor = 'grey';
    }

    if (e.target.id === 'white') {
      body.style.backgroundColor = 'white';
    }

    if (e.target.id === 'blue') {
      body.style.backgroundColor = 'blue';
    }

    if (e.target.id === 'yellow') {
      body.style.backgroundColor = 'yellow';
    }
  });
});

//since we have defined event listener only once for all elements (here buttons) inside the loop and not individually hence, we have to give conditions when the individual elements will response. 
//If all buttons gave same response then there was no point including conditions, which is not the point here.