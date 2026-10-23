(() => {
  class SiteHeader extends HTMLElement {
    connectedCallback() {
      const activePage = this.getAttribute('active') || 'projeto';
      const isHome = activePage === 'projeto';
      const homeLink = hash => isHome ? hash : `index.html${hash}`;
      this.innerHTML = `
      <header class="site-header">
        <div class="container header-layout">
          <a class="brand" href="index.html" aria-label="Tô Dentro! — página inicial">
            <img src="assets/images/brand/logo.svg" alt="Tô Dentro!" width="175" height="60">
          </a>
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Abrir menu">
            <span class="material-symbols-rounded" aria-hidden="true">menu</span>
          </button>
          <nav class="site-nav" id="site-nav" aria-label="Navegação principal">
            <a href="${isHome ? '#projeto' : 'index.html'}"${isHome ? ' aria-current="page"' : ''}>${isHome ? 'O projeto' : 'Início'}</a>
            <a href="funcionalidades.html"${activePage === 'funcionalidades' ? ' aria-current="page"' : ''}>Funcionalidades</a>
            <a href="como-funciona.html"${activePage === 'como-funciona' ? ' aria-current="page"' : ''}>Como funciona</a>
            <a href="${homeLink('#equipe')}">Equipe</a>
            <a class="button" data-platform-link>Acessar</a>
          </nav>
        </div>
    </header>
      `;
      const toggle = this.querySelector('button');
      const nav = this.querySelector('nav');
      const close = () => {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir menu');
        nav.classList.remove('is-open');
      };
      toggle.addEventListener('click', () => {
        const open = toggle.getAttribute('aria-expanded') !== 'true';
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
        nav.classList.toggle('is-open', open);
      });
      nav.addEventListener('click', event => {
        if (event.target.closest('a')) close();
      });
      this.addEventListener('keydown', event => {
        if (event.key === 'Escape') { close(); toggle.focus(); }
      });
    }
  }
  customElements.define('site-header', SiteHeader);
})();
