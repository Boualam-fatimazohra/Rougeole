import React from 'react';
import { Link } from 'react-router-dom';
import erupation from './IMG-20250520-WA0013.jpg';


function Header() {
  return (
    <header className="bg-[#b71c1c]!  text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex flex-wrap justify-between items-center px-4 py-3">
        {/* Logo + titre */}
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <img
            src={erupation}
            alt="Prévention"
            className="h-10 w-auto rounded-full"
          />
          <Link to="/" className="text-xl font-bold text-white hover:text-white">
            Sensibilisation<br />Rougeole
          </Link>
        </div>

        {/* Menu TOUJOURS visible, même sur mobile */}
        <ul className="flex flex-wrap gap-2 font-medium">
          <li><Link to="/" className="px-3 py-2 rounded-md hover:bg-[#b71c1c] text-white">Accueil</Link></li>
          <li><Link to="/a-propos" className="px-3 py-2 rounded-md hover:bg-[#b71c1c] text-white">Qu'est-ce que c'est ?</Link></li>
          <li><Link to="/symptomes" className="px-3 py-2 rounded-md hover:bg-[#b71c1c] text-white">Symptômes</Link></li>
          <li><Link to="/prevention" className="px-3 py-2 rounded-md hover:bg-[#b71c1c] text-white">Prévention</Link></li>
          <li><Link to="/statistiques" className="px-3 py-2 rounded-md hover:bg-[#b71c1c] text-white">Statistiques</Link></li>
          <li><Link to="/ressources" className="px-3 py-2 rounded-md hover:bg-[#b71c1c] text-white">Ressources</Link></li>
          <li><Link to="/commentaires" className="px-3 py-2 rounded-md cemmantaire-bg text-black border font-semibold">Commentaires</Link></li>
          <li><Link to="/documents" className="px-3 py-2 rounded-md documment-bg text-white border  font-semibold">Documents</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
