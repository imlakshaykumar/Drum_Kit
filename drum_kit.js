// create a function named as playSound with event 'e'
// 'e' is a clickable event; like when we click a button on webpage then its info will show on console

function playSound(e) {
  // console.log(e.keyCode); //to check the event keyCode

  // document. is an object inside the window object and we use a document object for manipulation inside the document
  //after the window gets loaded, then there's a document loaded indside that window
  //properties related to document stored insode the document object (like title, URL, etc)

  // querySelector() returns the first element that matches a CSS selector
  // to return all matches (not only the first), use the querySelectorAll()

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; // stop the function from running all together (stop the function when the audio is null)

  audio.currentTime = 0; // rewind audio to the start
  audio.play();

  // console.log(audio); // to check which audio is playing while pressing certain key
  // console.log(key); // to check the keys we are pressing
  key.classList.add('playing'); //added a class to all .key classes (for tranformation)
}

//this function will remove the transition after certain amount of time
function removeTransition(e) {
  // console.log(e); //show all the properties of that element
  // !== means value if the value and data type is same or not

  if (e.propertyName !== 'transform') return; //skip it if it's not a transform

  // console.log(e.propertyName);

  this.classList.remove('playing'); //add .playing class in all the .key class
}

const keys = document.querySelectorAll('.key'); //select all the .key class

// addEventListener() method attacs an event handler to a document
// => means iterate to all the elements

// keys.forEach((key) => {
//   return key.addEventListener('transitionend', removeTransition);
// }); // 'transitionend' listener which end transition; on transitionend call removeTransition function

// //we can also write like this
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

// window. is at a root/top level of JS hierarchy, it is a global/root object in JS and it is the root object of Document Object Model (DOM)
// the first thing that loaded into the browser is window and the property related to that stored inside window object (like innerHeight, length, innerWidth, etc)
// DOM:- It is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
window.addEventListener('keydown', playSound);
