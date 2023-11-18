
const nameInput=document.querySelector('#form-name');
const todoInformation=document.querySelector('#todo-informations');


function render () {

const list= todoList.map ((todo,index) => {

    return `
<tr>

   <th >${index+1}</th>
  <th>${todo.todo}</th>  
  <th> <button onClick="handleDelete(${index})" class="btn-delete">delete</button></th>
</tr>`


});




todoInformation.innerHTML=list.join("");

}

function handleClickAddPerson(){

    const todoName=nameInput.value;
    
    
      
    if (todoName !== "" ) {
        
    
    const newtasks=
    {
      todo: todoName,
       

      }

      
      todoList.push(newtasks);
      
      render();

nameInput.value="";



}
else{

alert("Please fill  the field");

}


}

function handleDelete(pindex){


todoList.splice(pindex,1);


render();

}

function handleDeleteAll(){


todoList=[];
console.log(todoList);
render();



}

render()