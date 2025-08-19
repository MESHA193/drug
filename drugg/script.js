// Переключение мобильного меню
function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

// Плавная прокрутка к разделам
document.addEventListener('DOMContentLoaded', function() {
    // Добавляем обработчики для всех ссылок навигации
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Закрываем мобильное меню если оно открыто
                const mobileMenu = document.getElementById('mobile-menu');
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
    
    // Создаем остальные секции динамически
    createServicesSection();
    createAboutSection();
    createDoctorsSection();
    createContactSection();
    createFooter();
});

// Создание секции услуг
function createServicesSection() {
    const services = [
        {
            icon: 'droplets',
            title: 'Вывод из запоя',
            description: 'Быстрое и безопасное прерывание запоя на дому или в стационаре',
            features: ['Выезд врача 24/7', 'Капельницы на дому', 'Медикаментозная поддержка']
        },
        {
            icon: 'shield-plus',
            title: 'Кодирование',
            description: 'Эффективные методы кодирования от алкогольной и наркотической зависимости',
            features: ['Метод Довженко', 'Медикаментозное кодирование', 'Психотерапевтическое воздействие']
        },
        {
            icon: 'heart-pulse',
            title: 'Детоксикация',
            description: 'Очищение организма от токсинов и продуктов распада наркотических веществ',
            features: ['УБОД процедуры', 'Плазмаферез', 'Инфузионная терапия']
        }
    ];

    const servicesHTML = `
        <section id="services" class="section-padding bg-white">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16">
                    <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Наши услуги</h2>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        Предоставляем полный спектр наркологических услуг с использованием современных методов лечения
                    </p>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${services.map(service => `
                        <div class="card hover:shadow-xl transition-all duration-300">
                            <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <div class="icon-${service.icon} text-2xl text-blue-600"></div>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-3">${service.title}</h3>
                            <p class="text-gray-600 mb-4">${service.description}</p>
                            <ul class="space-y-2 mb-6">
                                ${service.features.map(feature => `
                                    <li class="flex items-center space-x-2 text-sm text-gray-600">
                                        <div class="icon-check text-sm text-green-600"></div>
                                        <span>${feature}</span>
                                    </li>
                                `).join('')}
                            </ul>
                            <button class="w-full btn-secondary">Подробнее</button>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
    
    document.body.insertAdjacentHTML('beforeend', servicesHTML);
}

