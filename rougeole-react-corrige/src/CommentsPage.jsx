import React, { useState, useEffect } from 'react';
import { Send, MessageSquare } from 'lucide-react';

function CommentsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Commentaires par défaut
  const defaultComments = [
    {
      id: 1,
      name: 'Fatima boualam',
      date: '15 mai 2025',
      content: 'Merci pour ces informations précieuses sur la rougeole. J\'ai pu mieux comprendre l\'importance de la vaccination pour mes enfants.',
      replies: []
    },
    {
      id: 2,
      name: 'Saloua Taibi',
      date: '12 mai 2025',
      content: 'Un sujet crucial. Il est important de rappeler que la rougeole n\'est pas une maladie bénigne et peut avoir des complications graves.',
      replies: [
      ]
    }
  ];

  // Fonction pour charger les commentaires
  const loadComments = async () => {
    try {
      setIsLoading(true);
      
      // Simulation d'un petit délai de chargement
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Dans Claude.ai, on utilise les commentaires par défaut
      // Dans votre projet React, vous pourrez utiliser localStorage
      setComments(defaultComments);
      
      console.log('📁 Commentaires chargés:', defaultComments.length, 'commentaires');
      
    } catch (error) {
      console.error('Erreur lors du chargement des commentaires:', error);
      setComments(defaultComments);
    } finally {
      setIsLoading(false);
    }
  };

  // Charger les commentaires au montage du composant
  useEffect(() => {
    loadComments();
  }, []);

  // Debug du state des commentaires
  useEffect(() => {
    console.log('🔍 Comments state changed:', {
      comments,
      isArray: Array.isArray(comments),
      length: Array.isArray(comments) ? comments.length : 'N/A',
      type: typeof comments
    });
  }, [comments]);

  // Fonction EmailJS pour envoyer l'email (simulation)
  const sendEmailJS = async (templateParams) => {
    try {
      console.log('📤 Simulation d\'envoi email avec les paramètres:', templateParams);
      
      // Simulation d'un délai d'envoi
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('✅ Email simulé envoyé avec succès');
      return { status: 200, text: 'OK' };
      
    } catch (error) {
      console.error('❌ Erreur lors de l\'envoi simulé:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    
    console.log('🔄 Début de la soumission du formulaire');
    
    if (!name || !comment) {
      setSubmitStatus({
        success: false,
        message: 'Veuillez remplir tous les champs obligatoires.'
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Préparer les paramètres pour EmailJS
      const templateParams = {
        from_name: name,
        from_email: email || 'Non fourni',
        message: comment,
        to_email: 'Salimalabdaoui203@gmail.com',
        date: new Date().toLocaleDateString('fr-FR'),
        time: new Date().toLocaleTimeString('fr-FR')
      };
  
      console.log('📧 Tentative d\'envoi d\'email...');
      
      // Envoyer via EmailJS (simulation)
      await sendEmailJS(templateParams);
  
      // Créer le nouveau commentaire
      const newComment = {
        id: Date.now(), // Utiliser timestamp comme ID unique
        name,
        email: email || 'Non fourni',
        date: new Date().toLocaleDateString('fr-FR'),
        content: comment,
        replies: []
      };
  
      // SAFETY CHECK: Ensure comments is always an array
      const currentComments = Array.isArray(comments) ? comments : [];
      console.log('Current comments state:', currentComments, 'Is array:', Array.isArray(currentComments));
      
      // Create updated comments array
      const updatedComments = [newComment, ...currentComments];
      
      // Ajouter le nouveau commentaire à la liste locale
      setComments(updatedComments);
      
      // Réinitialiser le formulaire
      setName('');
      setEmail('');
      setComment('');
      
      setSubmitStatus({
        success: true,
        message: '✅ Votre commentaire a été publié avec succès ! (Note: Dans votre projet React, l\'email sera réellement envoyé)'
      });
      
    } catch (error) {
      console.error('❌ Erreur:', error);
      setSubmitStatus({
        success: false,
        message: `❌ Erreur lors de l'envoi: ${error.text || error.message || 'Erreur inconnue'}`
      });
    } finally {
      setIsSubmitting(false);
      
      // Effacer le message de statut après 8 secondes
      setTimeout(() => {
        setSubmitStatus(null);
      }, 8000);
    }
  };

  const testEmailJS = () => {
    console.log('🧪 Test EmailJS en cours...');
    
    const testParams = {
      from_name: 'Test User',
      from_email: 'test@example.com',
      message: 'Ceci est un test de l\'envoi d\'email via EmailJS.',
      to_email: 'Salimalabdaoui203@gmail.com',
      date: new Date().toLocaleDateString('fr-FR'),
      time: new Date().toLocaleTimeString('fr-FR')
    };
    
    sendEmailJS(testParams).then(() => {
      alert('✅ Test EmailJS réussi ! (Simulation)');
    }).catch((error) => {
      alert('❌ Test EmailJS échoué: ' + (error.text || error.message));
    });
  };

  return (
    <div className="space-y-10 p-6 bg-gray-50 min-h-screen">
      {/* Test EmailJS */}
      

      {/* En-tête de page */}
      <section className="bg-black text-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Commentaires et Discussions</h1>
        <p className="text-xl opacity-90 max-w-3xl">
          Partagez vos expériences, posez vos questions ou contribuez à la sensibilisation sur la rougeole.
        </p>
      </section>

      {/* Formulaire de commentaire */}
      <section className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
          <MessageSquare className="mr-2 h-6 w-6 text-yellow-500" />
          Laisser un commentaire
        </h2>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nom <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Votre nom"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email (facultatif)
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Votre email (ne sera pas publié)"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
              Commentaire <span className="text-red-500">*</span>
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="Partagez votre expérience ou posez une question..."
              required
            ></textarea>
          </div>
          
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Les champs marqués d'un <span className="text-red-500">*</span> sont obligatoires
            </p>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 shadow-md ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-yellow-500 hover:bg-yellow-600'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="bg-black mr-2 h-5 w-5" />
                  Publier le commentaire
                </>
              )}
            </button>
          </div>
          
          {submitStatus && (
            <div className={`p-4 rounded-lg border ${
              submitStatus.success 
                ? 'bg-green-50 text-green-800 border-green-200' 
                : 'bg-red-50 text-red-800 border-red-200'
            }`}>
              <div className="flex items-start">
                <div className="text-lg mr-2">
                  {submitStatus.success ? '✅' : '❌'}
                </div>
                <div>{submitStatus.message}</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Liste des commentaires */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-yellow-300 pb-2">
          Commentaires ({Array.isArray(comments) ? comments.length : 0})
        </h2>
        
        {isLoading ? (
          <div className="text-center py-10 bg-gray-50 rounded-lg">
            <div className="animate-spin inline-block w-8 h-8 border-4 border-yellow-500 border-t-transparent rounded-full mb-4"></div>
            <p className="text-gray-500">Chargement des commentaires...</p>
          </div>
        ) : !Array.isArray(comments) || comments.length === 0 ? (
          <div className="text-center py-10 bg-gray-50 rounded-lg">
            <p className="text-gray-500">Aucun commentaire pour le moment. Soyez le premier à partager votre avis !</p>
          </div>
        ) : (
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{comment.name}</h3>
                    <p className="text-sm text-gray-500">{comment.date}</p>
                    {comment.email && comment.email !== 'Non fourni' && (
                      <p className="text-xs text-gray-400">{comment.email}</p>
                    )}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{comment.content}</p>
                
                {comment.replies && Array.isArray(comment.replies) && comment.replies.length > 0 && (
                  <div className="mt-4 pl-6 border-l-2 border-yellow-200 space-y-4">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-bold text-gray-800">{reply.name}</h4>
                            <p className="text-xs text-gray-500">{reply.date}</p>
                          </div>
                        </div>
                        <p className="text-gray-700">{reply.content}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Directives de commentaire */}
      <section className="bg-blue-50 p-6 rounded-xl border border-blue-200">
        <h2 className="text-xl font-bold mb-4 text-blue-800">Directives pour les commentaires</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>Restez respectueux et courtois envers les autres participants</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>Évitez de partager des informations personnelles sensibles</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>Les commentaires contenant des informations médicales erronées pourront être modérés</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>Pour des conseils médicaux personnalisés, consultez toujours un professionnel de santé</span>
          </li>
        </ul>
      </section>

      {/* Info pour développement */}
      <section className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
        <h3 className="font-bold text-yellow-800 mb-2">📝 Note pour votre projet React :</h3>
        <p className="text-sm text-yellow-700">
          Dans votre environnement de développement, remplacez les fonctions de simulation par les vraies fonctions localStorage et EmailJS pour une persistance réelle des données.
        </p>
      </section>
    </div>
  );
}

export default CommentsPage;