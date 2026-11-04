document.documentElement.classList.add('js');
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Buka menu');
}
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
  navigation.classList.toggle('open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); }
});
const colors = {orange: '#a0e0ef', blue: '#60c1e5', green: '#005a9c'};
document.querySelectorAll('.swatch').forEach(button => button.addEventListener('click', () => {
  document.documentElement.style.setProperty('--art', colors[button.dataset.color]);
  document.documentElement.style.setProperty('--art-ink', button.dataset.color === 'green' ? '#ffffff' : '#1b365d');
  document.querySelectorAll('.swatch').forEach(item => {
    const selected = item === button;
    item.classList.toggle('selected', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  document.querySelector('#color-status').textContent = `Warna ilustrasi diubah menjadi ${button.getAttribute('aria-label').toLowerCase()}.`;
}));
document.addEventListener('click', event => {
  if (!event.target.closest('.header')) closeMenu();
});
if ('IntersectionObserver' in window) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (!reduced.matches) entry.target.classList.add('enter');
      observer.unobserve(entry.target);
    }
  }), {threshold: .12});
  document.querySelectorAll('h2, .education article, .competition, .interest, .color-lab').forEach(el => observer.observe(el));
}
