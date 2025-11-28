import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { REFERRAL_LINK } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <span className="font-bold text-2xl text-gray-900 tracking-tight">Quick<span className="text-primary-600">Pay</span></span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <a href="#how-it-works" className="text-gray-600 hover:text-primary-600 font-medium transition">كيف يعمل؟</a>
            <a href="#features" className="text-gray-600 hover:text-primary-600 font-medium transition">المميزات</a>
            <a href="#blog" className="text-gray-600 hover:text-primary-600 font-medium transition">المدونة</a>
            <a href="#faq" className="text-gray-600 hover:text-primary-600 font-medium transition">الأسئلة الشائعة</a>
            <a 
              href={REFERRAL_LINK} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-primary-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              سجل واحصل على 5$
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-start">
            <a href="#how-it-works" className="block w-full text-right px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">كيف يعمل؟</a>
            <a href="#features" className="block w-full text-right px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">المميزات</a>
            <a href="#blog" className="block w-full text-right px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">المدونة</a>
            <a href="#faq" className="block w-full text-right px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">الأسئلة الشائعة</a>
            <a 
              href={REFERRAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 px-5 py-3 rounded-lg font-bold text-white bg-primary-600 hover:bg-primary-700"
            >
              سجل الآن (هدية 5$)
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;