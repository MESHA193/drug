// Переключение мобильного меню
function toggleMenu() {
	const mobileMenu = document.getElementById('mobile-menu');
	if (mobileMenu) mobileMenu.classList.toggle('hidden');
}

// Плавная прокрутка к разделам
document.addEventListener('DOMContentLoaded', function() {
	// Плавная прокрутка по якорям
	const navLinks = document.querySelectorAll('a[href^="#"]');
	navLinks.forEach(function(link) {
		link.addEventListener('click', function(e) {
			const targetId = this.getAttribute('href');
			if (targetId.length > 1) {
				e.preventDefault();
				const section = document.querySelector(targetId);
				if (section) section.scrollIntoView({ behavior: 'smooth' });
				const mobileMenu = document.getElementById('mobile-menu');
				if (mobileMenu && !mobileMenu.classList.contains('hidden')) mobileMenu.classList.add('hidden');
			}
		});
	});

	// Телефоны как ссылки
	convertPhoneTextToTelLinks();
	// Инициализация модалок и обработчиков
	ensureModalRoot();
	initInteractions();
});

// Обработка отправки формы
function submitForm(event) {
	event.preventDefault();
	const form = event.target;
	const button = form.querySelector('button[type="submit"]');
	if (button) button.classList.add('btn-loading');
	setTimeout(function() {
		if (button) button.classList.remove('btn-loading');
		showToast('Спасибо! Мы свяжемся с вами в ближайшее время.');
		form.reset();
	}, 800);
}

// ===== Интерфейсные утилиты =====
const SUPPORT_PHONE = '+74951234567';
const SUPPORT_PHONE_DISPLAY = '+7 (495) 123-45-67';

function ensureModalRoot() {
	if (!document.getElementById('toast-container')) {
		const tc = document.createElement('div');
		tc.id = 'toast-container';
		document.body.appendChild(tc);
	}
	if (!document.getElementById('app-modal')) {
		const modal = document.createElement('div');
		modal.id = 'app-modal';
		modal.className = 'fixed inset-0 z-50 hidden';
		modal.innerHTML = '' +
			'<div class="absolute inset-0 bg-black/50" data-modal-close="true"></div>' +
			'<div class="absolute inset-0 flex items-center justify-center p-4">' +
				'<div class="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">' +
					'<button class="absolute top-3 right-3 text-gray-400 hover:text-gray-600" data-modal-close="true"><div class="icon-x"></div></button>' +
					'<div id="app-modal-content"></div>' +
				'</div>' +
			'</div>';
		document.body.appendChild(modal);
	}
}

function openModal(html) {
	ensureModalRoot();
	const modal = document.getElementById('app-modal');
	const content = document.getElementById('app-modal-content');
	if (content) content.innerHTML = html;
	if (modal) modal.classList.remove('hidden');
	document.body.classList.add('modal-open');
}

function closeModal() {
	const modal = document.getElementById('app-modal');
	const content = document.getElementById('app-modal-content');
	if (content) content.innerHTML = '';
	if (modal) modal.classList.add('hidden');
	document.body.classList.remove('modal-open');
}

function showToast(message) {
	ensureModalRoot();
	const container = document.getElementById('toast-container');
	const toast = document.createElement('div');
	toast.className = 'toast';
	toast.textContent = message;
	container.appendChild(toast);
	setTimeout(function() {
		toast.style.opacity = '0';
		toast.style.transform = 'translateY(4px)';
		setTimeout(function() { toast.remove(); }, 200);
	}, 2500);
}

function addRipple(target, event) {
	if (!target.classList.contains('has-ripple')) {
		target.classList.add('has-ripple');
	}
	const rect = target.getBoundingClientRect();
	const circle = document.createElement('span');
	const diameter = Math.max(rect.width, rect.height);
	const radius = diameter / 2;
	circle.className = 'ripple';
	circle.style.width = circle.style.height = String(diameter) + 'px';
	const x = (event.clientX || (rect.left + rect.width / 2)) - rect.left - radius;
	const y = (event.clientY || (rect.top + rect.height / 2)) - rect.top - radius;
	circle.style.left = String(x) + 'px';
	circle.style.top = String(y) + 'px';
	target.appendChild(circle);
	circle.addEventListener('animationend', function() { circle.remove(); });
}

