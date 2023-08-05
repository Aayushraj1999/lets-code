var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
//var filter = document.getElementById('filter');
//form submit event

form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click',removeItem);

//filter event 
//filter.addEventListener('keyup');

//additem 

function addItem (e){
    e.preventDefault();

   // get input value 
var newItem =document.getElementById('item').value;

//reate new li element 
 var li = document.createElement('li');

 //addclassname

 li.className ='list-group-item';
 //console.log(li);
// add text node with input value 
li.appendChild(document.createTextNode(newItem));

//create delete button element
var deleteBtn = document.createElement('button');

//add classes to del button
deleteBtn.className='btn btn-danger Btn-sm float-right delete';
 //append text Node
 deleteBtn.appendChild(document.createTextNode('X'));

 li.appendChild(deleteBtn);

//append li to list
itemList.appendChild(li);
}


//remove item 

function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are you sure?')){
        var li =e.target.parentElement;
        itemList.removeChild(li);
    }
  }
} 


//filter items 
//function filterItems(){
    //convert text to lowercase 
    //var text = e.target.value.toLowerCase();
    //console.log(text);
//}