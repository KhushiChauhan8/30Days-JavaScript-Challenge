document.getElementById('show-register').addEventListener('click', function () {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('register-page').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function () {
    document.getElementById('register-page').style.display = 'none';
    document.getElementById('login-page').style.display = 'block';
});

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    localStorage.setItem('user', document.getElementById('login-username').value);
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('dashboard-page').style.display = 'flex';
    showNotification("Logged in successfully!");
    document.getElementById('profile-username').textContent = localStorage.getItem('user');
});

document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    localStorage.setItem('user', document.getElementById('register-username').value);
    document.getElementById('register-page').style.display = 'none';
    document.getElementById('dashboard-page').style.display = 'flex';
    showNotification("Registered successfully!");
    document.getElementById('profile-username').textContent = localStorage.getItem('user');
});

document.getElementById('logout-link').addEventListener('click', function () {
    localStorage.removeItem('user');
    document.getElementById('dashboard-page').style.display = 'none';
    document.getElementById('login-page').style.display = 'block';
    showNotification("Logged out successfully!");
});

document.getElementById('create-post-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const postFeed = document.getElementById('post-feed');
    const newPost = document.createElement('div');
    newPost.className = 'post';
    
    const postImage = document.createElement('img');
    postImage.className = 'post-image';
    postImage.src = document.getElementById('image-url').value;

    const postText = document.createElement('p');
    postText.className = 'post-text';
    postText.textContent = document.getElementById('post-text').value;

    const postInteractions = document.createElement('div');
    postInteractions.className = 'post-interactions';
    postInteractions.innerHTML = `
        <button class="like-button">Like</button>
        <button class="comment-button">Comment</button>
    `;

    const postStats = document.createElement('div');
    postStats.className = 'post-stats';
    postStats.textContent = "0 Likes | 0 Comments";

    newPost.appendChild(postImage);
    newPost.appendChild(postText);
    newPost.appendChild(postInteractions);
    newPost.appendChild(postStats);
    
    postFeed.prepend(newPost);

    document.getElementById('image-url').value = '';
    document.getElementById('post-text').value = '';
});

document.getElementById('post-feed').addEventListener('click', function (e) {
    if (e.target.classList.contains('like-button')) {
        e.target.classList.toggle('liked');
        const stats = e.target.closest('.post').querySelector('.post-stats');
        const [likes, comments] = stats.textContent.split(' | ');
        stats.textContent = (e.target.classList.contains('liked') ? parseInt(likes) + 1 : parseInt(likes)) + " Likes | " + comments;
        showNotification("Post liked!");
    }
    if (e.target.classList.contains('comment-button')) {
        const comment = prompt("Enter your comment:");
        if (comment) {
            const stats = e.target.closest('.post').querySelector('.post-stats');
            const [likes, comments] = stats.textContent.split(' | ');
            stats.textContent = likes + " | " + (parseInt(comments) + 1) + " Comments";
            showNotification("Comment added!");
        }
    }
});

function showNotification(message) {
    const notificationContainer = document.getElementById('notification-container');
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notificationContainer.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('user')) {
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('dashboard-page').style.display = 'flex';
        document.getElementById('profile-username').textContent = localStorage.getItem('user');
    } else {
        document.getElementById('login-page').style.display = 'flex';
    }
});
