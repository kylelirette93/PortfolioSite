function toggleSidenav() {
    const nav = document.getElementById('sidenav');
    const main = document.getElementById('main');
    const toggleButton = document.querySelector('.toggle');
    const icon = document.querySelector('.toggle i');
    const themeIcon = document.querySelector('.theme');
    
    // Check if mobile view
    if (window.innerWidth <= 768) {
        nav.classList.toggle('mobile-active');
        if (nav.classList.contains('mobile-active')) {
            icon.className = 'fa fa-eye fa-2x';
        }
        else {
            icon.className = 'fa fa-eye-slash fa-2x'
        }
    } else {
        // Desktop: collapse/expand
        nav.classList.toggle('collapsed');
        main.classList.toggle('nav-collapsed');

        toggleButton.classList.toggle('collapsed-position');

        if (nav.classList.contains('collapsed')) {
            icon.className = 'fa fa-eye-slash';
            themeIcon.style.opacity = '0';
            
        }
        else {
            icon.className = 'fa fa-eye fa-2x';
            themeIcon.style.opacity = '1';
        }
    }
}

// Close mobile nav when clicking outside
document.addEventListener('click', function(event) {
    if (window.innerWidth <= 768) {
        const nav = document.getElementById('sidenav');
        const toggle = document.querySelector('.toggle');
        
        if (!nav.contains(event.target) && !toggle.contains(event.target)) {
            nav.classList.remove('mobile-active');
        }
    }
});