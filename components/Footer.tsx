import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-12 border-t border-gray-200 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-right">
          <span className="font-bold text-xl text-gray-900">Quick<span className="text-primary-600">Pay</span> Now</span>
          <p className="text-sm text-gray-500 mt-2">دليلك الأول للدفع الإلكتروني في العالم العربي</p>
        </div>
        <div className="text-sm text-gray-500 text-center md:text-left">
          &copy; {new Date().getFullYear()} جميع الحقوق محفوظة. موقع Quick Pay Now (الدفع السريع الآن).
        </div>
      </div>
    </footer>
  );
};

export default Footer;