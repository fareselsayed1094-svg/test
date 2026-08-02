/* =====================================================
   OUF / عوف — Core Shared JavaScript Engine
   Version 4.0 | July 2026
   ===================================================== */

const OUF = {
  cart: JSON.parse(localStorage.getItem('ouf_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('ouf_wishlist') || '[]'),
  coupon: JSON.parse(sessionStorage.getItem('ouf_coupon') || 'null'),
  gift: JSON.parse(sessionStorage.getItem('ouf_gift') || '{"enabled":false,"message":""}'),
  lang: localStorage.getItem('ouf_lang') || 'en',

  COUPONS: {
    OUF10:     { discount: 0.10, label: '10% Off — Welcome Privilege' },
    OUF20:     { discount: 0.20, label: '20% Off — Patron Special' },
    ELITE25:   { discount: 0.25, label: '25% Off — Elite Circle' },
    RAMADAN:   { discount: 0.15, label: '15% Off — Ramadan Collection' },
    WELCOME15: { discount: 0.15, label: '15% Off — Private Circle Invitation' },
    FREESHIP:  { discount: 0.10, label: '10% Off — Complimentary Express Shipping' },
    SUMMER20:  { discount: 0.20, label: '20% Off — Summer 2026 Edition' },
    VIP30:     { discount: 0.30, label: '30% Off — VIP Exclusive' }
  },

  PRODUCTS: [
    {
      id: 'man-suit-001',
      name: 'The Sovereign Suit',
      price: 22400,
      category: 'men',
      sizes: ['38R', '40R', '42R', '44R'],
      url: 'productspage.html',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD96VklU8neqoZWQxYomcHUpBoZ9jOV_vzv_DGDkvi4ZPXKiypix-gOZ78agpkiKB5VtKKW-3XDjEY8OPbC-UDLHMnPVxahOC5zti20ZGGB1O-RDnVOX6bDuKOKVjA6rN6k-6CNE0rJJNu-bjCcH_Dn1YxpXKvQIuNO-JKmed3cbtPfojNniAsHQoOUFApEtPaierIb8ok6ydrm0aA2ooGwtea88ENOK8YdNRCahcM2aFwGIrQlLuLS',
      hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtckUKyH7_zDhVW0hTwWVN66XGZ-VZRI83BiDcqOnLHLAK4fb1aSJSkRPo7FOoUaPMnjzdV3cvzqT8JwXhNRbrie0-_WhP7CTQ9PZtWyz0SsCk3kMGKh9RCEAi5SuwWkXO3Evjsfq3xhZ0fRWVuHim3bewSaZhGFN9WIO0T2rNGi4ERi-QtXnPFjLcitfU0JLYz26XRT5BTgH8ajm5hIgyDZwMhVOyWzd5lr8F1UpfabvomEM22o4z',
      description: 'Hand-tailored from Super 150s Italian wool. Features quiet horn buttons and hand-finished silk canvas interior.',
      keywords: 'suit navy formal tailored men sovereign bespoke wool'
    },
    {
      id: 'man-lounge-002',
      name: 'Silk Lounge Set',
      price: 7900,
      category: 'men',
      sizes: ['S', 'M', 'L', 'XL'],
      url: 'collectionpage.html?cat=men',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUEIdojBJ5-YM_zNsLs31BUhwaR-njU8gbOiP1c81ZZ-J2Fo7dnqMyU8Ut0lRUIpMC0UKbsxLIq3SkK5WXLcd82sDZlZItkzwiPHBZivvzlnW1pUrZ9yh-5YnlBdwKWccyOmZZXCXobvPXduyQYsD7Wyjm90ndwg8RpIu8R56eM80X5G_Eq_u9nMxLBd-Ct3dFXe0zThnGunuLB9F8djjrgdUTI1bLd116N0984ryPy0-CG_ohrunL',
      hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCz2gU7sA4tMqgWzhFqHPVjEHGSC9wKUzoyIBnig6Zmr_1hupbDRZBFOUtITcIOrQ3YgYuAqL5al2dLO1FWnmhx-nAKCLl8y5A-pPzb9NulJGmDOgNClE9dFaPX_Fnr43IYZFdDgQ4BNUMr-qGf9kECMJneDBQLrWnyn_NfMZ81ZquCfGJuALS7RVRn_AzuQkEhLPEmN0VCiqiiTinx_6DcVvqC_cKo46OKtEoXOSexlOa7HSLBtv4j',
      description: '100% Mulberry silk home loungewear. Designed for weightless comfort and timeless elegance.',
      keywords: 'lounge silk emerald pyjama home luxury men'
    },
    {
      id: 'man-shirt-003',
      name: 'Signature Poplin Shirt',
      price: 2980,
      category: 'men',
      sizes: ['39', '40', '41', '42'],
      url: 'collectionpage.html?cat=men',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0FW89lP95ZTvqNFtgks7eo88cC_I3HrOPGz5gsi4uPBe_G_3DMi7F8sCpR5LBHvNxt6eKKAAaz2oklnoX40M8kz9T7aRR4bGTgtl_ZXTkSLezuNI9GWjVKvC_MbBUrlCOU71z7MBNLZUu9XWeToT_M13Ld_s-VjiGfoQsYnnFw02OxMPrwjkNLwK4bK1hN2Dd4utB6khaatrNeysAVkJwVXrsz22aMV_OI5FraoBdgVILIwjYZ81m',
      hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0FW89lP95ZTvqNFtgks7eo88cC_I3HrOPGz5gsi4uPBe_G_3DMi7F8sCpR5LBHvNxt6eKKAAaz2oklnoX40M8kz9T7aRR4bGTgtl_ZXTkSLezuNI9GWjVKvC_MbBUrlCOU71z7MBNLZUu9XWeToT_M13Ld_s-VjiGfoQsYnnFw02OxMPrwjkNLwK4bK1hN2Dd4utB6khaatrNeysAVkJwVXrsz22aMV_OI5FraoBdgVILIwjYZ81m',
      description: 'Crisp Egyptian cotton poplin with removable mother-of-pearl collar stays.',
      keywords: 'shirt white poplin ceremony formal shirt men egyptian cotton'
    },
    {
      id: 'skirt-001',
      name: 'The Silk Maxi Skirt',
      price: 4500,
      category: 'women',
      sizes: ['XS', 'S', 'M', 'L'],
      url: 'collectionpage.html?cat=women',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNy6X1K9BUAHKaP7kiT5KDDGDi6yi-yoUiCnHn02hvYhmtzUyT0uoZNJuNIn64RW9jpAhHzK1BGoqrlIvbCSlo0RR9qYLKmAX78sGpU0wMCXRoHnRIzk-CWFq1AjCnhboT7dtEUOI8sewKy-yd6eDL7rUrtu-ZL0bCHZJUVF-ZR4Wdkm2MPBre73rmchOpfYu0NLt73CKsZ0bEqY_UVsPU3atgrVVnYPOzmgndTUDQmhYw0-2ng3Xe',
      hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaO2k7poPjtNtGOYZz1GHkmiIWocodm7OzfYInSEiKIWCBRnkIMeMosjpllRna45iUj4lzLDcgmwYLuBxNNLrXZDKvwqanpUNrGYNtMLy_EjZtdqp6j_juydojs17aceh2i-4ycMCYrr2zW0p9k_2KYNW6V0UmoKu6O0NBAqeP2TqwLY2n6vEKQla_XATnjr6uf9HOvNLlqQPWAmCqGjUMDd2JoegwwI7hV-qo2q3hpbJ0WDxO-AXr',
      description: 'Architectural floor-length skirt crafted from heavyweight silk charmeuse.',
      keywords: 'skirt silk maxi black women evening dress fashion'
    },
    {
      id: 'couples-sig-set',
      name: 'The Signature Matching Set',
      price: 3450,
      category: 'couples',
      sizes: ['HIM:40R / HER:36', 'HIM:38R / HER:34', 'HIM:42R / HER:38'],
      url: 'productspage.html',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDi3teXCPOlTPLvAs8aAC4Kpzz2223qsE9zLieztOpJx_YTodzlwPYiFT92ywos20JGfMbvp3zmC8lF9_LbrJ1siBe66L4phcIRI4cY4218AExKF0dsWpgG_mZE-GiRETZXiLkPfX4qQ2OalqcTL59spy0NzKp5oW3WClC-suttGgnQcVpezfp8m0LV46S2NyWWhwEtuFEsdNMAB2018IewtLXdSsWvpLIC2uRxVCK5Fkr12VT5_R56',
      hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApNnehTUj8lqZLmtHeiqdHQTPc6TF9PVn3ZYLgf_80WVTGaVHL5ZpN6mSVeY53LLcLaIsBET3MvxXdqU1QlAMpDRo9dfhMHFqfxAhdQTFp_EteHl2EoJzuirPs4RiS9if4ijii9t8iGRK6yaQ_4mN05RDY6Gx4BGlX0LR_gLP4YyjwtdIW2O2O0t-UJc7fClnFacPPn9thYlOhYZpknW2unC0caYuFEcdQ_NhTbRkz1ZE-sySqYuJp',
      description: 'Synchronized couple set in refined wool blend, featuring bespoke initials monogramming.',
      keywords: 'couples set matching twin bespoke monogram his hers'
    },
    {
      id: 'couples-bundle-001',
      name: 'The Midnight Silk Bundle',
      price: 4500,
      category: 'couples',
      sizes: ['HIM:L / HER:M', 'HIM:M / HER:S', 'HIM:XL / HER:L'],
      url: 'couplespage.html',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDufbKEuwuNoUP8uxsGg8N33E22F8AADu6YA3nDSEydDGcLElOy4zM00j0pJcZFtb_JS4zBAGFMQJDkc1663t0hvdR9rqiMTdExprc5bln4Fc_n_nlx9Eh5W49xBkCocrF337sdu1mVKxiNWdYQL9ghkJOVrj8mYQEqZCY8NVtPXkhhTM8pwz7KZGNmI5JEUami6BZJzselxEYijmeep4FJwyH6v32yLCz3zZlumlvGOxd-LZ1SOwhA',
      hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4MEfVieDdukII67NiQUhPewspOx4MYboD1OsJXhnMvEK1GiwbQSumZuAVjoiV9M3YIcp_GOPEC0hCk27EZ8RSZh3uw8fp-StHGUa2XbToOAGdsCDjQveBJr5zEuKrxAjIkGJrcYB5p4MB7wtSlVt5bqyw-h45s4nR5z14SK-C0tPUj7TaSlT896R0v04TFCU4f4Ql2xzFLW-aLf9J7l5hswd--esr37UturisbDehugZlxdZMnuFM',
      description: 'Pure Mulberry silk lounge set for two. Delivered in bespoke gold embossed box.',
      keywords: 'silk bundle couples matching pyjama lounge midnight'
    },
    {
      id: 'coat-1',
      name: 'The Cashmere Overcoat',
      price: 12500,
      category: 'men',
      sizes: ['40R', '42R', '44R'],
      url: 'collectionpage.html?cat=men',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZZzf4X0ORQ666m_rOla9-DjbuUksgct1Nl08E4geEarFTcruj1dO1cvVs-UEdyl8ritaiCGthNM-5f72MC9gI8rO_ZZscqfvE9enpDGuiTu7gLntvhDDjDrXkkP8Zc87wWtW-WNlOTfXZmto0I89FVqQ2bPFDB0YrqiLInjIWfYiCcpprSb0GW4CP6AovIgV8vcbF7Wr9zbo8xfmRMH24tuSeY8lNLzXv1ub74WNtyCjQBniJJiZ_',
      hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZZzf4X0ORQ666m_rOla9-DjbuUksgct1Nl08E4geEarFTcruj1dO1cvVs-UEdyl8ritaiCGthNM-5f72MC9gI8rO_ZZscqfvE9enpDGuiTu7gLntvhDDjDrXkkP8Zc87wWtW-WNlOTfXZmto0I89FVqQ2bPFDB0YrqiLInjIWfYiCcpprSb0GW4CP6AovIgV8vcbF7Wr9zbo8xfmRMH24tuSeY8lNLzXv1ub74WNtyCjQBniJJiZ_',
      description: 'Double-breasted cashmere overcoat with horn buttons and satin lining.',
      keywords: 'coat cashmere overcoat outer winter men luxury'
    },
    {
      id: 'derby-1',
      name: 'Signature Derby',
      price: 4200,
      category: 'men',
      sizes: ['40', '41', '42', '43', '44'],
      url: 'collectionpage.html?cat=men',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAK2uxJskB86XBUBn_-NgYwkKWcKvk2HQPOWJKX7ddpaqWW1FHMDn4pYguH5DGHqHTTxo_F0VrKZqfW2EWdRnQ6rDGvJr9_nvNHqYMq6QuNHiXM5DQsRljx5AT_n_575GDkbiuIJweIMLo1EejVUyn7e-AraYbu06mHo1z7Lhew9ucVsprllb99Ksju1xnysbxBFSkG4MUMHBJmQKCCubdrZc6ySHalPs2gjuKHH92Stl2Q2hAC02fu',
      hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAK2uxJskB86XBUBn_-NgYwkKWcKvk2HQPOWJKX7ddpaqWW1FHMDn4pYguH5DGHqHTTxo_F0VrKZqfW2EWdRnQ6rDGvJr9_nvNHqYMq6QuNHiXM5DQsRljx5AT_n_575GDkbiuIJweIMLo1EejVUyn7e-AraYbu06mHo1z7Lhew9ucVsprllb99Ksju1xnysbxBFSkG4MUMHBJmQKCCubdrZc6ySHalPs2gjuKHH92Stl2Q2hAC02fu',
      description: 'Handcrafted derby shoes in burnished calf leather with a sleek squared-off toe.',
      keywords: 'derby shoes leather formal footwear men oxford'
    },
    {
      id: 'shirt-1',
      name: 'Poplin Ceremony Shirt',
      price: 2800,
      category: 'men',
      sizes: ['S', 'M', 'L', 'XL'],
      url: 'collectionpage.html?cat=men',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0FW89lP95ZTvqNFtgks7eo88cC_I3HrOPGz5gsi4uPBe_G_3DMi7F8sCpR5LBHvNxt6eKKAAaz2oklnoX40M8kz9T7aRR4bGTgtl_ZXTkSLezuNI9GWjVKvC_MbBUrlCOU71z7MBNLZUu9XWeToT_M13Ld_s-VjiGfoQsYnnFw02OxMPrwjkNLwK4bK1hN2Dd4utB6khaatrNeysAVkJwVXrsz22aMV_OI5FraoBdgVILIwjYZ81m',
      hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0FW89lP95ZTvqNFtgks7eo88cC_I3HrOPGz5gsi4uPBe_G_3DMi7F8sCpR5LBHvNxt6eKKAAaz2oklnoX40M8kz9T7aRR4bGTgtl_ZXTkSLezuNI9GWjVKvC_MbBUrlCOU71z7MBNLZUu9XWeToT_M13Ld_s-VjiGfoQsYnnFw02OxMPrwjkNLwK4bK1hN2Dd4utB6khaatrNeysAVkJwVXrsz22aMV_OI5FraoBdgVILIwjYZ81m',
      description: 'Crisp poplin shirt designed for ceremony and formal occasions.',
      keywords: 'shirt poplin ceremony white formal men'
    }
  ],

  /* ─── Cart Operations ─── */
  saveCart() {
    localStorage.setItem('ouf_cart', JSON.stringify(this.cart));
    this.updateCartBadges();
  },

  addItem(product) {
    const size = product.size || 'M';
    const idx = this.cart.findIndex(i => i.id === product.id && i.size === size);
    if (idx > -1) {
      this.cart[idx].qty += (product.qty || 1);
    } else {
      const fullProduct = this.PRODUCTS.find(p => p.id === product.id) || {};
      this.cart.push({
        id: product.id,
        name: product.name || fullProduct.name,
        price: product.price || fullProduct.price || 0,
        size: size,
        qty: product.qty || 1,
        image: product.image || fullProduct.image || this.getProductImage(product)
      });
    }
    this.saveCart();
    const name = product.name || (this.PRODUCTS.find(p=>p.id===product.id)||{}).name || 'Item';
    const msg = this.lang === 'ar'
      ? `تمت إضافة ${name} إلى السلة.`
      : `Added to bag — ${name}`;
    this.toast(msg, 'success');
  },

  removeItem(id, size) {
    this.cart = this.cart.filter(i => !(i.id === id && i.size === size));
    this.saveCart();
    this.toast(this.lang === 'ar' ? 'تمت إزالة المنتج من السلة.' : 'Item removed from bag.', 'info');
  },

  updateQty(id, size, delta) {
    const idx = this.cart.findIndex(i => i.id === id && i.size === size);
    if (idx > -1) {
      this.cart[idx].qty = Math.max(1, this.cart[idx].qty + delta);
      this.saveCart();
    }
  },

  getSubtotal() {
    return this.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  },

  getGiftFee() {
    return (this.gift && this.gift.enabled) ? 200 : 0;
  },

  getDiscount() {
    if (!this.coupon) return 0;
    return Math.round(this.getSubtotal() * this.coupon.discount);
  },

  getTotal() {
    return Math.max(0, this.getSubtotal() - this.getDiscount() + this.getGiftFee());
  },

  applyCoupon(code) {
    const clean = (code || '').toUpperCase().trim();
    if (!clean) return { success: false, msg: 'Please enter a code.' };
    const c = this.COUPONS[clean];
    if (c) {
      this.coupon = { code: clean, ...c };
      sessionStorage.setItem('ouf_coupon', JSON.stringify(this.coupon));
      return { success: true, label: c.label };
    }
    return { success: false, msg: 'Invalid or expired code.' };
  },

  removeCoupon() {
    this.coupon = null;
    sessionStorage.removeItem('ouf_coupon');
  },

  saveGift() {
    sessionStorage.setItem('ouf_gift', JSON.stringify(this.gift));
  },

  getCount() {
    return this.cart.reduce((sum, i) => sum + i.qty, 0);
  },

  formatPrice(n) {
    return (n || 0).toLocaleString('en-EG') + ' EGP';
  },

  updateCartBadges() {
    const count = this.getCount();
    document.querySelectorAll('[data-cart-badge]').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  },

  /* ─── Wishlist Operations ─── */
  saveWishlist() {
    localStorage.setItem('ouf_wishlist', JSON.stringify(this.wishlist));
    this.updateWishlistBadges();
  },

  toggleWishlist(productId) {
    const product = this.PRODUCTS.find(p => p.id === productId) || { id: productId, name: 'Item', price: 0 };
    const idx = this.wishlist.findIndex(i => i.id === productId);
    if (idx > -1) {
      this.wishlist.splice(idx, 1);
      this.saveWishlist();
      this.toast(this.lang === 'ar' ? 'تمت إزالة المنتج من المفضلة.' : 'Removed from wishlist', 'info');
      return false;
    } else {
      this.wishlist.push({ ...product });
      this.saveWishlist();
      this.toast(this.lang === 'ar' ? 'تم حفظ المنتج في المفضلة.' : 'Saved to wishlist', 'success');
      return true;
    }
  },

  isInWishlist(productId) {
    return this.wishlist.some(i => i.id === productId);
  },

  updateWishlistBadges() {
    const count = this.wishlist.length;
    document.querySelectorAll('[data-wishlist-badge]').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
    document.querySelectorAll('[data-wishlist-toggle]').forEach(btn => {
      const id = btn.dataset.wishlistToggle;
      if (this.isInWishlist(id)) {
        btn.classList.add('active');
        const icon = btn.querySelector('.material-symbols-outlined');
        if (icon) icon.style.fontVariationSettings = "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24";
      } else {
        btn.classList.remove('active');
        const icon = btn.querySelector('.material-symbols-outlined');
        if (icon) icon.style.fontVariationSettings = "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24";
      }
    });
  },

  getProductImage(item) {
    if (item && item.image) return item.image;
    const match = this.PRODUCTS.find(p => p.id === (item?.id || item));
    if (match) return match.image;
    return 'https://via.placeholder.com/400x500?text=OUF';
  },

  clearOrder() {
    this.cart = [];
    this.coupon = null;
    this.gift = { enabled: false, message: '' };
    localStorage.removeItem('ouf_cart');
    sessionStorage.removeItem('ouf_coupon');
    sessionStorage.removeItem('ouf_gift');
    this.updateCartBadges();
  },

  placeOrder(customerData) {
    const orderId = 'OUF-' + Math.floor(100000 + Math.random() * 900000);
    const now = new Date();
    const order = {
      id: orderId,
      date: now.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      dateAr: now.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' }),
      timestamp: now.toISOString(),
      items: [...this.cart],
      subtotal: this.getSubtotal(),
      discount: this.getDiscount(),
      coupon: this.coupon ? this.coupon.code : null,
      giftFee: this.getGiftFee(),
      gift: { ...this.gift },
      total: this.getTotal(),
      customer: customerData || {}
    };
    localStorage.setItem('ouf_last_order', JSON.stringify(order));
    const history = JSON.parse(localStorage.getItem('ouf_orders') || '[]');
    history.unshift(order);
    localStorage.setItem('ouf_orders', JSON.stringify(history.slice(0, 20)));
    this.clearOrder();
    return order;
  },

  formatPrice(amount, oldPrice = null) {
    const num = Number(amount) || 0;
    const formatted = num.toLocaleString('en-US');
    const currency = this.lang === 'ar' ? 'ج.م' : 'EGP';
    
    if (oldPrice && Number(oldPrice) > num) {
      const oldFormatted = Number(oldPrice).toLocaleString('en-US');
      const discountPct = Math.round(((oldPrice - num) / oldPrice) * 100);
      const saveText = this.lang === 'ar' ? `وفر ${discountPct}%` : `Save ${discountPct}%`;
      return `<span class="ouf-price-tag"><span class="ouf-price-current">${formatted} <span class="ouf-price-currency">${currency}</span></span><span class="ouf-price-old">${oldFormatted}</span><span class="ouf-price-badge">${saveText}</span></span>`;
    }
    return `<span class="ouf-price-tag"><span class="ouf-price-current">${formatted} <span class="ouf-price-currency">${currency}</span></span></span>`;
  }
};

/* ══════════════════════════════════════════
   AUTH SYSTEM
══════════════════════════════════════════ */
OUF.auth = {
  getUser() {
    return JSON.parse(localStorage.getItem('ouf_user') || 'null');
  },
  login(email, provider = 'Google', name = null) {
    const displayName = name || (email && email.includes('@') ? email.split('@')[0] : 'Lord Al Maktoum');
    const user = {
      name: displayName,
      email: email || 'patron@ouf.com',
      provider: provider,
      joined: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' }),
      avatar: null
    };
    localStorage.setItem('ouf_user', JSON.stringify(user));
    return user;
  },
  logout() {
    localStorage.removeItem('ouf_user');
    OUF.toast(OUF.lang === 'ar' ? 'تم تسجيل الخروج بنجاح.' : 'Logged out successfully.', 'info');
    setTimeout(() => { window.location.href = 'login.html'; }, 800);
  },
  isLoggedIn() {
    return !!this.getUser();
  }
};

/* ══════════════════════════════════════════
   TOAST SYSTEM
══════════════════════════════════════════ */
OUF.toast = function(message, type = 'info') {
  let container = document.getElementById('ouf-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'ouf-toast-container';
    container.style.cssText = 'position:fixed;top:24px;right:24px;display:flex;flex-direction:column;gap:12px;align-items:flex-end;z-index:9999;pointer-events:none;max-width:calc(100vw - 40px);';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  const colors = { success: '#000000', error: '#ba1a1a', info: '#3a3a3a', warning: '#9a805b' };
  const borderColors = { success: '#9a805b', error: '#ff6b6b', info: '#9a805b', warning: '#d4a96a' };
  toast.style.cssText = `
    background:${colors[type]||colors.info};
    color:#ffffff;
    padding:14px 20px 14px 16px;
    font-family:'Inter',sans-serif;
    font-size:11px;
    letter-spacing:0.1em;
    text-transform:uppercase;
    max-width:360px;
    min-width:200px;
    opacity:0;
    transform:translateY(12px);
    transition:all 0.35s cubic-bezier(0.25,1,0.5,1);
    pointer-events:auto;
    border-left:3px solid ${borderColors[type]||borderColors.info};
    box-shadow:0 8px 32px rgba(0,0,0,0.25);
    display:flex;
    align-items:center;
    gap:10px;
    cursor:pointer;
  `;

  const icons = { success: 'check_circle', error: 'error', info: 'info', warning: 'warning' };
  toast.innerHTML = `
    <span class="material-symbols-outlined" style="font-size:16px;flex-shrink:0;font-variation-settings:'FILL' 1,'wght' 400,'GRAD' 0,'opsz' 24;">${icons[type]||icons.info}</span>
    <span>${message}</span>
  `;
  toast.addEventListener('click', () => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(12px)';
    setTimeout(() => toast.remove(), 350);
  });
  container.appendChild(toast);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(0)';
    });
  });
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(12px)';
    setTimeout(() => toast.remove(), 350);
  }, 4000);
};

