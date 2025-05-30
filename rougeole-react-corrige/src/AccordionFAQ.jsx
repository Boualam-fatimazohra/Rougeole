import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Composant Accordion modernisé pour FAQs ou sections repliables
function AccordionFAQ({ items, variant = 'default' }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!items || items.length === 0) {
    return null;
  }

  // Variantes de style pour l'accordéon
  const variants = {
    default: {
      header: "bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200",
      border: "border-gray-200",
      icon: "text-red-600",
      content: "bg-white"
    },
    primary: {
      header: "bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200",
      border: "border-red-200",
      icon: "text-red-600",
      content: "bg-white"
    },
    secondary: {
      header: "bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200",
      border: "border-blue-200",
      icon: "text-blue-600",
      content: "bg-white"
    }
  };

  const style = variants[variant] || variants.default;

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div 
          key={index} 
          className={`border ${style.border} rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300`}
        >
          <button
            className={`w-full flex justify-between items-center p-4 text-left ${style.header} focus:outline-none focus:ring-2 focus:ring-red-300 transition-colors duration-300`}
            onClick={() => handleClick(index)}
            aria-expanded={activeIndex === index}
            aria-controls={`accordion-content-${index}`}
          >
            <span className="font-medium text-gray-800">{item.title}</span>
            <span className="transition-transform duration-300 transform">
              {activeIndex === index ? 
                <ChevronUp className={`h-5 w-5 ${style.icon}`} /> : 
                <ChevronDown className="h-5 w-5 text-gray-500" />
              }
            </span>
          </button>
          <div
            id={`accordion-content-${index}`}
            role="region"
            aria-labelledby={`accordion-title-${index}`}
            className={`p-5 ${style.content} text-gray-700 transition-all duration-300 ease-in-out ${
              activeIndex === index 
                ? 'max-h-96 opacity-100' 
                : 'max-h-0 opacity-0 overflow-hidden p-0'
            }`}
          >
            <div className={activeIndex === index ? 'animate-fadeIn' : ''}>
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AccordionFAQ;
