import React from 'react';
import { CreditCard, ShieldCheck, Globe } from 'lucide-react';
import { REFERRAL_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white pb-16 pt-10 sm:pb-24 lg:pb-32">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-right z-10">
          <div className="inline-flex items-center gap-2 bg-primary-900/50 border border-primary-700/50 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-sm font-medium text-primary-100">الحل الموثوق في مصر 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            تخلص من قيود الدفع <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-red-600">
              واشترِ بالدولار بحرية
            </span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto lg:mx-0 text-xl text-gray-300 leading-relaxed">
            بطاقة RedotPay تمنحك الحرية المالية. اشحن حسابك عبر فودافون كاش أو العملات الرقمية، واحصل على بطاقة فيزا افتراضية مقبولة عالمياً وصالحة لمدة 3 سنوات.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href={REFERRAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary-600 rounded-xl font-bold text-lg shadow-lg shadow-primary-900/50 hover:bg-primary-500 transition transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <CreditCard className="w-5 h-5" />
              احصل على بطاقتك الآن
            </a>
            <div className="px-8 py-4 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-xl font-medium text-lg text-gray-200 flex items-center justify-center gap-2">
              <span className="text-green-400 font-bold">+5$</span> هدية تسجيل
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span>آمن وموثوق</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="w-4 h-4 text-blue-500" />
              <span>دعم عالمي</span>
            </div>
          </div>
        </div>

        {/* Hero Image / Visual */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
            <div className="absolute inset-0 bg-primary-600 blur-[100px] opacity-20 rounded-full"></div>
            <div className="relative bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition duration-500">
                <div className="flex justify-between items-center mb-8">
                    <span className="text-xl font-bold italic">RedotPay</span>
                    <span className="text-sm bg-gray-700 px-2 py-1 rounded">Virtual</span>
                </div>
                <div className="flex items-center gap-4 mb-12">
                     <div className="w-12 h-8 bg-yellow-500/20 rounded md:w-16 md:h-10"></div>
                     <div className="h-4 w-24 bg-gray-700 rounded animate-pulse"></div>
                </div>
                <div className="space-y-4">
                    <div className="flex justify-between text-gray-400 text-sm">
                        <span>CARD HOLDER</span>
                        <span>EXPIRES</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-mono tracking-widest">YOUR NAME</span>
                        <span className="text-lg font-mono">12/28</span>
                    </div>
                </div>
                <div className="absolute top-4 left-4">
                     <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6 opacity-80 bg-white px-1 rounded" />
                </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -bottom-6 -right-6 bg-white text-gray-900 p-4 rounded-xl shadow-xl z-20 animate-bounce" style={{animationDuration: '3s'}}>
                <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">تم الشحن بنجاح</p>
                        <p className="font-bold text-sm">Vodafone Cash -> USDT</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;