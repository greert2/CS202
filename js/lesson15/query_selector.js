// query selector

const para = document.querySelectorAll('p');

console.log(para);

//querySelectAll
const para1 = document.querySelectorAll('p');
console.log(para1);

// other ways
// id
const para2 = document.getElementById("para2");

console.log(para2);

//class

const para3 = document.getElementsByClassName('error');

console.log(para3);

//element
const para4 = document.getElementsByTagName('h1');

console.log(para4);

//innerTEXT // innerHTML

let para5 = document.getElementById('page-title');

para5.innerText = 'Justice'

let para6 = document.querySelector('.error');

para6.innerHTML = 'Welcome User';


//Changing or adding css to our pages

let para7 = document.querySelector('.error');

para7.style.color = 'red';
para7.style.backgroundColor = 'yellow';
let para8 = document.querySelector('a');
para8.style.textDecoration = 'none';

//Page Content

// const people = ['Max', 'Michael', 'Kim', 'John'];

// const par = document.querySelectorAll('p');

// par.innerHTML = 'Justice'
// document.querySelector('content');

// people.forEach(person => {
//     content.innerHTML = '<p>${person}</p>';
// });




// Events - actions that the user or browser reacts to.
// click, load, mouseover, mouseout, 
//event listener

// function myFunction(){
//     console.log('You clicked me');
// }

// const button = document.querySelector('button');

// button.addEventListener('click', ()=>{
//     console.log("You clicked a new one");
// });


const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', e=>{
        console.log('click');
    });
    console.log();
})