// Создание секции о клинике
function createAboutSection() {
    const aboutHTML = `
        <section id="about" class="section-padding bg-gray-50">
            <div class="max-w-7xl mx-auto">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">О нашей клинике</h2>
                        <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                            Наркологическая клиника "Новая Жизнь" - это современный медицинский центр, 
                            специализирующийся на лечении алкогольной и наркотической зависимости.
                        </p>
                        <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                            Мы используем проверенные методики и современное оборудование, обеспечивая 
                            максимальную эффективность лечения при полной анонимности для наших пациентов.
                        </p>
                        <div class="flex items-center space-x-6 mb-8">
                            <div class="text-center">
                                <div class="text-3xl font-bold text-blue-600 mb-1">1000+</div>
                                <p class="text-sm text-gray-600">Вылеченных пациентов</p>
                            </div>
                            <div class="text-center">
                                <div class="text-3xl font-bold text-blue-600 mb-1">95%</div>
                                <p class="text-sm text-gray-600">Успешных случаев</p>
                            </div>
                            <div class="text-center">
                                <div class="text-3xl font-bold text-blue-600 mb-1">24/7</div>
                                <p class="text-sm text-gray-600">Поддержка</p>
                            </div>
                        </div>
                        <button class="btn-primary">Записаться на консультацию</button>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div class="bg-white rounded-xl p-6 shadow-lg">
                            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <div class="icon-shield-check text-lg text-blue-600"></div>
                            </div>
                            <h3 class="font-bold text-gray-800 mb-2">Анонимность</h3>
                            <p class="text-sm text-gray-600">Полная конфиденциальность лечения</p>
                        </div>
                        <div class="bg-white rounded-xl p-6 shadow-lg">
                            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <div class="icon-clock text-lg text-blue-600"></div>
                            </div>
                            <h3 class="font-bold text-gray-800 mb-2">Круглосуточно</h3>
                            <p class="text-sm text-gray-600">Работаем 24/7</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    document.body.insertAdjacentHTML('beforeend', aboutHTML);
}

// Создание секции врачей
function createDoctorsSection() {
    const doctors = [
        {
            name: 'Петров Алексей Михайлович',
            position: 'Главный врач, нарколог-психиатр',
            experience: '20 лет опыта',
            specialization: 'Лечение алкоголизма, кодирование',
            image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face'
        },
        {
            name: 'Иванова Елена Сергеевна',
            position: 'Врач-нарколог, психотерапевт',
            experience: '15 лет опыта',
            specialization: 'Лечение наркомании, реабилитация',
            image: 'https://images.unsplash.com/photo-1594824020256-430eacee4746?w=300&h=300&fit=crop&crop=face'
        },
        {
            name: 'Смирнов Дмитрий Александрович',
            position: 'Врач-психиатр, аддиктолог',
            experience: '12 лет опыта',
            specialization: 'Психотерапия зависимостей',
            image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=face'
        }
    ];

    const doctorsHTML = `
        <section id="doctors" class="section-padding bg-white">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16">
                    <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Наши врачи</h2>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        Команда опытных специалистов с многолетним стажем в области наркологии и психиатрии
                    </p>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${doctors.map(doctor => `
                        <div class="card text-center hover:shadow-xl transition-all duration-300">
                            <div class="relative mb-6">
                                <img src="${doctor.image}" alt="${doctor.name}"
                                     class="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-100">
                                <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                                    ${doctor.experience}
                                </div>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-2">${doctor.name}</h3>
                            <p class="text-blue-600 font-medium mb-3">${doctor.position}</p>
                            <p class="text-gray-600 mb-6">${doctor.specialization}</p>
                            <button class="btn-secondary w-full">Записаться на прием</button>
                        </div>
                    `).join('')}
                </div>
                <div class="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Нужна консультация специалиста?</h3>
                    <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Наши врачи готовы оказать вам профессиональную помощь. Запишитесь на консультацию прямо сейчас.
                    </p>
                    <button class="btn-primary">Записаться на консультацию</button>
                </div>
            </div>
        </section>
    `;
    
    document.body.insertAdjacentHTML('beforeend', doctorsHTML);
}

// Создание секции контактов
function createContactSection() {
    const contactHTML = `
        <section id="contact" class="section-padding bg-gray-50">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16">
                    <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Контакты</h2>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        Свяжитесь с нами любым удобным способом. Мы работаем круглосуточно
                    </p>
                </div>
                <div class="grid lg:grid-cols-2 gap-12">
                    <div>
                        <h3 class="text-2xl font-bold text-gray-800 mb-6">Свяжитесь с нами</h3>
                        <div class="space-y-6 mb-8">
                            <div class="flex items-center space-x-4">
                                <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <div class="icon-phone text-lg text-white"></div>
                                </div>
                                <div>
                                    <p class="font-semibold text-gray-800">Телефон</p>
                                    <p class="text-blue-600 font-medium">+7 (495) 123-45-67</p>
                                </div>
                            </div>
                            <div class="flex items-center space-x-4">
                                <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <div class="icon-map-pin text-lg text-white"></div>
                                </div>
                                <div>
                                    <p class="font-semibold text-gray-800">Адрес</p>
                                    <p class="text-gray-600">г. Москва, ул. Медицинская, д. 15</p>
                                </div>
                            </div>
                            <div class="flex items-center space-x-4">
                                <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <div class="icon-clock text-lg text-white"></div>
                                </div>
                                <div>
                                    <p class="font-semibold text-gray-800">Режим работы</p>
                                    <p class="text-gray-600">Круглосуточно, без выходных</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-red-50 border border-red-200 rounded-lg p-4">
                            <div class="flex items-center space-x-3">
                                <div class="icon-alert-circle text-lg text-red-600"></div>
                                <div>
                                    <p class="font-semibold text-red-700">Экстренная помощь</p>
                                    <p class="text-sm text-red-600">При острых состояниях звоните немедленно</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-2xl shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-gray-800 mb-6">Обратная связь</h3>
                        <form onsubmit="submitForm(event)" class="space-y-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-800 mb-2">Ваше имя</label>
                                <input type="text" name="name" required
                                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                       placeholder="Введите ваше имя">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-800 mb-2">Телефон</label>
                                <input type="tel" name="phone" required
                                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                       placeholder="+7 (999) 123-45-67">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-800 mb-2">Сообщение</label>
                                <textarea name="message" rows="4"
                                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                          placeholder="Опишите вашу ситуацию"></textarea>
                            </div>
                            <button type="submit" class="w-full btn-primary">Отправить сообщение</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    document.body.insertAdjacentHTML('beforeend', contactHTML);
}

// Создание футера
function createFooter() {
    const footerHTML = `
        <footer class="bg-gray-900 text-white">
            <div class="max-w-7xl mx-auto px-4 py-12">
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div class="flex items-center space-x-3 mb-4">
                            <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                <div class="icon-heart-pulse text-xl text-white"></div>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold">Новая Жизнь</h3>
                                <p class="text-sm text-gray-400">Наркологическая клиника</p>
                            </div>
                        </div>
                        <p class="text-gray-400 mb-4">
                            Профессиональное лечение зависимостей с гарантией анонимности и качества.
                        </p>
                    </div>
                    <div>
                        <h4 class="font-semibold mb-4">Услуги</h4>
                        <ul class="space-y-2 text-gray-400">
                            <li>Вывод из запоя</li>
                            <li>Кодирование</li>
                            <li>Детоксикация</li>
                            <li>Реабилитация</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold mb-4">Контакты</h4>
                        <div class="space-y-3 text-gray-400">
                            <div class="flex items-center space-x-2">
                                <div class="icon-phone text-sm"></div>
                                <span>+7 (495) 123-45-67</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class="icon-map-pin text-sm"></div>
                                <span>г. Москва, ул. Медицинская, д. 15</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-t border-gray-800 pt-8">
                    <p class="text-gray-400 text-sm text-center">
                        © 2024 Наркологическая клиника "Новая Жизнь". Все права защищены.
                    </p>
                </div>
            </div>
        </footer>
    `;
    
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// Обработка отправки формы
function submitForm(event) {
    event.preventDefault();
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
    event.target.reset();
}

function showNecInfo(text) {
    const necBlock = document.getElementById('subserviceModalNec');
    if (necBlock) {
        necBlock.classList.remove('hidden');
        necBlock.style.display = 'block';
        necBlock.querySelector('.info-text').textContent = text || '';
        window.scrollTo({ top: necBlock.offsetTop - 80, behavior: 'smooth' });
    }
}

// Пример вызова (удалите после теста):
// showNecInfo('Ваш текст для блока nec');
