import React from 'react';

// Composant de carte d'information modernisé
function InfoCard({ title, children, variant = 'default', icon = null }) {
  // Différentes variantes de style pour les cartes
  const variants = {
    default: "bg-white shadow-lg rounded-xl p-6 mb-6 border-l-4 border-red-500 hover:shadow-xl transition-shadow duration-300",
    warning: "bg-yellow-50 shadow-lg rounded-xl p-6 mb-6 border-l-4 border-yellow-500 hover:shadow-xl transition-shadow duration-300",
    info: "bg-blue-50 shadow-lg rounded-xl p-6 mb-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300",
    success: "bg-green-50 shadow-lg rounded-xl p-6 mb-6 border-l-4 border-green-500 hover:shadow-xl transition-shadow duration-300",
  };

  // Couleurs de titre selon la variante
  const titleColors = {
    default: "text-red-700",
    warning: "text-yellow-700",
    info: "text-blue-700",
    success: "text-green-700",
  };

  return (
    <div className={variants[variant] || variants.default}>
      {title && (
        <div className="flex items-center mb-3">
          {icon && <span className="mr-2">{icon}</span>}
          <h2 className={`text-xl font-bold ${titleColors[variant] || titleColors.default}`}>
            {title}
          </h2>
        </div>
      )}
      <div className="text-gray-700 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export default InfoCard;
