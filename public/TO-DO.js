let input = document.getElementById('item'),
button = document.getElementById('add'),
ol = document.getElementById('list')

const todoList = {
toDoCount: () => {
    document.getElementById('count').innerHTML = `YOU HAVE TODOS : ${ol.children.length}`;
},
add: () => {
    if(input.value === '') {
        alert('ENTER TASK');
    } else {
        if(input.value.length <= 90) {ol.innerHTML += `
                <li class="toDoItem">
                    <h2 class="text">${input.value}</h2>
                    <span class="remove">X</span>
                </li>`;
            localStorage.toDoItems = ol.innerHTML;          
        }
    }

    input.value = '';
    todoList.toDoCount();
},
enterPress: e => {
    if(e.keyCode === 13) {
        todoList.add();
    }
},
removeToDo: e => {
    if(e.target.className === 'remove') {
        e.target.parentElement.remove();
        localStorage.toDoItems = ol.innerHTML;
    }
    todoList.toDoCount();
},
};


button.addEventListener('click', todoList.add);
ol.addEventListener('click', todoList.removeToDo);