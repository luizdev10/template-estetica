# Template Estética

Template de site para clínicas de estética e harmonização facial, feito com React 18, Vite e Tailwind CSS v4. É uma página única (sem rotas) com início, procedimentos, sobre, perguntas frequentes, localização e contato, com formulário que monta uma mensagem de WhatsApp (nenhum dado vai a servidor).

Esta versão é uma **demonstração**: todos os dados são fictícios e o site pede aos buscadores que não o indexem.

## Como rodar

```bash
npm install
npm run dev
```

Para gerar a versão de produção (pasta `dist/`) e visualizá-la:

```bash
npm run build
npm run preview
```

## Como personalizar

Quase tudo vem de **`src/site.config.js`**. Cada bloco explica o que controla:

- `demo`: liga e desliga o modo demonstração (faixa no topo, aviso no formulário, "Demonstração" no título e `noindex`).
- `clinica`: nome, slogan, cidade, UF e endereço do site publicado (`url`).
- `hero`: textos do topo.
- `profissional`: nome, área, bio, formação (`credenciais`) e `registro` no conselho (sigla e número).
- `contato`: WhatsApp (formato `55` + DDD + número, só dígitos), Instagram, e-mail, endereço, horário e link do mapa.
- `rotulos.maisProcurado`: deixe `null` para remover o rótulo "Mais procurado".
- `procedimentos`: nome, descrição curta, detalhe, imagem e texto alternativo de cada card.
- `faq`: perguntas e respostas (também geram os dados estruturados FAQPage).
- `rodape`, `seo` e `privacidade`: aviso informativo, título e descrição para buscadores e dados da política de privacidade.

O título da página, as metatags, o Open Graph e o JSON-LD (clínica e perguntas frequentes) são gerados a partir dessa configuração durante o build, em `vite.config.js`.

### Imagens

1. Coloque as fotos originais (WebP) em `imagens-originais/`.
2. Rode `npm run imagens` para gerar as versões de 480, 800, 1200 e 1600 px em `public/imagens/`.
3. Declare a imagem em `src/site.config.js` (`arquivo`, `largura`, `altura`) e escreva o texto alternativo.
4. Registre a origem e a licença de cada foto em `IMAGENS.md`.

Troque também `public/og-image.jpg` (1200x630) e `public/favicon.svg`.

### Cores e fontes

Os tokens ficam em `src/temas/paletas.css`, no bloco `@theme`.

## Textos de saúde e privacidade

Os textos de procedimentos, perguntas frequentes e a política de privacidade são **modelos genéricos, sem promessa de resultado**, e precisam ser revisados pelo profissional de saúde responsável (e, no caso da privacidade, por profissional habilitado). A publicidade de procedimentos de saúde segue regras do conselho profissional (CFM, CFO, CFBM, COFFITO etc.). Confira textos, fotos e rótulos antes de publicar.

## Antes de entregar a um cliente

- [ ] Trocar todos os dados de exemplo em `src/site.config.js` (nome, profissional, endereço, WhatsApp, Instagram, e-mail, horário, cidade e UF).
- [ ] Preencher o registro no conselho profissional e a formação.
- [ ] Usar somente fotos autorizadas e preencher `IMAGENS.md`.
- [ ] Conferir as regras de publicidade do conselho profissional (incluindo o rótulo "Mais procurado", que o cliente precisa poder comprovar, ou remover com `rotulos.maisProcurado: null`).
- [ ] Revisar com o profissional os textos de procedimentos e as perguntas frequentes.
- [ ] Preencher e revisar a política de privacidade (campos "PREENCHER PELO RESPONSÁVEL" em `privacidade`).
- [ ] Remover o aviso de demonstração e o `noindex`: em `src/site.config.js`, trocar `demo.ativo` para `false`.
- [ ] Trocar `clinica.url` pelo domínio real e atualizar `public/robots.txt` e `public/sitemap.xml`.
- [ ] Testar o WhatsApp, o formulário, o mapa e o site no celular.
- [ ] Buscar no projeto por `exemplo`, `00000`, `PREENCHER` e `Cidade`.

## Publicar no GitHub Pages

O deploy é automático: cada `push` na branch `main` roda `.github/workflows/deploy.yml`. Em *Settings > Pages*, a fonte precisa estar como *GitHub Actions*.

O `base` do Vite (`vite.config.js`, constante `BASE`) precisa ser igual ao nome do repositório, em minúsculas e entre barras, por exemplo `/template-estetica/`.

## Renomear o repositório para minúsculas

O site tem um único endereço (`/template-estetica/`), sem rotas internas, então recarregar a página não gera erro 404.

```bash
gh repo rename template-estetica
git remote set-url origin https://github.com/luizdev10/template-estetica.git
git remote -v
```

Depois do rename, publique as alterações de `base`, `robots.txt`, `sitemap.xml` e `clinica.url`, que já apontam para o endereço novo:

```bash
git push origin main
```

Conferência:

```bash
npm run build
npm run preview -- --base /template-estetica/
```

Abra `http://localhost:4173/template-estetica/`, recarregue a página e confirme que não há 404. Depois do deploy, abra `https://luizdev10.github.io/template-estetica/`, recarregue e abra a aba *Network* para conferir que CSS, JavaScript e imagens carregam com status 200. O endereço antigo (`/Template-Estetica/`) deixa de funcionar, então atualize links que apontem para ele.
