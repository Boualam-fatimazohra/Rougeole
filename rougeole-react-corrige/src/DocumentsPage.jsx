import React, { useState, useRef } from 'react';
import { Upload, FileText, Download, Trash2, AlertCircle } from 'lucide-react';

function DocumentsPage() {
  const [uploadedFiles, setUploadedFiles] = useState([
    {
      id: 1,
      name: "Rapport OMS sur la rougeole 2024.pdf",
      size: "2.4 MB",
      type: "application/pdf",
      date: "10 mai 2025",
      author: "Admin"
    }
  ]);
  
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = async (e) => {
    const files = e.target.files;
    if (!files.length) return;
    
    setIsUploading(true);
    
    try {
      // Simuler un délai d'upload
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Traiter chaque fichier
      const newFiles = Array.from(files).map((file, index) => ({
        id: Date.now() + index,
        name: file.name,
        size: formatFileSize(file.size),
        type: file.type,
        date: new Date().toLocaleDateString('fr-FR'),
        author: "Utilisateur"
      }));
      
      setUploadedFiles(prev => [...newFiles, ...prev]);
      
      setUploadStatus({
        success: true,
        message: `${files.length > 1 ? 'Fichiers téléchargés' : 'Fichier téléchargé'} avec succès. Une notification a été envoyée à l'administrateur.`
      });
      
      // Dans une implémentation réelle, nous enverrions ici un email à Salimalabdaoui203@gmail.com
      console.log('Email de notification envoyé à: Salimalabdaoui203@gmail.com');
      
    } catch (error) {
      setUploadStatus({
        success: false,
        message: "Une erreur est survenue lors du téléchargement. Veuillez réessayer."
      });
    } finally {
      setIsUploading(false);
      
      // Réinitialiser l'input file
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      
      // Effacer le message de statut après 5 secondes
      setTimeout(() => {
        setUploadStatus(null);
      }, 5000);
    }
  };

  const handleDeleteFile = (id) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== id));
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (fileType) => {
    if (fileType.includes('pdf')) {
      return <FileText className="h-8 w-8 text-red-500" />;
    } else if (fileType.includes('word') || fileType.includes('document')) {
      return <FileText className="h-8 w-8 text-blue-500" />;
    } else if (fileType.includes('sheet') || fileType.includes('excel')) {
      return <FileText className="h-8 w-8 text-green-500" />;
    } else if (fileType.includes('image')) {
      return <FileText className="h-8 w-8 text-purple-500" />;
    } else {
      return <FileText className="h-8 w-8 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-10">
      {/* En-tête de page */}
      <section className="bg-black text-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Documents et Ressources</h1>
        <p className="text-xl opacity-90 max-w-3xl">
          Consultez et partagez des documents informatifs sur la rougeole, la vaccination et les mesures préventives.
        </p>
      </section>

      {/* Section d'upload */}
      <section className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
          <Upload className="mr-2 h-6 w-6 text-blue-500" />
          Partager un document
        </h2>
        
        <div className="mb-6">
          <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center hover:bg-blue-50 transition-colors duration-300">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
              multiple
              accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.jpg,.jpeg,.png"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="flex flex-col items-center">
                <Upload className="h-12 w-12 text-blue-500 mb-4" />
                <p className="text-lg font-medium text-gray-700 mb-2">
                  Glissez-déposez vos fichiers ici ou cliquez pour parcourir
                </p>
                <p className="text-sm text-gray-500">
                  Formats acceptés: PDF, Word, Excel, PowerPoint, images
                </p>
              </div>
            </label>
          </div>
        </div>
        
        {isUploading && (
          <div className="flex items-center justify-center p-4 bg-blue-50 rounded-lg mb-4">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-blue-700">Téléchargement en cours...</span>
          </div>
        )}
        
        {uploadStatus && (
          <div className={`p-4 rounded-lg mb-4 ${
            uploadStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}>
            {uploadStatus.message}
          </div>
        )}
        
        <div className="text-sm text-gray-500 flex items-start">
          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
          <p>
            Les documents téléchargés seront examinés par l'administrateur avant d'être rendus publics. 
            Une notification sera envoyée à l'administrateur pour chaque nouveau document.
          </p>
        </div>
      </section>

      {/* Liste des documents */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-300 pb-2">
          Documents disponibles ({uploadedFiles.length})
        </h2>
        
        {uploadedFiles.length === 0 ? (
          <div className="text-center py-10 bg-gray-50 rounded-lg">
            <p className="text-gray-500">Aucun document disponible pour le moment.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {uploadedFiles.map((file) => (
              <div key={file.id} className="bg-white p-4 rounded-xl shadow-md border border-gray-200 flex items-center justify-between">
                <div className="flex items-center">
                  {getFileIcon(file.type)}
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-800">{file.name}</h3>
                    <div className="flex text-sm text-gray-500 space-x-4">
                      <span>{file.size}</span>
                      <span>Ajouté le {file.date}</span>
                      <span>Par {file.author}</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button 
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                    title="Télécharger"
                  >
                    <Download className="h-5 w-5" />
                  </button>
                  <button 
                    className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                    title="Supprimer"
                    onClick={() => handleDeleteFile(file.id)}
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Ressources externes */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Ressources externes</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <a 
            href="https://www.who.int/fr/news-room/fact-sheets/detail/measles" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow flex items-start"
          >
            <div className="bg-blue-100 p-2 rounded-full mr-4">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Organisation Mondiale de la Santé (OMS)</h3>
              <p className="text-sm text-gray-600">Fiche d'information sur la rougeole</p>
            </div>
          </a>
          
          <a 
            href="https://www.santepubliquefrance.fr/maladies-et-traumatismes/maladies-a-prevention-vaccinale/rougeole" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow flex items-start"
          >
            <div className="bg-green-100 p-2 rounded-full mr-4">
              <FileText className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Santé Publique France</h3>
              <p className="text-sm text-gray-600">Informations sur la rougeole et la vaccination</p>
            </div>
          </a>
          
          <a 
            href="https://vaccination-info-service.fr/Les-maladies-et-leurs-vaccins/Rougeole" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow flex items-start"
          >
            <div className="bg-red-100 p-2 rounded-full mr-4">
              <FileText className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Vaccination Info Service</h3>
              <p className="text-sm text-gray-600">Tout savoir sur le vaccin contre la rougeole</p>
            </div>
          </a>
          
          <a 
            href="https://www.unicef.org/fr/vaccination/rougeole" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow flex items-start"
          >
            <div className="bg-purple-100 p-2 rounded-full mr-4">
              <FileText className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">UNICEF</h3>
              <p className="text-sm text-gray-600">La rougeole et les efforts de vaccination mondiale</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default DocumentsPage;
