
const container = document.querySelector('#container');

const content = document.createElement('div');

content.classList.add('content');
content.textContent = ('THis');


container.appendChild(content);





// 1.) a <p> with red text that says “Hey I’m red!”
const pElement = document.createElement('p');
pElement.classList.add('pElement');
pElement.style.color = 'red';
pElement.textContent = ('im red');
//pElement.style.color = 'red';

content.appendChild(pElement);

// 2.) an <h3> with blue text that says “I’m a blue h3!”
const h3Elem = document.createElement('h3');
h3Elem.classList.add('h3Elem');
h3Elem.textContent = ("I'm a blue h3!")
h3Elem.style.color = 'blue';

content.appendChild(h3Elem);

// 3.) a <div> with a black border and pink background color with the following elements inside of it:

const docuTwo = document.createElement('div');

docuTwo.classList.add('docuTwo');
docuTwo.textContent = ('fuck u');
container.appendChild(docuTwo);
docuTwo.style.cssText = 'background: pink; border-style: solid;'


// 4.) another <h1> that says “I’m in a div”
const docuTwoH1 = document.createElement('h1');
docuTwoH1.classList.add('docuTwoH1')
docuTwoH1.textContent = ("i'm in a div!");
docuTwo.appendChild(docuTwoH1);

// 5.)a <p> that says “ME TOO!”

// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

//container.appendChild(content);
