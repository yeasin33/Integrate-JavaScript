let changeValue = document.getElementById('heading1');
changeValue.innerHTML = 'Assalamoalikum'

let changeValue2 = document.getElementById('heading2');
changeValue2.innerHTML = 'Olikumjsalam'
let changeValue3 = document.getElementById('heading3');
changeValue3.innerHTML = 'i am fine'

// Create html element use javaScript 

let heading = document.createElement('h1');
let text = document.createTextNode('hi javaScript');
heading.appendChild(text);
let myDiv = document.getElementById('fast-div');
myDiv.appendChild(heading);
// delete html element

let heading4 = document.getElementsByTagName('h1')[1];
let myDiv2 = document.getElementById('fast-div');
myDiv2.removeChild(heading);

// insert before 

// let heading0 = document.createElement('h2');
// let textAdd = document.createTextNode('amar shonar bangla');
// heading0.appendChild(textAdd);
// let heading2 = document.getElementsByTagName('h1')[0];
// myDiv.insertBefore(heading0, heading2);


// query selector

document.querySelector("a").innerHTML = 'hii';



