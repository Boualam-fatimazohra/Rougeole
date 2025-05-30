import React from 'react';
import InfoCard from './InfoCard';
import { Shield, Syringe, Users } from 'lucide-react';

function PreventionPage() {
  return (
    <div className="space-y-10">
      {/* En-tête de page */}
      <section className="bg-black text-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Prévention et Vaccination contre la Rougeole</h1>
        <p className="text-xl opacity-90 max-w-3xl">
          La vaccination est le moyen le plus efficace de prévenir la rougeole et de protéger les populations vulnérables.
        </p>
      </section>

      {/* Section Vaccination */}
      <section>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-green-300 pb-2">
              La Vaccination : Notre Meilleure Protection
            </h2>
            <p className="text-gray-700 mb-4">
              Le vaccin contre la rougeole est généralement administré sous forme de vaccin combiné ROR (Rougeole-Oreillons-Rubéole) ou RORV (qui inclut également la varicelle).
            </p>
            <p className="text-gray-700 mb-4">
              <strong className="text-green-700">Efficacité :</strong> Deux doses du vaccin ROR offrent une protection d'environ 97% contre la rougeole.
            </p>
            <p className="text-gray-700 mb-4">
              <strong className="text-green-700">Sécurité :</strong> Le vaccin ROR est sûr et les effets secondaires graves sont extrêmement rares.
            </p>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <p className="font-medium text-green-800">
                La vaccination ne protège pas seulement l'individu, mais contribue également à l'immunité collective, protégeant ainsi les personnes qui ne peuvent pas être vaccinées.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/src/IMG-20250520-WA0013.jpg" 
              alt="Prévention de la rougeole" 
              className="rounded-xl shadow-lg w-full h-auto object-cover border-4 border-green-200"
            />
          </div>
        </div>
      </section>

      {/* Calendrier de vaccination */}
      <section className="bg-gray-50 p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-green-300 pb-2">
          Calendrier de Vaccination Recommandé
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <InfoCard 
            title="Première Dose" 
            variant="success"
            icon={<Syringe className="h-6 w-6" />}
          >
            <p className="text-gray-700">
              <strong>Âge :</strong> Entre 12 et 15 mois
            </p>
            <p className="text-gray-700 mt-2">
              Cette première dose est essentielle pour établir l'immunité initiale contre la rougeole, les oreillons et la rubéole.
            </p>
          </InfoCard>
          
          <InfoCard 
            title="Deuxième Dose" 
            variant="success"
            icon={<Shield className="h-6 w-6" />}
          >
            <p className="text-gray-700">
              <strong>Âge :</strong> Entre 4 et 6 ans (avant l'entrée à l'école)
            </p>
            <p className="text-gray-700 mt-2">
              Cette dose de rappel renforce l'immunité et protège les enfants qui n'auraient pas développé une immunité suffisante après la première dose.
            </p>
          </InfoCard>
        </div>
        
        <div className="mt-8 bg-white p-6 rounded-lg border border-green-200 shadow-sm">
          <h3 className="text-xl font-semibold text-green-700 mb-4">Rattrapage pour les Adolescents et Adultes</h3>
          <p className="text-gray-700 mb-4">
            Les personnes nées après 1980 devraient avoir reçu au total deux doses de vaccin contre la rougeole. Si ce n'est pas le cas, un rattrapage vaccinal est recommandé.
          </p>
          <div className="flex items-center bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-yellow-800">
              Si vous n'êtes pas sûr de votre statut vaccinal, consultez votre médecin. Il n'y a pas de risque à recevoir une dose supplémentaire si vous êtes déjà immunisé.
            </p>
          </div>
        </div>
      </section>

      {/* Groupes prioritaires */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-green-300 pb-2">
          Groupes Prioritaires pour la Vaccination
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard 
            title="Voyageurs Internationaux" 
            variant="info"
          >
            <p className="text-gray-700">
              Les personnes qui voyagent à l'international, en particulier dans les régions où la rougeole est endémique, devraient s'assurer d'être à jour dans leurs vaccinations.
            </p>
          </InfoCard>
          
          <InfoCard 
            title="Professionnels de Santé" 
            variant="info"
          >
            <p className="text-gray-700">
              Les travailleurs de la santé doivent être immunisés contre la rougeole pour se protéger et éviter de transmettre la maladie aux patients vulnérables.
            </p>
          </InfoCard>
          
          <InfoCard 
            title="Étudiants" 
            variant="info"
          >
            <p className="text-gray-700">
              Les étudiants, en particulier ceux qui vivent en résidence universitaire, devraient être à jour dans leurs vaccinations en raison de la proximité et des contacts fréquents.
            </p>
          </InfoCard>
        </div>
      </section>

      {/* Autres mesures préventives */}
      <section className="bg-blue-50 p-8 rounded-xl border border-blue-200">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">
          Autres Mesures Préventives
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
              <Users className="h-6 w-6 mr-2" />
              En cas d'épidémie
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Évitez les zones touchées par l'épidémie si possible</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Vérifiez votre statut vaccinal et celui de votre famille</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Suivez les recommandations des autorités sanitaires locales</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Consultez rapidement un médecin en cas de symptômes</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
              <Shield className="h-6 w-6 mr-2" />
              Mesures d'hygiène
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Lavez-vous régulièrement les mains avec du savon</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Couvrez-vous la bouche et le nez lorsque vous toussez ou éternuez</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Évitez de partager des ustensiles, des verres ou de la nourriture</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Désinfectez les surfaces fréquemment touchées</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mythes et réalités */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-green-300 pb-2">
          Mythes et Réalités sur la Vaccination
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
            <h3 className="text-xl font-semibold text-red-700 mb-2">Mythe : Le vaccin ROR cause l'autisme</h3>
            <p className="text-gray-700">
              <strong className="text-green-700">Réalité :</strong> De nombreuses études scientifiques rigoureuses ont démontré qu'il n'existe aucun lien entre le vaccin ROR et l'autisme. L'étude qui avait suggéré ce lien a été retirée en raison de graves problèmes méthodologiques et de conflits d'intérêts.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
            <h3 className="text-xl font-semibold text-red-700 mb-2">Mythe : Il est préférable de développer une immunité naturelle</h3>
            <p className="text-gray-700">
              <strong className="text-green-700">Réalité :</strong> Contracter la rougeole naturellement expose à des risques significatifs de complications graves, voire mortelles. La vaccination offre une immunité sans les risques associés à la maladie.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
            <h3 className="text-xl font-semibold text-red-700 mb-2">Mythe : Les vaccins contiennent des produits toxiques dangereux</h3>
            <p className="text-gray-700">
              <strong className="text-green-700">Réalité :</strong> Les ingrédients des vaccins sont présents en quantités infimes et ne présentent pas de danger pour la santé. Ils sont rigoureusement testés pour leur sécurité avant d'être approuvés.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-black text-white p-6 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Protégez-vous et protégez votre communauté</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          La vaccination contre la rougeole est un acte de protection individuelle et collective. 
          Consultez votre médecin ou votre centre de vaccination pour vous assurer que vous et vos proches êtes protégés.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://vaccination-info-service.fr/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            Plus d'informations sur la vaccination
          </a>
        </div>
      </section>
    </div>
  );
}

export default PreventionPage;
