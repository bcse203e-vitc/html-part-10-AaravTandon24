document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById('addButton');
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');

    addButton.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        
        if (todoText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = todoText;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            
            removeButton.addEventListener('click', () => {
                todoList.removeChild(listItem);
            });

            listItem.appendChild(removeButton);
            todoList.appendChild(listItem);

            todoInput.value = ''; 
        }
    });

    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});
