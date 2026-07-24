/* =====================================================
   OUF / عوف — Login Page JS (Private Circle)
   Version 4.0 | July 2026
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ── If already logged in → redirect immediately to homepage (preserve force flag) ── */
  {
    const params = new URLSearchParams(window.location.search);
    const force = params.get('force') === '1' || params.get('force') === 'true';
    if (OUF.auth.isLoggedIn() && !force) {
      const returnTo = params.get('returnTo') || 'homepage.html';
      window.location.replace(returnTo);
      return;
    }
  }

  /* ── SSO Buttons ── */
  const btnGoogle = document.getElementById('btn-google');
  const btnApple  = document.getElementById('btn-apple');
  const btnInvite = document.getElementById('btn-invite');

  function handleLogin(email, provider, name) {
    // Show loading state
    const btn = provider === 'Google' ? btnGoogle : btnApple;
    if (btn) {
      const original = btn.innerHTML;
      btn.innerHTML = '<span class="material-symbols-outlined animate-spin" style="font-size:18px;">sync</span>';
      btn.disabled = true;
    }

    setTimeout(() => {
      OUF.auth.login(email, provider, name);
      OUF.toast(
      OUF.lang === 'ar' ? 'تم تسجيل الدخول بنجاح. جاري نقلك...' : 'Authentication Successful. Redirecting...',
      'success'
      );
      setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      const returnTo = params.get('returnTo') || 'homepage.html';
      window.location.href = returnTo;
      }, 900);
    }, 800);
  }

  btnGoogle?.addEventListener('click', (e) => {
    e.preventDefault();
    handleLogin('patron@ouf.com', 'Google', 'Lord Al Maktoum');
  });

  btnApple?.addEventListener('click', (e) => {
    e.preventDefault();
    handleLogin('patron@ouf.com', 'Apple', 'Lord Al Maktoum');
  });

  /* ── Invitation Request ── */
  btnInvite?.addEventListener('click', (e) => {
    e.preventDefault();
    OUF.toast(
      OUF.lang === 'ar' ? 'تم إرسال طلب الدعوة بنجاح. سنتواصل معك قريباً.' : 'Invitation request sent. We will be in touch soon.',
      'success'
    );
  });

  /* ── Mobile Menu & Search ── */
  document.getElementById('mobile-menu-btn')?.addEventListener('click', OUF.openMobileMenu);
  document.getElementById('search-btn')?.addEventListener('click', OUF.openSearch);

  /* ── Animate entrance ── */
  const card = document.querySelector('#sso-view');
  if (card) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(24px)';
    requestAnimationFrame(() => {
      card.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    });
  }
});
