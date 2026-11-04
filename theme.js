// Tema terang/gelap (tambahan Claude). Dimuat di <head> tanpa defer
// supaya tema sudah terpasang sebelum halaman tampil (tidak berkedip).
(function () {
  var root = document.documentElement;
  var KEY = 'reiin-theme';
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  var system = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  apply(saved === 'dark' || saved === 'light' ? saved : system);

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0b1828' : '#f4f9fc');
    var btn = document.querySelector('.theme-toggle');
    if (btn) {
      var dark = theme === 'dark';
      btn.setAttribute('aria-pressed', String(dark));
      btn.setAttribute('aria-label', dark ? 'Ganti ke tema terang' : 'Ganti ke tema gelap');
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    apply(root.getAttribute('data-theme'));
    var btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      apply(next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
    });
  });
})();
