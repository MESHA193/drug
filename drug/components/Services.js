function Services() {
  try {
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
      },
      {
        icon: 'brain',
        title: 'Реабилитация',
        description: 'Комплексная программа восстановления и социальной адаптации',
        features: ['Психотерапия', 'Групповые занятия', 'Семейная терапия']
      },
      {
        icon: 'stethoscope',
        title: 'Лечение наркомании',
        description: 'Профессиональное лечение всех видов наркотической зависимости',
        features: ['Снятие ломки', 'Заместительная терапия', 'Долгосрочная поддержка']
      },
      {
        icon: 'user-round',
        title: 'Консультации',
        description: 'Консультации нарколога, психиатра и других специалистов',
        features: ['Первичная диагностика', 'Составление плана лечения', 'Семейное консультирование']
      }
    ];

    return (
      <section id="services" className="section-padding bg-white" data-name="services" data-file="components/Services.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Предоставляем полный спектр наркологических услуг с использованием современных методов лечения
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <div className={`icon-${service.icon} text-2xl text-[var(--primary-color)]`}></div>
                </div>
                
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  {service.title}
                </h3>
                
                <p className="text-[var(--text-secondary)] mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-[var(--text-secondary)]">
                      <div className="icon-check text-sm text-[var(--accent-color)]"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full btn-secondary">
                  Подробнее
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Services component error:', error);
    return null;
  }
}