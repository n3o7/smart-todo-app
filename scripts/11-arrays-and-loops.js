const toDoList = [];
 function addToDo(){
      const taskToDo = document.querySelector('.final-todo-name');
      const dateOfTask = document.querySelector('.js-date');
      if(taskToDo.value){
        toDoList.push(taskToDo.value);
        taskToDo.value = '';
        dateOfTask.value='';
        renderTodoList();
      }else{
        alert('You didnt enter a value');
      }
    }
   
    function renderTodoList(){
      let toDoListHTML='';
      let html;
      for (let i=0;i < toDoList.length; i++)
      {
          const todo = toDoList[i];
          const date = document.querySelector('.js-date').value;
          html = 
        `<p>
          ${todo}
          ${date}
          <button onclick="
          toDoList.splice(${i},1);
          renderTodoList('');">Delete</button>
        </p>`;
        toDoListHTML+=html;
      }
      document.querySelector(`.final-todo-list`).innerHTML = toDoListHTML;
    }

    


     