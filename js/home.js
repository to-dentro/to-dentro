(() => {
  'use strict';
  const icon = name => `<span class="material-symbols-rounded" aria-hidden="true">${name}</span>`;

  const benefits = [
    ['Informação acessível', 'Conheça instituições, cursos e formas de ingresso em um só lugar.'],
    ['Exploração com autonomia', 'Compare possibilidades de acordo com seus interesses.'],
    ['Planejamento do futuro', 'Organize etapas importantes da sua jornada universitária.']
  ];

  const discoveries = [
    ['account_balance', 'Encontre Universidades', 'Explore instituições públicas e descubra onde estão localizadas.'],
    ['school', 'Conheça suas opções', 'Acesse informações sobre cursos, campi e formas de ingresso.'],
    ['route', 'Trace seu caminho', 'Descubra possibilidades para planejar sua jornada universitária.']
  ];

  const journeys = [
    ['explore', 'Explore', 'Pesquise instituições, cursos e oportunidades.'],
    ['search', 'Descubra', 'Use o teste e os recursos para conhecer seus interesses.'],
    ['edit_document', 'Planeje', 'Organize suas escolhas e acompanhe os próximos passos.']
  ];

  const features = [
    ['search', 'Busca de universidades', 'Encontre instituições públicas e explore suas características.'],
    ['route', 'Cursos e possibilidades', 'Conheça áreas de formação e caminhos acadêmicos.'],
    ['psychology', 'Teste vocacional', 'Reflita sobre interesses e descubra possibilidades.'],
    ['school', 'Mapa de instituições', 'Visualize universidades e sua localização.'],
    ['calendar_month', 'Calendário de ingresso', 'Acompanhe etapas e datas de processos seletivos.'],
    ['diversity_1', 'Oportunidades e apoio', 'Explore informações sobre assistência e programas estudantis.']
  ];
  // Nomes e funções transcritos da referência; confirmar antes de publicar.
  const team = [
    ['Ana Luiza Machado', 'UI/UX app designer', 'ana-luiza-machado'],
    ['Ana Luiza Marchiori', 'Design de interface web', 'ana-luiza-marchiori'],
    ['Bárbara Gonçalves', 'UI/UX app designer', 'barbara-goncalves'],
    ['Beatriz Gagliano', 'Desenvolvimento de banco de dados', 'beatriz-gagliano'],
    ['Caroline Fantinate', 'Desenvolvedora', 'caroline-fantinate']
  ];

  const tones = ['', 'tone-yellow', 'tone-blue'];

  document.querySelector('#benefit-list').innerHTML = benefits.map(([title, text], index) => `
    <article class="info-card">
      <span class="number-badge ${tones[index]}">
        0${index + 1}
      </span>
      <h3>${title}</h3>
      <p>${text}</p>
    </article>
  `).join('');

  document.querySelector('#discovery-list').innerHTML = discoveries.map(([symbol, title, text], index) => `
  <div class="discovery-item">
    <span class="icon-tile ${tones[index]}">${icon(symbol)}</span>
    <div>
      <h3>${title}</h3>
      <p>${text}</p>
    </div>
  </div>
  `).join('');

  document.querySelector('#journey-list').innerHTML = journeys.map(([symbol, title, text]) => `
  <article class="info-card">
    <h3>
      <span class="icon-tile">${icon(symbol)}</span>${title}
    </h3>
    <p>${text}</p>
  </article>`
  ).join('');

  document.querySelector('#feature-list').innerHTML = features.map(([symbol, title, text]) => `
  <article class="feature-card">
    <div class="feature-heading">
      <span class="icon-tile">${icon(symbol)}</span>
      <h3>${title}</h3>
    </div>
    <p>${text}</p>
  </article>`
  ).join('');

  document.querySelector('#team-list').innerHTML = team.map(([name, role, file]) => `
  <article class="team-member">
    <img class="team-photo" src="assets/images/team/${file}.jpg" alt="${name}" width="160" height="160" loading="lazy">
    
    <div class="team-photo team-avatar" aria-hidden="true" hidden>
      ${name.split(' ').map(part => part[0]).slice(0, 2).join('')}
    </div>

    <h4>${name}</h4>
    <p>${role}</p>
  </article>`
  ).join('');

  // Reservas visuais enquanto as imagens finais não foram exportadas.
  document.querySelectorAll('.asset-slot img, .team-photo[src]').forEach(img => {
    const showFallback = () => {
      img.hidden = true;
      img.nextElementSibling.hidden = false;

    };

    img.addEventListener('error', showFallback, { once: true });

    if (img.complete && !img.naturalWidth) showFallback();

  });

  document.querySelectorAll('[data-platform-link]').forEach(link => {
    link.href = window.siteConfig.platformUrl || '#funcionalidades';

    if (!window.siteConfig.platformUrl) link.title = 'Conheça os recursos da plataforma';
  });
})();
