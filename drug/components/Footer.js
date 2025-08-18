function Footer() {
  try {
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <footer className="bg-gray-900 text-white" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                  <div className="icon-heart-pulse text-xl text-white"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Новая Жизнь</h3>
                  <p className="text-sm text-gray-400">Наркологическая клиника</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Профессиональное лечение зависимостей с гарантией анонимности и качества.
              </p>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-700">
                  <div className="icon-phone text-sm"></div>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-700">
                  <div className="icon-mail text-sm"></div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Вывод из запоя</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Кодирование</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Детоксикация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Реабилитация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Лечение наркомании</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Главная</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Услуги</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">О клинике</button></li>
                <li><button onClick={() => scrollToSection('doctors')} className="hover:text-white transition-colors">Врачи</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Контакты</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="icon-phone text-sm"></div>
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="icon-map-pin text-sm"></div>
                  <span>г. Москва, ул. Медицинская, д. 15</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="icon-clock text-sm"></div>
                  <span>Круглосуточно</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Наркологическая клиника "Новая Жизнь". Все права защищены.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
                <a href="#" className="hover:text-white transition-colors">Условия использования</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}