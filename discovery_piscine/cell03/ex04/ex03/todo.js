$(document).ready(function() {
    loadToDos();

    $('#new_btn').click(function() {
        const text = prompt('Please enter a new TO DO:');
        if (text && text.trim() !== '') {
            addToDo(text.trim());
            saveToDos();
        }
    });

    function addToDo(text) {
        const $todo = $('<div></div>').text(text);
        $todo.click(function() {
            if (confirm('Do you really want to delete this TO DO?')) {
                $(this).remove(); // ลบ Element ออกจาก DOM
                saveToDos();
            }
        });

        $('#ft_list').prepend($todo);
    }

    function saveToDos() {
        const todos = [];
        $('#ft_list div').each(function() {
            todos.push($(this).text());
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
});