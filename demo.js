// //console.dir(document);
// // console.log(document.domain);
// // console.log(document.URL);
// // console.log(document.head);
// // console.log(document.body);

// // console.log(document.getElementById('header-title'));
// // let headerTitle= document.getElementById('header-title');
// // let header= document.getElementById('main-header');
// //console.log(headerTitle);
// //headerTitle.textContent= 'Hello';
// //headerTitle.innerText= 'Goodbye';
// //headerTitle.innerHTML= '<h3>Hello<h3>'

// // header.style.borderBottom= 'solid 5px #000';

// // let items= document.getElementsByClassName('list-group-item');
// // console.log(items);
// // console.log(items[1]);
// // items[1].style.fontWeight= 'bold';
// // items[1].style.backgroundColor= 'Green';

// // for(let i=0; i<items.length; i++){
// //     items[i].style.fontWeight="bold";
// // }



// // let li= document.getElementsByTagName('li');
// // console.log(li);
// // console.log(li[1]);
// // li[1].style.fontWeight= 'bold';
// // li[1].style.backgroundColor= 'Green';

// // for(let i=0; i<li.length; i++){
// //     li[i].style.fontWeight="bold";
// // }

// // let header= document.querySelector('#main-header');
// // header.style.borderBottom= 'solid 3px yellow';

// // let input= document.querySelector('input');
// // input.value= 'Hi';

// // let items= document.querySelector('.list-group-item');
// // items.style.color= 'blue';

// // let lastItem= document.querySelector('.list-group-item:last-child');
// // lastItem.style.backgroundColor= 'yellow';

// // let secondItem= document.querySelector('.list-group-item:nth-child(2)');
// // secondItem.style.color= 'green';

// // let odd= document.querySelectorAll('li:nth-child(odd)');
// // let even= document.querySelectorAll('li:nth-child(even)');

// // for(let i=0; i<odd.length; i++){
// //     odd[i].style.backgroundColor= 'green';
// //     even[i].style.backgroundColor= '#cccc';
// // }

// let itemList=  document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.color= 'red';

// //parentElement


// var myDiv= document.createElement('div');

// myDiv.className= 'Hello';

// myDiv.setAttribute('title', 'Hello');

// var nyDivTxt= document.createTextNode('Hello');

// myDiv.appendChild(nyDivTxt);

// // let container= document.querySelector('header .container');
// // let h1= document.querySelector('header h1')

// // console.log(myDiv);
// // container.insertBefore(myDiv, h1);

// let listGroup= document.querySelector('body .title');
// let h2= document.querySelector('body h2');

// listGroup.insertBefore(myDiv, h2);






let form= document.getElementById('addForm');
let itemList= document.getElementById('items');

//form submitting
// form.addEventListener('submit', addItem);
form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

//add item
function addItem(e){
e.preventDefault();

let newItem= document.getElementById('item').value;
let li= document.createElement('li');

li.className= 'list-group-item';

li.appendChild(document.createTextNode(newItem));

let deletebtn= document.createElement('button');
deletebtn.className= 'btn btn-danger btn-sm float-right delete';

deletebtn.appendChild(document.createTextNode('X'));
deletebtn.appendChild(document.createTextNode('Edit'));


li.appendChild(deletebtn);

itemList.appendChild(li);

}




function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are u Sure')){
            let li= e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}