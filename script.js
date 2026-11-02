/* Reiin — small progressive enhancements, no libraries required. */
(() => {
  const root = document.documentElement;
  const themeToggle = document.querySelector('.theme-toggle');
  const nav = document.querySelector('.nav-links');
  const menuButton = document.querySelector('.menu-toggle');
  const progress = document.querySelector('.scroll-progress');

  function applyTheme(mode) {
    root.dataset.theme = mode;
    if (themeToggle) {
      const isDark = mode === 'dark';
      themeToggle.setAttribute('aria-label', isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap');
      themeToggle.setAttribute('aria-pressed', String(isDark));
      themeToggle.querySelector('.theme-icon').textContent = isDark ? '☼' : '◐';
    }
  }

  try { applyTheme(localStorage.getItem('reiin-theme') === 'dark' ? 'dark' : 'light'); }
  catch (_) { applyTheme('light'); }

  themeToggle?.addEventListener('click', () => {
    const mode = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(mode);
    try { localStorage.setItem('reiin-theme', mode); } catch (_) {}
  });

  function closeMenu() {
    nav?.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Buka menu');
  }
  menuButton?.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    if (isOpen) closeMenu();
    else {
      nav?.classList.add('is-open');
      menuButton.setAttribute('aria-expanded', 'true');
      menuButton.setAttribute('aria-label', 'Tutup menu');
    }
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  document.addEventListener('click', e => {
    if (nav?.classList.contains('is-open') && !e.target.closest('.site-header')) closeMenu();
  });

  let scheduled = false;
  function paintProgress() {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = height > 0 ? Math.min(1, Math.max(0, window.scrollY / height)) : 0;
    if (progress) progress.style.width = `${ratio * 100}%`;
    scheduled = false;
  }
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(paintProgress); }
  }, { passive: true });
  window.addEventListener('resize', paintProgress);
  paintProgress();
})();
