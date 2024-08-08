document.getElementById('add-task').addEventListener('click', function() {
    const title = document.getElementById('task-title').value;
    const desc = document.getElementById('task-desc').value;
    const date = document.getElementById('task-date').value;

    if (title && desc && date) {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');

        li.innerHTML = `
            <div class="task-header">
                <span class="task-title">${title}</span>
                <div>
                    <button class="edit-button" onclick="editTask(this)">Edit</button>
                    <button onclick="removeTask(this)">Delete</button>
                </div>
            </div>
            <p class="task-desc">${desc}</p>
            <small class="task-date">Due: ${date}</small>
        `;

        taskList.appendChild(li);

        // Clear input fields
        document.getElementById('task-title').value = '';
        document.getElementById('task-desc').value = '';
        document.getElementById('task-date').value = '';
    } else {
        alert('Please fill in all fields');
    }
});

function removeTask(button) {
    const li = button.parentElement.parentElement.parentElement;
    li.remove();
}

function editTask(button) {
    const li = button.parentElement.parentElement.parentElement;
    const title = li.querySelector('.task-title').textContent;
    const desc = li.querySelector('.task-desc').textContent;
    const date = li.querySelector('.task-date').textContent.replace('Due: ', '');

    document.getElementById('task-title').value = title;
    document.getElementById('task-desc').value = desc;
    document.getElementById('task-date').value = date;

    li.remove();
}
