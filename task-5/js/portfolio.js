// js/portfolio.js
document.addEventListener('DOMContentLoaded', () => {
    const portfolioGrid = document.getElementById('portfolio-grid-container');

    if (portfolioGrid && typeof portfolioProjects !== 'undefined') {
        portfolioProjects.forEach(project => {
            const projectCard = `
                <div class="card">
                    <img src="${project.imageUrl}" alt="${project.title}" loading="lazy">
                    <div class="card-content">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
                        <a href="${project.link}" class="btn" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                </div>
            `;
            portfolioGrid.innerHTML += projectCard;
        });
    } else {
        console.error('Portfolio grid container or projects data not found.');
    }
});