const toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];
let currentFilter = 'all';
renderTodoList();
 function addToDo(){
      const taskToDo = document.querySelector('.final-todo-name');
      const dateOfTask = document.querySelector('.js-date');
      if (!taskToDo.value && !dateOfTask.value) {
        alert('Enter task name and choose date');
      } else if (!taskToDo.value) {
        alert('Enter task name');
      } else if (!dateOfTask.value) {
        alert('Choose date');
      }else{
        toDoList.push({
        name: taskToDo.value,
        dueDate: dateOfTask.value
        });
        localStorage.setItem('toDoList', JSON.stringify(toDoList));
        taskToDo.value = '';
        dateOfTask.value='';
        renderTodoList();
      };
  };
   
    function renderTodoList(){
      let toDoListHTML='';
      const today = new Date().toISOString().split('T')[0];
      for (let i=0;i < toDoList.length; i++)
      {
        const todoObject = toDoList[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        if (currentFilter === 'today' && dueDate !== today) {
          continue;
        }

        if (currentFilter === 'upcoming' && dueDate <= today) {
          continue;
        }
        const html = 
        `<p>
          ${name}
          ${dueDate}
          <button onclick="
          deleteTodo(${i});">Delete</button>
        </p>`;
        toDoListHTML+=html;
      }
      document.querySelector(`.final-todo-list`).innerHTML = toDoListHTML;
    }
      function deleteTodo(index) {
      toDoList.splice(index, 1);
      localStorage.setItem('toDoList', JSON.stringify(toDoList));
      renderTodoList();
    }
   

  /*function renderFilteredList(list) {
  let html = '';
  for (let i = 0; i < list.length; i++) {
    const todo = list[i];

    html += `
      <p>
        ${todo.name} ${todo.dueDate}
        <button onclick="
      </p>
    `;
  };
  document.querySelector('.final-todo-list').innerHTML = html;
};
  
function filterUpcoming(){
  const today = new Date().toISOString().split('T')[0];
  const newArray=[];
  for(let i=0;i<toDoList.length;i++){
    if(toDoList[i].dueDate > today){
      newArray.push(toDoList[i]);
    }
  }
  renderFilteredList(newArray);
}
 function filterToday(){
      const newArray=[];
      for(let i=0;i<toDoList.length;i++){
        const today = new Date().toISOString().split('T')[0];
        if(toDoList[i].dueDate === today){
        newArray.push(toDoList[i]);
      };
    };
    renderTodoList();
  }
*/
function showAll() {
  currentFilter = 'all';
  renderTodoList();
}

function filterToday() {
  currentFilter = 'today';
  renderTodoList();
}

function filterUpcoming() {
  currentFilter = 'upcoming';
  renderTodoList();
}

     