var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
//form submit event

form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click',removeItem);

//filter event 
filter.addEventListener('keyup',filterItems);

//additem 

function addItem (e){
    e.preventDefault();

    const inputValue =document.getElementById('Item')
    const description = document.getElementById('description')

    li.appendChild(newText);
    li.appendChild(descriptionNode);
   // get input value 
var newItem =document.getElementById('item').value;

//reate new li element 
 const li = document.createElement('li');

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
function filterItems(e){
    //convert text to lowercase 
    var text = e.target.value.toLowerCase();
    //get list
     var items = itemList.getElementsByTagName('li');
    // convert to an array
    Array.from(items).forEach(function(item){

        
        const itemName = item.firstChild.textContent;
        const description = item.childNodes[1].textContent;

        if(itemName.toLowerCase().indexOf(text) != -1  || description.toLowerCase().indexOf(text) !=  -1){
            item.style.display ='block';
        }else {
            item.style.display = 'none'
        }
    })
}