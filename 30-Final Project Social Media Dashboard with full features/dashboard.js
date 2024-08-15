document.addEventListener('DOMContentLoaded', function() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('user-info').innerText = `Username: ${user.username}\nEmail: ${user.email}`;
        document.querySelector('#display-picture').setAttribute('src', user.profilePic)
    }

    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
    displayPosts(posts);
    displayNotifications(notifications);
    
    
    document.getElementById('post-button').addEventListener('click', function() {
        const postContent = document.getElementById('post-content').value;
        const postImage = document.getElementById('post-image').value;
        const timestamp = new Date().toLocaleString();
        if (postContent) {
            const post = {
                username: user.username,
                content: postContent,
                image: postImage,
                timestamp: timestamp,
                likes: 0,
                comments: []
            }
            posts.push(post);
            localStorage.setItem('posts', JSON.stringify(posts));
            displayPosts(posts);
            document.getElementById('post-content').value = '';
            document.getElementById('post-image').value = '';
        } else {
            alert('Please enter some content.');
        }
    });

    function displayPosts(posts) {
        const postContainer = document.getElementById('posts-container');
        postContainer.innerHTML = '';
        posts.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            if (post.username === user.username) {
                postElement.classList.add('user-post');
            }
            postElement.innerHTML = `
                <p><strong>${post.username}</strong> <em>${post.timestamp}</em></p>
                <p>${post.content}</p>
                ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
                <div class="post-buttons">
                    <button class="like-button" onclick="likePost(${index})">Like (${post.likes})</button>
                    <button class="comment-button" onclick="toggleCommentSection(${index})">Comment (${post.comments.length})</button>
                </div>
                <div class="comment-section" id="comment-section-${index}" style="display: none;">
                    <textarea id="comment-content-${index}" placeholder="Add a comment..."></textarea>
                    <button onclick="addComment(${index})">Add Comment</button>
                    <div id="comments-${index}">
                        ${post.comments.map(comment => `<div class="comment"><strong>${comment.username}</strong>: ${comment.content}</div>`).join('')}
                    </div>
                </div>
            `;
            postContainer.appendChild(postElement);
        });
    }

    window.likePost = function(index) {
        posts[index].likes += 1;
        localStorage.setItem('posts', JSON.stringify(posts));
        displayPosts(posts);
        addNotification(`your post received a new like!`);
    };

    window.toggleCommentSection = function(index) {
        const commentSection = document.getElementById(`comment-section-${index}`);
        commentSection.style.display = commentSection.style.display === 'none' ? 'block' : 'none';
    };

    window.addComment = function(index) {
        const commentContent = document.getElementById(`comment-content-${index}`).value;
        if (commentContent) {
            const comment = {
                username: user.username,
                content: commentContent
            };
            posts[index].comments.push(comment);
            localStorage.setItem('posts', JSON.stringify(posts));
            displayPosts(posts);
            addNotification(`your post received a new comment!`);
        } else {
            alert('Please enter a comment.');
        }
    };

    function addNotification(message) {
        const notification = {
            message: message,
            timestamp: new Date().toLocaleString()
        };
        notifications.push(notification);
        localStorage.setItem('notifications', JSON.stringify(notifications));
        displayNotifications(notifications);
    }

    function displayNotifications(notifications) {
        const notificationContainer = document.getElementById('notifications');
        notificationContainer.innerHTML = '';
        notifications.forEach(notification => {
            const notificationElement = document.createElement('div');
            notificationElement.className = 'notification';
            notificationElement.innerHTML = `
                <p>${notification.message}</p>
                <p><em>${notification.timestamp}</em></p>
            `;
            notificationContainer.appendChild(notificationElement);
        });
    }
});

document.querySelector("#edit-user").addEventListener("click",(e)=>{
    e.preventDefault()
    window.location.href = 'profile.html';
})