itemList = document.querySelector('#items');
console.log(itemList.parentNode);

console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = "Hello Developer";

console.log(itemList.lastChild);

console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "Hey!!";

console.log(itemList.firstChild);

console.log(itemList.nextSibiling);

console.log(itemList.nextElementSibiling);

console.log(itemList.previousSibiling);

console.log(itemList.previousElementSibiling);

var newDiv = document.createElement('div');
newDiv.className = "hello";
newDiv.id = "hello1";


newDiv.setAttribute('title',"Hello World");

var newDivText = document.createTextNode('HEllo Dear');
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');


console.log(newDiv);

container.insertBefore(newDiv,h1)