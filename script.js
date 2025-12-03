document.addEventListener('DOMContentLoaded', () => {
  // --- Loading Screen Logic ---
  const loadingScreen = document.getElementById('loading-screen');
  const cartoonIcon = document.querySelector('.cartoon-zap');
  
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
    }, 1800); // Slightly longer to see one full jump cycle
  };

  if (loadingScreen) {
    // Start animation immediately (handled by CSS)
    
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

  // --- Blog Data (Service Based Content) ---
  const blogPosts = [
    {
      id: 4,
      title: "ازاي تدفع إعلانات فيسبوك عن طريق فودافون كاش؟",
      date: "2026-01-15",
      url: "article-how-to-pay.html",
      image: "https://placehold.co/800x450/b91c1c/ffffff?text=%D8%AF%D9%81%D8%B9+%D8%A7%D8%B9%D9%84%D8%A7%D9%86%D8%A7%D8%AA+%D9%81%D9%8A%D8%B3%D8%A8%D9%88%D9%83&font=roboto",
      summary: "لو الفيزا بتاعتك واقفة ومش عارف تدفع مديونية الإعلانات، احنا هندفعلك المديونية أو نشحنلك الحساب الاعلاني في دقايق."
    },
    {
      id: 1,
      title: "طريقة طلب خدمة الدفع خطوة بخطوة",
      date: "2026-01-10",
      url: "article-registration.html",
      image: "https://placehold.co/800x450/16a34a/ffffff?text=%D8%AE%D8%B7%D9%88%D8%A7%D8%AA+%D8%B7%D9%84%D8%A8+%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A9&font=roboto",
      summary: "شرح بسيط ازاي تتواصل معانا واتساب، تحسب التكلفة، وتحول المبلغ فودافون كاش عشان ننفذ طلبك."
    },
    {
      id: 2,
      title: "ليه تختار وسيط بدل ما تطلع فيزا دولارية؟",
      date: "2026-01-05",
      url: "article-comparison.html",
      image: "https://placehold.co/800x450/047857/ffffff?text=%D9%88%D8%B3%D9%8A%D8%B7+%D9%88%D9%84%D8%A7+%D9%81%D9%8A%D8%B2%D8%A7%D8%9F&font=roboto",
      summary: "مقارنة بين تكلفة وعمولة الخدمة بتاعتنا (7%) وبين مصاريف البنك وتدبير العملة والمشاكل اللي ممكن تقابلك."
    },
    {
      id: 3,
      title: "ازاي بنحسب التكلفة والعمولة؟ (مثال عملي)",
      date: "2026-01-01",
      url: "article-charging.html",
      image: "https://placehold.co/800x450/1e293b/ffffff?text=%D8%AD%D8%B3%D8%A7%D8%A8+%D8%A7%D9%84%D8%AA%D9%83%D9%84%D9%81%D8%A9&font=roboto",
      summary: "عشان تبقى عارف هتدفع كام بالظبط، شرحنا طريقة حساب سعر الدولار وإضافة الـ 7% عمولة الخدمة."
    }
  ];

  // --- Render Blog Grid ---
  const blogGrid = document.getElementById('blog-grid');

  if (blogGrid) {
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
                    <span class="bg-primary-50 px-2 py-1 rounded-md">خدماتنا</span>
                    <span class="mx-2 text-gray-300">|</span>
                    <span class="text-gray-500">${post.date}</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3 leading-snug hover:text-primary-600 transition">
                    <a href="${post.url}">${post.title}</a>
                </h3>
                <p class="text-gray-600 mb-6 flex-1 line-clamp-3 leading-relaxed">${post.summary}</p>
                <a href="${post.url}" class="mt-auto w-full flex items-center justify-center px-4 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-primary-600 hover:text-white hover:border-primary-600 transition font-bold group">
                    اقرأ التفاصيل
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