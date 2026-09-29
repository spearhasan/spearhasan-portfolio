document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('siteNav');
  const shareButton = document.getElementById('shareButton');
  const toast = document.getElementById('toast');
  const year = document.getElementById('year');
  let toastTimer;

  if (year) year.textContent = new Date().getFullYear();

  const closeMenu = () => {
    nav?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'মেনু খুলুন');
    menuToggle?.querySelector('use')?.setAttribute('href', '#i-menu');
  };

  menuToggle?.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'মেনু খুলুন' : 'মেনু বন্ধ করুন');
    menuToggle.querySelector('use')?.setAttribute('href', isOpen ? '#i-menu' : '#i-close');
    nav?.classList.toggle('open', !isOpen);
  });

  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('click', (event) => {
    if (nav?.classList.contains('open') && !nav.contains(event.target) && !menuToggle?.contains(event.target)) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('visible'), 2600);
  };

  shareButton?.addEventListener('click', async () => {
    const shareData = {
      title: 'Spear Hasan — Official Website',
      text: 'Spear Hasan-এর অফিসিয়াল ওয়েবসাইট দেখুন',
      url: window.location.href.split('#')[0]
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareData.url);
        showToast('ওয়েবসাইটের লিংক কপি হয়েছে');
      } else {
        window.prompt('এই লিংকটি কপি করুন:', shareData.url);
      }
    } catch (error) {
      if (error?.name !== 'AbortError') showToast('শেয়ার করা যায়নি—লিংকটি কপি করে নিন');
    }
  });

  const sections = [...document.querySelectorAll('main section[id]')];
  const links = [...document.querySelectorAll('.nav-link')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        links.forEach((link) => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach((section) => observer.observe(section));
  }
});
