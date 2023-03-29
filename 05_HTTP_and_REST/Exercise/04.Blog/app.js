function attachEvents() {
    const POST_URL = 'http://localhost:3030/jsonstore/blog/posts';
    const COMMENTS_URL = 'http://localhost:3030/jsonstore/blog/comments';
    const btnLoadPosts = document.getElementById('btnLoadPosts');
    const btnViewPost = document.getElementById('btnViewPost');
    const postsInputs = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');


    btnLoadPosts.addEventListener('click', async () => {

        const response = await fetch(POST_URL);
        const postsData = await response.json();

        for (const key in postsData) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = postsData[key].title;
            postsInputs.appendChild(option);
        }

        btnViewPost.addEventListener('click', async () => {
            const res = await fetch(COMMENTS_URL);
            const commentsData = await res.json();
            let selectedPostId = postsInputs.options[postsInputs.selectedIndex].value;
            let selectedPostTitle = postsData[selectedPostId].title;
            let selectedPostBody = postsData[selectedPostId].body;
            let allComments = [];
            for (const key in commentsData) {
                if (commentsData[key].postId === selectedPostId) {
                    if (postTitle.textContent === 'Post Details') {
                        postTitle.textContent = selectedPostTitle;
                    }
                    if (postBody.textContent === '') {
                        postBody.textContent = selectedPostBody;
                    }
                    allComments.push(commentsData[key].text);
                }
            }

            allComments.forEach(comment => {
                const liItem = document.createElement('li');
                liItem.textContent = comment;
                postComments.appendChild(liItem);
            });
        });
    });
}

attachEvents();