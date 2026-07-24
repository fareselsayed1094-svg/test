/* =====================================================
   OUF / عوف — OUF Man Page Script
   Version 3.0 | 2026
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Navigation & Triggers
  document.getElementById('mobile-menu-btn')?.addEventListener('click', OUF.openMobileMenu);
  document.getElementById('search-btn')?.addEventListener('click', OUF.openSearch);
  document.getElementById('search-btn-mobile')?.addEventListener('click', OUF.openSearch);

  // Carousel Scroll
  const carousel = document.getElementById('products-carousel');
  document.getElementById('scroll-left')?.addEventListener('click', () => {
    carousel?.scrollBy({ left: -340, behavior: 'smooth' });
  });

  document.getElementById('scroll-right')?.addEventListener('click', () => {
    carousel?.scrollBy({ left: 340, behavior: 'smooth' });
  });

  // Hero Card Clicks
  document.getElementById('hero-formal')?.addEventListener('click', (e) => {
    if (!e.target.closest('a')) window.location.href = 'collectionpage.html?cat=men';
  });

  document.getElementById('hero-lounge')?.addEventListener('click', (e) => {
    if (!e.target.closest('a')) window.location.href = 'collectionpage.html?cat=men';
  });
});
