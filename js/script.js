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
  
  // Fetch GitHub projects (example using GitHub API)
  async function fetchGitHubProjects() {
    const response = await fetch('https://api.github.com/users/anepal85/repos');
    const projects = await response.json();
    const projectsContainer = document.getElementById('projects-container');
    
    projects.forEach(project => {
      projectsContainer.innerHTML += `
        <div class="project-card">
          <h3>${project.name}</h3>
          <p>${project.description || 'No description'}</p>
          <a href="${project.html_url}" target="_blank">View on GitHub</a>
        </div>
      `;
    });
  }
  
  // Initialize
  fetchGitHubProjects();