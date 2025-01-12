// Fonction pour obtenir le thème actuel depuis localStorage ou utiliser la valeur par défaut
const getStoredTheme = () => localStorage.getItem('theme') || 'dark';

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // N'exécuter le code lié au thème que si le bouton existe
    if (themeToggleButton) {
        const currentTheme = getStoredTheme();
        body.setAttribute('data-theme', currentTheme);
        themeToggleButton.textContent = currentTheme === 'dark' ? '☀️ Thème clair' : '🌙 Thème sombre';

        themeToggleButton.addEventListener('click', () => {
            const isDark = body.getAttribute('data-theme') === 'dark';
            const newTheme = isDark ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            body.setAttribute('data-theme', newTheme);
            themeToggleButton.textContent = isDark ? '🌙 Thème sombre' : '☀️ Thème clair';
        });
    }

    // Ajout du code de débogage pour le menu mobile
    const mobileMenu = document.getElementById('mobile-menu');
    const menuButton = document.querySelector('.menu-button');

    if (menuButton && mobileMenu) {
        console.log('Menu et bouton trouvés :', { 
            menu: mobileMenu, 
            button: menuButton 
        });

        // Observer les changements de classe sur le menu
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    console.log('Classes du menu modifiées:', mobileMenu.className);
                    console.log('Style display:', window.getComputedStyle(mobileMenu).display);
                    console.log('Style visibility:', window.getComputedStyle(mobileMenu).visibility);
                    console.log('Style z-index:', window.getComputedStyle(mobileMenu).zIndex);
                }
            });
        });

        observer.observe(mobileMenu, { attributes: true });

        // Ajouter un listener de débogage sur le bouton
        menuButton.addEventListener('click', () => {
            console.log('Bouton menu cliqué');
            console.log('État du menu avant toggle:', mobileMenu.classList.contains('active'));
        });
    }
});