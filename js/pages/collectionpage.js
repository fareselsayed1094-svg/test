/* =====================================================
   OUF / عوف — Collection Page Script
   Version 3.0 | 2026
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  let activeCat = urlParams.get('cat') || 'all';
  let searchQuery = urlParams.get('q') || '';
  let activeSort = 'featured';

  // Set initial radio
  const radio = document.querySelector(`input[name="filter-cat"][value="${activeCat}"]`);
  if (radio) radio.checked = true;

  function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    let items = [...OUF.PRODUCTS];

    // Filter Category
    if (activeCat !== 'all') {
      items = items.filter(p => p.category === activeCat);
    }

    // Filter Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      items = items.filter(p => p.name.toLowerCase().includes(q) || p.keywords.includes(q));
    }

    // Sort
    if (activeSort === 'price-asc') {
      items.sort((a, b) => a.price - b.price);
    } else if (activeSort === 'price-desc') {
      items.sort((a, b) => b.price - a.price);
    } else if (activeSort === 'name-asc') {
      items.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Update Counter
    const countTxt = `${items.length} ${items.length === 1 ? 'Bespoke Item' : 'Bespoke Creations'}`;
    const dCount = document.getElementById('desktop-item-count');
    const mCount = document.getElementById('mobile-item-count');
    if (dCount) dCount.textContent = countTxt;
    if (mCount) mCount.textContent = countTxt;

    if (items.length === 0) {
      grid.innerHTML = `
        <div style="grid-column:1/-1;padding:80px 20px;text-align:center;">
          <p style="font-family:'Bodoni Moda',serif;font-size:24px;margin-bottom:12px;">No items match your selection.</p>
          <p style="font-family:'Inter',sans-serif;font-size:13px;color:#747878;margin-bottom:24px;">Try selecting another category or reset filters.</p>
          <button id="clear-search-btn" style="background:#000;color:#fff;border:none;padding:12px 24px;font-family:Inter;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;cursor:pointer;">View All Collections</button>
        </div>`;
      document.getElementById('clear-search-btn')?.addEventListener('click', () => {
        activeCat = 'all'; searchQuery = '';
        const allRadio = document.querySelector('input[name="filter-cat"][value="all"]');
        if (allRadio) allRadio.checked = true;
        renderProducts();
      });
      return;
    }

    grid.innerHTML = items.map(p => {
      const isSaved = OUF.isInWishlist(p.id);
      const defaultSize = (p.sizes && p.sizes[0]) ? p.sizes[0] : 'M';
      return `
        <div class="product-card group cursor-pointer border border-outline-variant/20 bg-surface">
          <div class="relative w-full aspect-[3/4] bg-surface-container-low overflow-hidden">
            <img class="w-full h-full object-cover product-img-main" src="${p.image}" alt="${p.name}">
            <img class="w-full h-full object-cover product-img-hover absolute inset-0 opacity-0" src="${p.hoverImage || p.image}" alt="${p.name} detail">
            
            <div class="product-action-bar">
              <button class="flex-1 bg-black text-white py-3 font-label-caps text-[10px] tracking-widest uppercase quick-add-btn" data-id="${p.id}" data-name="${p.name}" data-price="${p.price}" data-size="${defaultSize}">QUICK ADD</button>
              <button class="wishlist-btn ${isSaved?'active':''}" data-wishlist-toggle="${p.id}" title="Save to Wishlist"><span class="material-symbols-outlined text-[18px] ${isSaved?'filled':''}">favorite</span></button>
              <button class="wishlist-btn" data-quickview="${p.id}" title="Quick View"><span class="material-symbols-outlined text-[18px]">visibility</span></button>
            </div>
          </div>
          <div class="p-4 flex flex-col justify-between">
            <div>
              <h3 class="font-body-lg text-primary mb-1" style="font-family:'Bodoni Moda',serif;">${p.name}</h3>
              <p class="font-body-md text-xs text-secondary capitalize">${p.category} Collection</p>
            </div>
            <span class="font-body-md text-sm text-primary font-medium mt-3">${OUF.formatPrice(p.price)}</span>
          </div>
        </div>`;
    }).join('');
  }

  // Filter Listeners
  document.querySelectorAll('input[name="filter-cat"]').forEach(r => {
    r.addEventListener('change', (e) => {
      activeCat = e.target.value;
      renderProducts();
    });
  });

  document.getElementById('sort-select')?.addEventListener('change', (e) => {
    activeSort = e.target.value;
    renderProducts();
  });

  document.getElementById('reset-filters-btn')?.addEventListener('click', () => {
    activeCat = 'all'; activeSort = 'featured'; searchQuery = '';
    const rAll = document.querySelector('input[name="filter-cat"][value="all"]');
    if (rAll) rAll.checked = true;
    const sortSel = document.getElementById('sort-select');
    if (sortSel) sortSel.value = 'featured';
    renderProducts();
  });

  // Mobile Filter Drawer Toggle
  document.getElementById('mobile-filter-btn')?.addEventListener('click', () => {
    const filters = document.getElementById('collection-filters');
    if (filters) {
      if (filters.classList.contains('hidden')) {
        filters.classList.remove('hidden');
      } else {
        filters.classList.add('hidden');
      }
    }
  });

  // Mobile Menu & Search
  document.getElementById('mobile-menu-btn')?.addEventListener('click', OUF.openMobileMenu);
  document.getElementById('search-btn')?.addEventListener('click', OUF.openSearch);

  renderProducts();
});
