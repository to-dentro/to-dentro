(() => {
  const appUrl = path => new URL(`src/pages/${path}.html`, window.siteConfig.platformUrl).href;
  const groups = [
    { title: 'Explore', links: [['Universidades públicas', appUrl('buscar-universidades')], ['Cursos e áreas de estudo', appUrl('buscar-universidades')], ['Mapa de instituições', appUrl('mapa')], ['Notas e formas de ingresso', appUrl('programas-sociais')]] },
    { title: 'Sua jornada', links: [['Teste vocacional', appUrl('teste-vocacional')], ['Oportunidades e apoio', appUrl('comunidade')]] },
    { title: 'O projeto', links: [['Nossa proposta', 'index.html#projeto'], ['Como funciona', 'como-funciona.html'], ['Conheça a equipe', 'index.html#equipe']] }
  ];
  class SiteFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer class="site-footer">
          <div class="container">
            <div class="footer-grid">
              <div class="footer-about">
                <a class="footer-brand" href="index.html">Tô Dentro!</a>
                <p><strong>O seu futuro começa com informação.</strong></p>
                <p>Acreditamos que conhecer as possibilidades é o primeiro passo para transformar planos em conquistas. Por isso, reunimos caminhos, informações e recursos para aproximar estudantes do ensino superior público.</p>
              </div>
              ${groups.map(group => `
              <div>
                <h3>${group.title}</h3>
                <ul>
                  ${group.links.map(([label, href]) => `
                  <li><a href="${href}"${href.startsWith(window.siteConfig.platformUrl) ? ' target="_blank" rel="noopener noreferrer"' : ''}>${label}</a></li>
                  `).join('')}
                </ul>
              </div>
              `).join('')}
            </div>
            <div class="footer-message">
              <span class="eyebrow">Feito por estudantes, para estudantes</span>
              <p>Mais do que apresentar universidades, queremos tornar a descoberta de novos caminhos mais acessível, acolhedora e possível.</p>
            </div>
            <div class="footer-bottom">
              <p>© ${new Date().getFullYear()} Tô Dentro! • Projeto educacional estudantil</p>
              <p>Informações para orientar. Decisões para transformar.</p>
            </div>
          </div>
        </footer>
      `;
    }
  }
  customElements.define('site-footer', SiteFooter);
})();
