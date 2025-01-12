const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const isDark = currentTheme === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeToggleButton.textContent = isDark ? '🌙 Thème sombre' : '☀️ Thème clair';
});
