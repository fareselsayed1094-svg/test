/* =====================================================
   OUF / عوف — Contact Concierge Page Script
   Version 3.0 | 2026
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    OUF.toast(
      OUF.lang === 'ar' 
        ? 'تم إرسال رسالتك. سنتواصل قريباً.' 
        : 'Message sent. We will respond shortly.', 
      'success'
    );
    e.target.reset();
  });
});
