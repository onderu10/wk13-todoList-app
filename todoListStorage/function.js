const nameInput = document.querySelector('#form-name');
const todoInformation = document.querySelector('#todo-informations');
let todoList = [];

// Load tasks from localStorage
if (localStorage.getItem('todoList')) {
  todoList = JSON.parse(localStorage.getItem('todoList'));
  render();
}

function render() {
  const list = todoList.map((todo, index) => {
    return `
      <tr>
        <th>${index + 1}</th>
        <th>${todo.todo}</th>
        <th><button onClick="handleDelete(${index})" class="btn-delete">delete</button></th>
      </tr>`;
  });

  todoInformation.innerHTML = list.join('');
}

function handleClickAddPerson() {
  const todoName = nameInput.value;

  if (todoName !== '') {
    const newTask = {
      todo: todoName,
    };

    todoList.push(newTask);

    // Save tasks to localStorage
    localStorage.setItem('todoList', JSON.stringify(todoList));

    render();

    nameInput.value = '';
  } else {
    alert('Please fill the field');
  }
}

function handleDelete(index) {
  todoList.splice(index, 1);

  // Save tasks to localStorage
  localStorage.setItem('todoList', JSON.stringify(todoList));

  render();
}

function handleDeleteAll() {
  todoList = [];

  // Save tasks to localStorage
  localStorage.setItem('todoList', JSON.stringify(todoList));

  render();
}

render();