/* ══════════════════════════════════════════
   MOBILE NAVIGATION DRAWER
══════════════════════════════════════════ */
OUF.initMobileMenu = function() {
  if (!document.getElementById('ouf-mobile-overlay')) {
    const overlay = document.createElement('div');
    overlay.id = 'ouf-mobile-overlay';
    overlay.className = 'ouf-backdrop';
    overlay.addEventListener('click', OUF.closeMobileMenu);
    document.body.appendChild(overlay);

    const drawer = document.createElement('nav');
    drawer.id = 'ouf-mobile-drawer';
    drawer.setAttribute('aria-label', 'Mobile navigation menu');
    drawer.style.cssText = `
      position:fixed;top:0;left:0;height:100%;width:min(320px,88vw);
      background:#faf8f5 !important;z-index:300;
      transform:translateX(-100%);
      transition:transform 0.4s cubic-bezier(0.25,1,0.5,1);
      display:flex;flex-direction:column;
      border-right:1px solid #e2e2e2;
      box-shadow:0 10px 40px rgba(0,0,0,0.12);
      overflow:hidden;
    `;

    const user = OUF.auth.getUser();
    const profileHref = user ? 'profile.html' : 'login.html';
    const userSection = user
      ? `<a href="profile.html" style="padding:16px 28px;background:#f3efea;border-bottom:1px solid #eae7e1;display:flex;align-items:center;gap:12px;text-decoration:none;">
           <div style="width:36px;height:36px;background:#000;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-family:'Inter',sans-serif;font-size:14px;font-weight:600;">${user.name.charAt(0).toUpperCase()}</div>
           <div>
             <p style="font-family:'Inter',sans-serif;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#000;margin:0;">${user.name}</p>
             <p style="font-family:'Inter',sans-serif;font-size:10px;color:#747878;margin-top:2px;margin-bottom:0;">${user.email}</p>
           </div>
         </a>`
      : '';

    const YEAR = new Date().getFullYear();
    drawer.innerHTML = `
      <div style="padding:20px 28px;border-bottom:1px solid #eae7e1;display:flex;justify-content:space-between;align-items:center;background:#faf8f5;">
        <a href="homepage.html" style="font-family:'Bodoni Moda',serif;font-size:20px;letter-spacing:0.1em;color:#000;text-decoration:none;">OUF / عوف</a>
        <button onclick="OUF.closeMobileMenu()" style="background:none;border:none;cursor:pointer;color:#000;padding:4px;display:flex;" aria-label="Close menu">
          <span class="material-symbols-outlined" style="font-size:22px;">close</span>
        </button>
      </div>
      ${userSection}
      <div style="flex:1;padding:16px 28px;display:flex;flex-direction:column;overflow-y:auto;background:#faf8f5;">
        <a href="menpage.html" class="ouf-drawer-link"><span class="material-symbols-outlined">man</span><span class="lang-en">OUF MAN</span><span class="lang-ar" style="display:none;">عوف للرجال</span></a>
        <a href="womanpage.html" class="ouf-drawer-link"><span class="material-symbols-outlined">woman</span><span class="lang-en">OUF WOMAN</span><span class="lang-ar" style="display:none;">عوف للسيدات</span></a>
        <a href="couplespage.html" class="ouf-drawer-link"><span class="material-symbols-outlined">favorite</span><span class="lang-en">OUF COUPLES</span><span class="lang-ar" style="display:none;">عوف للأزواج</span></a>
        <a href="collectionpage.html" class="ouf-drawer-link muted"><span class="material-symbols-outlined">style</span><span class="lang-en">Collections</span><span class="lang-ar" style="display:none;">المجموعات</span></a>
        <a href="wishlist.html" class="ouf-drawer-link muted"><span class="material-symbols-outlined">favorite_border</span><span class="lang-en">The Vault (Wishlist)</span><span class="lang-ar" style="display:none;">المفضلة (الخزنة)</span></a>
        <a href="cartpage.html" class="ouf-drawer-link muted"><span class="material-symbols-outlined">shopping_bag</span><span class="lang-en">My Bag</span><span class="lang-ar" style="display:none;">حقيبتي</span></a>
        <a href="${profileHref}" class="ouf-drawer-link muted"><span class="material-symbols-outlined">person</span><span class="lang-en">Private Circle / Profile</span><span class="lang-ar" style="display:none;">الملف الشخصي</span></a>
        <div style="margin:16px 0;height:1px;background:#eae7e1;"></div>
        <a href="philosophy.html" class="ouf-drawer-link muted"><span class="material-symbols-outlined">auto_stories</span><span class="lang-en">Philosophy</span><span class="lang-ar" style="display:none;">فلسفتنا</span></a>
        <a href="size-guide.html" class="ouf-drawer-link muted"><span class="material-symbols-outlined">straighten</span><span class="lang-en">Size Guide</span><span class="lang-ar" style="display:none;">دليل المقاسات</span></a>
        <a href="shipping.html" class="ouf-drawer-link muted"><span class="material-symbols-outlined">local_shipping</span><span class="lang-en">Shipping</span><span class="lang-ar" style="display:none;">الشحن</span></a>
        <a href="contact.html" class="ouf-drawer-link muted"><span class="material-symbols-outlined">support_agent</span><span class="lang-en">Concierge</span><span class="lang-ar" style="display:none;">الكونسيرج</span></a>
      </div>
      <div style="padding:20px 28px;border-top:1px solid #eae7e1;display:flex;justify-content:space-between;align-items:center;background:#f3efea;">
        <p style="font-family:'Inter',sans-serif;font-size:10px;letter-spacing:0.12em;color:#a0a3a3;text-transform:uppercase;margin:0;">© ${YEAR} OUF / عوف</p>
        <button onclick="OUF.toggleLang()" style="background:none;border:1px solid #e2e2e2;font-family:'Inter',sans-serif;font-size:10px;letter-spacing:0.15em;cursor:pointer;color:#000;font-weight:600;padding:6px 12px;">EN / AR</button>
      </div>
    `;
    document.body.appendChild(drawer);
  }

  document.querySelectorAll('[data-mobile-menu-trigger], #mobile-menu-btn').forEach(btn => {
    // Remove old listener by cloning
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
    newBtn.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); OUF.openMobileMenu(); });
  });
};

