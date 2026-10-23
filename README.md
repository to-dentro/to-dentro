# Tô Dentro! — site de divulgação

Home local em HTML, CSS e JavaScript, sem dependências de build. Abra `index.html` com Live Server ou outro servidor estático. O web app permanece no projeto separado.

## Organização

- `css/main.css`: entrada única de estilos para todas as páginas.
- `css/base/`: reset, importações do Google Fonts e Material Symbols, variáveis e estilos globais.
- `css/components/`: estilos dos componentes compartilhados.
- `css/pages/`: estilos específicos de cada página.
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
