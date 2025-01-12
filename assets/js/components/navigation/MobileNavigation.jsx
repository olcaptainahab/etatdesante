import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-white hover:bg-blue-600 rounded-md"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="fixed inset-y-0 right-0 w-64 bg-[#102338] shadow-xl overflow-y-auto pt-16">
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMenu}
                className="p-2 text-white hover:bg-blue-600 rounded-md"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="px-4">
              <ul className="space-y-4">
                <li>
                  <a 
                    href="/locales/fr/pages/home.html" 
                    target="content-frame"
                    className="block p-2 text-white hover:bg-blue-600 rounded-md"
                    onClick={toggleMenu}
                  >
                    Page d'accueil
                  </a>
                </li>
                <li>
                  <a 
                    href="/locales/fr/pages/temps-reel.html"
                    target="content-frame"
                    className="block p-2 text-white hover:bg-blue-600 rounded-md"
                    onClick={toggleMenu}
                  >
                    Temps réel
                  </a>
                </li>
                <li>
                  <a 
                    href="/locales/fr/pages/articles.html"
                    target="content-frame" 
                    className="block p-2 text-white hover:bg-blue-600 rounded-md"
                    onClick={toggleMenu}
                  >
                    Articles
                  </a>
                </li>
                <li>
                  <a 
                    href="/locales/fr/pages/liens-utiles.html"
                    target="content-frame"
                    className="block p-2 text-white hover:bg-blue-600 rounded-md"
                    onClick={toggleMenu}
                  >
                    Liens utiles
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => {
                      toggleLanguage();
                      toggleMenu();
                    }}
                    className="block w-full p-2 text-left text-white hover:bg-blue-600 rounded-md"
                  >
                    FR / EN
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;