OUF.openMobileMenu = function() {
  const overlay = document.getElementById('ouf-mobile-overlay');
  const drawer = document.getElementById('ouf-mobile-drawer');
  if (!overlay || !drawer) return;
  overlay.classList.add('active');
  drawer.style.transform = 'translateX(0)';
  document.body.style.overflow = 'hidden';
};

OUF.closeMobileMenu = function() {
  const overlay = document.getElementById('ouf-mobile-overlay');
  const drawer = document.getElementById('ouf-mobile-drawer');
  if (!overlay || !drawer) return;
  overlay.classList.remove('active');
  drawer.style.transform = 'translateX(-100%)';
  document.body.style.overflow = '';
};

/* ══════════════════════════════════════════
   SEARCH ENGINE
══════════════════════════════════════════ */
OUF.initSearch = function() {
  if (document.getElementById('ouf-search-overlay')) return;

  const overlay = document.createElement('div');
  overlay.id = 'ouf-search-overlay';
  overlay.style.cssText = `
    position:fixed;inset:0;
    background:rgba(249,249,249,0.98);
    z-index:400;opacity:0;pointer-events:none;
    transition:opacity 0.4s ease;
    display:flex;flex-direction:column;
    align-items:center;
    padding:80px 20px 20px;
    overflow-y:auto;
  `;
  overlay.innerHTML = `
    <button onclick="OUF.closeSearch()" style="position:absolute;top:24px;right:24px;background:none;border:1px solid #e2e2e2;cursor:pointer;color:#000;font-family:'Inter',sans-serif;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;display:flex;align-items:center;gap:6px;padding:8px 14px;">
      <span class="material-symbols-outlined" style="font-size:16px;">close</span> CLOSE
    </button>
    <div style="width:100%;max-width:660px;">
      <p style="font-family:'Inter',sans-serif;font-size:10px;letter-spacing:0.2em;color:#a0a3a3;text-transform:uppercase;margin-bottom:12px;">SEARCH OUF BESPOKE</p>
      <div style="display:flex;border-bottom:2px solid #000;padding-bottom:12px;gap:12px;align-items:center;">
        <span class="material-symbols-outlined" style="color:#000;font-size:26px;flex-shrink:0;">search</span>
        <input id="ouf-search-input" type="text" placeholder="${OUF.lang==='ar'?'ابحث...':'Search suits, silk loungewear...'}" autocomplete="off"
          style="flex:1;background:none;border:none;outline:none;font-family:'Bodoni Moda',serif;font-size:26px;color:#000;min-width:0;">
      </div>
      <div id="ouf-search-suggestions" style="margin-top:20px;display:flex;flex-wrap:wrap;gap:8px;"></div>
      <div id="ouf-search-results" style="margin-top:28px;"></div>
    </div>
  `;
  overlay.addEventListener('click', (e) => { if (e.target === overlay) OUF.closeSearch(); });
  document.body.appendChild(overlay);

  const input = document.getElementById('ouf-search-input');
  input.addEventListener('input', () => OUF.handleSearch(input.value));
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') OUF.closeSearch();
    if (e.key === 'Enter' && input.value.trim()) {
      window.location.href = 'collectionpage.html?q=' + encodeURIComponent(input.value.trim());
    }
  });

  const suggestions = ['OUF MAN', 'OUF WOMAN', 'OUF COUPLES', 'Silk', 'Suit', 'Bespoke', 'Cashmere', 'Derby'];
  suggestions.forEach(s => {
    const btn = document.createElement('button');
    btn.textContent = s;
    btn.style.cssText = `
      background:none;border:1px solid #e2e2e2;
      padding:7px 14px;
      font-family:Inter,sans-serif;font-size:10px;
      letter-spacing:0.15em;text-transform:uppercase;
      color:#5d5f5e;cursor:pointer;
      transition:all 0.2s ease;
    `;
    btn.addEventListener('mouseover', () => { btn.style.borderColor = '#000'; btn.style.color = '#000'; });
    btn.addEventListener('mouseleave', () => { btn.style.borderColor = '#e2e2e2'; btn.style.color = '#5d5f5e'; });
    btn.addEventListener('click', () => { input.value = s; OUF.handleSearch(s); });
    document.getElementById('ouf-search-suggestions').appendChild(btn);
  });

  document.querySelectorAll('#search-btn, #search-btn-mobile, [data-search-trigger]').forEach(el => {
    el.addEventListener('click', (e) => { e.preventDefault(); OUF.openSearch(); });
  });
};

