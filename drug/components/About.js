function About() {
  try {
    const advantages = [
      {
        icon: 'shield-check',
        title: 'Анонимность',
        description: 'Полная конфиденциальность лечения, не ставим на учет'
      },
      {
        icon: 'clock',
        title: 'Круглосуточно',
        description: 'Работаем 24/7, выезд врача в любое время'
      },
      {
        icon: 'award',
        title: 'Опыт 15+ лет',
        description: 'Большой опыт успешного лечения зависимостей'
      },
      {
        icon: 'users',
        title: 'Команда экспертов',
        description: 'Квалифицированные врачи-наркологи и психотерапевты'
      },
      {
        icon: 'home',
        title: 'Лечение на дому',
        description: 'Возможность проведения процедур в домашних условиях'
      },
      {
        icon: 'heart',
        title: 'Индивидуальный подход',
        description: 'Персональная программа лечения для каждого пациента'
      }
    ];

    return (
      <section id="about" className="section-padding bg-[var(--secondary-color)]" data-name="about" data-file="components/About.js">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-6">
                О нашей клинике
              </h2>
              <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
                Наркологическая клиника "Новая Жизнь" - это современный медицинский центр, 
                специализирующийся на лечении алкогольной и наркотической зависимости.
              </p>
              <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
                Мы используем проверенные методики и современное оборудование, обеспечивая 
                максимальную эффективность лечения при полной анонимности для наших пациентов.
              </p>
              
              <div className="flex items-center space-x-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--primary-color)] mb-1">1000+</div>
                  <p className="text-sm text-[var(--text-secondary)]">Вылеченных пациентов</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--primary-color)] mb-1">95%</div>
                  <p className="text-sm text-[var(--text-secondary)]">Успешных случаев</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--primary-color)] mb-1">24/7</div>
                  <p className="text-sm text-[var(--text-secondary)]">Поддержка</p>
                </div>
              </div>

              <button className="btn-primary">
                Записаться на консультацию
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <div className={`icon-${advantage.icon} text-lg text-[var(--primary-color)]`}></div>
                  </div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}