// EXAMINE THE DOCUMENT OBJECT 

//console.dir(document);
//console.log(document.domain);
//console.log(document.url);
//console.log(document.title);
//document.title =  123;
//console.log(document.images);
console.log(document.all);
console.log(document.all[10]);

//GETELEMENTBYID

//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('main-header');
//var header =document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent='hello';
//headerTitle.innertext= 'goodbye';
//console.log(headerTitle.innerText);
//headerTitle.innerHTML = '<h3>Hello</h3>';
//headerTitle.style.borderBottom = 'solid 3px black';


//GETELEMENTSBYCLASSNAME //

var items= document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent="hello 2";
items[1].style.fontWeight="bold";
items[1].style.backgroundColor ='green';


