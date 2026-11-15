import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { demo, clinica, seo, faq, contato, profissional } from './src/site.config.js'

const BASE = '/template-estetica/'

const json = (o) => JSON.stringify(o).replace(/</g, '\\u003c')
const attr = (t) => t.replace(/&/g, '&amp;').replace(/"/g, '&quot;')

const htmlDaConfiguracao = () => ({
  name: 'html-da-configuracao',
  transformIndexHtml(html) {
    const titulo = [demo.ativo ? demo.tituloPrefixo : null, clinica.nome, seo.titulo]
      .filter(Boolean)
      .join(' | ')
    const urlSite = `${clinica.url}/`
    const imagem = `${urlSite}${seo.ogImagem}`

    const metas = [
      demo.ativo
        ? '<meta name="robots" content="noindex, nofollow" />'
        : '<meta name="robots" content="index, follow" />',
      `<meta name="description" content="${attr(seo.descricao)}" />`,
      `<link rel="canonical" href="${urlSite}" />`,
      `<meta property="og:title" content="${attr(titulo)}" />`,
      `<meta property="og:description" content="${attr(seo.descricao)}" />`,
      `<meta property="og:type" content="website" />`,
      `<meta property="og:locale" content="pt_BR" />`,
      `<meta property="og:url" content="${urlSite}" />`,
      `<meta property="og:image" content="${imagem}" />`,
      `<meta property="og:image:width" content="1200" />`,
      `<meta property="og:image:height" content="630" />`,
      `<meta property="og:image:alt" content="${attr(seo.ogImagemAlt)}" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:title" content="${attr(titulo)}" />`,
      `<meta name="twitter:description" content="${attr(seo.descricao)}" />`,
      `<meta name="twitter:image" content="${imagem}" />`,
    ].join('\n    ')

    const p = contato.enderecoPartes
    const negocio = {
      '@context': 'https://schema.org',
      '@type': seo.tipoSchema,
      name: clinica.nome,
      description: seo.descricao,
      url: urlSite,
      image: imagem,
      telephone: `+${contato.whatsapp}`,
      email: contato.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: p.rua,
        addressLocality: p.cidade,
        addressRegion: p.uf,
        postalCode: p.cep,
        addressCountry: 'BR',
      },
      openingHours: contato.horarioSchema,
      sameAs: contato.instagram ? [`https://instagram.com/${contato.instagram}`] : undefined,
      employee: {
        '@type': 'Person',
        name: profissional.nome,
        jobTitle: profissional.area,
      },
    }
    const perguntas = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.itens.map((i) => ({
        '@type': 'Question',
        name: i.pergunta,
        acceptedAnswer: { '@type': 'Answer', text: i.resposta },
      })),
    }

    return html
      .replaceAll('%TITULO%', titulo)
      .replaceAll('%METAS%', metas)
      .replaceAll('%JSONLD_NEGOCIO%', json(negocio))
      .replaceAll('%JSONLD_FAQ%', json(perguntas))
  },
})

export default defineConfig(({ command }) => ({
  base: command === 'build' ? BASE : '/',
  plugins: [react(), tailwindcss(), htmlDaConfiguracao()],
}))
