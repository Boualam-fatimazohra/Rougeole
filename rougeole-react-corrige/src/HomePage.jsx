import React from 'react';
import InfoCard from './InfoCard';
import { ArrowRight, AlertTriangle, Shield, Activity } from 'lucide-react';

function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="custom-hero-bg text-white p-8 md:p-12 rounded-2xl shadow-xl border border-red-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            La Rougeole : <span className="yellow-highlight">Informez-vous</span>, <span className="yellow-highlight">Protégez-vous</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl opacity-90">
            La rougeole est une maladie très contagieuse mais évitable par la vaccination. Découvrez comment vous protéger et protéger vos proches.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#faits-marquants" 
              className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-100 transition-all duration-300 shadow-lg flex items-center group"
            >
              En savoir plus
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/prevention" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-700 transition-all duration-300 shadow-lg"
            >
              Se protéger
            </a>
          </div>
        </div>
      </section>

      {/* Faits Marquants Section */}
      <section id="faits-marquants" className="scroll-mt-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 relative inline-block">
            Faits Marquants
            <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 rounded"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprendre les aspects essentiels de la rougeole pour mieux s'en protéger
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <InfoCard 
            title="Extrêmement Contagieuse" 
            variant="warning"
            icon={<AlertTriangle className="h-6 w-6" />}
          >
            <p className="text-base">
              Une personne infectée peut contaminer jusqu'à <strong>15 à 20 personnes</strong> non protégées autour d'elle, principalement par voie aérienne (toux, éternuements).
            </p>
            <div className="mt-4 text-center">
              <img 
                src="/src/IMG-20250520-WA0011.jpg" 
                alt="Illustration contagion" 
                className="w-24 h-24 object-cover rounded-full mx-auto border-4 border-yellow-200"
              />
            </div>
          </InfoCard>
          
          <InfoCard 
            title="Prévention Efficace" 
            variant="success"
            icon={<Shield className="h-6 w-6" />}
          >
            <p className="text-base">
              Le vaccin ROR (Rougeole-Oreillons-Rubéole) est très efficace. Deux doses offrent une protection de <strong>plus de 95%</strong>.
            </p>
            <div className="mt-4 text-center">
              <img 
                src="/src/IMG-20250520-WA0013.jpg" 
                alt="Prévention" 
                className="w-24 h-24 object-cover rounded-full mx-auto border-4 border-green-200"
              />
            </div>
          </InfoCard>
          
          <InfoCard 
            title="Complications Possibles" 
            variant="default"
            icon={<Activity className="h-6 w-6" />}
          >
            <p className="text-base">
              Bien que souvent considérée comme bénigne, la rougeole peut entraîner des <strong>complications graves</strong> (pneumonie, encéphalite), surtout chez les jeunes enfants et les personnes fragiles.
            </p>
            <div className="mt-4 text-center">
              <img 
                src="/src/complixation.jpg" 
                alt="Complications" 
                className="w-24 h-24 object-cover rounded-full mx-auto border-4 border-red-200"
              />
            </div>
          </InfoCard>
        </div>
      </section>

      {/* Galerie d'images */}
      <section className="bg-gray-50 p-8 rounded-2xl shadow-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Reconnaître la Rougeole</h2>
          <p className="text-lg text-gray-600">Images des symptômes caractéristiques</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
            <img src="/src/IMG-20250520-WA0014.jpg" alt="Symptôme rougeole" className="w-full h-48 object-cover" />
            <p className="p-3 text-sm text-center font-medium">Éruption cutanée sur la main</p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
            <img src="/src/IMG-20250520-WA0015.jpg" alt="Symptôme rougeole" className="w-full h-48 object-cover" />
            <p className="p-3 text-sm text-center font-medium">Éruption sur le bras</p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
            <img src="/src/IMG-20250520-WA0012.jpg" alt="Symptôme rougeole" className="w-full h-48 object-cover" />
            <p className="p-3 text-sm text-center font-medium">Conjonctivite</p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
            <img src="/src/IMG-20250520-WA0005.jpg" alt="Symptôme rougeole" className="w-full h-48 object-cover" />
            <p className="p-3 text-sm text-center font-medium">Éruption chez l'enfant</p>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <a 
            href="/symptomes" 
            className="inline-flex items-center text-red-600 font-medium hover:text-red-800 transition-colors"
          >
            Voir tous les symptômes
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-black text-white p-8 rounded-2xl shadow-xl text-center">
        <h2 className="text-3xl font-bold mb-4">Participez à la sensibilisation</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Partagez vos expériences, posez vos questions ou consultez nos ressources documentaires.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="/commentaires" 
            className="bg-white border text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg"
          >
            Laisser un commentaire
          </a>
          <a 
            href="/documents" 
            className="bg-white border text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            Consulter les documents
          </a>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
