function handleNavigationClick(clickedElement, targetId, newTitle) {
    const navLinks = document.querySelectorAll('#sidenav ul li a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => {
        section.classList.remove('active');
    });

    clickedElement.classList.add('active');

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    const mainTitle = document.getElementById('main-title');
    if (mainTitle) {
        mainTitle.textContent = newTitle;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const defaultLink = document.querySelector('#sidenav ul li a[onclick*="portfolio-overview"]');
    if (defaultLink) {
        handleNavigationClick(defaultLink, 'portfolio-overview', 'Portfolio');
    } else {
    }
});