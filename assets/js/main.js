// بيانات الفعاليات
const events = [
           {
        id: 1,
        title: "مهرجان الموسيقى السنوي",
        description: "مهرجان موسيقي يضم أفضل الفنانين المحليين والدوليين في حفلات لا تُنسى",
        category: "ثقافية",
        date: getTodayDate(),
        time: "19:00",
        location: "مسرح المدينة",
        price: 50,
        image: "assets/img/event1.jpg",
        featured: true,
        locationMap: "https://maps.google.com/?q=مسرح+المدينة",
        organizer: "هيئة الموسيقى",
        seats: 120,
        popularity: 95
    },
    {
        id: 2,
        title: "ماراثون المدينة الخيري",
        description: "ماراثون خيري لدعم جمعية الأطفال المحتاجين، انضم إلينا في هذه المبادرة الإنسانية",
        category: "رياضية",
        date: "2025-12-20",
        time: "07:00",
        location: "المنتزه المركزي",
        price: 0,
        image: "assets/img/event2.jpg",
        featured: false,
        locationMap: "https://maps.google.com/?q=المنتزه+المركزي",
        organizer: "نادي الجري",
        seats: 500,
        popularity: 88
    },
    {
        id: 3,
        title: "ورشة البرمجة للمبتدئين",
        description: "ورشة تعليمية تقدم أساسيات البرمجة للمبتدئين باستخدام لغة Python",
        category: "تعليمية",
        date: "2025-10-30",
        time: "10:00",
        location: "مركز الابتكار",
        price: 25,
        image: "assets/img/event3.jpg",
        featured: true,
        locationMap: "https://maps.google.com/?q=مركز+الابتكار",
        organizer: "أكاديمية التقنية",
        seats: 30,
        popularity: 92
    },
    {
        id: 4,
        title: "مهرجان الطعام العالمي",
        description: "استمتع بأطباق من مختلف الثقافات حول العالم في تجربة طعام فريدة",
        category: "ترفيهية",
        date: "2025-12-22",
        time: "12:00",
        location: "ساحة المهرجانات",
        price: 10,
        image: "assets/img/event4.jpg",
        featured: false,
        locationMap: "https://maps.google.com/?q=ساحة+المهرجانات",
        organizer: "رابطة الطهاة",
        seats: 200,
        popularity: 85
    },
    {
        id: 5,
        title: "معرض الفنون التشكيلية",
        description: "معرض يضم أعمال فنانين تشكيليين محليين في عرض استثنائي للإبداع",
        category: "ثقافية",
        date: "2025-12-25",
        time: "09:00",
        location: "المتحف الوطني",
        price: 15,
        image: "assets/img/event5.jpg",
        featured: true,
        locationMap: "https://maps.google.com/?q=المتحف+الوطني",
        organizer: "جمعية الفنون",
        seats: 80,
        popularity: 78
    },
    {
        id: 6,
        title: "بطولة كرة السلة للشباب",
        description: "بطولة كرة سلة للشباب تحت 18 سنة بمشاركة أفضل الفرق المحلية",
        category: "رياضية",
        date: getTodayDate(),
        time: "16:00",
        location: "الصالة الرياضية",
        price: 5,
        image: "assets/img/event6.jpg",
        featured: true,
        locationMap: "https://maps.google.com/?q=الصالة+الرياضية",
        organizer: "اتحاد الرياضة",
        seats: 300,
        popularity: 90
    },
    {
        id: 7,
        title: "ندوة التخطيط المالي",
        description: "ندوة متخصصة في التخطيط المالي وإدارة الاستثمار للمستقبل",
        category: "تعليمية",
        date: "2026-01-30",
        time: "18:00",
        location: "قاعة المؤتمرات",
        price: 0,
        image: "assets/img/event7.jpg",
        featured: false,
        locationMap: "https://maps.google.com/?q=قاعة+المؤتمرات",
        organizer: "مجموعة المستشارين",
        seats: 100,
        popularity: 82
    },
    {
        id: 8,
        title: "حفل الألعاب النارية",
        description: "احتفال برأس السنة مع عرض مبهر للألعاب النارية والموسيقى",
        category: "ترفيهية",
        date: "2026-03-29",
        time: "23:30",
        location: "الكورنيش البحري",
        price: 0,
        image: "assets/img/event8.jpg",
        featured: false,
        locationMap: "https://maps.google.com/?q=الكورنيش+البحري",
        organizer: "بلدية المدينة",
        seats: 1000,
        popularity: 98
    },
    {
        id: 9,
        title: "ملتقى رواد الأعمال",
        description: "ملتقى يجمع رواد الأعمال والمستثمرين لتبادل الخبرات والفرص",
        category: "اجتماعية",
        date: "2026-02-05",
        time: "14:00",
        location: "فندق جراند",
        price: 75,
        image: "assets/img/event9.jpg",
        featured: false,
        locationMap: "https://maps.google.com/?q=فندق+جراند",
        organizer: "غرفة التجارة",
        seats: 150,
        popularity: 87
    },
    {
        id: 10,
        title: "حملة تنظيف الشواطئ",
        description: "مبادرة تطوعية لتنظيف الشواطئ والحفاظ على البيئة البحرية",
        category: "تطوعية",
        date: "2026-05-22",
        time: "08:00",
        location: "شاطئ النخيل",
        price: 0,
        image: "assets/img/event10.jpg",
        featured: false,
        locationMap: "https://maps.google.com/?q=شاطئ+النخيل",
        organizer: "جمعية البيئة",
        seats: 200,
        popularity: 80
    },
    {
        id: 11,
        title: "مهرجان الشعر العربي",
        description: "أمسية شعرية تجمع نخبة من الشعراء العرب في لقاء ثقافي مميز",
        category: "ثقافية",
        date: "2026-04-12",
        time: "20:00",
        location: "دار الثقافة",
        price: 20,
        image: "assets/img/event11.jpg",
        featured: false,
        locationMap: "https://maps.google.com/?q=دار+الثقافة",
        organizer: "رابطة الأدباء",
        seats: 120,
        popularity: 83
    },
    {
        id: 12,
        title: "دورة الإسعافات الأولية",
        description: "دورة تدريبية شاملة في الإسعافات الأولية للمبتدئين",
        category: "تعليمية",
        date: "2025-11-15",
        time: "10:00",
        location: "مركز التدريب",
        price: 40,
        image: "assets/img/event12.jpg",
        featured: false,
        locationMap: "https://maps.google.com/?q=مركز+التدريب",
        organizer: "الهلال الأحمر",
        seats: 40,
        popularity: 91
    },
    {
        id: 13,
        title: "مسابفة السيارات",
        description: "مسابقة سيارات من الطراز القديم",
        category: "رياضية",
        date: "2025-10-29",
        time: "10:00",
        location: "اتحاد السيارات الوطني",
        price: 30,
        image: "assets/img/event13.jpg",
        featured: false,
        locationMap: "https://maps.google.com/?q=مركز+التدريب",
        organizer: "الهلال الأحمر",
        seats: 15000,
        popularity: 88
    }
];
//دالة الوقت اليوم 
function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    
    return `${year}/${month}/${day}`;
}
// إدارة الوضع (وضع الليلي/النهاري)
function setupTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // تحميل التفضيل المحفوظ
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    body.className = savedTheme;
    updateThemeIcon(savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            if (body.classList.contains('light-mode')) {
                body.classList.replace('light-mode', 'dark-mode');
                localStorage.setItem('theme', 'dark-mode');
                updateThemeIcon('dark-mode');
            } else {
                body.classList.replace('dark-mode', 'light-mode');
                localStorage.setItem('theme', 'light-mode');
                updateThemeIcon('light-mode');
            }
        });
    }
}

