// Gera versões responsivas (WebP) das imagens de imagens-originais/ em public/imagens/.
// Uso: npm run imagens
import sharp from 'sharp'
import { readdirSync, mkdirSync } from 'node:fs'
import { join, parse } from 'node:path'

const entrada = 'imagens-originais'
const saida = 'public/imagens'
const larguras = [480, 800, 1200, 1600]

mkdirSync(saida, { recursive: true })

for (const arquivo of readdirSync(entrada).filter((f) => f.endsWith('.webp'))) {
  const { name } = parse(arquivo)
  const { width } = await sharp(join(entrada, arquivo)).metadata()
  for (const w of larguras.filter((l) => l <= width)) {
    await sharp(join(entrada, arquivo))
      .resize({ width: w })
      .webp({ quality: 78 })
      .toFile(join(saida, `${name}-${w}.webp`))
  }
  console.log(`${name}: ${larguras.filter((l) => l <= width).join(', ')}`)
}
