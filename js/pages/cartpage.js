document.addEventListener('DOMContentLoaded', () => {
  let isGift = OUF.gift.enabled;
  const giftToggle = document.getElementById('gift-toggle');
  const giftMessageArea = document.getElementById('gift-message-area');
  const giftTextarea = giftMessageArea?.querySelector('textarea');

  if (giftToggle) {
    giftToggle.checked = isGift;
    if (isGift && giftMessageArea) {
      giftMessageArea.classList.remove('hidden', 'opacity-0');
      giftMessageArea.classList.add('opacity-100');
    }
    if (giftTextarea && OUF.gift.message) giftTextarea.value = OUF.gift.message;

    giftToggle.addEventListener('change', function() {
      isGift = this.checked;
      OUF.gift.enabled = isGift;
      OUF.saveGift();
      if (this.checked) {
        giftMessageArea.classList.remove('hidden');
        void giftMessageArea.offsetWidth;
        giftMessageArea.classList.add('opacity-100');
      } else {
        giftMessageArea.classList.remove('opacity-100');
        setTimeout(() => { if (!this.checked) giftMessageArea.classList.add('hidden'); }, 500);
      }
      renderCart();
    });
  }

  giftTextarea?.addEventListener('input', (e) => {
    OUF.gift.message = e.target.value;
    OUF.saveGift();
  });

  window.renderCart = function renderCart() {
    const container = document.getElementById('cart-items-container');
    const emptyState = document.getElementById('cart-empty-state');
    const giftingMod = document.getElementById('gifting-module');
    const checkoutBtn = document.getElementById('checkout-btn');
    if (!container) return;

    container.innerHTML = '';

    if (OUF.cart.length === 0) {
      emptyState?.classList.remove('hidden');
      giftingMod?.classList.add('hidden');
      if (checkoutBtn) {
        checkoutBtn.style.pointerEvents = 'none';
        checkoutBtn.style.opacity = '0.5';
      }
    } else {
      emptyState?.classList.add('hidden');
      giftingMod?.classList.remove('hidden');
      if (checkoutBtn) {
        checkoutBtn.style.pointerEvents = 'auto';
        checkoutBtn.style.opacity = '1';
      }

      OUF.cart.forEach(item => {
        const article = document.createElement('article');
        article.className = 'flex gap-6 md:gap-8 pb-8 border-b border-outline-variant/30 group';
        const imgUrl = OUF.getProductImage(item);
        const safeId = item.id.replace(/'/g, "\\'");
        const safeSize = item.size.replace(/'/g, "\\'");

        article.innerHTML = `
          <div class="w-32 md:w-40 h-40 md:h-56 flex-shrink-0 bg-surface-container-low overflow-hidden relative">
            <img src="${imgUrl}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="${item.name}">
          </div>
          <div class="flex-grow flex flex-col justify-between py-2">
            <div class="flex justify-between items-start mb-2">
              <div>
                <h3 class="font-headline-md text-[20px] mb-1 text-primary">${item.name}</h3>
                <p class="font-body-md text-sm text-secondary">Size: ${item.size}</p>
              </div>
              <span class="font-body-lg text-primary">${OUF.formatPrice(item.price)}</span>
            </div>
            <div class="flex justify-between items-end">
              <div class="flex items-center border border-outline-variant px-2 py-1">
                <button type="button" class="qty-minus w-8 h-8 flex items-center justify-center hover:text-tertiary-container transition-colors" data-id="${safeId}" data-size="${safeSize}">-</button>
                <span class="w-8 text-center font-body-md">${item.qty}</span>
                <button type="button" class="qty-plus w-8 h-8 flex items-center justify-center hover:text-tertiary-container transition-colors" data-id="${safeId}" data-size="${safeSize}">+</button>
              </div>
              <button type="button" class="remove-item font-label-caps text-[10px] tracking-widest text-secondary hover:text-primary transition-colors underline underline-offset-4 uppercase" data-id="${safeId}" data-size="${safeSize}">Remove</button>
            </div>
          </div>`;
        container.appendChild(article);
      });

      container.querySelectorAll('.qty-minus').forEach(btn => {
        btn.addEventListener('click', () => {
          OUF.updateQty(btn.dataset.id, btn.dataset.size, -1);
          renderCart();
        });
      });
      container.querySelectorAll('.qty-plus').forEach(btn => {
        btn.addEventListener('click', () => {
          OUF.updateQty(btn.dataset.id, btn.dataset.size, 1);
          renderCart();
        });
      });
      container.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', () => {
          OUF.removeItem(btn.dataset.id, btn.dataset.size);
          renderCart();
        });
      });
    }

    updateSummary();
  };

  function updateSummary() {
    const subtotal = OUF.getSubtotal();
    const discount = OUF.getDiscount();
    const total = OUF.getTotal();

    const subtotalEl = document.getElementById('summary-subtotal');
    if (subtotalEl) subtotalEl.innerHTML = OUF.formatPrice(subtotal);

    const discLine = document.getElementById('summary-discount-line');
    if (discount > 0 && OUF.coupon) {
      discLine.classList.remove('hidden');
      document.getElementById('summary-coupon-label').textContent = OUF.coupon.code;
      const discValEl = document.getElementById('summary-discount-val');
      if (discValEl) discValEl.innerHTML = '-' + OUF.formatPrice(discount);
    } else {
      discLine?.classList.add('hidden');
    }

    const giftLine = document.getElementById('summary-gift-line');
    if (OUF.gift.enabled && OUF.cart.length > 0) giftLine?.classList.remove('hidden');
    else giftLine?.classList.add('hidden');

    const totalEl = document.getElementById('summary-total');
    if (totalEl) totalEl.innerHTML = OUF.formatPrice(total);

    const cInput = document.getElementById('coupon-input');
    const cBtn = document.getElementById('coupon-apply-btn');
    const msg = document.getElementById('coupon-msg');

    if (OUF.coupon && cInput && cBtn) {
      cInput.value = OUF.coupon.code;
      cInput.disabled = true;
      cBtn.textContent = 'REMOVE';
      cBtn.classList.add('removed');
      msg.textContent = OUF.coupon.label;
      msg.classList.remove('hidden');
      msg.style.color = '#9a805b';
    } else if (cInput && cBtn) {
      cInput.value = '';
      cInput.disabled = false;
      cBtn.textContent = 'APPLY';
      cBtn.classList.remove('removed');
      msg?.classList.add('hidden');
    }
  }

  document.getElementById('coupon-apply-btn')?.addEventListener('click', () => {
    if (OUF.coupon) {
      OUF.removeCoupon();
      OUF.toast(OUF.lang === 'ar' ? 'تمت إزالة الكوبون.' : 'Coupon removed.', 'info');
      renderCart();
      return;
    }
    const val = document.getElementById('coupon-input').value;
    if (!val) return;
    const res = OUF.applyCoupon(val);
    const msg = document.getElementById('coupon-msg');
    msg.classList.remove('hidden');
    if (res.success) {
      msg.textContent = res.label;
      msg.style.color = '#9a805b';
      OUF.toast(OUF.lang === 'ar' ? 'تم تطبيق كوبون الخصم بنجاح.' : 'Coupon applied successfully', 'success');
    } else {
      msg.textContent = OUF.lang === 'ar' ? 'رمز الكوبون غير صحيح.' : 'Invalid or expired coupon code.';
      msg.style.color = '#ba1a1a';
    }
    renderCart();
  });

  document.getElementById('checkout-btn')?.addEventListener('click', (e) => {
    if (OUF.cart.length === 0) e.preventDefault();
  });

  renderCart();
});
