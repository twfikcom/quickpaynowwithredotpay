document.addEventListener('DOMContentLoaded', () => {
  // --- Loading Screen Logic ---
  const loadingScreen = document.getElementById('loading-screen');
  const zapIcon = document.querySelector('.zap-animation');
  
  // Function to handle hiding the screen
  const hideLoadingScreen = () => {
    if (!loadingScreen) return;
    
    // Minimum display time to show the cool animation (1.5 seconds)
    setTimeout(() => {
      loadingScreen.classList.add('opacity-0');
      // Wait for the fade-out transition (500ms) then remove from DOM
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500);
    }, 1500);
  };

  if (loadingScreen) {
    // Start animation immediately
    if(zapIcon) {
        // Reset animation to ensure it plays
        zapIcon.style.animation = 'none';
        zapIcon.offsetHeight; /* trigger reflow */
        zapIcon.style.animation = null; 
        zapIcon.classList.add('animate-lightning');
    }

    // Check if window is already loaded
    if (document.readyState === 'complete') {
      hideLoadingScreen();
    } else {
      window.addEventListener('load', hideLoadingScreen);
      // Fallback: Force hide after 4 seconds max in case load event hangs
      setTimeout(hideLoadingScreen, 4000);
    }
  }

  // --- Dynamic Year ---
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // --- Mobile Menu Logic ---
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

  // --- Blog Data (Egyptian Arabic Content) ---
  const blogPosts = [
    {
      id: 1,
      title: "ازاي تعمل حساب على RedotPay وتفعله في 5 دقايق (خطوة بخطوة)",
      date: "2025-11-15",
      // Custom placeholder image with requested text "ازاي ادفع بالدولار في مصر"
      image: "https://placehold.co/800x450/b91c1c/ffffff?text=%D8%A7%D8%B2%D8%A7%D9%8A+%D8%A7%D8%AF%D9%81%D8%B9+%D8%A8%D8%A7%D9%84%D8%AF%D9%88%D9%84%D8%A7%D8%B1+%D9%81%D9%8A+%D9%85%D8%B5%D8%B1&font=roboto",
      summary: "شرح بالصور والخطوات ازاي تسجل في البرنامج وتوثق حسابك عشان تاخد الـ 5 دولار الهدية وتبدأ تشتري من برة مصر.",
      content: `
        <p class="lead">لو بتواجه مشكلة إن كارت البنك بتاعك مش شغال دولي، أو عايز تشتري حاجة من أمازون، تدفع اشتراك نتفليكس، أو حتى تعمل إعلانات ممولة على فيسبوك، فالحل السحري دلوقتي هو <strong>RedotPay</strong>.</p>
        
        <p>في المقالة دي هقولك ازاي تعمل حساب وتفعله في خطوات بسيطة جداً، وكل ده وأنت في مكانك بالموبايل.</p>

        <h3>1. تحميل التطبيق والتسجيل</h3>
        <p>أول خطوة هي إنك تحمل التطبيق. عشان تاخد <strong>5 دولار هدية</strong> في رصيدك، لازم تسجل من رابط دعوة. اضغط على اللينك ده <a href="https://url.hk/i/en/42ngi" target="_blank" class="text-primary-600 font-bold">سجل الآن</a>.</p>
        <p>بعد ما تفتح اللينك، اكتب رقم تليفونك أو الإيميل بتاعك، واضغط على "Get Code". هيجيلك كود تفعيل، اكتبه وكده أنت سجلت مبدئياً.</p>

        <h3>2. توثيق الحساب (KYC)</h3>
        <p>عشان تطلع فيزا وتستخدمها، لازم التطبيق يتأكد إنك شخص حقيقي. دي إجراءات بنكية عادية جداً وأمان ليك.</p>
        <ul class="list-disc list-inside space-y-2 mr-4">
            <li>افتح التطبيق وادخل على الإعدادات أو اضغط على لافتة التوثيق.</li>
            <li>اختار وثيقة الهوية (البطاقة الشخصية أو الباسبور).</li>
            <li>صور البطاقة وش وضهر في إضاءة كويسة.</li>
            <li>التطبيق هيطلب منك سيلفي سريع للتأكد من هويتك.</li>
        </ul>
        <p>التوثيق بيتقبل في ثواني بفضل الذكاء الاصطناعي.</p>

        <h3>3. مبروك عليك الحساب والهدية</h3>
        <p>دلوقتي هتلاقي في رصيدك 5 دولار (مقفولين مؤقتاً لحد ما تطلع الكارت). عشان تطلع الكارت الـ Virtual وتستخدمه، لازم تشحن الحساب بحوالي 10 دولار.</p>
        
        <p>في المقالة الجاية، هشرحلك بالتفصيل <strong>ازاي تشحن حسابك عن طريق فودافون كاش</strong> من غير ما تحتاج حد وسيط.</p>

        <div class="bg-gray-100 p-4 rounded-lg mt-6 border-r-4 border-primary-600">
            <strong>نصيحة مهمة:</strong> بيانات الفيزا اللي هتطلعلك سرية جداً، متشاركش الأرقام مع حد، واستخدمها بس في المواقع الموثوقة.
        </div>
      `
    },
    {
      id: 2,
      title: "شرح طريقة شحن RedotPay بفودافون كاش (من غير وسيط)",
      date: "2025-11-20",
      image: "https://placehold.co/800x450/1e293b/ffffff?text=%D8%B4%D8%AD%D9%86+%D8%A8%D9%81%D9%88%D8%AF%D8%A7%D9%81%D9%88%D9%86+%D9%83%D8%A7%D8%B4&font=roboto",
      summary: "الدليل الكامل لشحن حسابك بالدولار الرقمي (USDT) باستخدام محفظتك المحلية سواء فودافون كاش أو إنستا باي.",
      content: `
        <p>أكتر سؤال بييجي: "أنا معيش دولار، معايا جنيه مصري على فودافون كاش، ازاي اشحن RedotPay؟"</p>
        <p>الإجابة بسيطة: بنستخدم حاجة اسمها <strong>USDT</strong> (دولار رقمي). وده متاح تشتريه من جوا التطبيق أو من منصات زي باينانس.</p>

        <h3>الطريقة الأولى: الشحن المباشر (لو متاح)</h3>
        <p>أحياناً التطبيق بيوفر وكلاء محليين، لكن الطريقة الأضمن والأرخص هي الطريقة التانية.</p>

        <h3>الطريقة الثانية: باستخدام Binance P2P (الأفضل)</h3>
        <p>دي أضمن طريقة وسعر الدولار فيها بيكون عادل جداً.</p>
        <ol class="list-decimal list-inside space-y-3 mr-4">
            <li><strong>هات عنوان محفظتك:</strong> افتح RedotPay، اختار Deposit، اختار USDT، واختار شبكة <strong>BNB Smart Chain (BEP20)</strong>. انسخ العنوان ده.</li>
            <li><strong>اشتري USDT:</strong> افتح تطبيق Binance، ادخل على P2P، اختار الشراء (Buy)، وفلتر طريقة الدفع "Vodafone Cash".</li>
            <li>اختار بائع تقييمه عالي، اشتري منه الكمية اللي عايزها وحول له الفلوس فودافون كاش.</li>
            <li><strong>حول لـ RedotPay:</strong> بعد ما الدولار يوصلك على باينانس، اعمل سحب (Withdraw)، حط العنوان اللي نسخته في الخطوة الأولى، واختار نفس الشبكة (BEP20).</li>
        </ol>

        <p class="mt-4">في خلال دقيقة، هتلاقي الرصيد سمع في RedotPay وتقدر تطلب الكارت وتعيش حياتك!</p>
      `
    },
    {
      id: 3,
      title: "ليه RedotPay أحسن من كروت البنوك اللي واقفة؟",
      date: "2025-12-05",
      image: "https://placehold.co/800x450/047857/ffffff?text=%D9%85%D9%82%D8%A7%D8%B1%D9%86%D8%A9+%D8%A7%D9%84%D9%83%D8%B1%D9%88%D8%AA&font=roboto",
      summary: "مقارنة صريحة بين فيزا RedotPay وكروت الدفع الدولية بتاعة البنوك، وليه دي الاختيار الأفضل دلوقتي.",
      content: `
        <p>كلنا عارفين الأزمة الحالية: ليميت الكريدت كارد بقى قليل جداً، وكروت الخصم (Debit) والـ Prepaid وقفت دولي خالص.</p>
        
        <h3>مميزات RedotPay اللي بتخليها تكسب:</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div class="bg-white p-4 rounded shadow border border-gray-200">
                <h4 class="text-primary-600 font-bold mb-2">1. مفيش ليميت رخم</h4>
                <p>البنوك بتديك 50 دولار أو أقل في الشهر. مع RedotPay، الليميت بتاعك هو رصيدك. اشحن بـ 1000 دولار واصرفهم براحتك.</p>
            </div>
            <div class="bg-white p-4 rounded shadow border border-gray-200">
                <h4 class="text-primary-600 font-bold mb-2">2. مفيش تدبير عملة (Markup Fee)</h4>
                <p>البنك بياخد منك 10% مصاريف تدبير عملة فوق سعر الصرف. هنا الدولار بدولار، مفيش خصم زيادة.</p>
            </div>
             <div class="bg-white p-4 rounded shadow border border-gray-200">
                <h4 class="text-primary-600 font-bold mb-2">3. سهولة الاستخراج</h4>
                <p>مش محتاج تروح فرع ولا تقدم إثبات دخل ولا تفتح حساب دولاري. كل اللي محتاجه بطاقتك وموبايلك.</p>
            </div>
        </div>

        <p class="mt-6">عشان كده، RedotPay حالياً هي الحل العملي الوحيد لأي حد شغال فريلانسر، أو بيحب يشتري أونلاين، أو محتاج يدفع اشتراكات شهرية.</p>
        <p class="font-bold text-center mt-4">مستني إيه؟ <a href="https://url.hk/i/en/42ngi" class="text-primary-600 underline">سجل الآن</a></p>
      `
    }
  ];

  // --- Router Logic ---
  // Check if we are on the blog post page (by checking if #blog-content element exists)
  const blogContentContainer = document.getElementById('blog-content');
  const blogGrid = document.getElementById('blog-grid');

  if (blogContentContainer) {
    // We are on blog-post.html
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id');
    const postId = idParam ? parseInt(idParam) : null;
    const post = blogPosts.find(p => p.id === postId);

    if (post) {
      document.title = `${post.title} - Quick Pay Now`;
      
      // Update Meta Tags dynamically (Basic)
      const metaDesc = document.querySelector('meta[name="description"]');
      if(metaDesc) metaDesc.setAttribute("content", post.summary);

      // Render content
      const headerHTML = `
        <div class="mb-8 text-center md:text-right">
            <a href="index.html#blog" class="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-4 transition">
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                العودة للمقالات
            </a>
            <h1 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">${post.title}</h1>
            <div class="flex items-center justify-center md:justify-start text-gray-500 text-sm">
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                ${post.date}
            </div>
        </div>
        <div class="rounded-2xl overflow-hidden shadow-lg mb-10">
            <img src="${post.image}" alt="${post.title}" class="w-full h-64 md:h-96 object-cover">
        </div>
      `;

      const bodyHTML = `
        <div class="prose prose-lg prose-red max-w-none text-gray-700 leading-loose">
            ${post.content}
        </div>
        <div class="mt-12 p-8 bg-primary-50 rounded-2xl text-center border border-primary-100">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">عجبتك المقالة؟</h3>
            <p class="text-gray-600 mb-6">مضيعش وقت وابدأ دلوقتي في استخدام أسهل طريقة للدفع بالدولار في مصر.</p>
            <a href="https://url.hk/i/en/42ngi" target="_blank" class="inline-block bg-primary-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                سجل واحصل على 5$ هدية
            </a>
        </div>
      `;

      blogContentContainer.innerHTML = headerHTML + bodyHTML;
    } else {
      blogContentContainer.innerHTML = `<div class="text-center py-20"><h2 class="text-2xl font-bold text-gray-700">المقال غير موجود</h2><a href="index.html" class="text-primary-600 hover:underline mt-4 block">العودة للصفحة الرئيسية</a></div>`;
    }

  } else if (blogGrid) {
    // We are on index.html, render the grid
    blogPosts.forEach(post => {
      const postHTML = `
        <article class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full border border-gray-100">
            <div class="h-56 overflow-hidden relative group">
                <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition z-10"></div>
                <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
            </div>
            <div class="p-6 flex-1 flex flex-col">
                <div class="flex items-center text-sm text-primary-600 font-medium mb-3">
                    <span class="bg-primary-50 px-2 py-1 rounded-md">شروحات</span>
                    <span class="mx-2 text-gray-300">|</span>
                    <span class="text-gray-500">${post.date}</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3 leading-snug hover:text-primary-600 transition">
                    <a href="blog-post.html?id=${post.id}">${post.title}</a>
                </h3>
                <p class="text-gray-600 mb-6 flex-1 line-clamp-3 leading-relaxed">${post.summary}</p>
                <a href="blog-post.html?id=${post.id}" class="mt-auto w-full flex items-center justify-center px-4 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-primary-600 hover:text-white hover:border-primary-600 transition font-bold group">
                    اقرأ المزيد
                    <svg class="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                </a>
            </div>
        </article>
      `;
      blogGrid.insertAdjacentHTML('beforeend', postHTML);
    });
  }

  // --- FAQ Logic ---
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