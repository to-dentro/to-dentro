(() => {
  'use strict';
  const resources = [
    ['Universidades públicas',
      'Busque por nome, cidade e instituição',
      'Pesquise instituições, conheça seus campi e explore diferentes possibilidades de estudo.'],

    ['Cursos e áreas',
      'Explore opções de formação',
      'Descubra opções de graduação e encontre formações que despertem seu interesse.'],

    ['Teste vocacional',
      'Descubra seus interesses',
      'Responda perguntas sobre seus interesses para refletir sobre possíveis caminhos acadêmicos.'],

    ['Mapa universitário',
      'Encontre universidades no mapa',
      'Visualize a localização de instituições e amplie sua visão sobre onde estudar.'],

    ['Calendário de ingresso',
      'Planeje suas próximas etapas',
      'Organize informações importantes sobre processos seletivos e acompanhe etapas de inscrição.'],

    ['Oportunidades e apoio',
      'Conheça possibilidades de apoio',
      'Conheça programas de assistência estudantil e recursos que podem apoiar sua permanência.']
  ];
  const stepCard = ([title, text], index, tone) => `
    <article class="mini-card ${tone}">
      <span class="step-number">0${index + 1}</span>
      <h4>${title}</h4>
      <p>${text}</p>
    </article>
  `;

  document.querySelector('#resource-list').innerHTML = resources.map(([title, subtitle, text], index) => `
  <article class="resource-card">
    <h3>
      <span class="number-badge ${[1, 4].includes(index) ? 'tone-yellow' : ''}">0${index + 1}</span>${title}
    </h3>
    <h4>${subtitle}</h4>
    <p>${text}</p>
  </article>
  `).join('');

  const benefits = [['Entenda seus interesses',
    'Reflita sobre o que desperta sua curiosidade.'],
  ['Explore novas possibilidades',
    'Conheça áreas de estudo próximas ao seu perfil.'],
  ['Escolha com autonomia',
    'Use o resultado como orientação, não como limite.']];

  document.querySelector('#vocational-benefits').innerHTML = benefits.map(([title, text], index) => `
    <li>
      <span class="step-number">0${index + 1}</span>
      <div>
        <h3>${title}</h3>
        <p>${text}</p>
      </div>
    </li>
  `).join('');

  const tones = ['preview-blue', 'preview-green', 'preview-yellow'];

  document.querySelector('#interest-steps').innerHTML = [
    ['Explore', 'O que desperta sua curiosidade?'],
    ['Conecte', 'Relacione interesses e áreas de estudo.'], ['Descubra', 'Conheça cursos e universidades.']
  ].map((step, index) => stepCard(step, index, tones[index])).join('');

  document.querySelector('#interest-list').innerHTML = [
    ['Conexão humana', 'Cuidar, ouvir e trabalhar com pessoas.'],
    ['Olhar investigativo', 'Observar, pesquisar e buscar respostas.'],
    ['Muitas possibilidades', 'Conheça cursos relacionados aos seus interesses.']
  ].map(([title, text], index) => `
    <div class="interest-item ${['preview-green', 'preview-blue', 'preview-yellow'][index]}">
      <h4>${title}</h4>
      <p>${text}</p>
    </div>
  `).join('');

  document.querySelector('#next-steps').innerHTML = [
    ['Encontre cursos', 'Áreas relacionadas aos seus interesses.'],
    ['Compare caminhos', 'Universidades, notas e oportunidades.'],
    ['Planeje os próximos passos', 'Salve escolhas e organize prazos.']
  ].map((step, index) => stepCard(step, index, index === 1 ? 'preview-green' : 'preview-light')).join('');

  const universityLogos = {
    USP: 'https://sobedrj.com.br/novo/wp-content/uploads/2015/10/Logo_Usp.gif',
    UNIFESP: 'https://www.sejabixo.com.br/wp-content/uploads/2022/07/isencao-taxa-vestibular-unifesp-2023.jpeg',
    UNICAMP: 'https://images.seeklogo.com/logo-png/14/2/unicamp-logo-png_seeklogo-144966.png'
  };

  const universities = [
    [
      'USP',
      'Universidade de São Paulo',
      'São Paulo • Pública',
      'Ciência da Computação',
      'preview-blue'
    ],
    [
      'UNIFESP',
      'Universidade Federal de São Paulo',
      'São Paulo • Pública',
      'Ciências Biológicas',
      'preview-green'
    ],
    [
      'UNICAMP',
      'Universidade Estadual de Campinas',
      'Campinas • Pública',
      'Engenharia',
      'preview-yellow'
    ]
  ];

  document.querySelector('#university-preview-list').innerHTML = universities.map(([abbr, name, city, course, tone]) => `
  <article class="university-example">
    <div class="university-example-heading">
      <span class="university-logo${abbr !== 'UNICAMP' ? ' university-logo-wide' : ''}" data-university="${abbr.toLowerCase()}">
        <img src="${universityLogos[abbr]}" alt="Logo ${abbr}" width="64" height="56" loading="lazy">
        <span hidden>${abbr}</span>
      </span>
      <div>
        <h3>${name}</h3>
        <p>${city}</p>
      </div>
    </div>
    <span class="example-label">Curso</span>
    <h4>${course}</h4>
    <a class="example-link ${tone}" data-platform-link="universidade" data-platform-id="${abbr.toLowerCase()}">Explorar universidade 
      <span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
    </a>
  </article>
  `).join('');  
  // Mantém a identificação caso uma imagem externa fique indisponível.
  document.querySelectorAll('.university-logo img').forEach(image => {
    const showAbbreviation = () => {
      image.hidden = true;
      image.nextElementSibling.hidden = false;
    };
    image.addEventListener('error', showAbbreviation, { once: true });
    if (image.complete && !image.naturalWidth) showAbbreviation();
  });
})();
