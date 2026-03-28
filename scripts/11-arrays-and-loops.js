const toDoList = [];
 function addToDo(textFieldName,divName){
      const taskToDo = document.querySelector(  `.${textFieldName}`);
       
      toDoList.push(taskToDo.value);
      console.log(toDoList);

      taskToDo.value = '';
      renderTodoList(divName);
    }
   
    function renderTodoList(divName){
      let toDoListHTML='';
      let html;
      for (let i=0;i < toDoList.length; i++)
      {
        const todo = toDoList[i];
        if(divName === 'js-todo-list'){
          html = 
        `<p>
          ${todo} 
          <button onclick="
          toDoList.splice(${i},1);
          renderTodoList('${divName}');">Delete</button>
        </p>`;
        }else{
          const date = document.querySelector('.js-date').value;
          html = 
        `<p>
          ${todo}
          ${date}
          <button onclick="
          toDoList.splice(${i},1);
          renderTodoList('${divName}');">Delete</button>
        </p>`;
        };
        
        toDoListHTML+=html;
      }
      console.log(toDoListHTML);
        document.querySelector(`.${divName}`).innerHTML = toDoListHTML;
    }

    


     