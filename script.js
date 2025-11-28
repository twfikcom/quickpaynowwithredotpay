document.addEventListener('DOMContentLoaded', () => {
  // Set Year
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Mobile Menu Logic
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (menuBtn && mobileMenu && menuIcon && closeIcon) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      });
    });
  }

  // Blog Data
  const blogPosts = [
    {
      id: 1,
      title: "كيفية تفعيل بطاقة RedotPay في مصر بخطوات بسيطة",
      date: "2023-10-15",
      image: "https://picsum.photos/800/600?random=1",
      summary: "دليل شامل خطوة بخطوة لإنشاء حساب وتفعيل هويتك للحصول على البطاقة الافتراضية.",
      content: `تعتبر RedotPay الحل الأمثل حالياً للمصريين للدفع بالدولار. 
      
      الخطوات بسيطة:
      1. حمل التطبيق من الرابط الموجود في الموقع.
      2. سجل برقم هاتفك المصري أو الإيميل.
      3. قم بتوثيق الهوية (KYC) باستخدام بطاقة الرقم القومي أو جواز السفر. العملية لا تستغرق سوى دقائق.
      4. بمجرد التوثيق، ستظهر لك البطاقة الافتراضية في التطبيق ويمكنك طلب إصدارها.
      
      تذكر أن التسجيل من رابط الدعوة يمنحك 5 دولار رصيد مجاني، مما يقلل تكلفة إصدار البطاقة عليك.`
    },
    {
      id: 2,
      title: "طريقة شحن RedotPay باستخدام فودافون كاش وإنستا باي",
      date: "2023-10-20",
      image: "https://picsum.photos/800/600?random=2",
      summary: "تعلم كيف تستخدم سوق P2P داخل التطبيق لشحن رصيدك بالعملة المحلية.",
      content: `الميزة القوية في RedotPay هي سوق P2P المدمج (أو الشحن عبر Binance ونقل الرصيد).
      
      كيف تشحن؟
      1. داخل التطبيق، انسخ عنوان محفظة USDT (شبكة BEP20 هي الأرخص).
      2. اذهب إلى منصة تدعم P2P (مثل Binance) واشترِ USDT باستخدام فودافون كاش.
      3. حول الـ USDT إلى عنوان محفظتك في RedotPay.
      4. سيظهر الرصيد فوراً، ويمكنك استخدامه للدفع بالبطاقة مباشرة حيث يقوم التطبيق بتحويل العملة تلقائياً عند الدفع.`
    },
    {
      id: 3,
      title: "مقارنة: RedotPay مقابل البطاقات البنكية المصرية",
      date: "2023-11-05",
      image: "https://picsum.photos/800/600?random=3",
      summary: "لماذا يتجه الجميع لهذه البطاقة بدلاً من بطاقات الخصم المباشر التي تم حظرها؟",
      content: `مع القيود المستمرة على بطاقات الخصم المباشر (Debit) والبطاقات مسبقة الدفع في مصر للدفع الدولي، أصبحت الخيارات محدودة.
      
      مميزات RedotPay:
      - لا يوجد ليميت شهري منخفض مثل البنوك (التي تضع ليميت 50 دولار أحياناً).
      - لا تحتاج لفتح حساب بنكي دولاري.
      - تقبل الربط بـ PayPal وتفعيل الحسابات الإعلانية على فيسبوك وجوجل.
      - عمولة التحويل والدفع منافسة جداً مقارنة بتدبير العملة في السوق الموازي.`
    }
  ];

  // Render Blog Posts
  const blogGrid = document.getElementById('blog-grid');
  if (blogGrid) {
    blogPosts.forEach(post => {
      const postHTML = `
        <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full">
            <div class="h-48 overflow-hidden">
                <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover transform hover:scale-110 transition duration-500" />
            </div>
            <div class="p-6 flex-1 flex flex-col">
                <div class="flex items-center text-sm text-gray-500 mb-3">
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    ${post.date}
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3 leading-snug">${post.title}</h3>
                <p class="text-gray-600 mb-4 flex-1 line-clamp-3">${post.summary}</p>
                <button onclick="openModal(${post.id})" class="mt-auto w-full flex items-center justify-center px-4 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition font-medium">
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                    اقرأ المزيد
                </button>
            </div>
        </div>
      `;
      blogGrid.insertAdjacentHTML('beforeend', postHTML);
    });
  }

  // Blog Modal Logic
  const modal = document.getElementById('blog-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalContent = document.getElementById('modal-content');
  const modalImage = document.getElementById('modal-image');

  window.openModal = function(id) {
    const post = blogPosts.find(p => p.id === id);
    if (!post || !modal || !modalTitle || !modalContent || !modalImage) return;

    modalTitle.textContent = post.title;
    modalContent.textContent = post.content;
    modalImage.src = post.image;
    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');
  };

  window.closeModal = function() {
    if (modal) {
      modal.classList.add('hidden');
      document.body.classList.remove('modal-open');
    }
  };

  // FAQ Logic
  const faqBtns = document.querySelectorAll('.faq-btn');
  faqBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const icon = btn.querySelector('span:last-child');
      const parent = btn.parentElement;

      // Close others
      document.querySelectorAll('.faq-answer').forEach(el => {
        if (el !== answer) {
          el.classList.remove('open');
          el.parentElement.classList.remove('shadow-lg', 'border-primary-200', 'bg-primary-50/10');
          el.parentElement.querySelector('span:last-child').classList.remove('rotate-180');
          el.parentElement.querySelector('svg').classList.replace('text-primary-600', 'text-gray-400');
        }
      });

      // Toggle current
      if (answer.classList.contains('open')) {
        answer.classList.remove('open');
        parent.classList.remove('shadow-lg', 'border-primary-200', 'bg-primary-50/10');
        icon.classList.remove('rotate-180');
        icon.querySelector('svg').classList.replace('text-primary-600', 'text-gray-400');
      } else {
        answer.classList.add('open');
        parent.classList.add('shadow-lg', 'border-primary-200', 'bg-primary-50/10');
        icon.classList.add('rotate-180');
        icon.querySelector('svg').classList.replace('text-gray-400', 'text-primary-600');
      }
    });
  });
});