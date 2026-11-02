const callModal = document.getElementById('callModal');
const openModalBtn = document.getElementById('openModalBtn');
const modalClose = document.getElementById('modalClose');
const modalBackdrop = document.getElementById('modalBackdrop');
const callForm = document.getElementById('callForm');
const formSuccess = document.getElementById('formSuccess');

function openModal() {
  if (!callModal) return;
  callModal.setAttribute('aria-hidden', 'false');
  const phoneInput = document.getElementById('phone');
  setTimeout(() => phoneInput && phoneInput.focus(), 50);
}

function closeModal() {
  if (!callModal) return;
  callModal.setAttribute('aria-hidden', 'true');
}

// Open on page load after a tiny delay (for smoothness)
window.addEventListener('load', () => {
  setTimeout(openModal, 400);
});

// Handlers
openModalBtn && openModalBtn.addEventListener('click', openModal);
modalClose && modalClose.addEventListener('click', closeModal);
modalBackdrop && modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Basic form handling
callForm && callForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const phone = /** @type {HTMLInputElement} */(document.getElementById('phone'))?.value?.trim();
  const consent = /** @type {HTMLInputElement} */(document.getElementById('consent'))?.checked;

  if (!phone || !consent) {
    // Soft UI feedback
    callForm.style.animation = 'shake .25s linear';
    setTimeout(() => (callForm.style.animation = ''), 280);
    return;
  }

  // Simulate sending; here you can integrate real endpoint
  callForm.querySelectorAll('input, button').forEach((el) => (el.disabled = true));
  setTimeout(() => {
    formSuccess.hidden = false;
  }, 600);
});

// Small keyframe for shake
const style = document.createElement('style');
style.textContent = `@keyframes shake { 0%, 100% { transform: translateX(0);} 25% { transform: translateX(-6px);} 75% { transform: translateX(6px);} }`;
document.head.appendChild(style);
