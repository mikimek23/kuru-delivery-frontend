import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; 

/**
 * A reusable component for rendering a single FAQ item with collapsible content.
 * @param {string} question The question text.
 * @param {string} answer The detailed answer text.
 */
const FAQAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300">
      
      <button
        className="w-full flex justify-between items-center p-5 text-lg font-semibold text-gray-700 hover:bg-orange-50 transition"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`answer-${question.replace(/\s/g, '-')}`}
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-orange-600 transition-transform" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 transition-transform" />
        )}
      </button>

      <div 
        id={`answer-${question.replace(/\s/g, '-')}`}
        className={`px-5 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 py-3' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <p className="
            pb-3 text-gray-600 leading-relaxed 
            border-t border-gray-100 pt-3 /* Separator line */
        ">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQAccordion;