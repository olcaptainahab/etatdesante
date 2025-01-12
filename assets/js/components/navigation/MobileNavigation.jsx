import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Empêcher le défilement du body quand le menu est ouvert
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="lg:hidden relative">
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 p-2 bg-[#102338] text-white hover:bg-blue-600 rounded-md transition-colors duration-200"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />

      <nav 
        className={`fixed top-0 right-0 bottom-0 w-64 bg-[#102338] shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-16">
          <div className="flex-1 overflow-y-auto px-4">
            <ul className="space-y-4">
              <li>
                <a 
                  href="/locales/fr/pages/home.html" 
                  target="content-frame"
                  className="block p-3 text-white hover:bg-blue-600 rounded-md transition-colors duration-200"
                  onClick={handleLinkClick}
                >
                  Page d'accueil
                </a>
              </li>
              <li>
                <a 
                  href="/locales/fr/pages/temps-reel.html"
                  target="content-frame"
                  className="block p-3 text-white hover:bg-blue-600 rounded-md transition-colors duration-200"
                  onClick={handleLinkClick}
                >
                  Temps réel
                </a>
              </li>
              <li>
                <a 
                  href="/locales/fr/pages/articles.html"
                  target="content-frame" 
                  className="block p-3 text-white hover:bg-blue-600 rounded-md transition-colors duration-200"
                  onClick={handleLinkClick}
                >
                  Articles
                </a>
              </li>
              <li>
                <a 
                  href="/locales/fr/pages/liens-utiles.html"
                  target="content-frame"
                  className="block p-3 text-white hover:bg-blue-600 rounded-md transition-colors duration-200"
                  onClick={handleLinkClick}
                >
                  Liens utiles
                </a>
              </li>
            </ul>
          </div>
          <div className="border-t border-gray-700 p-4">
            <button
              onClick={() => {
                handleLinkClick();
                // Ajouter ici la logique pour changer de langue
              }}
              className="w-full p-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200 text-center"
            >
              FR / EN
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileNavigation;