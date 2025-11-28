import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQ_LIST } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary-50 rounded-full">
                <HelpCircle className="w-8 h-8 text-primary-600" />
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            الأسئلة الشائعة
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            إجابات سريعة على كل ما يدور في ذهنك
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_LIST.map((item, index) => (
            <div 
              key={index} 
              className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-lg border-primary-200 bg-primary-50/10' : 'bg-white hover:border-gray-300'}`}
            >
              <button
                className="w-full px-6 py-5 text-right flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold text-lg text-gray-900">{item.question}</span>
                <span className={`mr-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;