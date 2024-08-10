// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Store user information in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Redirect to the dashboard
    window.location.href = 'dashboard.html';
});
