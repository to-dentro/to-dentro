# Tô Dentro! — site de divulgação

Home local em HTML, CSS e JavaScript, sem dependências de build. Abra `index.html` com Live Server ou outro servidor estático. O web app permanece no projeto separado.

## Organização

- `css/main.css`: entrada única de estilos para todas as páginas.
- `css/base/`: reset, importações do Google Fonts e Material Symbols, variáveis e estilos globais.
- `css/components/`: estilos dos componentes compartilhados.
- `css/pages/`: estilos específicos de cada página.
- `css/responsive.css`: todos os media queries, carregados por último; faixas de 1600, 1200, 1100, 900, 600 e 380 px, além da preferência por movimento reduzido. No desktop amplo, a seção seguinte cobre a base do mapa; até 1100 px o celular aparece inteiro. A equipe usa três colunas no tablet e duas no celular, com a última integrante centralizada.
- `js/components/`: componentes `<site-header>` e `<site-footer>` sem framework.
- `js/home.js`: dados e renderização dos cartões, equipe e reservas visuais das imagens.
- `js/config.js`: URL central do web app (`platformUrl`). Configurada com `https://carolfantinate.github.io/to-dentro/`; botões e atalhos do rodapé usam essa base. Não há instalação PWA implementada neste site.

Classes e arquivos usam palavras separadas por hífen, sem duplo underline. Cores, tipografia, espaços, raios e largura do conteúdo ficam em `css/base/tokens.css`. Os textos principais ficam em HTML sem depender de JavaScript; cartões e componentes compartilhados usam JavaScript.

## Imagens a exportar

Salve os arquivos com estes nomes exatos (letras minúsculas, sem acentos):

| Pasta | Nome | Conteúdo e exportação sugerida |
| --- | --- | --- |
| `assets/images/mockups/` | `hero-universidade.png` | Celular com a mão e tela da universidade; PNG com fundo transparente, pelo menos 1200 px de altura. Recorte próximo ao objeto, sem texto ou fundo da seção. |
| `assets/images/mockups/` | `mapa-universidades.png` | Celular com tela do mapa; PNG com fundo transparente, pelo menos 1600 px de altura. Exportar o celular inteiro: o CSS faz o corte inferior. |
| `assets/images/team/` | `ana-luiza-machado.jpg` | Retrato quadrado, mínimo 400 × 400 px. |
| `assets/images/team/` | `ana-luiza-marchiori.jpg` | Retrato quadrado, mínimo 400 × 400 px. |
| `assets/images/team/` | `barbara-goncalves.jpg` | Retrato quadrado, mínimo 400 × 400 px. |
| `assets/images/team/` | `beatriz-gagliano.jpg` | Retrato quadrado, mínimo 400 × 400 px. |
| `assets/images/team/` | `caroline-fantinato.jpg` | Retrato quadrado, mínimo 400 × 400 px. |

Os recortes circulares das fotos são feitos no CSS. Não é necessário exportá-los redondos. Evite margens transparentes excessivas nos mockups. Se usar outro formato, atualize os caminhos em `index.html` ou `js/home.js`.

O logotipo em `assets/images/brand/logo.svg` foi reaproveitado do web app. Os mockups finais já estão integrados, sem textos de reserva. Retratos indisponíveis continuam usando iniciais como reserva. Após salvar as imagens, recarregue a página.

## Próximas definições

Definir conteúdo e URLs das próximas páginas. A navegação do cabeçalho usa seções da home; os grupos Explore e Sua jornada do rodapé levam às páginas do aplicativo. O acesso ao teste vocacional é controlado pelo próprio aplicativo. Não há páginas extras nem publicação configuradas.


## Página de funcionalidades

`funcionalidades.html` segue a segunda referência e compartilha cabeçalho, rodapé, fontes, ícones e estilos globais com a home. O atributo `active="funcionalidades"` destaca o link atual. `css/pages/funcionalidades.css` contém a composição; os media queries continuam em `css/responsive.css`. `js/funcionalidades.js` monta recursos, etapas e exemplos por listas. `js/site.js` centraliza os links do app, sempre com nova aba, das duas páginas.

A ilustração de caminhos está em `assets/images/illustrations/novos-caminhos.png`. Para usar os mockups da referência, exporte PNG com fundo transparente, sem textos da seção:

- `assets/images/mockups/calendario-ingresso.png`: composição dos quatro celulares com datas e calendário, mínimo 1600 px de altura.
- `assets/images/mockups/teste-vocacional.png`: mãos segurando o celular com o resultado vocacional, mínimo 1400 px de altura.

Os caminhos dos dois mockups já estão no HTML. Basta salvar os PNGs com os nomes indicados e recarregar a página. Enquanto os arquivos não existem, os espaços ficam vazios, sem texto ou ilustração de reserva. O botão do teste abre a página protegida do aplicativo; a autenticação continua sendo responsabilidade do app.


## Página Como funciona

`como-funciona.html` implementa a terceira tela, com a jornada em três momentos, benefícios e princípios. O menu usa `active="como-funciona"` e os atalhos correspondentes do site levam à nova página. Layout em `css/pages/como-funciona.css`, listas de cards em `js/como-funciona.js` e todas as adaptações em `css/responsive.css`.

Salve estes PNGs em `assets/images/mockups/` e recarregue a página; os caminhos já estão preparados:

- `como-funciona-hero.png`: mão segurando o celular com a tela inicial, fundo transparente, pelo menos 1200 px de altura. A imagem fica encostada à esquerda e na base da seção.
- `como-funciona-autoconhecimento.png`: celular com a pesquisa inicial, fundo transparente, pelo menos 1600 px de altura.
- `como-funciona-exploracao.png`: celular com a comparação de notas, fundo transparente, pelo menos 1600 px de altura.
- `como-funciona-planejamento.png`: celular com a tela de cursos, fundo transparente, pelo menos 1600 px de altura.

Exporte os três aparelhos inteiros. O CSS esconde a base no desktop e permite visualizar o aparelho completo no celular. Até salvar os arquivos, os espaços ficam vazios, sem mockups substitutos ou textos de reserva.
