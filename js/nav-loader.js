// Inject nav from nav.html
fetch('./nav.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('nav-placeholder').innerHTML = html;

        // Wait until nav is fully inserted before running active logic
        highlightActiveNav();
    });

// Function to highlight the active nav item
function highlightActiveNav() {
    const currentPage = location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}