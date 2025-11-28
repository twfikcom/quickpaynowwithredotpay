import React from 'react';
import { ArrowRight } from 'lucide-react';
import { REFERRAL_LINK } from '../constants';

const StickyFooter: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] z-40 md:hidden">
      <a 
        href={REFERRAL_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full bg-primary-600 text-white font-bold text-lg py-3 rounded-xl shadow-lg hover:bg-primary-700 transition active:scale-95"
      >
        <span>ادفع بالدولار الآن</span>
        <ArrowRight className="mr-2 w-5 h-5 animate-pulse" />
      </a>
    </div>
  );
};

export default StickyFooter;