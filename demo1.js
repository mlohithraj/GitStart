//console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.head);
console.log(document.body);

console.log(document.getElementById('header-title'));
let headerTitle= document.getElementById('header-title');
let header= document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent= 'Hello';
//headerTitle.innerText= 'Goodbye';
//headerTitle.innerHTML= '<h3>Hello<h3>'

header.style.borderBottom= 'solid 5px #000';

let items= document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].style.fontWeight= 'bold';
items[1].style.backgroundColor= 'Green';