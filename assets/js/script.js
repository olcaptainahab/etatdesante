// Fonction pour obtenir le thème actuel depuis localStorage ou utiliser la valeur par défaut
const getStoredTheme = () => localStorage.getItem('theme') || 'dark';

const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Fonction pour mettre à jour le thème dans l'iframe de contenu
const updateContentFrameTheme = (theme) => {
    try {
        const contentFrame = window.parent.document.getElementById('content-frame');
        if (contentFrame) {
            const contentDocument = contentFrame.contentDocument || contentFrame.contentWindow.document;
            const contentBody = contentDocument.body;
            contentBody.setAttribute('data-theme', theme);
        }
    } catch (e) {
        console.error('Erreur lors de la mise à jour du thème:', e);
    }
};

// Initialiser le thème au chargement
const currentTheme = getStoredTheme();
body.setAttribute('data-theme', currentTheme);
themeToggleButton.textContent = currentTheme === 'dark' ? '☀️ Thème clair' : '🌙 Thème sombre';

themeToggleButton.addEventListener('click', () => {
    const isDark = body.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    
    // Sauvegarder le thème dans localStorage
    localStorage.setItem('theme', newTheme);
    
    // Mettre à jour le thème dans la navigation
    body.setAttribute('data-theme', newTheme);
    
    // Mettre à jour le thème dans l'iframe de contenu
    updateContentFrameTheme(newTheme);
    
    // Mettre à jour le texte du bouton
    themeToggleButton.textContent = isDark ? '🌙 Thème sombre' : '☀️ Thème clair';
});