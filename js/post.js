// js/post.js
document.addEventListener('DOMContentLoaded', () => {
    const postContentArea = document.getElementById('blog-post-content-area');
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (postContentArea && typeof blogPosts !== 'undefined' && postId) {
        const post = blogPosts.find(p => p.id === postId);

        if (post) {
            document.title = post.title + " | My Blog"; // Update page title
            postContentArea.innerHTML = `
                <h1>${post.title}</h1>
                <p class="meta">By ${post.author} on ${post.date}</p>
                ${post.imageUrl ? `<img src="${post.imageUrl}" alt="${post.title}" class="blog-post-image" loading="lazy">` : ''}
                <div class="post-body">
                    ${post.content}
                </div>
                <a href="blog.html" class="btn">« Back to Blog List</a>
            `;
        } else {
            postContentArea.innerHTML = `
                <h1>Post Not Found</h1>
                <p>Sorry, the post you are looking for does not exist.</p>
                <a href="blog.html" class="btn">« Back to Blog List</a>
            `;
        }
    } else {
        if (postContentArea) {
            postContentArea.innerHTML = '<h1>Error loading post.</h1> <p>Post ID missing or data unavailable.</p>';
        }
        console.error('Post content area, posts data, or post ID not found.');
    }
});