// js/blog.js
document.addEventListener('DOMContentLoaded', () => {
    const blogListContainer = document.getElementById('blog-list-container');

    if (blogListContainer && typeof blogPosts !== 'undefined') {
        blogPosts.forEach(post => {
            const postSummary = `
                <article class="blog-summary-card">
                    <img src="${post.imageUrl || 'images/placeholder.jpg'}" alt="${post.title}" loading="lazy" class="blog-summary-img">
                    <div class="blog-summary-content">
                        <h3>${post.title}</h3>
                        <p class="meta">By ${post.author} on ${post.date}</p>
                        <p>${post.snippet}</p>
                        <a href="post.html?id=${post.id}" class="btn">Read More</a>
                    </div>
                </article>
            `;
            blogListContainer.innerHTML += postSummary;
        });
    } else {
        console.error('Blog list container or posts data not found.');
    }
});