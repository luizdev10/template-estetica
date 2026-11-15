import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { demo, clinica, seo } from './src/site.config.js'

// Preenche o <head> do index.html a partir de src/site.config.js
const htmlDaConfiguracao = () => ({
  name: 'html-da-configuracao',
  transformIndexHtml(html) {
    const titulo = [demo.ativo ? demo.tituloPrefixo : null, clinica.nome, seo.titulo]
      .filter(Boolean)
      .join(' | ')
    const robots = demo.ativo
      ? '<meta name="robots" content="noindex, nofollow" />'
      : '<meta name="robots" content="index, follow" />'
    return html
      .replaceAll('%TITULO%', titulo)
      .replaceAll('%ROBOTS%', robots)
  },
})

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Template-Estetica/' : '/',
  plugins: [react(), tailwindcss(), htmlDaConfiguracao()],
}))