function scrollToContactAndHighlight(presetMessage) {
	const contact = document.getElementById('contact');
	if (contact) {
		contact.scrollIntoView({ behavior: 'smooth' });
		const form = contact.querySelector('form');
		if (form) {
			form.classList.add('highlight-pulse');
			if (presetMessage) {
				const textarea = form.querySelector('textarea[name="message"]');
				if (textarea) textarea.value = presetMessage;
			}
			setTimeout(function() { form.classList.remove('highlight-pulse'); }, 2000);
		}
	}
}

function convertPhoneTextToTelLinks() {
	var candidates = Array.from(document.querySelectorAll('header *, #mobile-menu *, footer *'));
	candidates.forEach(function(node) {
		if (!(node instanceof HTMLElement)) return;
		if (node.tagName.toLowerCase() === 'a') return;
		var text = (node.textContent || '').trim();
		if (text === SUPPORT_PHONE_DISPLAY) {
			var a = document.createElement('a');
			a.href = 'tel:' + SUPPORT_PHONE;
			a.className = node.className || '';
			a.textContent = SUPPORT_PHONE_DISPLAY;
			node.replaceWith(a);
		}
	});
}

function resolveAction(button) {
	const explicit = button && button.dataset && button.dataset.action;
	if (explicit) return explicit;
	const text = (button && (button.innerText || button.textContent) || '').trim();
	if (text === 'Вызвать врача') return 'call-doctor';
	if (text === 'Вызвать нарколога') return 'call-addiction-doctor';
	if (text === 'Бесплатная консультация') return 'free-consultation';
	if (text === 'Получить помощь сейчас') return 'get-help-now';
	if (text === 'Записаться на консультацию') return 'book-consultation';
	if (text === 'Записаться на прием') return 'book-appointment';
	if (text === 'Подробнее') return 'service-details';
	return '';
}

