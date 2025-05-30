import React from 'react';

const RessourcesUtiles = () => {
  return (
    <div className="p-6 space-y-6 text-gray-800">
      <h1 className="text-4xl font-bold text-red-700 text-center">Ressources Utiles</h1>

      {/* Organismes Internationaux */}
      <div className="bg-white border-l-4 border-red-500 shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-bold text-red-700 mb-4">Organismes de Santé Internationaux</h2>
        <ul className="list-disc list-inside space-y-2 text-blue-600">
          <li>
            <a href="#" className="hover:underline">
              Organisation Mondiale de la Santé (OMS) - Aide-mémoire sur la Rougeole
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Centers for Disease Control and Prevention (CDC) - Measles (en anglais)
            </a>
          </li>
        </ul>
      </div>

      {/* Autorités Sanitaires Nationales */}
      <div className="bg-white border-l-4 border-red-500 shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-bold text-red-700 mb-4">
          Autorités Sanitaires Nationales (Exemples Francophones)
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>
            <strong>France :</strong>
            <ul className="list-disc list-inside ml-5 text-blue-600 space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Santé publique France - Dossier Rougeole
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Vaccination Info Service - Rougeole
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Ameli.fr (Assurance Maladie) - Dossier Rougeole
                </a>
              </li>
            </ul>
          </li>
          <li>
            <strong>Canada :</strong>
            <ul className="list-disc list-inside ml-5 text-blue-600 space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Gouvernement du Canada - Rougeole
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Trouver un professionnel de santé */}
      <div className="bg-white border-l-4 border-red-500 shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-bold text-red-700 mb-4">
          Trouver un professionnel de santé / Centre de vaccination
        </h2>
        <p className="text-gray-800 mb-2">
          Pour des conseils personnalisés, un diagnostic ou pour vous faire vacciner, consultez votre médecin traitant.
        </p>
        <p className="text-gray-800">
          Vous pouvez également rechercher des centres de vaccination publics près de chez vous via les sites des agences
          régionales de santé ou les portails gouvernementaux dédiés à la santé.
        </p>
      </div>

      {/* Note Importante */}
      <div className="bg-white border-l-4 border-red-500 shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-bold text-red-700 mb-4">Note Importante</h2>
        <p className="text-gray-800">
          Les informations fournies sur ce site sont à titre informatif uniquement et ne remplacent pas un avis médical
          professionnel. En cas de symptômes ou de questions sur votre santé, consultez toujours un médecin ou un autre
          professionnel de la santé qualifié.
        </p>
      </div>
    </div>
  );
};

export default RessourcesUtiles;
