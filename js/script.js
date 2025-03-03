// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Dark mode toggle (example)
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });


  // Fetch GitHub Projects
async function fetchGitHubProjects() {
  try {
    const response = await fetch('https://api.github.com/users/anepal85/repos');
    const projects = await response.json();
    const container = document.getElementById('dynamic-projects');

    projects.forEach(project => {
      const projectCard = `
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="project-card shadow">
            <div class="project-card-body">
              <h3 class="project-title">${project.name}</h3>
              <p class="project-description">${project.description || 'No description available.'}</p>
              <div class="project-tech">
                <span class="badge bg-primary">${project.language || 'N/A'}</span>
              </div>
              <a href="${project.html_url}" class="btn btn-outline-primary mt-3">GitHub</a>
            </div>
          </div>
        </div>
      `;
      container.innerHTML += projectCard;
    });
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
  }
}
  
  // Initialize
  fetchGitHubProjects();