OUF.openSearch = function() {
  const overlay = document.getElementById('ouf-search-overlay');
  if (!overlay) { OUF.initSearch(); return setTimeout(OUF.openSearch, 50); }
  overlay.style.opacity = '1';
  overlay.style.pointerEvents = 'auto';
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('ouf-search-input')?.focus(), 100);
};

OUF.closeSearch = function() {
  const overlay = document.getElementById('ouf-search-overlay');
  if (overlay) {
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    document.body.style.overflow = '';
  }
};

OUF.handleSearch = function(val) {
  const container = document.getElementById('ouf-search-results');
  if (!container) return;
  const q = val.toLowerCase().trim();
  if (q.length < 2) { container.innerHTML = ''; return; }

  const pages = [
    { name: 'OUF MAN', url: 'menpage.html', keywords: 'man men suit formal tailoring regal masculine' },
    { name: 'OUF WOMAN', url: 'womanpage.html', keywords: 'woman women dress skirt tailoring feminine' },
    { name: 'OUF COUPLES', url: 'couplespage.html', keywords: 'couples matching twin set his hers' },
    { name: 'Collections', url: 'collectionpage.html', keywords: 'collection shop browse all products' },
    { name: 'The Vault (Wishlist)', url: 'wishlist.html', keywords: 'wishlist vault saved favorites' },
    { name: 'Size Guide', url: 'size-guide.html', keywords: 'size guide measurements fit tailoring' },
    { name: 'Concierge', url: 'contact.html', keywords: 'contact concierge support help' }
  ];

  const matchedProducts = OUF.PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    (p.keywords || '').includes(q) ||
    p.category.includes(q)
  );
  const matchedPages = pages.filter(p =>
    p.name.toLowerCase().includes(q) || p.keywords.includes(q)
  );

  let html = '';
  matchedPages.slice(0, 3).forEach(p => {
    html += `<a href="${p.url}" class="ouf-search-result" style="text-decoration:none;">
      <div style="width:48px;height:48px;background:#f0f0f0;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <span class="material-symbols-outlined" style="color:#747878;font-size:20px;">style</span>
      </div>
      <div>
        <strong style="font-family:'Bodoni Moda',serif;font-size:18px;color:#000;">${p.name}</strong><br>
        <span style="font-size:10px;color:#747878;letter-spacing:0.1em;text-transform:uppercase;">Category Page</span>
      </div>
    </a>`;
  });
  matchedProducts.slice(0, 5).forEach(p => {
    html += `<a href="${p.url}" class="ouf-search-result" style="text-decoration:none;">
      <img src="${p.image}" alt="${p.name}">
      <div>
        <strong style="font-family:'Bodoni Moda',serif;font-size:16px;color:#000;">${p.name}</strong><br>
        <span style="font-size:11px;color:#747878;">${OUF.formatPrice(p.price)}</span>
      </div>
    </a>`;
  });

  container.innerHTML = html ||
    `<p style="font-family:'Inter',sans-serif;font-size:12px;color:#a0a3a3;letter-spacing:0.1em;padding:20px 0;">
      No results found for "${val}". Press Enter to view all.
    </p>`;
};

