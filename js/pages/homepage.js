/* =====================================================
   OUF / عوف — Homepage Script
   Version 3.0 | 2026
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Column click delegations
  document.getElementById('hero-col-man')?.addEventListener('click', (e) => {
    if (!e.target.closest('a')) window.location.href = 'menpage.html';
  });

  document.getElementById('hero-col-woman')?.addEventListener('click', (e) => {
    if (!e.target.closest('a')) window.location.href = 'womanpage.html';
  });

  document.getElementById('hero-col-couples')?.addEventListener('click', (e) => {
    if (!e.target.closest('a')) window.location.href = 'couplespage.html';
  });

  // Mobile menu button
  document.getElementById('mobile-menu-btn')?.addEventListener('click', OUF.openMobileMenu);

  // Search button
  document.getElementById('search-btn')?.addEventListener('click', OUF.openSearch);

  // Language button
  document.getElementById('lang-btn')?.addEventListener('click', OUF.toggleLang);
});
