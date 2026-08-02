/* =====================================================
   OUF / عوف — Checkout Page Script
   Version 3.0 | 2026
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
  if (OUF.cart.length === 0) {
    window.location.href = 'cartpage.html';
    return;
  }

  // Render checkout products
  const container = document.getElementById('checkout-items');
  if (container) {
    container.innerHTML = '';
    OUF.cart.forEach(item => {
      const div = document.createElement('div');
      div.className = 'flex gap-4 items-center';
      div.innerHTML = `
        <div class="relative w-16 h-20 bg-surface-container-lowest border border-outline-variant flex-shrink-0">
          <img src="${OUF.getProductImage(item)}" class="w-full h-full object-cover" alt="${item.name}">
          <div class="absolute -top-2 -right-2 w-5 h-5 bg-secondary text-white rounded-full flex items-center justify-center font-label-caps text-[10px]">${item.qty}</div>
        </div>
        <div class="flex-grow flex flex-col justify-center">
          <h4 class="font-body-md text-primary font-medium text-sm line-clamp-1">${item.name}</h4>
          <p class="font-body-md text-secondary text-xs mt-1">${item.size}</p>
        </div>
        <div class="font-body-md text-primary font-medium text-sm whitespace-nowrap">${OUF.formatPrice(item.price * item.qty)}</div>`;
      container.appendChild(div);
    });
  }

  function updateTotals() {
    const subtotal = OUF.getSubtotal();
    const discount = OUF.getDiscount();
    const total = OUF.getTotal();

    const subtotalEl = document.getElementById('co-subtotal');
    if (subtotalEl) subtotalEl.innerHTML = OUF.formatPrice(subtotal);

    const discLine = document.getElementById('co-discount-line');
    const couponLabel = document.getElementById('co-coupon-label');
    const discountVal = document.getElementById('co-discount-val');
    
    if (discount > 0 && OUF.coupon) {
      if (discLine) discLine.classList.remove('hidden');
      if (couponLabel) couponLabel.textContent = OUF.coupon.code;
      if (discountVal) discountVal.innerHTML = '-' + OUF.formatPrice(discount);
    } else {
      if (discLine) discLine.classList.add('hidden');
    }

    const giftFeeLine = document.getElementById('co-gift-line');
    const giftFeeVal = document.getElementById('co-gift-val');
    if (giftFeeLine && giftFeeVal) {
      if (OUF.gift.enabled) {
        giftFeeLine.classList.remove('hidden');
        giftFeeVal.innerHTML = OUF.formatPrice(OUF.getGiftFee());
      } else {
        giftFeeLine.classList.add('hidden');
      }
    }

    const totalEl = document.getElementById('co-total');
    if (totalEl) totalEl.innerHTML = OUF.formatPrice(total);

    // Synchronize Checkout Coupon input status
    const cInput = document.getElementById('checkout-coupon-input');
    const cBtn = document.getElementById('checkout-coupon-btn');
    const msg = document.getElementById('checkout-coupon-msg');
    
    if (OUF.coupon && cInput && cBtn && msg) {
      cInput.value = OUF.coupon.code;
      cInput.disabled = true;
      cBtn.textContent = OUF.lang === 'ar' ? 'إزالة' : 'REMOVE';
      msg.textContent = OUF.coupon.label;
      msg.classList.remove('hidden');
      msg.style.color = '#9a805b'; // gold
    } else if (cInput && cBtn && msg) {
      cInput.value = '';
      cInput.disabled = false;
      cBtn.textContent = OUF.lang === 'ar' ? 'تطبيق' : 'APPLY';
      msg.classList.add('hidden');
    }
  }

  // Hook checkout coupon action
  document.getElementById('checkout-coupon-btn')?.addEventListener('click', () => {
    if (OUF.coupon) {
      OUF.removeCoupon();
      updateTotals();
      OUF.toast(OUF.lang === 'ar' ? 'تمت إزالة الكوبون.' : 'Privilege code removed.', 'info');
      return;
    }
    const val = document.getElementById('checkout-coupon-input').value;
    if (!val) return;
    const res = OUF.applyCoupon(val);
    const msg = document.getElementById('checkout-coupon-msg');
    if (msg) msg.classList.remove('hidden');
    if (res.success) {
      if (msg) {
        msg.textContent = res.label;
        msg.style.color = '#9a805b'; // gold
      }
      OUF.toast(OUF.lang === 'ar' ? 'تم تطبيق كوبون الخصم بنجاح.' : 'Privilege code applied successfully', 'success');
    } else {
      if (msg) {
        msg.textContent = OUF.lang === 'ar' ? 'رمز الكوبون غير صحيح.' : 'Invalid or expired privilege code.';
        msg.style.color = '#ba1a1a'; // red
      }
    }
    updateTotals();
  });

  const placeOrder = (e) => {
    e.preventDefault();

    // Verify all input fields are valid
    const form = document.querySelector('main');
    const emailInput = form?.querySelector('input[type="email"]');
    const textInputs = form?.querySelectorAll('input[required]');
    
    let isFormValid = true;

    if (emailInput && !emailInput.checkValidity()) {
      emailInput.reportValidity();
      isFormValid = false;
      return;
    }

    if (textInputs) {
      for (const input of textInputs) {
        if (!input.checkValidity()) {
          input.reportValidity();
          isFormValid = false;
          return;
        }
      }
    }

    if (!isFormValid) return;

    // Collect Customer Data from Inputs
    const customerData = {
      email: emailInput?.value || '',
      firstName: form?.querySelector('input[placeholder="First Name"]')?.value || '',
      lastName: form?.querySelector('input[placeholder="Last Name"]')?.value || '',
      address: form?.querySelector('input[placeholder="Address"]')?.value || '',
      city: form?.querySelector('input[placeholder="City"]')?.value || '',
      country: form?.querySelector('select')?.value || '',
      phone: form?.querySelector('input[placeholder="Phone"]')?.value || ''
    };

    const btn = e.currentTarget;
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span class="material-symbols-outlined animate-spin text-[18px]">sync</span> PROCESSING...';
    btn.style.pointerEvents = 'none';

    setTimeout(() => {
      // Create order using OUF shared engine
      const order = OUF.placeOrder(customerData);
      
      OUF.toast(OUF.lang === 'ar' ? 'تم تقديم الطلب بنجاح. جاري نقلك للتأكيد...' : 'Commission placed successfully. Redirecting to confirmation...', 'success');
      
      setTimeout(() => {
        window.location.href = 'order-confirmation.html?id=' + order.id;
      }, 1500);
    }, 1500);
  };

  document.getElementById('place-order-btn-desktop')?.addEventListener('click', placeOrder);
  document.getElementById('place-order-btn-mobile')?.addEventListener('click', placeOrder);

  updateTotals();
});
