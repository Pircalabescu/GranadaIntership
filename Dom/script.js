/* get an element/ node from the DOM */

const element = document.getElementsByTagName("h1");
console.log(element[0]);

const elementID = document.getElementById('news1');
console.log(elementID);

const elementClass = document.getElementsByClassName('title'); 
console.log(elementClass[0]);


/* Query Selector */

const h1 = document.querySelector('h1');
console.log(h1);

const h1Byclass = document.querySelector('.title');

h1.textContent = "Changed from JS"

