import React from 'react';
import { Eye, AlertCircle, Thermometer } from 'lucide-react';
import InfoCard from './InfoCard';
import ImageGallery from './ImageGallery';

function SymptomsPage() {
  // Images pour la galerie des symptômes
  const symptomImages = [
    { 
      src: "/src/IMG-20250520-WA0014.jpg", 
      alt: "Éruption cutanée sur la main", 
      caption: "Éruption cutanée caractéristique sur la main" 
    },
    { 
      src: "/src/IMG-20250520-WA0015.jpg", 
      alt: "Éruption sur le bras", 
      caption: "Éruption cutanée sur le bras" 
    },
    { 
      src: "/src/IMG-20250520-WA0012.jpg", 
      alt: "Conjonctivite", 
      caption: "Conjonctivite et rougeur des yeux" 
    },
    { 
      src: "/src/IMG-20250520-WA0005.jpg", 
      alt: "Éruption chez l'enfant", 
      caption: "Éruption chez un jeune enfant" 
    },
    { 
      src: "/src/IMG-20250520-WA0008.jpg", 
      alt: "Enfant avec fièvre", 
      caption: "Fièvre élevée, symptôme courant" 
    },
    { 
      src: "/src/IMG-20250520-WA0007.jpg", 
      alt: "Écoulement nasal", 
      caption: "Écoulement nasal et rhinite" 
    },
    { 
      src: "/src/eruption.jpg", 
      alt: "Éruption cutanée", 
      caption: "Éruption cutanée généralisée" 
    }
  ];

  return (
    <div className="space-y-10">
      {/* En-tête de page */}
      <section className="bg-black to-red-400 text-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Symptômes et Complications de la Rougeole</h1>
        <p className="text-xl opacity-90 max-w-3xl">
          Apprenez à reconnaître les signes de la rougeole et comprenez les risques de complications potentielles.
        </p>
      </section>

      {/* Phases de la maladie */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-red-300 pb-2">
          Les Phases de la Rougeole
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard 
            title="Phase d'Incubation" 
            variant="info"
            icon={<Thermometer className="h-6 w-6" />}
          >
            <p>
              Dure environ <strong>10 à 14 jours</strong> après l'exposition. Pendant cette période, la personne est contagieuse mais ne présente pas encore de symptômes.
            </p>
            <div className="mt-4 text-center">
              <img 
                src="/src/encubation.jpg" 
                alt="Enfant avec fièvre" 
                className="w-32 h-32 object-cover rounded-lg mx-auto border-2 border-yellow-200"
              />
            </div>
          </InfoCard>
          
          <InfoCard 
            title="Phase Prodromique" 
            variant="warning"
            icon={<AlertCircle className="h-6 w-6" />}
          >
            <p>
              Dure environ <strong>2 à 4 jours</strong> et se caractérise par de la fièvre élevée, une toux, un écoulement nasal, des yeux rouges et larmoyants, et parfois des petites taches blanches à l'intérieur des joues (signe de Koplik).
            </p>
            <div className="mt-4 text-center">
              <img 
                src="/src/IMG-20250520-WA0008.jpg" 
                alt="Enfant avec fièvre" 
                className="w-32 h-32 object-cover rounded-lg mx-auto border-2 border-yellow-200"
              />
            </div>
          </InfoCard>
          
          <InfoCard 
            title="Phase Éruptive" 
            variant="default"
            icon={<Eye className="h-6 w-6" />}
          >
            <p>
              L'éruption cutanée caractéristique apparaît, commençant généralement sur le visage et derrière les oreilles, puis s'étendant progressivement au reste du corps. Elle dure environ <strong>5 à 6 jours</strong>.
            </p>
            <div className="mt-4 text-center">
              <img 
                src="/src/eruptive.jpg" 
                alt="Éruption cutanée" 
                className="w-32 h-32 object-cover rounded-lg mx-auto border-2 border-red-200"
              />
            </div>
          </InfoCard>
        </div>
      </section>

      {/* Symptômes principaux */}
      <section className="bg-gray-50 p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-red-300 pb-2">
          Symptômes Principaux
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <ul className="space-y-3">
              {[
                { title: 'Fièvre élevée', desc: 'Souvent supérieure à 39°C, apparaissant avant l\'éruption cutanée.' },
                { title: 'Éruption cutanée', desc: 'Taches rouges qui commencent sur le visage et s\'étendent au reste du corps.' },
                { title: 'Toux', desc: 'Toux sèche et persistante.' },
                { title: 'Écoulement nasal', desc: 'Rhinite et congestion nasale.' },
              ].map(({ title, desc }) => (
                <li key={title} className="flex items-start">
                  <span className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </span>
                  <div>
                    <strong className="text-lg text-red-700">{title}</strong>
                    <p className="text-gray-700">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <ul className="space-y-3">
              {[
                { title: 'Conjonctivite', desc: 'Yeux rouges, larmoyants et sensibles à la lumière.' },
                { title: 'Signe de Koplik', desc: 'Petites taches blanches à l\'intérieur des joues, apparaissant avant l\'éruption cutanée.' },
                { title: 'Malaise général', desc: 'Fatigue, irritabilité et perte d\'appétit.' },
                { title: 'Ganglions enflés', desc: 'Notamment au niveau du cou.' },
              ].map(({ title, desc }) => (
                <li key={title} className="flex items-start">
                  <span className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </span>
                  <div>
                    <strong className="text-lg text-red-700">{title}</strong>
                    <p className="text-gray-700">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Galerie d'images */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-red-300 pb-2">
          Reconnaître les Symptômes Visuels
        </h2>
        <p className="text-gray-700 mb-6">
          Ces images montrent les manifestations typiques de la rougeole. Cliquez sur une image pour l'agrandir.
        </p>
        
        <ImageGallery images={symptomImages} />
      </section>

      {/* Complications */}
      <section className="bg-red-50 p-8 rounded-xl border border-red-200">
        <h2 className="text-2xl font-bold mb-6 text-red-800">
          Complications Possibles
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 text-red-700">
          <div>
            <h3 className="font-semibold mb-2">Otite Moyenne</h3>
            <p>Infection de l’oreille moyenne pouvant entraîner douleur et perte auditive temporaire.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Pneumonie</h3>
            <p>Infection pulmonaire grave, principale cause de mortalité liée à la rougeole.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Encéphalite</h3>
            <p>Inflammation du cerveau pouvant entraîner des lésions neurologiques graves.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Surinfection bactérienne</h3>
            <p>Infections secondaires comme la bronchite ou la diarrhée sévère.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Malnutrition</h3>
            <p>La maladie peut aggraver un état nutritionnel déjà fragile, particulièrement chez les enfants.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Décès</h3>
            <p>Risque accru chez les enfants non vaccinés et les personnes immunodéprimées.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SymptomsPage;
