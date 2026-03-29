const toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];
let currentFilter = 'all';
const allButton = document.querySelector('.allFilterButton');
const todayButton = document.querySelector('.todayFilterButton');
const upcomingButton = document.querySelector('.upcomingFilterButton');
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
function showAll() {
  todayButton.classList.remove("active");
  upcomingButton.classList.remove("active");
  allButton.classList.add("active");
  currentFilter = 'all';
  renderTodoList();
}

function filterToday() {
  allButton.classList.remove("active");
  upcomingButton.classList.remove("active");
  todayButton.classList.add("active");
  currentFilter = 'today';
  renderTodoList();
}

function filterUpcoming() {
  allButton.classList.remove('active');
  todayButton.classList.remove('active');
  upcomingButton.classList.add('active');
  currentFilter = 'upcoming';
  renderTodoList();
}

     