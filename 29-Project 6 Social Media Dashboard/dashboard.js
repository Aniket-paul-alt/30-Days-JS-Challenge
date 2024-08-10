// dashboard.js
document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    document.getElementById('usernameDisplay').textContent = username;

    const posts = [];

    document.getElementById('postForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const postContent = document.getElementById('postContent').value;
        const postImage = document.getElementById('postImage').files[0];
        const timestamp = new Date().toLocaleString();

        const post = {
            username: username,
            content: postContent,
            image: postImage ? URL.createObjectURL(postImage) : null,
            timestamp: timestamp,
            likes: 0,
            comments: []
        };

        posts.push(post);
        displayPosts(posts);
        document.getElementById('postForm').reset();
    });

    function displayPosts(posts) {
        const postsContainer = document.getElementById('posts');
        postsContainer.innerHTML = '';

        posts.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            if (post.username === username) {
                postElement.classList.add('my-post');
            }
            postElement.innerHTML = `
                <div class="post-header">
                    <span class="post-username">${post.username}</span>
                    <span class="post-timestamp">${post.timestamp}</span>
                </div>
                <p>${post.content}</p>
                ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
                <div class="post-actions">
                    <button onclick="likePost(${index})">Like (${post.likes})</button>
                    <button onclick="toggleCommentSection(${index})">Comment (${post.comments.length})</button>
                </div>
                <div class="comment-section" id="comment-section-${index}" style="display: none;">
                    <textarea id="comment-input-${index}" placeholder="Add a comment..."></textarea>
                    <button onclick="addComment(${index})">Add Comment</button>
                    <div class="comments-list" id="comments-list-${index}">
                        ${post.comments.map(comment => `<p>${comment}</p>`).join('')}
                    </div>
                </div>
            `;
            postsContainer.appendChild(postElement);
        });
    }

    window.likePost = function(index) {
        posts[index].likes++;
        displayPosts(posts);
    };

    window.toggleCommentSection = function(index) {
        const commentSection = document.getElementById(`comment-section-${index}`);
        commentSection.style.display = commentSection.style.display === 'none' ? 'block' : 'none';
    };

    window.addComment = function(index) {
        const commentInput = document.getElementById(`comment-input-${index}`);
        const comment = commentInput.value;
        if (comment) {
            posts[index].comments.push(comment);
            commentInput.value = '';
            displayPosts(posts);
        }
    };
});
