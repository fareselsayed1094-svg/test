document.addEventListener('DOMContentLoaded', () => {
  const sideNav = document.getElementById('sideNav');
  const overlay = document.getElementById('sideNavOverlay');

  function toggleSideNav(open) {
    if (!sideNav || !overlay) return;
    const isOpen = open ?? sideNav.classList.contains('translate-x-full');
    if (isOpen) {
      sideNav.classList.remove('translate-x-full');
      overlay.classList.remove('opacity-0', 'pointer-events-none');
    } else {
      sideNav.classList.add('translate-x-full');
      overlay.classList.add('opacity-0', 'pointer-events-none');
    }
  }

  document.getElementById('side-nav-trigger')?.addEventListener('click', () => toggleSideNav(true));
  document.getElementById('close-side-nav')?.addEventListener('click', () => toggleSideNav(false));
  overlay?.addEventListener('click', () => toggleSideNav(false));

  document.querySelectorAll('[data-scroll-to]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.dataset.scrollTo);
      target?.scrollIntoView({ behavior: 'smooth' });
      toggleSideNav(false);
    });
  });

  const mInput = document.getElementById('monogram-input');
  mInput?.addEventListener('input', (e) => {
    document.getElementById('monogramPreview').textContent = e.target.value.toUpperCase();
  });

  const tabHim = document.getElementById('tab-him');
  const tabHer = document.getElementById('tab-her');
  const panelHim = document.getElementById('panel-him');
  const panelHer = document.getElementById('panel-her');

  tabHim?.addEventListener('click', () => {
    tabHim.classList.add('text-primary', 'border-primary');
    tabHim.classList.remove('text-secondary', 'border-transparent');
    tabHer.classList.remove('text-primary', 'border-primary');
    tabHer.classList.add('text-secondary', 'border-transparent');
    panelHim.classList.remove('hidden');
    panelHer.classList.add('hidden');
  });

  tabHer?.addEventListener('click', () => {
    tabHer.classList.add('text-primary', 'border-primary');
    tabHer.classList.remove('text-secondary', 'border-transparent');
    tabHim.classList.remove('text-primary', 'border-primary');
    tabHim.classList.add('text-secondary', 'border-transparent');
    panelHer.classList.remove('hidden');
    panelHim.classList.add('hidden');
  });

  const makeSizeSelectable = (selector) => {
    document.querySelectorAll(selector).forEach(btn => {
      if (!btn.hasAttribute('disabled')) {
        btn.addEventListener('click', () => {
          document.querySelectorAll(selector).forEach(b => {
            b.classList.remove('border-primary', 'bg-primary', 'text-on-primary', 'active-size');
            b.classList.add('border-outline-variant');
          });
          btn.classList.add('border-primary', 'bg-primary', 'text-on-primary', 'active-size');
          btn.classList.remove('border-outline-variant');
        });
      }
    });
  };
  makeSizeSelectable('.size-btn-him');
  makeSizeSelectable('.size-btn-her');

  document.getElementById('size-guide-link')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('size-guide.html', '_blank');
  });
  document.querySelectorAll('.size-guide-trigger').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      window.open('size-guide.html', '_blank');
    });
  });

  document.getElementById('add-to-bag-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    const sizeHim = document.querySelector('.size-btn-him.active-size')?.dataset.val || '40R';
    const sizeHer = document.querySelector('.size-btn-her.active-size')?.dataset.val || '36';
    const monogram = mInput?.value.toUpperCase() || '';

    OUF.addItem({
      id: 'couples-sig-set',
      name: monogram ? `Signature Matching Set (${monogram})` : 'Signature Matching Set',
      price: 3450,
      size: `HIM:${sizeHim} / HER:${sizeHer}`,
      qty: 1
    });

    if (window.innerWidth >= 1024) toggleSideNav(true);
    else window.location.href = 'cartpage.html';
  });
});
