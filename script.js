const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Initialiser le bouton avec le thème par défaut
const currentTheme = body.getAttribute('data-theme') || 'dark';
themeToggleButton.textContent = currentTheme === 'dark' ? '☀️ Thème clair' : '🌙 Thème sombre';

themeToggleButton.addEventListener('click', () => {
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeToggleButton.textContent = isDark ? '🌙 Thème sombre' : '☀️ Thème clair';
});