/* ══════════════════════════════════════════
   QUICK VIEW MODAL
══════════════════════════════════════════ */
OUF.initQuickView = function(productId) {
  const p = OUF.PRODUCTS.find(item => item.id === productId);
  if (!p) return;

  let modal = document.getElementById('ouf-quickview-modal');
  if (modal) modal.remove();

  modal = document.createElement('div');
  modal.id = 'ouf-quickview-modal';
  modal.style.cssText = `
    position:fixed;inset:0;
    background:rgba(0,0,0,0.65);
    z-index:500;
    display:flex;align-items:center;justify-content:center;
    padding:16px;
    opacity:0;
    transition:opacity 0.3s ease;
    backdrop-filter:blur(6px);
  `;
  document.body.appendChild(modal);

  const isSaved = OUF.isInWishlist(p.id);
  const sizeButtons = (p.sizes || ['M', 'L']).map((s, idx) => `
    <button class="qv-size-btn ${idx===0?'selected':''}" data-size="${s}"
      style="padding:9px 16px;border:1px solid ${idx===0?'#000':'#e2e2e2'};
      background:${idx===0?'#000':'transparent'};color:${idx===0?'#fff':'#000'};
      font-family:'Inter',sans-serif;font-size:11px;cursor:pointer;
      transition:all 0.2s ease;letter-spacing:0.05em;">${s}</button>
  `).join('');

  modal.innerHTML = `
    <div style="background:#fff;max-width:900px;width:100%;max-height:92vh;overflow:auto;position:relative;
         display:grid;grid-template-columns:1fr 1fr;box-shadow:0 25px 80px rgba(0,0,0,0.3);"
         onclick="event.stopPropagation()">
      <button onclick="OUF.closeQuickView()"
        style="position:absolute;top:12px;right:12px;z-index:10;background:rgba(255,255,255,0.9);
        border:1px solid #e2e2e2;cursor:pointer;padding:8px;border-radius:50%;
        display:flex;align-items:center;justify-content:center;
        transition:all 0.2s ease;" aria-label="Close">
        <span class="material-symbols-outlined" style="font-size:18px;">close</span>
      </button>
      <div style="background:#f3f3f3;position:relative;min-height:400px;">
        <img src="${p.image}" alt="${p.name}"
          style="width:100%;height:100%;object-fit:cover;display:block;">
      </div>
      <div style="padding:36px 32px;display:flex;flex-direction:column;justify-content:space-between;">
        <div>
          <span style="font-family:'Inter',sans-serif;font-size:10px;letter-spacing:0.2em;color:#9a805b;text-transform:uppercase;font-weight:500;">OUF BESPOKE</span>
          <h2 style="font-family:'Bodoni Moda',serif;font-size:26px;margin:10px 0 6px;color:#000;line-height:1.2;">${p.name}</h2>
          <p style="font-family:'Inter',sans-serif;font-size:18px;color:#000;margin-bottom:16px;font-weight:400;">${OUF.formatPrice(p.price)}</p>
          <p style="font-family:'Inter',sans-serif;font-size:13px;color:#5d5f5e;line-height:1.7;margin-bottom:24px;">${p.description || 'Crafted with extraordinary precision.'}</p>
          <div style="margin-bottom:20px;">
            <label style="font-family:'Inter',sans-serif;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#000;display:block;margin-bottom:10px;font-weight:500;">SELECT SIZE</label>
            <div id="qv-size-group" style="display:flex;gap:8px;flex-wrap:wrap;">${sizeButtons}</div>
          </div>
        </div>
        <div>
          <div style="display:flex;gap:10px;margin-top:20px;">
            <button id="qv-add-btn" style="flex:1;background:#000;color:#fff;border:none;padding:15px;
              font-family:'Inter',sans-serif;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;
              cursor:pointer;transition:all 0.2s ease;font-weight:500;">ADD TO BAG</button>
            <button id="qv-wish-btn" style="background:#fff;border:1px solid #e2e2e2;padding:15px 18px;
              cursor:pointer;display:flex;align-items:center;justify-content:center;
              transition:all 0.2s ease;" aria-label="Save to wishlist">
              <span class="material-symbols-outlined ${isSaved?'filled':''}"
                style="color:${isSaved?'#e63946':'#000'};font-size:20px;">favorite</span>
            </button>
          </div>
          <a href="${p.url}" style="display:block;text-align:center;margin-top:14px;
            font-family:'Inter',sans-serif;font-size:10px;letter-spacing:0.15em;
            text-transform:uppercase;color:#747878;text-decoration:underline;
            text-underline-offset:4px;">View Full Details →</a>
        </div>
      </div>
    </div>
  `;

  modal.addEventListener('click', (e) => { if (e.target === modal) OUF.closeQuickView(); });

  requestAnimationFrame(() => {
    requestAnimationFrame(() => { modal.style.opacity = '1'; });
  });

  let selectedSize = p.sizes ? p.sizes[0] : 'M';
  modal.querySelectorAll('.qv-size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      modal.querySelectorAll('.qv-size-btn').forEach(b => {
        b.style.background = 'transparent'; b.style.color = '#000'; b.style.borderColor = '#e2e2e2';
      });
      btn.style.background = '#000'; btn.style.color = '#fff'; btn.style.borderColor = '#000';
      selectedSize = btn.dataset.size;
    });
  });

  document.getElementById('qv-add-btn').addEventListener('click', () => {
    OUF.addItem({ id: p.id, name: p.name, price: p.price, size: selectedSize, qty: 1 });
    OUF.closeQuickView();
  });

  document.getElementById('qv-wish-btn').addEventListener('click', () => {
    const saved = OUF.toggleWishlist(p.id);
    const icon = document.querySelector('#qv-wish-btn .material-symbols-outlined');
    if (saved) {
      icon.style.fontVariationSettings = "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24";
      icon.style.color = '#e63946';
    } else {
      icon.style.fontVariationSettings = "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24";
      icon.style.color = '#000';
    }
  });
};

