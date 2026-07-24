/* =====================================================
   OUF / عوف — Wishlist Page Script (The Vault)
   Version 3.0 | 2026
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu and search actions
  document.getElementById('mobile-menu-btn')?.addEventListener('click', OUF.openMobileMenu);
  document.getElementById('search-btn')?.addEventListener('click', OUF.openSearch);

  function renderWishlist() {
    const grid = document.getElementById('wishlist-grid');
    const emptyState = document.getElementById('wishlist-empty');
    if (!grid || !emptyState) return;

    const items = OUF.wishlist || [];

    if (items.length === 0) {
      grid.classList.add('hidden');
      emptyState.classList.remove('hidden');
      return;
    }

    grid.classList.remove('hidden');
    emptyState.classList.add('hidden');

    grid.innerHTML = items.map(p => {
      const defaultSize = (p.sizes && p.sizes[0]) ? p.sizes[0] : 'M';
      const defaultPrice = p.price || 0;
      return `
        <div class="product-card group cursor-pointer border border-outline-variant/20 bg-surface">
          <div class="relative w-full aspect-[3/4] bg-surface-container-low overflow-hidden">
            <img class="w-full h-full object-cover product-img-main" src="${OUF.getProductImage(p)}" alt="${p.name}">
            <img class="w-full h-full object-cover product-img-hover absolute inset-0 opacity-0" src="${p.hoverImage || OUF.getProductImage(p)}" alt="${p.name} detail">
            
            <div class="product-action-bar">
              <button class="flex-1 bg-black text-white py-3 font-label-caps text-[10px] tracking-widest uppercase quick-add-btn" 
                data-id="${p.id}" 
                data-name="${p.name}" 
                data-price="${defaultPrice}" 
                data-size="${defaultSize}">
                <span class="lang-en">COMMISSION NOW</span><span class="lang-ar" style="display:none;">اطلب الآن</span>
              </button>
              <button class="wishlist-btn active" data-wishlist-toggle="${p.id}" title="Remove from Vault">
                <span class="material-symbols-outlined filled" style="color:#e63946;">favorite</span>
              </button>
              <button class="wishlist-btn" data-quickview="${p.id}" title="Quick View">
                <span class="material-symbols-outlined">visibility</span>
              </button>
            </div>
          </div>
          <div class="p-4 flex flex-col justify-between">
            <div>
              <h3 class="font-body-lg text-primary mb-1" style="font-family:'Bodoni Moda',serif;">${p.name}</h3>
              <p class="font-body-md text-xs text-secondary capitalize">
                <span class="lang-en">${p.category || 'bespoke'} Collection</span>
                <span class="lang-ar" style="display:none;">مجموعة ${p.category === 'men' ? 'الرجال' : (p.category === 'women' ? 'النساء' : 'الأزواج')}</span>
              </p>
            </div>
            <span class="font-body-md text-sm text-primary font-medium mt-3">${OUF.formatPrice(defaultPrice)}</span>
          </div>
        </div>`;
    }).join('');

    // Apply language formatting to newly rendered items
    OUF.applyLang();
  }

  // Handle wishlist deletion from the page itself
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-wishlist-toggle]');
    if (btn && window.location.pathname.includes('wishlist.html')) {
      // Small timeout to allow target delegation to run first in ouf-shared.js
      setTimeout(() => {
        renderWishlist();
      }, 50);
    }
  });

  renderWishlist();
});
