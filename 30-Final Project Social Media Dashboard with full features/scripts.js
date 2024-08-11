document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const profilePic = document.querySelector('#profile-picture').value

    if (username && email && password) {
        localStorage.setItem('user', JSON.stringify({ username, email, password, profilePic }));
        alert('Registration successful!');
    } else {
        alert('Please fill in all fields.');
    }
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('login-password').value;
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.password === password) {
        alert('Login successful!');
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid email or password.');
    }
});
