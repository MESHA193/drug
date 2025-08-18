function Hero() {
  try {
    return (
      <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 section-padding" data-name="hero" data-file="components/Hero.js">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6 leading-tight">
                Профессиональное лечение зависимостей
              </h1>
              <p className="text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
                Анонимная помощь при алкоголизме и наркомании. Современные методы лечения, 
                опытные врачи, индивидуальный подход к каждому пациенту.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="btn-primary flex items-center justify-center space-x-2">
                  <div className="icon-phone text-lg"></div>
                  <span>Вызвать нарколога</span>
                </button>
                <button className="btn-secondary flex items-center justify-center space-x-2">
                  <div className="icon-message-circle text-lg"></div>
                  <span>Бесплатная консультация</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">24/7</div>
                  <p className="text-sm text-[var(--text-secondary)]">Круглосуточная помощь</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">15+</div>
                  <p className="text-sm text-[var(--text-secondary)]">Лет опыта</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Экстренная помощь</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <div className="icon-phone text-lg text-red-600"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-red-700">Вывод из запоя</p>
                      <p className="text-sm text-red-600">Выезд врача за 30 минут</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <div className="icon-shield-check text-lg text-blue-600"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-700">Детоксикация</p>
                      <p className="text-sm text-blue-600">Безопасное очищение организма</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <div className="icon-user-check text-lg text-green-600"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-green-700">Анонимность</p>
                      <p className="text-sm text-green-600">Полная конфиденциальность</p>
                    </div>
                  </div>
                </div>

                <button className="w-full btn-primary mt-6">
                  Получить помощь сейчас
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}