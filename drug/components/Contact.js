function Contact() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      phone: '',
      message: ''
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
      setFormData({ name: '', phone: '', message: '' });
    };

    return (
      <section id="contact" className="section-padding bg-[var(--secondary-color)]" data-name="contact" data-file="components/Contact.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Контакты
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Свяжитесь с нами любым удобным способом. Мы работаем круглосуточно
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                Свяжитесь с нами
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                    <div className="icon-phone text-lg text-white"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-primary)]">Телефон</p>
                    <p className="text-[var(--primary-color)] font-medium">+7 (495) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                    <div className="icon-map-pin text-lg text-white"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-primary)]">Адрес</p>
                    <p className="text-[var(--text-secondary)]">г. Москва, ул. Медицинская, д. 15</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                    <div className="icon-clock text-lg text-white"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-primary)]">Режим работы</p>
                    <p className="text-[var(--text-secondary)]">Круглосуточно, без выходных</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="icon-alert-circle text-lg text-red-600"></div>
                  <div>
                    <p className="font-semibold text-red-700">Экстренная помощь</p>
                    <p className="text-sm text-red-600">При острых состояниях звоните немедленно</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                Обратная связь
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Сообщение
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                    placeholder="Опишите вашу ситуацию"
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary">
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}