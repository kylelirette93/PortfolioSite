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

function loadProject(projectFile, projectTitle) {
    const mainTitle = document.getElementById('main-title');
    const main = document.getElementById('main');
    const projectUrl = `./projects/${projectFile}`;
    console.log(`Attempting to load project from:`, projectUrl);

    const contentSections = document.querySelectorAll('.content-section:not(#dynamic-content)');
    contentSections.forEach(section => {
        section.classList.remove('active');
    });

    if (mainTitle) {
        mainTitle.textContent = projectTitle;
    }

    fetch(projectUrl)
    .then(response => {
        if (!response.ok) throw new Error('Project not found');
        return response.text();
    })
    .then(html => {
        let dynamicContent = document.getElementById('dynamic-content');
        if (!dynamicContent) {
            dynamicContent = document.createElement('section');
            dynamicContent.id = 'dynamic-content';
            dynamicContent.className = 'content-section';
            main.querySelector('header').insertAdjacentElement('afterend', dynamicContent);
        }

        dynamicContent.innerHTML = html;
        dynamicContent.classList.add('active');
    })
    .catch(error => {
        console.error('Error loading project:', error);
    });
}

function addBackButton() {
    const dynamicContent = document.getElementById('dynamic-content');
    if (dynamicContent && !dynamicContent.querySelector('.back-button')) {
        const backButton = document.createElement('button');
        backButton.className = 'back-button';
        backButton.innerHTML = '<i class="fa-solid fa-arrow-left"></i> Back to Projects';
        backButton.style.cssText = 'display: block; padding: 10px; background: red; color: white; border: none; cursor: pointer; margin: 10px;';
        backButton.onclick = () => {  // lowercase 'onclick'
            // Remove active from dynamic content
            dynamicContent.classList.remove('active');
            
            // Find and activate the portfolio link
            const portfolioLink = document.querySelector('#sidenav ul li a[onclick*="portfolio-overview"]');
            if (portfolioLink) {
                handleNavigationClick(portfolioLink, 'portfolio-overview', 'Projects');
            }
        };
        dynamicContent.insertBefore(backButton, dynamicContent.firstChild);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const defaultLink = document.querySelector('#sidenav ul li a[onclick*="portfolio-overview"]');
    if (defaultLink) {
        handleNavigationClick(defaultLink, 'portfolio-overview', 'Portfolio');
    } else {
    }
});