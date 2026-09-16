const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('new_btn');

window.onload = function() {
    loadToDos();
};

newBtn.addEventListener('click', function() {
    const text = prompt('Please enter a new TO DO:');
    if (text && text.trim() !== '') {
        addToDo(text.trim());
        saveToDos();
    }
});

function addToDo(text) {
    const todo = document.createElement('div');
    todo.textContent = text;
    todo.addEventListener('click', function() {
        if (confirm('Do you really want to delete this TO DO?')) {
            todo.remove();
            saveToDos();
        }
    });
    ftList.prepend(todo);
}

function saveToDos() {
    const todos = [];
    const items = ftList.querySelectorAll('div');
    
    items.forEach(item => {
        todos.push(item.textContent);
    });
    const jsonString = encodeURIComponent(JSON.stringify(todos));

    document.cookie = `todo_list=${jsonString}; path=/; max-age=${7 * 24 * 60 * 60}`;
}

function loadToDos() {
    const cookies = document.cookie.split('; ');
    const todoCookie = cookies.find(row => row.startsWith('todo_list='));

    if (todoCookie) {
        const jsonString = decodeURIComponent(todoCookie.split('=')[1]);
        try {
            const todos = JSON.parse(jsonString);
            for (let i = todos.length - 1; i >= 0; i--) {
                addToDo(todos[i]);
            }
        } catch (e) {
            console.error('Failed to parse cookie data');
        }
    }
}