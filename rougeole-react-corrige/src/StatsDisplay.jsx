import React from 'react';

// Composant modernisé pour afficher des statistiques clés
function StatsDisplay({ label, value, unit = '', description = '', icon = null, color = 'blue' }) {
  // Différentes variantes de couleurs
  const colorVariants = {
    blue: {
      bg: "bg-gradient-to-br from-blue-50 to-blue-100",
      border: "border-blue-300",
      text: "text-blue-700",
      shadow: "shadow-blue-200"
    },
    red: {
      bg: "bg-gradient-to-br from-red-50 to-red-100",
      border: "border-red-300",
      text: "text-red-700",
      shadow: "shadow-red-200"
    },
    green: {
      bg: "bg-gradient-to-br from-green-50 to-green-100",
      border: "border-green-300",
      text: "text-green-700",
      shadow: "shadow-green-200"
    },
    yellow: {
      bg: "bg-gradient-to-br from-yellow-50 to-yellow-100",
      border: "border-yellow-300",
      text: "text-yellow-700",
      shadow: "shadow-yellow-200"
    },
    purple: {
      bg: "bg-gradient-to-br from-purple-50 to-purple-100",
      border: "border-purple-300",
      text: "text-purple-700",
      shadow: "shadow-purple-200"
    }
  };

  const colorClasses = colorVariants[color] || colorVariants.blue;

  return (
    <div className={`${colorClasses.bg} border ${colorClasses.border} p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4 transform hover:scale-105 transition-transform`}>
      {icon && (
        <div className="flex justify-center mb-2">
          <span className={`${colorClasses.text} text-opacity-80`}>{icon}</span>
        </div>
      )}
      <div className={`text-4xl font-bold ${colorClasses.text} mb-1`}>
        {value}{unit}
      </div>
      <div className="text-lg font-semibold text-gray-800 mt-1">{label}</div>
      {description && (
        <p className="text-sm text-gray-600 mt-3 px-2">{description}</p>
      )}
    </div>
  );
}

function StatisticsSection() {
  return (
    <section className="px-6 md:px-12 py-12 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Titre principal */}
        <h2 className="text-4xl font-extrabold text-center text-red-700 mb-6">
          Statistiques et Tendances
        </h2>

        {/* Sous-titre */}
        <h3 className="text-xl font-bold text-red-700 mb-4">
          Situation Mondiale Récente (Données OMS - fin 2023)
        </h3>

        {/* Paragraphe introductif */}
        <p className="text-gray-800 mb-8">
          La rougeole reste une menace importante pour la santé publique mondiale, avec des résurgences observées dans plusieurs régions.
          La couverture vaccinale insuffisante est le principal facteur de ces épidémies.
        </p>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <StatsDisplay
            value="10,3"
            unit=" millions"
            label="Cas estimés dans le monde en 2023"
            description="Source: OMS/CDC, Nov 2024"
            color="blue"
          />
          <StatsDisplay
            value="107 500"
            label="Décès estimés dus à la rougeole en 2023"
            description="Principalement des enfants de moins de 5 ans"
            color="blue"
          />
          <StatsDisplay
            value="+20%"
            label="Augmentation des cas vs 2022"
            description="Indiquant une tendance préoccupante"
            color="blue"
          />
        </div>

        {/* Explication complémentaire */}
        <p className="text-gray-800 mb-4">
          Ces chiffres soulignent l'importance cruciale de maintenir une couverture vaccinale élevée (au moins 95% avec deux doses)
          pour prévenir les épidémies et protéger les populations vulnérables.
        </p>
        <p className="text-gray-800">
          Pour les données les plus à jour, consultez les rapports de l'Organisation Mondiale de la Santé (OMS)
          et des autorités sanitaires nationales.
        </p>
        <p className="text-red-600 font-medium mt-2">
          Voir les fiches d'information de l'OMS
        </p>

        {/* Bloc : Importance de la surveillance */}
        <div className="mt-10 border-l-4 border-red-500 pl-4">
          <h3 className="text-2xl font-bold text-red-700 mb-3">
            Importance de la Surveillance
          </h3>
          <p className="text-gray-800 mb-2">
            La surveillance épidémiologique est essentielle pour détecter rapidement les épidémies de rougeole
            et mettre en œuvre des mesures de contrôle, y compris des campagnes de vaccination ciblées.
          </p>
          <p className="text-gray-800">
            Les systèmes de santé doivent être capables de diagnostiquer rapidement les cas suspects
            et de notifier les autorités compétentes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;
