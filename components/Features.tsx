import React from 'react';
import { FEATURES_LIST } from '../constants';
import { CheckCircle } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-extrabold mb-6">
              لماذا RedotPay هي الخيار الأفضل؟
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              على عكس البطاقات البنكية التي تفرض قيوداً صارمة، تقدم لك RedotPay حرية مالية كاملة. لا حاجة لزيارة البنك، لا حاجة لإثبات دخل، ولا مصاريف خفية.
            </p>
            
            <div className="space-y-6">
              {FEATURES_LIST.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  </div>
                  <div className="mr-4">
                    <h4 className="text-lg font-bold text-white">{feature.title}</h4>
                    <p className="mt-1 text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-600/10 to-transparent"></div>
                <div className="relative z-10 text-center">
                    <h3 className="text-2xl font-bold mb-6">جاهز للبدء؟</h3>
                    <div className="bg-white/5 p-4 rounded-xl mb-6 backdrop-blur-sm border border-white/10">
                        <p className="text-3xl font-mono text-primary-400 tracking-wider">0000 0000 0000 0000</p>
                    </div>
                    <p className="text-gray-400 mb-8">انضم لأكثر من مليون مستخدم يدفعون بحرية حول العالم</p>
                    <a href="https://url.hk/i/en/42ngi" target="_blank" rel="noreferrer" className="inline-block w-full bg-primary-600 hover:bg-primary-500 text-white font-bold py-4 rounded-xl transition shadow-lg">
                        افتح حسابك الآن
                    </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;