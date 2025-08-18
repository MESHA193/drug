function Doctors() {
  try {
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

    return (
      <section id="doctors" className="section-padding bg-white" data-name="doctors" data-file="components/Doctors.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Наши врачи
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Команда опытных специалистов с многолетним стажем в области наркологии и психиатрии
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="card text-center hover:shadow-xl transition-shadow duration-300">
                <div className="relative mb-6">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-100"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[var(--primary-color)] text-white px-3 py-1 rounded-full text-xs font-medium">
                    {doctor.experience}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                  {doctor.name}
                </h3>
                
                <p className="text-[var(--primary-color)] font-medium mb-3">
                  {doctor.position}
                </p>
                
                <p className="text-[var(--text-secondary)] mb-6">
                  {doctor.specialization}
                </p>
                
                <button className="btn-secondary w-full">
                  Записаться на прием
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
              Нужна консультация специалиста?
            </h3>
            <p className="text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
              Наши врачи готовы оказать вам профессиональную помощь. Запишитесь на консультацию прямо сейчас.
            </p>
            <button className="btn-primary">
              Записаться на консультацию
            </button>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Doctors component error:', error);
    return null;
  }
}
