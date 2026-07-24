document.addEventListener('DOMContentLoaded', () => {
  // Require auth
  if (!OUF.auth.isLoggedIn()) {
    window.location.href = 'login.html?returnTo=profile.html';
    return;
  }

  const user = OUF.auth.getUser();
  const summary = document.getElementById('profile-summary');
  const orders = JSON.parse(localStorage.getItem('ouf_orders') || '[]');
  
  if (summary && user) {
    const totalSpent = orders.reduce((sum, order) => sum + (order.total || 0), 0);
    
    summary.innerHTML = `
      <div class="flex items-center gap-4 mb-6">
        <div style="width:56px;height:56px;border-radius:50%;background:#000;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-family:Inter,sans-serif;font-size:22px;flex-shrink:0;">${(user.name||'U').charAt(0).toUpperCase()}</div>
        <div class="min-w-0">
          <div class="font-body-lg font-bold truncate">${user.name}</div>
          <div class="text-secondary text-xs truncate">${user.email}</div>
        </div>
      </div>
      <div class="space-y-4 py-4 border-t border-b border-outline-variant/30">
        <div class="flex justify-between text-secondary text-xs">
          <span class="lang-en">Member Since</span>
          <span class="lang-ar" style="display:none;">تاريخ الانضمام</span>
          <span class="font-medium text-primary">${user.joined || '—'}</span>
        </div>
        <div class="flex justify-between text-secondary text-xs">
          <span class="lang-en">Login Method</span>
          <span class="lang-ar" style="display:none;">وسيلة الدخول</span>
          <span class="font-medium text-primary">${user.provider || 'Google'}</span>
        </div>
        <div class="flex justify-between text-secondary text-xs">
          <span class="lang-en">Total Commissions</span>
          <span class="lang-ar" style="display:none;">إجمالي المعاملات</span>
          <span class="font-medium text-primary">${orders.length}</span>
        </div>
        <div class="flex justify-between font-body-md text-sm font-bold pt-2 border-t border-outline-variant/20">
          <span class="lang-en">Total Spent</span>
          <span class="lang-ar" style="display:none;">صرف كام (المجموع)</span>
          <span style="color:#9a805b;">${OUF.formatPrice(totalSpent)}</span>
        </div>
      </div>
    `;

    // Update stats
    document.getElementById('stat-orders').textContent = orders.length;
    document.getElementById('stat-spent').textContent = OUF.formatPrice(totalSpent);
    document.getElementById('stat-joined').textContent = user.joined || 'SOVEREIGN PATRON';
  }

  // Render orders history
  const list = document.getElementById('orders-list');
  const noOrders = document.getElementById('no-orders');

  if (!orders || orders.length === 0) {
    if (noOrders) noOrders.classList.remove('hidden');
    return;
  }

  // Render orders (newest first)
  orders.forEach(order => {
    const container = document.createElement('div');
    container.className = 'p-5 md:p-6 border border-outline-variant/30 bg-surface-container-lowest hover:border-primary/50 transition-colors shadow-sm';
    const date = order.timestamp ? new Date(order.timestamp) : (order.date ? new Date(order.date) : new Date());
    const formattedDate = date.toLocaleDateString(OUF.lang === 'ar' ? 'ar-EG' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    
    let itemsHtml = '';
    if (order.items && order.items.length > 0) {
      itemsHtml = order.items.map(it => `
        <div class="flex items-center justify-between text-xs py-1 text-secondary border-b border-outline-variant/10 last:border-none">
          <span class="font-medium text-primary">${it.name} <span class="text-secondary font-normal">(${it.size || 'M'})</span> x ${it.qty}</span>
          <span>${OUF.formatPrice(it.price * it.qty)}</span>
        </div>
      `).join('');
    }

    container.innerHTML = `
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-outline-variant/20 pb-4 mb-4">
        <div>
          <div class="flex items-center gap-3">
            <span class="font-body-md font-bold text-primary">ORDER #${order.id}</span>
            <span class="bg-surface-container text-xs px-2 py-0.5 border border-outline-variant uppercase text-secondary">
              ${OUF.lang === 'ar' ? 'تم الشراء والتسليم' : 'Completed / Paid'}
            </span>
          </div>
          <div class="text-secondary text-xs mt-1">${formattedDate}</div>
        </div>
        <div class="md:text-right">
          <div class="font-headline-md text-[20px] font-bold text-primary" style="color:#9a805b;">${OUF.formatPrice(order.total)}</div>
          <div class="text-secondary text-xs">${order.items?.length || 0} ${OUF.lang === 'ar' ? 'منتج' : 'items'}</div>
        </div>
      </div>
      <div class="mb-4 bg-surface p-3 border border-outline-variant/20">
        ${itemsHtml}
      </div>
      <div class="flex gap-3 flex-wrap justify-end">
        <a href="order-confirmation.html?id=${order.id}" class="px-4 py-2 border border-outline-variant text-secondary font-label-caps text-[10px] tracking-widest hover:text-primary hover:border-primary transition-all uppercase">
          <span class="lang-en">View Manifest</span><span class="lang-ar" style="display:none;">عرض التفاصيل</span>
        </a>
        <button class="px-4 py-2 bg-primary text-on-primary font-label-caps text-[10px] tracking-widest hover:bg-neutral-800 transition-all uppercase" data-reorder-id="${order.id}">
          <span class="lang-en">Reorder Selection</span><span class="lang-ar" style="display:none;">إعادة الطلب</span>
        </button>
      </div>
    `;
    list.appendChild(container);
  });

  // Reorder handler
  list.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-reorder-id]');
    if (!btn) return;
    const id = btn.dataset.reorderId;
    const order = (orders || []).find(o => o.id === id);
    if (!order || !order.items) return;
    
    order.items.forEach(it => {
      OUF.addItem({ 
        id: it.id, 
        name: it.name, 
        price: it.price, 
        size: it.size, 
        qty: it.qty 
      });
    });
    OUF.toast(OUF.lang === 'ar' ? 'تمت إضافة عناصر الطلب إلى السلة.' : 'Order items added to bag', 'success');
    setTimeout(() => { window.location.href = 'cartpage.html'; }, 700);
  });

  // Logout
  document.getElementById('btn-logout')?.addEventListener('click', () => {
    OUF.auth.logout();
  });

  // Switch account
  document.getElementById('btn-switch-account')?.addEventListener('click', () => {
    OUF.auth.logout();
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 800);
  });

  // Apply language state
  OUF.applyLang();
});