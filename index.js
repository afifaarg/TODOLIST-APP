const addBtn = document.querySelector('#ajtBtn');
const tasksSpace = document.querySelector('.inProgress');
const CompleteSpace =document.querySelector('.Completed');
const checkBtn= document.querySelectorAll('input[type=checkbox]');
const inputValue = document.getElementById("taskWrite");
const resetBtn = document.getElementById("reset");

//clicking the 'add' button on pressing on enter key
inputValue.addEventListener("keypress", function(event) {
  
  if (event.key === "Enter") {
    event.preventDefault();
    addBtn.click();
  }
});

addBtn.addEventListener('click',addTask);
resetBtn.addEventListener('click',resetTodo);
checkBtn.forEach(btn=>{
  btn.addEventListener('click',checkTask);
});


function addTask(){
  //creating span element to contain button and task text
  if(document.querySelector('#taskWrite').value===''){
    console.log(document.querySelector('#taskWrite').value);
    alert("veuillez introduire une task ");
  }else{
    var spanTag = document.createElement('span');

   var inputCheck = document.createElement('input');
    inputCheck.type = 'checkbox';
    inputCheck.value=`${document.querySelector('#taskWrite').value}`;

   spanTag.appendChild(inputCheck);
  
   var pTag = document.createTextNode(document.querySelector('#taskWrite').value);
   spanTag.appendChild(pTag);
 
   tasksSpace.appendChild(spanTag);

   //initialisation of inputbar
   document.getElementById('taskWrite').value='';
   document.getElementById('taskWrite').placeholder='ADD a new task ...';

   //mark task as done
   inputCheck.addEventListener('click',checkTask);

   function checkTask(event){
       spanTag.style.textDecoration = "Line-through";
       CompleteSpace.appendChild(spanTag)
  }
  }
   
}

function resetTodo(){
  CompleteSpace.innerHTML='';
  tasksSpace.innerHTML=''
}