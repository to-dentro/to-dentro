(() => {
  'use strict';
  const benefits = [
    ['auto_awesome', 'Informação reunida', 'Cursos, instituições e oportunidades.', 'preview-blue'],
    ['check', 'Escolhas conscientes', 'Ferramentas para comparar e refletir.', 'preview-green'],
    ['arrow_forward', 'Planejamento possível', 'Seu futuro organizado em etapas.', 'preview-yellow']
  ];
  document.querySelector('#how-benefit-list').innerHTML = benefits.map(([icon, title, text, tone]) => `
    <article class="how-benefit"><span class="how-benefit-icon ${tone}"><span class="material-symbols-rounded" aria-hidden="true">${icon}</span></span><div><h3>${title}</h3><p>${text}</p></div></article>
  `).join('');
  const principles = [
    ['Missão', 'O que nos move', 'Democratizar o acesso à informação sobre o ensino superior, oferecendo orientação clara, acessível e acolhedora para que estudantes explorem oportunidades e façam escolhas conscientes.', 'preview-blue'],
    ['Visão', 'Onde queremos chegar', 'Ser uma referência em orientação universitária acessível, contribuindo para que mais jovens reconheçam seu potencial e encontrem caminhos possíveis para continuar seus estudos.', 'preview-green'],
    ['Valores', 'O que acreditamos', 'Acreditamos em educação transformadora, inclusão, empatia, autonomia, transparência e respeito à diversidade de trajetórias e sonhos.', 'preview-yellow']
  ];
  document.querySelector('#principle-list').innerHTML = principles.map(([title, label, text, tone], index) => `
    <article class="principle-card"><span class="number-badge ${tone}">0${index + 1}</span><span class="eyebrow">${label}</span><h3>${title}</h3><span class="principle-rule ${tone}" aria-hidden="true"></span><p>${text}</p></article>
  `).join('');
})();
