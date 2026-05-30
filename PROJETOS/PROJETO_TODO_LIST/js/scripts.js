const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const editForm = document.getElementById('edit-form');
const editInput = document.getElementById('edit-input');
const cancelEditBtn = document.getElementById('cancel-edit-btn');
const searchInput = document.getElementById('search-input');
const eraseBtn = document.getElementById('erase-button');
const filterBtn = document.getElementById('filter-select');


let oldInputValue;

const saveTodo = (text, done = 0, save = 1) => {

    const todo = document.createElement('div');
    todo.classList.add('todo');

    const todoTitle = document.createElement('h3');
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement('button');
    doneBtn.classList.add('finish-todo');
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-todo');
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('remove-todo');
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn);

    if (done) {
        todo.classList.add('done');
    }

    if (save) {
        const todos = getTodosLocalStorage();
        todos.push({ text, done: 0 });
        saveTodoLocalStorage(todos);
    }

    todoList.appendChild(todo);

    todoInput.value = '';
    todoInput.focus();

};

const toggleForms = () => {
    editForm.classList.toggle('hide');
    todoForm.classList.toggle('hide');
    todoList.classList.toggle('hide');
}

const updateTodo = (text) => {
    const todos = document.querySelectorAll('.todo');

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector('h3');
        if (todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = text;

            updateTodoLocalStorage(oldInputValue, text);
        }
    });
}

const getSearchTools = (search) => {
    const todos = document.querySelectorAll('.todo');
    todos.forEach((todo) => {
        const todoTitle = todo.querySelector('h3').innerText.toLowerCase();
        search = search.toLowerCase();
        if (!todoTitle.includes(search)) {
            todo.style.display = 'none';
        } else {
            todo.style.display = 'flex';
        }
    });
}

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = todoInput.value;

    if (inputValue) {
        saveTodo(inputValue);
    }
});

document.addEventListener('click', (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest('div');
    let todoTitle;

    if (parentEl && parentEl.querySelector('h3')) {
        todoTitle = parentEl.querySelector('h3').innerText;
    }

    if (targetEl.classList.contains('finish-todo')) {
        parentEl.classList.toggle('done');
        updateTodoStatusStorage(todoTitle, parentEl.classList.contains('done'));
    }
    if (targetEl.classList.contains('edit-todo')) {
        toggleForms();
        editInput.value = todoTitle;
        oldInputValue = todoTitle;
    }
    if (targetEl.classList.contains('remove-todo')) {
        parentEl.remove();

        removeTodoLocalStorage(todoTitle);
    }
});

cancelEditBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleForms();
});

editForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const editInputValue = editInput.value;

    if (editInputValue) {
        updateTodo(editInputValue);
        updateTodoStatusStorage(oldInputValue, editInputValue);
    }
    toggleForms();
});

searchInput.addEventListener('keyup', (e) => {
    const search = e.target.value

    getSearchTools(search);
});

eraseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchInput.value = '';
    getSearchTools('');
});

filterBtn.addEventListener('change', (e) => {
    const filterValue = e.target.value;
    const todos = document.querySelectorAll('.todo');
    todos.forEach((todo) => {
        switch (filterValue) {
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if (todo.classList.contains('done')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'pending':
                if (!todo.classList.contains('done')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    });
});

const getTodosLocalStorage = () => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    return todos;
}

const loadTodos = () => {
    const todos = getTodosLocalStorage();
    todos.forEach((todo) => {
        saveTodo(todo.text, todo.done, 0);
    });
}

const saveTodoLocalStorage = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

const removeTodoLocalStorage = (todoText) => {
    const todos = getTodosLocalStorage();
    const filteredTodos = todos.filter((todo) => todo.text !== todoText);
    saveTodoLocalStorage(filteredTodos);
}

const updateTodoStatusStorage = (todoText, done) => {
    const todos = getTodosLocalStorage();
    todos.forEach((todo) => {
        if (todo.text === todoText) {
            todo.done = done ? 1 : 0;
        }
    });
    saveTodoLocalStorage(todos);
}

const updateTodoLocalStorage = (oldTodoText, newTodoText) => {
    const todos = getTodosLocalStorage();
    todos.forEach((todo) => {
        if (todo.text === oldTodoText) {
            todo.text = newTodoText;
        }
    });
    saveTodoLocalStorage(todos);
}

loadTodos();