OUF.closeQuickView = function() {
  const modal = document.getElementById('ouf-quickview-modal');
  if (modal) {
    modal.style.opacity = '0';
    setTimeout(() => modal.remove(), 300);
  }
};

/* ══════════════════════════════════════════
   LANGUAGE SWITCHER
══════════════════════════════════════════ */
OUF.toggleLang = function() {
  OUF.lang = OUF.lang === 'en' ? 'ar' : 'en';
  localStorage.setItem('ouf_lang', OUF.lang);
  OUF.applyLang();
  OUF.toast(OUF.lang === 'ar' ? 'تم تحويل اللغة إلى العربية' : 'Language switched to English', 'info');
};

OUF.applyLang = function() {
  const isAr = OUF.lang === 'ar';
  document.querySelectorAll('.lang-en').forEach(el => {
    el.style.display = isAr ? 'none' : '';
  });
  document.querySelectorAll('.lang-ar').forEach(el => {
    el.style.display = isAr ? '' : 'none';
  });
  document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', isAr ? 'ar' : 'en');
  // Update search placeholder if open
  const searchInput = document.getElementById('ouf-search-input');
  if (searchInput) {
    searchInput.placeholder = isAr ? 'ابحث في عوف...' : 'Search suits, silk loungewear...';
  }
};

