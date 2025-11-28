import React from 'react';
import { Download, Smartphone, ShoppingCart, ArrowLeft } from 'lucide-react';
import { REFERRAL_LINK } from '../constants';

const Steps: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            كيف تبدأ في 3 خطوات بسيطة؟
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            الطريقة الأسهل لامتلاك حساب بنكي دولي وأنت في مكانك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector Line for Desktop */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>

          {/* Step 1 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition relative group">
            <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 transition duration-300">
              <Download className="w-8 h-8 text-primary-600 group-hover:text-white transition" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">1. حمل التطبيق وسجل</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              قم بتحميل تطبيق RedotPay من الرابط أدناه. استخدم كود الإحالة للحصول على <span className="font-bold text-green-600">5 دولار</span> هدية ترحيبية فوراً.
            </p>
            <div className="mt-6 text-center">
                <a href={REFERRAL_LINK} target="_blank" rel="noreferrer" className="text-primary-600 font-bold hover:underline inline-flex items-center">
                    سجل الآن <ArrowLeft className="mr-2 w-4 h-4" />
                </a>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition relative group">
            <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 transition duration-300">
              <Smartphone className="w-8 h-8 text-primary-600 group-hover:text-white transition" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">2. اشحن رصيدك</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              اشحن محفظتك بـ USDT عبر سوق P2P داخل التطبيق أو عبر Binance. يمكنك الدفع بالعملة المحلية باستخدام <span className="font-bold text-primary-700">فودافون كاش</span> أو إنستا باي.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition relative group">
            <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 transition duration-300">
              <ShoppingCart className="w-8 h-8 text-primary-600 group-hover:text-white transition" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">3. ادفع بحرية</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              فعّل بطاقتك الافتراضية واحصل على بياناتها فوراً. استخدمها للدفع في أمازون، فيسبوك، جوجل، أو أي مكان يقبل فيزا وماستركارد.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;