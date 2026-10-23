(() => {
  const groups = [
    { title: 'Explore', links: [['Universidades públicas', '#funcionalidades'], ['Cursos e áreas de estudo', '#funcionalidades'], ['Mapa de instituições', '#funcionalidades'], ['Notas e formas de ingresso', '#funcionalidades']] },
    { title: 'Sua jornada', links: [['Teste vocacional', '#funcionalidades'], ['Oportunidades e apoio', '#funcionalidades']] },
    { title: 'O projeto', links: [['Nossa proposta', '#projeto'], ['Como funciona', '#como-funciona'], ['Conheça a equipe', '#equipe']] }
  ];
  class SiteFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<footer class="site-footer"><div class="container"><div class="footer-grid"><div class="footer-about"><a class="footer-brand" href="index.html">Tô Dentro!</a><p><strong>O seu futuro começa com informação.</strong></p><p>Acreditamos que conhecer as possibilidades é o primeiro passo para transformar planos em conquistas. Por isso, reunimos caminhos, informações e recursos para aproximar estudantes do ensino superior público.</p></div>${groups.map(group => `<div><h3>${group.title}</h3><ul>${group.links.map(([label, href]) => `<li><a href="${href}">${label}</a></li>`).join('')}</ul></div>`).join('')}</div><div class="footer-message"><span class="eyebrow">Feito por estudantes, para estudantes</span><p>Mais do que apresentar universidades, queremos tornar a descoberta de novos caminhos mais acessível, acolhedora e possível.</p></div><div class="footer-bottom"><p>© ${new Date().getFullYear()} Tô Dentro! • Projeto educacional estudantil</p><p>Informações para orientar. Decisões para transformar.</p></div></div></footer>`;
    }
  }
  customElements.define('site-footer', SiteFooter);
})();
