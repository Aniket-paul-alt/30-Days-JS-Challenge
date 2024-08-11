document.addEventListener('DOMContentLoaded', function() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('profile-username').value = user.username;
        document.getElementById('profile-email').value = user.email;
        document.getElementById('profile-picture').value = user.profilePic || '';
        displayUserInfo(user);
    }

    document.getElementById('profile-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('profile-username').value;
        const email = document.getElementById('profile-email').value;
        const profilePic = document.getElementById('profile-picture').value;

        if (username && email) {
            const updatedUser = { username, email, profilePic };
            localStorage.setItem('user', JSON.stringify(updatedUser));
            displayUserInfo(updatedUser);
            alert('Profile updated successfully!');
            window.location.href = 'dashboard.html';
        } else {
            alert('Please fill in all required fields.');
        }
    });

    function displayUserInfo(user) {
        document.getElementById('display-username').innerText = `Username: ${user.username}`;
        document.getElementById('display-email').innerText = `Email: ${user.email}`;
        document.getElementById('display-picture').src = user.profilePic || 'default-profile.png';
    }
});
