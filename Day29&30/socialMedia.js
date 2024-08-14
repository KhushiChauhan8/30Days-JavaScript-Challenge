document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        sessionStorage.setItem('loggedInUser', username);
        document.querySelector('.login-form').classList.add('hidden');
        document.getElementById('dashboard').classList.remove('hidden');
        loadPosts();
    }
});

let posts = [];

document.getElementById('postForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const postText = document.getElementById('postText').value;
    const postImage = document.getElementById('postImage').value;
    const username = sessionStorage.getItem('loggedInUser');

    if (postText) {
        const post = {
            username: username,
            text: postText,
            image: postImage,
            timestamp: new Date().toLocaleString(),
            likes: 0,
            comments: []
        };
        posts.push(post);
        savePosts();
        displayPost(post);
        document.getElementById('postForm').reset();
    }
});

function savePosts() {
    localStorage.setItem('posts', JSON.stringify(posts));
}

function loadPosts() {
    const savedPosts = JSON.parse(localStorage.getItem('posts'));
    if (savedPosts) {
        posts = savedPosts;
        posts.forEach(displayPost);
    }
}

function displayPost(post) {
    const postFeed = document.getElementById('postFeed');
    const postElement = document.createElement('div');
    postElement.className = 'post';
    postElement.innerHTML = `
        <p class="username">${post.username}</p>
        <p>${post.text}</p>
        ${post.image ? `<img src="${post.image}" alt="Post image">` : ''}
        <p class="timestamp">${post.timestamp}</p>
        <div class="actions">
            <button class="like-button">❤️ Like (<span>${post.likes}</span>)</button>
            <button class="comment-button">💬 Comment</button>
        </div>
        <div class="comments"></div>
    `;
    postFeed.appendChild(postElement);

    const likeButton = postElement.querySelector('.like-button');
    likeButton.addEventListener('click', function () {
        post.likes++;
        likeButton.querySelector('span').textContent = post.likes;
        likeButton.classList.add('liked');
        savePosts();
    });

    const commentButton = postElement.querySelector('.comment-button');
    commentButton.addEventListener('click', function () {
        const comment = prompt('Enter your comment:');
        if (comment) {
            post.comments.push(comment);
            savePosts();
            const commentElement = document.createElement('p');
            commentElement.textContent = comment;
            postElement.querySelector('.comments').appendChild(commentElement);
        }
    });
}

window.addEventListener('load', function () {
    if (sessionStorage.getItem('loggedInUser')) {
        document.querySelector('.login-form').classList.add('hidden');
        document.getElementById('dashboard').classList.remove('hidden');
        loadPosts();
    }
});