/* ══════════════════════════════════════════
   DYNAMIC FOOTER
══════════════════════════════════════════ */
OUF.initFooter = function() {
  const page = window.location.pathname.split('/').pop();
  if (['login.html', 'checkout.html'].includes(page)) return;
  const YEAR = new Date().getFullYear();
  document.querySelectorAll('[data-ouf-footer]').forEach(footer => {
    footer.className = 'ouf-footer';
    footer.innerHTML = `
      <div class="ouf-footer-grid">
        <div>
          <a href="homepage.html" class="ouf-footer-brand">OUF / عوف</a>
          <p class="ouf-footer-tagline">
            <span class="lang-en">Bespoke luxury fashion house. Quiet authority, refined artisanal craft. Est. 2024.</span>
            <span class="lang-ar" style="display:none;font-family:'Amiri',serif;font-size:16px;line-height:1.8;">دار أزياء فاخرة مخصصة. فخامة هادئة وحرفية راقية. تأسست ٢٠٢٤.</span>
          </p>
          <div style="margin-top:24px;display:flex;gap:16px;">
            <a href="contact.html" aria-label="Contact" style="width:36px;height:36px;border:1px solid #e2e2e2;display:flex;align-items:center;justify-content:center;color:#5d5f5e;transition:all 0.2s ease;text-decoration:none;" onmouseover="this.style.borderColor='#000';this.style.color='#000'" onmouseleave="this.style.borderColor='#e2e2e2';this.style.color='#5d5f5e'">
              <span class="material-symbols-outlined" style="font-size:16px;">email</span>
            </a>
            <a href="contact.html" aria-label="Phone" style="width:36px;height:36px;border:1px solid #e2e2e2;display:flex;align-items:center;justify-content:center;color:#5d5f5e;transition:all 0.2s ease;text-decoration:none;" onmouseover="this.style.borderColor='#000';this.style.color='#000'" onmouseleave="this.style.borderColor='#e2e2e2';this.style.color='#5d5f5e'">
              <span class="material-symbols-outlined" style="font-size:16px;">phone</span>
            </a>
          </div>
        </div>
        <div class="ouf-footer-links-section">
          <a href="menpage.html"><span class="lang-en">OUF Man</span><span class="lang-ar" style="display:none;">عوف رجال</span></a>
          <a href="womanpage.html"><span class="lang-en">OUF Woman</span><span class="lang-ar" style="display:none;">عوف نساء</span></a>
          <a href="couplespage.html"><span class="lang-en">OUF Couples</span><span class="lang-ar" style="display:none;">عوف أزواج</span></a>
          <a href="collectionpage.html"><span class="lang-en">Collections</span><span class="lang-ar" style="display:none;">المجموعات</span></a>
          <a href="wishlist.html"><span class="lang-en">The Vault</span><span class="lang-ar" style="display:none;">المفضلة</span></a>
          <a href="login.html"><span class="lang-en">Private Circle</span><span class="lang-ar" style="display:none;">الدائرة الخاصة</span></a>
          <a href="philosophy.html"><span class="lang-en">Philosophy</span><span class="lang-ar" style="display:none;">فلسفتنا</span></a>
          <a href="shipping.html"><span class="lang-en">Shipping</span><span class="lang-ar" style="display:none;">الشحن</span></a>
          <a href="terms.html"><span class="lang-en">Terms</span><span class="lang-ar" style="display:none;">الشروط</span></a>
          <a href="size-guide.html"><span class="lang-en">Size Guide</span><span class="lang-ar" style="display:none;">دليل المقاسات</span></a>
          <a href="contact.html"><span class="lang-en">Concierge</span><span class="lang-ar" style="display:none;">الكونسيرج</span></a>
          <a href="cartpage.html"><span class="lang-en">My Bag</span><span class="lang-ar" style="display:none;">حقيبتي</span></a>
        </div>
      </div>
      <div class="ouf-footer-bottom">
        <p class="ouf-footer-copyright">© ${YEAR} OUF / عوف. <span class="lang-en">ALL RIGHTS RESERVED.</span><span class="lang-ar" style="display:none;">جميع الحقوق محفوظة.</span></p>
        <div style="display:flex;gap:20px;align-items:center;">
          <button type="button" data-lang-toggle style="font-family:'Inter',sans-serif;font-size:10px;letter-spacing:0.15em;color:#a0a3a3;background:none;border:none;cursor:pointer;text-transform:uppercase;transition:color 0.2s ease;" onmouseover="this.style.color='#000'" onmouseleave="this.style.color='#a0a3a3'">EN / AR</button>
          <a href="terms.html" style="font-family:'Inter',sans-serif;font-size:10px;letter-spacing:0.12em;color:#a0a3a3;text-decoration:none;text-transform:uppercase;transition:color 0.2s ease;" onmouseover="this.style.color='#000'" onmouseleave="this.style.color='#a0a3a3'">
            <span class="lang-en">Privacy</span><span class="lang-ar" style="display:none;">الخصوصية</span>
          </a>
        </div>
      </div>
    `;
  });

  document.querySelectorAll('[data-lang-toggle], #lang-btn, #lang-btn-footer').forEach(btn => {
    btn.addEventListener('click', (e) => { e.preventDefault(); OUF.toggleLang(); });
  });
};

