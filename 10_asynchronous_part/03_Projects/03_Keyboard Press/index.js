//Lesson learned :- How to addEventListener on window that is not present in document, e,g keyboard, mouse , etc
//How to use e.key,e.code to know which key got pressed

const insert = document.getElementById('insert');

//for event such as keyboard click... use "keydown" as event name
window.addEventListener("keydown",(e)=>{

    //put a check for Space key as it is printed as a blank hence, we cannot see it
    //e.keyCode is depreciated. It gives a code associted with the key

    //e.key -> gives us the exact key that is pressed
    //e.code -> gives a more general key description about which key is pressed

    insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
  </table>
    </div>
  `;
})