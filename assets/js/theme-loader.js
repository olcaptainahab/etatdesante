// Charger le thème depuis localStorage au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    const storedTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', storedTheme);
});