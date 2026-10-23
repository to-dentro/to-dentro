(() => {
  'use strict';
  // Configuração compartilhada dos links para o aplicativo.
  document.querySelectorAll('[data-platform-link]').forEach(link => {
    const path = link.dataset.platformLink;
    const url = new URL(path ? `src/pages/${path}.html` : './', window.siteConfig.platformUrl);
    if (link.dataset.platformId) url.searchParams.set('id', link.dataset.platformId);
    link.href = url.href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });
  
  document.querySelectorAll('[data-mockup]').forEach(image => {
    const hideMissing = () => { image.hidden = true; };
    image.addEventListener('error', hideMissing, { once: true });
    if (image.complete && !image.naturalWidth) hideMissing();
  });
})();
