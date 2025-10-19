// دالة لعرض تفاصيل الفعالية
function displayEventDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = parseInt(urlParams.get('id'));
    
    if (!eventId) {
        window.location.href = 'events.html';
        return;
    }
    
    const event = events.find(e => e.id === eventId);
    if (!event) {
        window.location.href = 'events.html';
        return;
    }
    
    // تحديث breadcrumb
    document.getElementById('eventBreadcrumb').textContent = event.title;
    
    // تحديث المعلومات السريعة
    document.getElementById('infoCategory').textContent = event.category;
    document.getElementById('infoPrice').textContent = event.price > 0 ? `${event.price} دولار امريكي` : 'مجاني';
    
    const eventDetailContainer = document.getElementById('eventDetail');
    const formattedDate = new Date(event.date).toLocaleDateString('ar-EG');
    
    eventDetailContainer.innerHTML = `
        <div class="event-header mb-4">
            <h1 class="display-5 fw-bold">${event.title}</h1>
            <div class="d-flex flex-wrap gap-3 mt-3">
                <span class="badge bg-primary fs-6">${event.category}</span>
                <span class="badge bg-success fs-6">${formattedDate}</span>
                <span class="badge bg-info fs-6">${event.time}</span>
            </div>
        </div>
        
        <div class="row">
            <div class="col-md-8">
                <img src="${event.image}" alt="${event.title}" style="width: 400px; height: 250px;" class="event-detail-image mb-4">
                
                <div class="event-description mb-4">
                    <h3>عن الفعالية</h3>
                    <p class="lead">${event.description}</p>
                    <p>${getEventFullDescription(event.id)}</p>
                </div>
                
                <div class="event-highlights mb-4">
                    <h4>أبرز ما في الفعالية</h4>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <i class="fas fa-check text-success me-2"></i>
                            فرصة للتواصل مع محترفين في المجال
                        </li>
                        <li class="list-group-item">
                            <i class="fas fa-check text-success me-2"></i>
                            شهادة مشاركة معتمدة
                        </li>
                        <li class="list-group-item">
                            <i class="fas fa-check text-success me-2"></i>
                            وجبات خفيفة ومشروبات مجانية
                        </li>
                        <li class="list-group-item">
                            <i class="fas fa-check text-success me-2"></i>
                            مواد تعليمية شاملة
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="card event-info-card sticky-top">
                    <div class="card-body">
                        <h5 class="card-title">معلومات الحضور</h5>
                        <div class="event-info">
                            <div class="info-item d-flex align-items-center mb-3">
                                <i class="fas fa-calendar-alt text-primary me-3"></i>
                                <div>
                                    <small class="text-muted">التاريخ</small>
                                    <div class="fw-bold">${formattedDate}</div>
                                </div>
                            </div>
                            <div class="info-item d-flex align-items-center mb-3">
                                <i class="fas fa-clock text-primary me-3"></i>
                                <div>
                                    <small class="text-muted">الوقت</small>
                                    <div class="fw-bold">${event.time}</div>
                                </div>
                            </div>
                            <div class="info-item d-flex align-items-center mb-3">
                                <i class="fas fa-map-marker-alt text-primary me-3"></i>
                                <div>
                                    <small class="text-muted">الموقع</small>
                                    <div class="fw-bold">${event.location}</div>
                                </div>
                            </div>
                            <div class="info-item d-flex align-items-center mb-4">
                                <i class="fas fa-tag text-primary me-3"></i>
                                <div>
                                    <small class="text-muted">السعر</small>
                                    <div class="fw-bold">${event.price > 0 ? `${event.price} دولار امريكي` : 'مجاني'}</div>
                                </div>
                            </div>
                            
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary btn-lg" id="registerBtn" data-event-id="${event.id}">
                                    <i class="fas fa-ticket-alt me-2"></i>
                                    سجل الآن
                                </button>
                                <button class="btn btn-outline-secondary location-btn" data-event-id="${event.id}">
                                    <i class="fas fa-map-marker-alt me-2"></i>
                                    عرض الموقع
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row mt-5">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4>فعاليات مشابهة</h4>
                        <div class="row mt-3" id="relatedEventsList">
                            <!-- سيتم ملؤها بالجافاسكريبت -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // إعداد الأزرار
    setupEventButtons(event.id);
    
    // عرض الفعاليات المشابهة
    displayRelatedEvents(event.category, event.id);
}

// الحصول على وصف مفصل للفعالية
function getEventFullDescription(eventId) {
    const descriptions = {
        1: "مهرجان الموسيقى السنوي هو حدث ثقافي فني يجمع أفضل المواهب المحلية والدولية في مجال الموسيقى. يتضمن المهرجان عروضاً حية لمجموعة متنوعة من الأنواع الموسيقية تتراوح بين الموسيقى التقليدية والعصرية. سيحظى الحضور بتجربة فريدة من خلال ورش العمل التفاعلية والجلسات الحوارية مع الفنانين.",
        2: "ماراثون المدينة الخيري هو حدث رياضي مجتمعي يهدف إلى جمع التبرعات لدعم جمعية الأطفال المحتاجين. المسابقة مفتوحة لجميع الفئات العمرية ومستويات اللياقة البدنية. يشمل الحدث مسارات متنوعة تناسب جميع المشاركين، من الهواة إلى المحترفين.",
        3: "ورشة البرمجة للمبتدئين مصممة خصيصاً للأشخاص الراغبين في بدء رحلتهم في عالم البرمجة. تغطي الورشة الأساسيات والمفاهيم الرئيسية للبرمجة باستخدام لغة Python، مع تمارين عملية ومشاريع تطبيقية.",
        4: "مهرجان الطعام العالمي يجلب نكهات من مختلف أنحاء العالم إلى مدينتك. يتضمن المهرجان أكثر من 50 مطعماً ومتجر طعام يقدمون أطباقاً تقليدية من آسيا، أوروبا، أمريكا اللاتينية، والشرق الأوسط.",
        5: "معرض الفنون التشكيلية يسلط الضوء على أعمال مجموعة من الفنانين التشكيليين المتميزين. المعرض يتضمن لوحات زيتية، منحوتات، وأعمال فنية متنوعة تعكس التنوع الثقافي والتراثي.",
        6: "بطولة كرة السلة للشباب تجمع أفضل الفرق المحلية في منافسة رياضية مثيرة. البطولة تقام على مدار ثلاثة أيام وتشمل فئات عمرية مختلفة، مع جوائز قيمة للفرق الفائزة."
    };
    
    return descriptions[eventId] || "فعالية رائعة تستحق المشاركة فيها. ستوفر لك تجربة فريدة وفرصة للتعلم والترفيه.";
}

// الحصول على صورة الموقع لكل فعالية
function getEventLocationImage(eventId) {
    const locationImages = {
        1: "assets/maps/music-festival-map.jpg",
        2: "assets/maps/marathon-map.jpg", 
        3: "assets/maps/workshop-map.jpg",
        4: "assets/maps/food-festival-map.jpg",
        5: "assets/maps/art-exhibition-map.jpg",
        6: "assets/maps/basketball-map.jpg"
    };
    
    return locationImages[eventId] || "assets/maps/default-map.jpg";
}

// عرض الفعاليات المشابهة
function displayRelatedEvents(category, currentEventId) {
    const relatedEvents = events.filter(event => 
        event.category === category && event.id !== currentEventId
    ).slice(0, 3);
    
    const relatedContainer = document.getElementById('relatedEventsList');
    
    if (relatedEvents.length === 0) {
        relatedContainer.innerHTML = '<p class="text-muted">لا توجد فعاليات مشابهة حالياً.</p>';
        return;
    }
    
    relatedEvents.forEach(event => {
        const formattedDate = new Date(event.date).toLocaleDateString('ar-EG');
        const priceText = event.price > 0 ? `${event.price} دولار امريكي` : 'مجاني';
        
        relatedContainer.innerHTML += `
            <div class="col-md-4">
                <div class="card h-100">
                    <img src="${event.image}" class="card-img-top" alt="${event.title}" style="height: 150px; object-fit: cover;">
                    <div class="card-body">
                        <h6 class="card-title">${event.title}</h6>
                        <p class="card-text small">${event.description.substring(0, 80)}...</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <small class="text-muted">${formattedDate}</small>
                            <span class="badge bg-primary">${priceText}</span>
                        </div>
                        <a href="event.html?id=${event.id}" class="btn btn-sm btn-outline-primary w-100 mt-2">عرض التفاصيل</a>
                    </div>
                </div>
            </div>
        `;
    });
}

// إعداد أزرار التفاعل
function setupEventButtons(eventId) {
    // زر التسجيل
    const registerBtn = document.getElementById('registerBtn');
    if (registerBtn) {
        registerBtn.addEventListener('click', function() {
            const modal = new bootstrap.Modal(document.getElementById('registerModal'));
            modal.show();
        });
    }
    
    // زر عرض الموقع 
    const locationBtn = document.querySelector('.location-btn');
    if (locationBtn) {
        locationBtn.addEventListener('click', function() {
            const event = events.find(e => e.id === eventId);
            
            // إنشاء عنصر الصورة إذا لم يكن موجوداً
            let locationImage = document.getElementById('locationImage');
            
            if (!locationImage) {
                locationImage = document.createElement('img');
                locationImage.id = 'locationImage';
                locationImage.className = 'location-image mt-3';
                locationImage.alt = `موقع ${event.title}`;
                locationImage.style.maxWidth = '100%';
                locationImage.style.borderRadius = '8px';
                locationImage.style.display = 'none';
                locationImage.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
                locationImage.style.border = '2px solid #dee2e6';
                
                // إدراج الصورة بعد زر الموقع
                locationBtn.parentNode.appendChild(locationImage);
            }
            
            // تبديل عرض/إخفاء الصورة
            if (locationImage.style.display === 'none') {
                locationImage.src = getEventLocationImage(eventId);
                locationImage.style.display = 'block';
                locationBtn.innerHTML = '<i class="fas fa-times me-2"></i> إخفاء الموقع';
                locationBtn.classList.remove('btn-outline-secondary');
                locationBtn.classList.add('btn-outline-danger');
                
                // تمرير  للصورة
                locationImage.style.opacity = '0';
                locationImage.style.transition = 'opacity 0.3s ease';
                setTimeout(() => {
                    locationImage.style.opacity = '1';
                }, 10);
            } else {
                locationImage.style.display = 'none';
                locationBtn.innerHTML = '<i class="fas fa-map-marker-alt me-2"></i> عرض الموقع';
                locationBtn.classList.remove('btn-outline-danger');
                locationBtn.classList.add('btn-outline-secondary');
            }
        });
    }
    
    // زر تأكيد التسجيل
    const confirmRegister = document.getElementById('confirmRegister');
    if (confirmRegister) {
        confirmRegister.addEventListener('click', function() {
            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const phone = document.getElementById('registerPhone').value;
            const tickets = document.getElementById('registerTickets').value;
            
            if (!name || !email || !phone) {
                alert('يرجى ملء جميع الحقول المطلوبة');
                return;
            }
            
            // محاكاة عملية التسجيل
            alert(`شكراً ${name}! تم تسجيلك في الفعالية بنجاح.\nعدد التذاكر: ${tickets}\nسيتم إرسال تأكيد إلى ${email}`);
            
            const modal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
            modal.hide();
            
            // إعادة تعيين النموذج
            document.getElementById('registerForm').reset();
        });
    }
    
    // أزرار المشاركة
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(button => {
        button.addEventListener('click', function() {
            const platform = this.getAttribute('data-platform');
            const event = events.find(e => e.id === eventId);
            const url = window.location.href;
            const text = `انضم إلي في فعالية ${event.title} - ${event.description.substring(0, 100)}...`;
            
            switch(platform) {
                case 'facebook':
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
                    break;
                case 'twitter':
                    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
                    break;
                case 'whatsapp':
                    window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
                    break;
                case 'copy':
                    navigator.clipboard.writeText(url).then(() => {
                        alert('تم نسخ رابط الفعالية إلى الحافظة');
                    });
                    break;
            }
        });
    });
}

// تهيئة الصفحة عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    displayEventDetails();
});