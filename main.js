// EXAMINE THE DOCUMENT OBJECT 

//console.dir(document);
//console.log(document.domain);
//console.log(document.url);
//console.log(document.title);
//document.title =  123;
//console.log(document.images);
//console.log(document.all);
//console.log(document.all[10]);

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

//var items= document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent="hello 2";
//items[1].style.fontWeight="bold";
//items[1].style.backgroundColor ='green';
//items[2].style.backgroundColor ='grey';

//for(var i =0; i<items.length;i++){
 //   items[i].style.fontWeight ="bold"
//} 

//GETELEMENTSBYTAGNAME //


 //li= document.getElementsByTagName('list-group-item');
//console.log(li);
//console.log(li[1]);
//li[1].textContent="hello 2";
//li[1].style.fontWeight="bold";
//items[2].style.backgroundColor ='green';
//li[].style.backgroundColor ='green';
//
//for(var i =0; i<li.length;i++){
 //   li[i].style.fontWeight ="bold"
//}

//queryselector //

//var header = document.querySelector("#main-header");
//header.style.borderBottom ="solid 4px grey";

//var input = document.querySelector("input");
//input.value = "hello world"

//var submit = document.querySelector('input[type="submit"]');
//submit.value ="send"

//var item = document.querySelector('.list-group-item');
//item.style.color= 'red';

//var lastItem = document.querySelector
//('.list-group-item:last-child');
//lastItem.style.color ='blue';

//var secondItem = document.querySelector
//('.list-group-item:nth-child(2)');
//secondItem.style.color ='coral';


// queryselectorall //

 //var titles = document.querySelectorAll('.title');

 //console.log(titles);
 //titles[0].textContent ='Hello';

 //var odd = document.querySelectorAll('li:nth-child(odd)');

 //for(var i =0; i <odd.length; i++){;
 //odd[i].style.backgroundColor ="green";
 //}


 //var items = document.querySelectorAll([items[2]]);
  //items[2].styel.fontColor = 'green';
  //console.log(items[2])


  //TRAVERSING THE DOM //

  var itemList = document.querySelector('#items');
  //parentNode 

  //console.log(itemList.parentNode);
  //itemList.parentNode.style.backgroundColor = '#f4f4f4';
  //console.log(itemList.parentNode.parentNode.parentNode);

  //parentElement //

  //console.log(itemList.parentElement);
  //itemList.parentElement.style.backgroundColor = '#f4f4f4';
  //console.log(itemList.parentElement.parentElement.parentElement);


  //childNodes//
//console.log(itemList.childNodes);

//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor ='yellow';

//firstChild //

//console.log(itemList.firstChild);

//firstElementChild
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent='hello 1 '


//lastChild

//console.log(itemList.lastChild);

//lastElementChild//
//console.log(itemList.lasttElementChild);
//itemList.lastElementChild.textContent='hello 4'

//siblings //

//console.log(itemList.nextSibling);

//nextElementSibling 
//console.log(itemList.nextElementSibling);

//previousSibling
//console.log(itemList.previousSibling);

//previousElementSibling 
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color = 'green';

//createElement 

//create a div 
var newDiv =document.createElement('div');

//add class
newDiv.className ='hello';

//add id
newDiv.id ='hello1';

//add attribute
newDiv.setAttribute('title','hello Div');

//create text node
var newDivText =document.createTextNode('hello world')

//add text to div

newDiv.appendChild(newDivText);


var container = document.querySelector('header .container');
var h1 =document.querySelector('header h1');
var h2 = document.querySelector('header h2');


console.log(newDiv);

newDiv.style.fontSize ='30px'

container.insertBefore(newDiv ,h1);
