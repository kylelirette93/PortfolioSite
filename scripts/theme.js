function toggleTheme() {
    const themeMain = document.getElementById('main');
    const themeNav = document.getElementById('sidenav');
    const icon = document.querySelector('.theme i');
    themeMain.classList.toggle('dark');
    themeNav.classList.toggle('dark');

    if (themeMain.classList.contains('dark')) {
        icon.className = 'fa-solid fa-lightbulb fa-2x';
    } else {
        icon.className = 'fa-solid fa-moon fa-2x'
    }
}