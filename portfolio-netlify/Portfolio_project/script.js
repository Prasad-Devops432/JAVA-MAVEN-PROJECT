// Sticky nav shadow on scroll
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn?.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.section, .card, .card-mini').forEach(el => { el.classList.add('reveal'); io.observe(el); });

// Contact form (mailto fallback — works on Netlify without backend)
const form = document.getElementById('contactForm');
const sendBtn = document.getElementById('sendBtn');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent(`Portfolio inquiry from ${data.get('name')}`);
  const body = encodeURIComponent(`${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`);
  window.location.href = `mailto:klprasad6@gmail.com?subject=${subject}&body=${body}`;
  sendBtn.textContent = 'Opening email ✓';
  setTimeout(() => { sendBtn.textContent = 'Send message →'; form.reset(); }, 3000);
});
