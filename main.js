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

var items= document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent="hello 2";
//items[1].style.fontWeight="bold";
items[1].style.backgroundColor ='green';
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

 var titles = document.querySelectorAll('.title');

 console.log(titles);
 titles[0].textContent ='Hello';

 var odd = document.querySelectorAll('li:nth-child(odd)');

 for(var i =0; i <odd.length; i++){;
 odd[i].style.backgroundColor ="green";
 }


 //var items = document.querySelectorAll([items[2]]);
  //items[2].styel.fontColor = 'green';
  //console.log(items[2])
