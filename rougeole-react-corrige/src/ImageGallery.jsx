import React, { useState } from 'react';

// Composant de galerie d'images modernisé
function ImageGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!images || images.length === 0) {
    return null; // Ne rien afficher si aucune image n'est fournie
  }

  // Fonction pour ouvrir l'image en mode plein écran
  const openModal = (index) => {
    setSelectedImage(index);
  };

  // Fonction pour fermer le mode plein écran
  const closeModal = () => {
    setSelectedImage(null);
  };

  // Navigation entre les images en mode plein écran
  const navigateImage = (direction) => {
    if (selectedImage === null) return;
    
    const newIndex = selectedImage + direction;
    if (newIndex >= 0 && newIndex < images.length) {
      setSelectedImage(newIndex);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-6">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="overflow-hidden rounded-xl shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
            onClick={() => openModal(index)}
          >
            <div className="relative aspect-square overflow-hidden bg-gray-100">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                loading="lazy"
              />
            </div>
            {image.caption && (
              <div className="p-3 bg-white border-t border-gray-100">
                <p className="text-center text-sm text-gray-700 font-medium">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal pour affichage plein écran */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl mx-auto">
            <button 
              onClick={closeModal}
              className="absolute top-0 right-0 -mt-12 text-white hover:text-red-500 focus:outline-none z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="relative">
              <img 
                src={images[selectedImage].src} 
                alt={images[selectedImage].alt} 
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              
              {images[selectedImage].caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 rounded-b-lg">
                  <p className="text-center">{images[selectedImage].caption}</p>
                </div>
              )}
            </div>
            
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-12">
              <button 
                onClick={() => navigateImage(-1)} 
                disabled={selectedImage === 0}
                className={`text-white p-2 rounded-full focus:outline-none ${selectedImage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white hover:bg-opacity-20'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-12">
              <button 
                onClick={() => navigateImage(1)} 
                disabled={selectedImage === images.length - 1}
                className={`text-white p-2 rounded-full focus:outline-none ${selectedImage === images.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white hover:bg-opacity-20'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ImageGallery;