function initInteractions() {
	// Делегирование кликов по кнопкам
	document.body.addEventListener('click', function(e) {
		const closeEl = e.target.closest('[data-modal-close]');
		if (closeEl) { e.preventDefault(); closeModal(); return; }
		const button = e.target.closest('button');
		if (!button) return;
		if (button.classList.contains('btn-primary') || button.classList.contains('btn-secondary')) {
			addRipple(button, e);
		}
		const action = resolveAction(button);
		if (!action) return;
		switch (action) {
			case 'call-doctor':
			case 'call-addiction-doctor': {
				openModal(
					'<h3 class="text-xl font-bold text-gray-800 mb-3">' + (action === 'call-addiction-doctor' ? 'Вызвать нарколога' : 'Вызвать врача') + '</h3>' +
					'<p class="text-gray-600 mb-4">Оставьте заявку или позвоните по номеру</p>' +
					'<div class="flex items-center justify-between bg-blue-50 border border-blue-100 rounded-lg p-3 mb-4">' +
						'<div class="flex items-center space-x-2">' +
							'<div class="icon-phone text-blue-600"></div>' +
							'<span class="font-semibold text-blue-700">' + SUPPORT_PHONE_DISPLAY + '</span>' +
						'</div>' +
						'<a href="tel:' + SUPPORT_PHONE + '" class="btn-primary">Позвонить</a>' +
					'</div>' +
					'<form class="space-y-3" onsubmit="return false;">' +
						'<input type="text" placeholder="Ваше имя" class="w-full px-4 py-3 border border-gray-300 rounded-lg">' +
						'<input type="tel" placeholder="Телефон" class="w-full px-4 py-3 border border-gray-300 rounded-lg">' +
						'<div class="flex gap-3">' +
							'<button class="btn-primary w-full" data-modal-action="send-request">Отправить заявку</button>' +
							'<button class="btn-secondary w-full" data-modal-close="true">Отмена</button>' +
						'</div>' +
					'</form>'
				);
				break;
			}
			case 'free-consultation': {
				scrollToContactAndHighlight('Хочу получить бесплатную консультацию.');
				showToast('Открыл форму обратной связи');
				break;
			}
			case 'get-help-now': {
				openModal(
					'<h3 class="text-xl font-bold text-gray-800 mb-3">Экстренная помощь</h3>' +
					'<p class="text-gray-600 mb-4">Мы работаем 24/7. Позвоните или оставьте заявку — ответим в течение 5 минут.</p>' +
					'<a href="tel:' + SUPPORT_PHONE + '" class="btn-primary w-full mb-3">Позвонить ' + SUPPORT_PHONE_DISPLAY + '</a>' +
					'<button class="btn-secondary w-full" data-modal-action="send-request">Оставить заявку</button>'
				);
				break;
			}
			case 'service-details': {
				const card = button.closest('.card');
				const title = card ? (card.querySelector('h3')?.textContent || '').trim() : 'Услуга';
				const desc = card ? (card.querySelector('p')?.textContent || '').trim() : '';
				const features = card ? Array.from(card.querySelectorAll('ul li')).map(function(li){
					return '<li class="flex items-center space-x-2 text-sm text-gray-700"><div class="icon-check text-green-600"></div><span>' + (li.textContent || '').trim() + '</span></li>';
				}).join('') : '';
				openModal(
					'<h3 class="text-xl font-bold text-gray-800 mb-2">' + title + '</h3>' +
					'<p class="text-gray-600 mb-4">' + desc + '</p>' +
					(features ? '<ul class="space-y-2 mb-4">' + features + '</ul>' : '') +
					'<div class="grid sm:grid-cols-2 gap-3">' +
						'<button class="btn-primary w-full" data-action="book-consultation">Записаться</button>' +
						'<a href="tel:' + SUPPORT_PHONE + '" class="btn-secondary w-full text-center">Позвонить</a>' +
					'</div>'
				);
				break;
			}
			case 'book-appointment': {
				const doctorCard = button.closest('.card');
				const doctor = doctorCard ? (doctorCard.querySelector('h3')?.textContent || '').trim() : '';
				openModal(
					'<h3 class="text-xl font-bold text-gray-800 mb-3">Запись на прием' + (doctor ? ' — ' + doctor : '') + '</h3>' +
					'<form class="space-y-3" onsubmit="return false;">' +
						'<input type="text" placeholder="Ваше имя" class="w-full px-4 py-3 border border-gray-300 rounded-lg" required>' +
						'<input type="tel" placeholder="Телефон" class="w-full px-4 py-3 border border-gray-300 rounded-lg" required>' +
						'<textarea rows="3" placeholder="Кратко опишите ситуацию" class="w-full px-4 py-3 border border-gray-300 rounded-lg"></textarea>' +
						'<div class="flex gap-3">' +
							'<button class="btn-primary w-full" data-modal-action="send-request">Записаться</button>' +
							'<button class="btn-secondary w-full" data-modal-close="true">Отмена</button>' +
						'</div>' +
					'</form>'
				);
				break;
			}
			case 'book-consultation': {
				openModal(
					'<h3 class="text-xl font-bold text-gray-800 mb-3">Записаться на консультацию</h3>' +
					'<form class="space-y-3" onsubmit="return false;">' +
						'<input type="text" placeholder="Ваше имя" class="w-full px-4 py-3 border border-gray-300 rounded-lg" required>' +
						'<input type="tel" placeholder="Телефон" class="w-full px-4 py-3 border border-gray-300 rounded-lg" required>' +
						'<div class="flex gap-3">' +
							'<button class="btn-primary w-full" data-modal-action="send-request">Отправить</button>' +
							'<button class="btn-secondary w-full" data-modal-close="true">Отмена</button>' +
						'</div>' +
					'</form>'
				);
				break;
			}
			default:
				break;
		}
	});

	// Действия внутри модалки
	document.body.addEventListener('click', function(e) {
		const modalAction = e.target.closest('[data-modal-action]');
		if (!modalAction) return;
		const action = modalAction.getAttribute('data-modal-action');
		if (action === 'send-request') {
			modalAction.classList.add('btn-loading');
			setTimeout(function() {
				modalAction.classList.remove('btn-loading');
				closeModal();
				showToast('Заявка отправлена! Мы перезвоним в течение 5 минут.');
			}, 700);
		}
	});

	// Закрытие модалки по ESC
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Escape') closeModal();
	});
}
