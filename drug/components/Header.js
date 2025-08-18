function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    };

    return (
      <header className="bg-white shadow-sm border-b border-[var(--border-color)] sticky top-0 z-50" data-name="header" data-file="components/Header.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                <div className="icon-heart-pulse text-xl text-white"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-[var(--text-primary)]">Новая Жизнь</h1>
                <p className="text-sm text-[var(--text-secondary)]">Наркологическая клиника</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('services')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('about')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                О клинике
              </button>
              <button onClick={() => scrollToSection('doctors')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                Врачи
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                Контакты
              </button>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <div className="text-right">
                <p className="font-semibold text-[var(--primary-color)]">+7 (495) 123-45-67</p>
                <p className="text-sm text-[var(--text-secondary)]">Круглосуточно</p>
              </div>
              <button className="btn-primary">
                Вызвать врача
              </button>
            </div>

            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="icon-menu text-xl text-[var(--text-primary)]"></div>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-[var(--border-color)]">
              <nav className="flex flex-col space-y-3">
                <button onClick={() => scrollToSection('home')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
                  Главная
                </button>
                <button onClick={() => scrollToSection('services')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
                  Услуги
                </button>
                <button onClick={() => scrollToSection('about')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
                  О клинике
                </button>
                <button onClick={() => scrollToSection('doctors')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
                  Врачи
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
                  Контакты
                </button>
                <div className="pt-3 border-t border-[var(--border-color)]">
                  <p className="font-semibold text-[var(--primary-color)]">+7 (495) 123-45-67</p>
                  <button className="btn-primary mt-2 w-full">
                    Вызвать врача
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}