import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer  text-white p-6 mt-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-3 text-red-300">À propos</h3>
            <p className="text-gray-300">
              Ce site vise à sensibiliser le public sur la rougeole, ses symptômes, sa prévention et son traitement.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3 text-red-300">Liens rapides</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-white transition-colors duration-300">Accueil</Link></li>
              <li><Link to="/symptomes" className="hover:text-white transition-colors duration-300">Symptômes</Link></li>
              <li><Link to="/prevention" className="hover:text-white transition-colors duration-300">Prévention</Link></li>
              <li><Link to="/commentaires" className="hover:text-white transition-colors duration-300">Commentaires</Link></li>
            </ul>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold mb-3 text-red-300">Contact</h3>
            <p className="text-gray-300">
              Pour toute question ou suggestion, n'hésitez pas à laisser un commentaire dans la section dédiée.
            </p>
            <div className="flex justify-center md:justify-end mt-4 space-x-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">&copy; {currentYear} Site de Sensibilisation à la Rougeole. Tous droits réservés.</p>
          <p className="text-sm mt-2 text-gray-500">
            Ce site fournit des informations générales sur la rougeole. Consultez toujours un professionnel de la santé pour des conseils médicaux personnalisés.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
