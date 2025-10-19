// بيانات الفعاليات 
const allEvents = [
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
        featured: true,
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
        featured: false,
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
        featured: false,
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
        featured: true,
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
// متغيرات الصفحة
let currentEvents = [...allEvents];
let currentView = 'grid';
let currentPage = 1;
const eventsPerPage = 6;

// تهيئة صفحة الفعاليات
function initEventsPage() {
    displayEvents(currentEvents.slice(0, eventsPerPage));
    setupEventFilters();
    setupViewToggle();
    setupQuickFilters();
    setupLoadMore();
    updateEventsCount();
}

// عرض الفعاليات
function displayEvents(eventsToShow) {
    const eventsContainer = document.getElementById('eventsContainer');
    if (!eventsContainer) return;

    eventsContainer.innerHTML = '';

    if (eventsToShow.length === 0) {
        eventsContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-calendar-times fa-3x text-muted mb-3"></i>
                <h4 class="text-muted">لا توجد فعاليات تطابق معايير البحث</h4>
                <p class="text-muted">جرب تعديل فلتر البحث أو استخدم كلمات بحث مختلفة</p>
                <button class="btn btn-primary" id="resetSearch">إعادة تعيين البحث</button>
            </div>
        `;
        
        document.getElementById('resetSearch')?.addEventListener('click', resetFilters);
        return;
    }

    eventsToShow.forEach(event => {
        const eventCard = createEventCard(event);
        eventsContainer.innerHTML += eventCard;
    });

    setupLocationModal();
    updateEventsCount(eventsToShow.length);
    
    // إظهار أو إخفاء زر تحميل المزيد
    const loadMoreBtn = document.getElementById('loadMore');
    if (loadMoreBtn) {
        if (eventsToShow.length < currentEvents.length) {
            loadMoreBtn.style.display = 'block';
        } else {
            loadMoreBtn.style.display = 'none';
        }
    }
}

// إنشاء بطاقة فعالية
function createEventCard(event) {
    const formattedDate = new Date(event.date).toLocaleDateString('ar-EG');
    const priceText = event.price > 0 ? `${event.price} دولار امريكي` : 'مجاني';
    const isGridView = currentView === 'grid';

    if (isGridView) {
        return `
            <div class="col-lg-4 col-md-6 mb-4" data-category="${event.category}" data-price="${event.price}">
                <div class="card event-card-grid h-100">
                    <div class="event-image-container">
                        <img src="${event.image}" class="event-image-grid" alt="${event.title}">
                        <span class="event-badge">${event.category}</span>
                        <span class="event-price-tag ${event.price === 0 ? 'bg-success' : 'bg-primary'}">${priceText}</span>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${event.title}</h5>
                        <p class="card-text text-muted flex-grow-1">${event.description}</p>
                        
                        <div class="event-meta">
                            <div>
                                <small class="text-muted">
                                    <i class="fas fa-calendar-alt me-1"></i> ${formattedDate}
                                </small>
                                <br>
                                <small class="text-muted">
                                    <i class="fas fa-map-marker-alt me-1"></i> ${event.location}
                                </small>
                            </div>
                            <div class="event-actions">
                                <button class="btn btn-sm btn-outline-info location-btn me-1" data-event-id="${event.id}" title="الموقع">
                                    <i class="fas fa-map"></i>
                                </button>
                                <a href="event.html?id=${event.id}" class="btn btn-sm btn-primary">التفاصيل</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else {
        // وضع القائمة
        return `
            <div class="col-12 mb-4" data-category="${event.category}" data-price="${event.price}">
                <div class="card event-card-grid events-list-view h-100">
                    <div class="row g-0 h-100">
                        <div class="col-md-3">
                            <div class="event-image-container h-100">
                                <img src="${event.image}" class="event-image-grid h-100 w-100" alt="${event.title}" style="object-fit: cover;">
                                <span class="event-badge">${event.category}</span>
                            </div>
                        </div>
                        <div class="col-md-9">
                            <div class="card-body d-flex flex-column h-100">
                                <div class="d-flex justify-content-between align-items-start mb-2">
                                    <h5 class="card-title">${event.title}</h5>
                                    <span class="badge ${event.price === 0 ? 'bg-success' : 'bg-primary'} fs-6">${priceText}</span>
                                </div>
                                <p class="card-text text-muted flex-grow-1">${event.description}</p>
                                
                                <div class="event-meta">
                                    <div class="d-flex flex-wrap gap-3">
                                        <small class="text-muted">
                                            <i class="fas fa-calendar-alt me-1"></i> ${formattedDate}
                                        </small>
                                        <small class="text-muted">
                                            <i class="fas fa-clock me-1"></i> ${event.time}
                                        </small>
                                        <small class="text-muted">
                                            <i class="fas fa-map-marker-alt me-1"></i> ${event.location}
                                        </small>
                                        <small class="text-muted">
                                            <i class="fas fa-users me-1"></i> ${event.organizer}
                                        </small>
                                    </div>
                                    <div class="event-actions">
                                        <button class="btn btn-sm btn-outline-info location-btn me-2" data-event-id="${event.id}">
                                            <i class="fas fa-map me-1"></i>الموقع
                                        </button>
                                        <a href="event.html?id=${event.id}" class="btn btn-sm btn-primary">
                                            <i class="fas fa-info-circle me-1"></i>التفاصيل
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// إعداد الفلاتر
function setupEventFilters() {
    const applyFiltersBtn = document.getElementById('applyFilters');
    
    // تطبيق الفلتر عند النقر على زر التطبيق
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', function() {
            console.log('تم النقر على زر تطبيق الفلترة');
            applyFilters();
        });
    }
    
    // تطبيق الفلتر تلقائياً عند تغيير أي خيار
    const filterElements = [
        'categoryFilter', 'dateFilter', 'priceFilter', 'sortBy'
    ];
    
    filterElements.forEach(filterId => {
        const element = document.getElementById(filterId);
        if (element) {
            element.addEventListener('change', function() {
                console.log('تم تغيير:', filterId, 'القيمة:', this.value);
                applyFilters();
            });
        }
    });
    
    // البحث أثناء الكتابة
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            clearTimeout(this.searchTimeout);
            this.searchTimeout = setTimeout(() => {
                console.log('بحث عن:', this.value);
                applyFilters();
            }, 500);
        });
    }
}

// تطبيق الفلاتر
function applyFilters() {
    console.log('بدء تطبيق الفلاتر...');
    
    const category = document.getElementById('categoryFilter')?.value || '';
    const dateFilter = document.getElementById('dateFilter')?.value || '';
    const priceFilter = document.getElementById('priceFilter')?.value || '';
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const sortBy = document.getElementById('sortBy')?.value || 'date-asc';
    
    console.log('معايير الفلترة:', {
        category,
        dateFilter,
        priceFilter,
        searchTerm,
        sortBy
    });
    
    let filteredEvents = [...allEvents];
    
    // فلترة حسب التصنيف
    if (category) {
        filteredEvents = filteredEvents.filter(event => event.category === category);
        console.log('بعد فلترة التصنيف:', filteredEvents.length);
    }
    
    // فلترة حسب التاريخ
    if (dateFilter) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        filteredEvents = filteredEvents.filter(event => {
            const eventDate = new Date(event.date);
            eventDate.setHours(0, 0, 0, 0);
            
            switch(dateFilter) {
                case 'today':
                    return eventDate.getTime() === today.getTime();
                case 'tomorrow':
                    const tomorrow = new Date(today);
                    tomorrow.setDate(today.getDate() + 1);
                    return eventDate.getTime() === tomorrow.getTime();
                case 'week':
                    const weekLater = new Date(today);
                    weekLater.setDate(today.getDate() + 7);
                    return eventDate >= today && eventDate <= weekLater;
                case 'month':
                    const monthLater = new Date(today);
                    monthLater.setMonth(today.getMonth() + 1);
                    return eventDate >= today && eventDate <= monthLater;
                case 'upcoming':
                    return eventDate > today;
                default:
                    return true;
            }
        });
        console.log('بعد فلترة التاريخ:', filteredEvents.length);
    }
    
    // فلترة حسب السعر
    if (priceFilter) {
        filteredEvents = filteredEvents.filter(event => {
            switch(priceFilter) {
                case 'free':
                    return event.price === 0;
                case 'paid':
                    return event.price > 0;
                case '0-50':
                    return event.price > 0 && event.price <= 50;
                case '50-100':
                    return event.price > 50 && event.price <= 100;
                case '100+':
                    return event.price > 100;
                default:
                    return true;
            }
        });
        console.log('بعد فلترة السعر:', filteredEvents.length);
    }
    
    // فلترة حسب البحث
    if (searchTerm) {
        filteredEvents = filteredEvents.filter(event => 
            event.title.toLowerCase().includes(searchTerm) || 
            event.description.toLowerCase().includes(searchTerm) ||
            event.organizer.toLowerCase().includes(searchTerm) ||
            event.location.toLowerCase().includes(searchTerm)
        );
        console.log('بعد فلترة البحث:', filteredEvents.length);
    }
    
    // ترتيب النتائج
    filteredEvents.sort((a, b) => {
        switch(sortBy) {
            case 'date-asc':
                return new Date(a.date) - new Date(b.date);
            case 'date-desc':
                return new Date(b.date) - new Date(a.date);
            case 'name':
                return a.title.localeCompare(b.title);
            case 'price':
                return a.price - b.price;
            case 'popular':
                return b.popularity - a.popularity;
            default:
                return new Date(a.date) - new Date(b.date);
        }
    });
    
    console.log('النتائج النهائية:', filteredEvents);
    
    currentEvents = filteredEvents;
    currentPage = 1;
    displayEvents(currentEvents.slice(0, eventsPerPage));
    updateQuickFilters();
}

// إعداد تبديل طريقة العرض
function setupViewToggle() {
    const gridView = document.getElementById('gridView');
    const listView = document.getElementById('listView');
    
    if (gridView && listView) {
        gridView.addEventListener('change', function() {
            if (this.checked) {
                currentView = 'grid';
                const eventsContainer = document.getElementById('eventsContainer');
                if (eventsContainer) {
                    eventsContainer.classList.remove('events-list-view');
                }
                displayEvents(currentEvents.slice(0, currentPage * eventsPerPage));
            }
        });
        
        listView.addEventListener('change', function() {
            if (this.checked) {
                currentView = 'list';
                const eventsContainer = document.getElementById('eventsContainer');
                if (eventsContainer) {
                    eventsContainer.classList.add('events-list-view');
                }
                displayEvents(currentEvents.slice(0, currentPage * eventsPerPage));
            }
        });
    }
}

// إعداد الفلاتر السريعة
function setupQuickFilters() {
    const quickFilterButtons = document.querySelectorAll('.btn[data-category]');
    
    quickFilterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // تحديث حالة الأزرار
            quickFilterButtons.forEach(btn => btn.classList.remove('active-filter'));
            this.classList.add('active-filter');
            
            // تطبيق الفلتر
            const categoryFilter = document.getElementById('categoryFilter');
            if (categoryFilter) {
                if (category) {
                    categoryFilter.value = category;
                } else {
                    categoryFilter.value = '';
                }
            }
            
            applyFilters();
        });
    });
}

// تحديث الفلاتر السريعة
function updateQuickFilters() {
    const quickFilterButtons = document.querySelectorAll('.btn[data-category]');
    const activeCategory = document.getElementById('categoryFilter')?.value || '';
    
    quickFilterButtons.forEach(button => {
        const buttonCategory = button.getAttribute('data-category');
        if ((!activeCategory && !buttonCategory) || buttonCategory === activeCategory) {
            button.classList.add('active-filter');
        } else {
            button.classList.remove('active-filter');
        }
    });
}

// تحديث عدد الفعاليات
function updateEventsCount(count = null) {
    const eventsCount = document.getElementById('eventsCount');
    const eventsNumber = document.getElementById('eventsNumber');
    const totalEvents = document.getElementById('totalEvents');
    
    if (eventsCount && eventsNumber) {
        const displayCount = count !== null ? count : currentEvents.length;
        eventsNumber.textContent = displayCount;
        //eventsCount.textContent = `عرض ${displayCount} فعالية`;
    }
    
    if (totalEvents) {
        totalEvents.textContent = allEvents.length;
    }
}

// إعادة تعيين الفلاتر
function resetFilters() {
    console.log('إعادة تعيين الفلاتر');
    
    // إعادة تعيين عناصر الفلتر
    document.getElementById('categoryFilter').value = '';
    document.getElementById('dateFilter').value = '';
    document.getElementById('priceFilter').value = '';
    document.getElementById('searchInput').value = '';
    document.getElementById('sortBy').value = 'date-asc';
    
    // إعادة تعيين الفلاتر السريعة
    const quickFilterButtons = document.querySelectorAll('.btn[data-category]');
    quickFilterButtons.forEach(btn => {
        if (!btn.getAttribute('data-category')) {
            btn.classList.add('active-filter');
        } else {
            btn.classList.remove('active-filter');
        }
    });
    
    currentEvents = [...allEvents];
    currentPage = 1;
    displayEvents(currentEvents.slice(0, eventsPerPage));
}

// تحميل المزيد من الفعاليات
function setupLoadMore() {
    const loadMoreBtn = document.getElementById('loadMore');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            currentPage++;
            const nextEvents = currentEvents.slice(0, currentPage * eventsPerPage);
            displayEvents(nextEvents);
        });
    }
}

// إعداد نافذة مواقع الفعاليات
function setupLocationModal() {
    const locationButtons = document.querySelectorAll('.location-btn');
    
    locationButtons.forEach(button => {
        button.addEventListener('click', function() {
            const eventId = parseInt(this.getAttribute('data-event-id'));
            const event = allEvents.find(e => e.id === eventId);
            
            if (event) {
                const modalTitle = document.getElementById('locationModalLabel');
                const modalBody = document.getElementById('locationModalBody');
                
                modalTitle.textContent = `موقع: ${event.title}`;
                modalBody.innerHTML = `
                    <div class="text-center">
                        <i class="fas fa-map-marker-alt fa-3x text-primary mb-3"></i>
                        <h5>${event.location}</h5>
                        <p class="text-muted">${event.date} - ${event.time}</p>
                        <div class="mt-4">
                            <a href="${event.locationMap}" target="_blank" class="btn btn-primary">
                                <i class="fas fa-external-link-alt me-2"></i>فتح في خرائط جوجل
                            </a>
                        </div>
                    </div>
                `;
                
                // فتح المودال
                const modal = new bootstrap.Modal(document.getElementById('locationModal'));
                modal.show();
            }
        });
    });
}

// تهيئة الصفحة عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    console.log('تهيئة صفحة الفعاليات...');
    initEventsPage();
    
    // معالجة البارامترات في URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam) {
        document.getElementById('categoryFilter').value = categoryParam;
        applyFilters();
    }
});