import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { demo, clinica, seo, faq } from './src/site.config.js'

const htmlDaConfiguracao = () => ({
  name: 'html-da-configuracao',
  transformIndexHtml(html) {
    const titulo = [demo.ativo ? demo.tituloPrefixo : null, clinica.nome, seo.titulo]
      .filter(Boolean)
      .join(' | ')
    const robots = demo.ativo
      ? '<meta name="robots" content="noindex, nofollow" />'
      : '<meta name="robots" content="index, follow" />'
    const json = (o) => JSON.stringify(o).replace(/</g, '\u003c')
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.itens.map((i) => ({
        '@type': 'Question',
        name: i.pergunta,
        acceptedAnswer: { '@type': 'Answer', text: i.resposta },
      })),
    }
    return html
      .replaceAll('%JSONLD_FAQ%', json(faqSchema))
      .replaceAll('%TITULO%', titulo)
      .replaceAll('%ROBOTS%', robots)
  },
})

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Template-Estetica/' : '/',
  plugins: [react(), tailwindcss(), htmlDaConfiguracao()],
}))
