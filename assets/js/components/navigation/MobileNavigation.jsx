import React, { useState } from 'react';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden w-full">
      {/* Container de la barre de navigation fixe */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-[#102338] flex items-center justify-end px-4 z-50">
        <button
          onClick={toggleMenu}
          className="p-2 text-white hover:bg-blue-600 rounded-md transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {/* Icône de menu en HTML/CSS pur */}
          <div className="w-6 h-6 relative flex items-center justify-center">
            {isOpen ? (
              <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                ×
              </span>
            ) : (
              <div className="space-y-1.5">
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </div>
            )}
          </div>
        </button>
      </div>

      {/* Menu déroulant */}
      <div 
        className={`fixed left-0 right-0 bg-[#102338] shadow-lg transition-all duration-300 ease-in-out z-40 ${
          isOpen 
            ? 'top-16 opacity-100' 
            : '-top-full opacity-0'
        }`}
      >
        <nav className="py-4">
          <ul className="space-y-2">
            <li>
              <a 
                href="/locales/fr/pages/home.html" 
                target="content-frame"
                className="block px-6 py-3 text-white hover:bg-blue-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Page d'accueil
              </a>
            </li>
            <li>
              <a 
                href="/locales/fr/pages/temps-reel.html"
                target="content-frame"
                className="block px-6 py-3 text-white hover:bg-blue-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Temps réel
              </a>
            </li>
            <li>
              <a 
                href="/locales/fr/pages/articles.html"
                target="content-frame"
                className="block px-6 py-3 text-white hover:bg-blue-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Articles
              </a>
            </li>
            <li>
              <a 
                href="/locales/fr/pages/liens-utiles.html"
                target="content-frame"
                className="block px-6 py-3 text-white hover:bg-blue-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Liens utiles
              </a>
            </li>
            <li>
              <button
                onClick={() => {
                  // Ajouter ici la logique pour changer de langue
                  setIsOpen(false);
                }}
                className="w-full text-left px-6 py-3 text-white hover:bg-blue-600 transition-colors duration-200"
              >
                FR / EN
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavigation;