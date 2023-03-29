function attachEvents() {
    const POST_URL = 'http://localhost:3030/jsonstore/blog/posts';
    const COMMENTS_URL = 'http://localhost:3030/jsonstore/blog/comments';
    const btnLoadPosts = document.getElementById('btnLoadPosts');
    const btnViewPost = document.getElementById('btnViewPost');
    const postsInputs = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');

    let getPosts = {};
    btnLoadPosts.addEventListener('click', async () => {

        const response = await fetch(POST_URL);
        const postsData = await response.json();
        postsInputs.innerHTML = '';
        for (const key in postsData) {

            if (!(key in getPosts)) {
                getPosts[key] = postsData[key].body;
            }
            const option = document.createElement('option');
            option.value = key;
            option.textContent = postsData[key].title;
            postsInputs.appendChild(option);
        }
    });

    btnViewPost.addEventListener('click', async () => {
        const res = await fetch(COMMENTS_URL);
        const commentsData = await res.json();
        postComments.innerHTML = '';

        let selectedPostId = postsInputs.options[postsInputs.selectedIndex].value;
        let selectedPostTitle = postsInputs.options[postsInputs.selectedIndex].textContent;
        let selectedPostBody = getPosts[selectedPostId];
        postTitle.textContent = selectedPostTitle;
        postBody.textContent = selectedPostBody;

        for (const key in commentsData) {
            if (commentsData[key].postId === selectedPostId) {
                const liItem = document.createElement('li');
                liItem.setAttribute('id', key)
                liItem.textContent = commentsData[key].text;
                postComments.appendChild(liItem);
            }
        }
    });
}

attachEvents();