// تحديث أيقونة الوضع
function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark-mode') {
            icon.className = 'fas fa-sun';
            themeToggle.title = 'الوضع النهاري';
        } else {
            icon.className = 'fas fa-moon';
            themeToggle.title = 'الوضع الليلي';
        }
    }
}

// زر العودة للأعلى
function setupScrollToTop() {
    const scrollButton = document.getElementById('scrollToTop');
    
    if (scrollButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollButton.style.display = 'flex';
            } else {
                scrollButton.style.display = 'none';
            }
        });
        
        scrollButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// نافذة موقع الفعالية
function setupLocationModal() {
    const locationButtons = document.querySelectorAll('.location-btn');
    
    locationButtons.forEach(button => {
        button.addEventListener('click', function() {
            const eventId = this.getAttribute('data-event-id');
            const event = events.find(e => e.id == eventId);
            
            if (event) {
                const modalTitle = document.getElementById('locationModalLabel');
                const modalBody = document.getElementById('locationModalBody');
                
                modalTitle.textContent = `موقع: ${event.title}`;
                modalBody.innerHTML = `
                    <p><strong>المكان:</strong> ${event.location}</p>
                    <p><strong>التاريخ والوقت:</strong> ${new Date(event.date).toLocaleDateString('ar-EG')} - ${event.time}</p>
                    <div class="mt-3">
                        <a href="${event.locationMap}" target="_blank" class="btn btn-primary">
                            <i class="fas fa-map-marker-alt me-2"></i>فتح في خرائط جوجل
                        </a>
                    </div>
                `;
                
                // فتح المودال
                const modal = new bootstrap.Modal(document.getElementById('locationModal'));
                modal.show();
            }
        });
    });
}
// عرض فعاليات اليوم في الصفحة الرئيسية
function displayTodayEvents() {
    const todayContainer = document.getElementById('todayEvents');
    if (!todayContainer) return;
    
    // الحصول على تاريخ اليوم
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];
    
    // فلترة الفعاليات التي تاريخها اليوم
    const todayEvents = events.filter(event => {
        const eventDate = new Date(event.date);
        const eventDateString = eventDate.toISOString().split('T')[0];
        return eventDateString === todayString;
    }).slice(0, 3);
    
    if (todayEvents.length === 0) {
        todayContainer.innerHTML = `
            <div class="col-12 text-center">
                <p class="text-muted" data-translate="لا توجد فعاليات اليوم">لا توجد فعاليات اليوم</p>
            </div>
        `;
        return;
    }
    
    todayEvents.forEach(event => {
        const eventCard = createEventCard(event);
        todayContainer.innerHTML += eventCard;
    });
    
    // إعداد المودال لفعاليات اليوم
    setupLocationModal();
}
// عرض الفعاليات المميزة في الصفحة الرئيسية
function displayFeaturedEvents() {
    const featuredContainer = document.getElementById('featuredEvents');
    if (!featuredContainer) return;
    
    const featuredEvents = events.filter(event => event.featured);
    
    featuredEvents.forEach(event => {
        const eventCard = createEventCard(event);
        featuredContainer.innerHTML += eventCard;
    });
    
    // إعداد المودال للفعاليات المميزة
    setupLocationModal();
}