/* ══════════════════════════════════════════
   MOBILE BOTTOM NAV
══════════════════════════════════════════ */
OUF.initBottomNav = function() {
  if (document.getElementById('ouf-bottom-nav')) return;
  // Don't show on login or checkout pages
  const page = window.location.pathname.split('/').pop();
  if (['login.html', 'checkout.html'].includes(page)) return;

  const currentPage = window.location.pathname.split('/').pop() || 'homepage.html';

  const nav = document.createElement('nav');
  nav.id = 'ouf-bottom-nav';
  nav.className = 'ouf-bottom-nav';
  nav.setAttribute('aria-label', 'Quick navigation');

  const cartCount = OUF.getCount();
  const wishCount = OUF.wishlist.length;
  const accountUrl = OUF.auth.isLoggedIn() ? 'profile.html' : 'login.html';

  nav.innerHTML = `
    <a href="homepage.html" class="ouf-bottom-nav-item ${currentPage === 'homepage.html' ? 'active' : ''}" aria-label="Home">
      <span class="material-symbols-outlined">home</span>
      <span class="lang-en">Home</span><span class="lang-ar" style="display:none;">الرئيسية</span>
    </a>
    <button class="ouf-bottom-nav-item" id="bottom-search-btn" aria-label="Search">
      <span class="material-symbols-outlined">search</span>
      <span class="lang-en">Search</span><span class="lang-ar" style="display:none;">بحث</span>
    </button>
    <a href="cartpage.html" class="ouf-bottom-nav-item ${currentPage === 'cartpage.html' ? 'active' : ''}" aria-label="My Bag" style="position:relative;">
      <span class="material-symbols-outlined">shopping_bag</span>
      ${cartCount > 0 ? `<span style="position:absolute;top:4px;right:calc(50% - 18px);background:#9a805b;color:#fff;font-size:8px;width:14px;height:14px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Inter',sans-serif;font-weight:700;">${cartCount}</span>` : ''}
      <span class="lang-en">Bag</span><span class="lang-ar" style="display:none;">حقيبتي</span>
    </a>
    <a href="wishlist.html" class="ouf-bottom-nav-item ${currentPage === 'wishlist.html' ? 'active' : ''}" aria-label="Wishlist" style="position:relative;">
      <span class="material-symbols-outlined">favorite_border</span>
      ${wishCount > 0 ? `<span style="position:absolute;top:4px;right:calc(50% - 18px);background:#e63946;color:#fff;font-size:8px;width:14px;height:14px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Inter',sans-serif;font-weight:700;">${wishCount}</span>` : ''}
      <span class="lang-en">Vault</span><span class="lang-ar" style="display:none;">المفضلة</span>
    </a>
    <a href="${accountUrl}" class="ouf-bottom-nav-item ${currentPage === 'profile.html' || currentPage === 'login.html' ? 'active' : ''}" aria-label="Account">
      <span class="material-symbols-outlined">person</span>
      <span class="lang-en">${OUF.auth.isLoggedIn() ? 'Profile' : 'Account'}</span>
      <span class="lang-ar" style="display:none;">${OUF.auth.isLoggedIn() ? 'حسابي' : 'الدخول'}</span>
    </a>
  `;
  document.body.appendChild(nav);

  document.getElementById('bottom-search-btn')?.addEventListener('click', OUF.openSearch);
};

/* ══════════════════════════════════════════
   HEADER SCROLL BEHAVIOR
══════════════════════════════════════════ */
OUF.initScrollHeader = function() {
  const header = document.querySelector('.ouf-header, header.ouf-nav, [data-ouf-header]');
  if (!header) return;
  let lastScrollY = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScrollY = scrollY;
  }, { passive: true });
};

/* ══════════════════════════════════════════
   GLOBAL DELEGATION (Quick Add, QuickView, Wishlist)
══════════════════════════════════════════ */
OUF.initGlobalDelegation = function() {
  document.body.addEventListener('click', (e) => {
    const quickBtn = e.target.closest('.quick-add-btn');
    if (quickBtn) {
      e.preventDefault(); e.stopPropagation();
      const { id, name, price, size } = quickBtn.dataset;
      const product = OUF.PRODUCTS.find(p => p.id === id) || { id, name, price: parseInt(price, 10) };
      OUF.addItem({
        id: product.id,
        name: product.name || name,
        price: parseInt(product.price || price, 10) || 0,
        size: size || (product.sizes ? product.sizes[0] : 'M'),
        qty: 1
      });

      // Visual feedback right on the button
      const origText = quickBtn.innerHTML;
      quickBtn.classList.add('added-success');
      quickBtn.innerHTML = OUF.lang === 'ar' ? '✓ تمت الإضافة' : '✓ ADDED TO BAG';
      setTimeout(() => {
        quickBtn.classList.remove('added-success');
        quickBtn.innerHTML = origText;
      }, 2000);
      return;
    }

    const quickViewBtn = e.target.closest('[data-quickview]');
    if (quickViewBtn) {
      e.preventDefault(); e.stopPropagation();
      OUF.initQuickView(quickViewBtn.dataset.quickview);
      return;
    }

    const wishBtn = e.target.closest('[data-wishlist-toggle]');
    if (wishBtn) {
      e.preventDefault(); e.stopPropagation();
      OUF.toggleWishlist(wishBtn.dataset.wishlistToggle);
      return;
    }
  });
};

/* ══════════════════════════════════════════
   INTERSECT OBSERVER — Animate on scroll
══════════════════════════════════════════ */
OUF.initScrollAnimations = function() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // legacy: reveal by clearing inline hidden styles
        entry.target.style.opacity = '';
        entry.target.style.transform = '';
        // unobserve to avoid repeated work
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Observe elements that explicitly opted in using a data attribute
  document.querySelectorAll('[data-animate-on-scroll], .animate-on-scroll').forEach(el => {
    if (!el.style.opacity) el.style.opacity = '0';
    if (!el.style.transform) el.style.transform = 'translateY(12px)';
    observer.observe(el);
  });
};

/* ══════════════════════════════════════════
   DOM READY INITIALIZER
══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function() {
  OUF.updateCartBadges();
  OUF.updateWishlistBadges();
  OUF.initMobileMenu();
  OUF.initSearch();
  OUF.initFooter();
  OUF.initGlobalDelegation();
  OUF.applyLang();
  OUF.initBottomNav();
  OUF.initScrollHeader();


  OUF.initScrollAnimations();

  // If user is logged in, update header profile icon links to point to profile.html
  if (OUF.auth.isLoggedIn()) {
    document.querySelectorAll('a[href="login.html"]').forEach(a => {
      // Don't replace link if we are currently on login.html page or if it's explicit logout button
      if (window.location.pathname.endsWith('login.html') && !a.closest('header') && !a.closest('nav')) return;
      a.href = 'profile.html';
    });
  }

  // Wire mobile-menu-btn after DOM
  document.querySelectorAll('#mobile-menu-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      OUF.openMobileMenu();
    });
  });

  // Wire lang buttons
  document.querySelectorAll('#lang-btn, #lang-btn-mobile').forEach(btn => {
    btn.addEventListener('click', OUF.toggleLang);
  });

  // Wire search buttons
  document.querySelectorAll('#search-btn, #search-btn-mobile').forEach(btn => {
    btn.addEventListener('click', (e) => { e.preventDefault(); OUF.openSearch(); });
  });

  // Replace any hardcoded year tokens (e.g., 2026 / ٢٠٢٦) with the current year
  try {
    const CURRENT_YEAR = new Date().getFullYear();
    document.querySelectorAll('.ouf-announcement, [data-ouf-footer], #ouf-mobile-drawer').forEach(el => {
      if (!el || !el.innerHTML) return;
      el.innerHTML = el.innerHTML.replace(/2026/g, String(CURRENT_YEAR)).replace(/٢٠٢٦/g, String(CURRENT_YEAR));
    });
  } catch (err) {
    console.warn('Year token replacement failed', err);
  }
});

/* ==========================================
   DYNAMIC MOBILE VIEWPORT CALCULATOR
   ==========================================
*/
document.addEventListener('DOMContentLoaded', () => {
  const fixMobileLayout = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  fixMobileLayout();
  window.addEventListener('resize', fixMobileLayout);
  window.addEventListener('orientationchange', () => {
    setTimeout(fixMobileLayout, 200);
  });
});