// عرض جميع الفعاليات في صفحة الفعاليات
function displayAllEvents() {
    const eventsContainer = document.getElementById('eventsContainer');
    if (!eventsContainer) return;
    
    events.forEach(event => {
        const eventCard = createEventCard(event);
        eventsContainer.innerHTML += eventCard;
    });
    
    // تحديث عدد الفعاليات
    updateEventsCount(events.length);
    
    // إعداد المودال
    setupLocationModal();
}

// إنشاء بطاقة فعالية
function createEventCard(event) {
    const formattedDate = new Date(event.date).toLocaleDateString('ar-EG');
    const priceText = event.price > 0 ? `${event.price} دولار امريكي` : 'مجاني';
    
    return `
        <div class="col-md-4 mb-4" data-category="${event.category}">
            <div class="card event-card h-100">
                <div class="position-relative">
                    <img src="${event.image}" class="card-img-top event-image" alt="${event.title}">
                    <span class="event-category">${event.category}</span>
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${event.title}</h5>
                    <p class="card-text flex-grow-1">${event.description}</p>
                    <div class="mt-auto">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <span class="event-date"><i class="fas fa-calendar-alt me-1"></i> ${formattedDate}</span>
                            <span class="badge bg-primary">${priceText}</span>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <small class="text-muted">
                                <i class="fas fa-map-marker-alt me-1"></i> ${event.location}
                            </small>
                            <div>
                                <button class="btn btn-sm btn-outline-info location-btn me-2" data-event-id="${event.id}">
                                    <i class="fas fa-map"></i>
                                </button>
                                <a href="event.html?id=${event.id}" class="btn btn-sm btn-outline-primary">تفاصيل</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// فلترة الفعاليات
function setupFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const dateFilter = document.getElementById('dateFilter');
    const searchInput = document.getElementById('searchInput');
    const applyFiltersBtn = document.getElementById('applyFilters');
    const resetFiltersBtn = document.getElementById('resetFilters');
    const sortBy = document.getElementById('sortBy');
    
    if (!applyFiltersBtn) return;
    
    function applyFilters() {
        const selectedCategory = categoryFilter.value;
        const selectedDate = dateFilter.value;
        const searchTerm = searchInput.value.toLowerCase();
        const sortValue = sortBy ? sortBy.value : 'date';
        
        let filteredEvents = [...events];
        
        // فلترة حسب التصنيف
        if (selectedCategory) {
            filteredEvents = filteredEvents.filter(event => event.category === selectedCategory);
        }
        
        // فلترة حسب التاريخ
        if (selectedDate) {
            const today = new Date();
            filteredEvents = filteredEvents.filter(event => {
                const eventDate = new Date(event.date);
                switch(selectedDate) {
                    case 'today':
                        return eventDate.toDateString() === today.toDateString();
                    case 'week':
                        const weekLater = new Date(today);
                        weekLater.setDate(today.getDate() + 7);
                        return eventDate >= today && eventDate <= weekLater;
                    case 'month':
                        const monthLater = new Date(today);
                        monthLater.setMonth(today.getMonth() + 1);
                        return eventDate >= today && eventDate <= monthLater;
                    default:
                        return true;
                }
            });
        }
        
        // فلترة حسب البحث
        if (searchTerm) {
            filteredEvents = filteredEvents.filter(event => 
                event.title.toLowerCase().includes(searchTerm) || 
                event.description.toLowerCase().includes(searchTerm)
            );
        }
        
        // ترتيب النتائج
        filteredEvents.sort((a, b) => {
            switch(sortValue) {
                case 'name':
                    return a.title.localeCompare(b.title);
                case 'price':
                    return a.price - b.price;
                case 'date':
                default:
                    return new Date(a.date) - new Date(b.date);
            }
        });
        
        // عرض النتائج المفلترة
        displayFilteredEvents(filteredEvents);
    }
    
    function displayFilteredEvents(filteredEvents) {
        const eventsContainer = document.getElementById('eventsContainer');
        if (!eventsContainer) return;
        
        eventsContainer.innerHTML = '';
        
        filteredEvents.forEach(event => {
            const eventCard = createEventCard(event);
            eventsContainer.innerHTML += eventCard;
        });
        
        // تحديث عدد الفعاليات
        updateEventsCount(filteredEvents.length);
        
        // إعادة إعداد المودال للفعاليات المصفاة
        setupLocationModal();
    }
    
    function resetFilters() {
        if (categoryFilter) categoryFilter.value = '';
        if (dateFilter) dateFilter.value = '';
        if (searchInput) searchInput.value = '';
        if (sortBy) sortBy.value = 'date';
        
        displayFilteredEvents(events);
    }
    
    applyFiltersBtn.addEventListener('click', applyFilters);
    
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', resetFilters);
    }
    
    if (sortBy) {
        sortBy.addEventListener('change', applyFilters);
    }
    
    // البحث أثناء الكتابة
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            clearTimeout(this.searchTimeout);
            this.searchTimeout = setTimeout(applyFilters, 500);
        });
    }
}

// تحديث عدد الفعاليات المعروضة
function updateEventsCount(count) {
    const eventsCount = document.getElementById('eventsCount');
    if (eventsCount) {
        eventsCount.textContent = `عرض ${count} فعالية`;
    }
}

// التحقق من نموذج الاتصال
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !subject || !message) {
            showAlert('يرجى ملء جميع الحقول', 'danger');
            return;
        }
        
        if (!isValidEmail(email)) {
            showAlert('يرجى إدخال بريد إلكتروني صحيح', 'danger');
            return;
        }
        
        // محاكاة إرسال النموذج
        showAlert('تم إرسال رسالتك بنجاح، سنتواصل معك قريباً', 'success');
        contactForm.reset();
    });
}

// التحقق من صحة البريد الإلكتروني
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// عرض رسائل التنبيه
function showAlert(message, type) {
    const alertContainer = document.getElementById('alertContainer');
    if (!alertContainer) return;
    
    const alert = document.createElement('div');
    alert.className = `alert alert-${type} alert-dismissible fade show`;
    alert.role = 'alert';
    alert.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    alertContainer.appendChild(alert);
    
    // إزالة التنبيه تلقائياً بعد 5 ثوانٍ
    setTimeout(() => {
        if (alert.parentNode) {
            alert.parentNode.removeChild(alert);
        }
    }, 5000);
}

// تهيئة الموقع عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    setupTheme();
    setupScrollToTop();
    setupLocationModal();
    displayFeaturedEvents();
    displayAllEvents();
    setupFilters();
    setupContactForm();
displayTodayEvents();
    
    // إعداد النقر على بطاقات التصنيفات
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            window.location.href = `events.html?category=${category}`;
        });
    });
    
    // معالجة البارامترات في URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam && document.getElementById('categoryFilter')) {
        document.getElementById('categoryFilter').value = categoryParam;
        document.getElementById('applyFilters').click();
    }
// إضافة active states لللمس
document.addEventListener('touchstart', function(){}, {passive: true});

// تحسين أداء السكرول
if ('scrollBehavior' in document.documentElement.style) {
    // المتصفح يدعم smooth scroll
} else {
    // fallback للمتصفحات القديمة
}

// تحميل ملف الترجمة
const translationScript = document.createElement('script');
translationScript.src = 'assets/js/translation.js';
document.head.appendChild(translationScript);
});