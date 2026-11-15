// Monta o <img> responsivo a partir de um objeto de imagem da configuração:
// { arquivo, largura, altura }. As versões -480/-800/-1200/-1600 são geradas
// por `npm run imagens`. Largura e altura evitam salto de layout.
export const caminho = (relativo) => `${import.meta.env.BASE_URL}${relativo}`

const LARGURAS = [480, 800, 1200, 1600]

export default function Imagem({ imagem, alt, sizes = "100vw", ...resto }) {
    const srcSet = LARGURAS.map((w) => `${caminho(`${imagem.arquivo}-${w}.webp`)} ${w}w`).join(", ")
    return (
        <img
            src={caminho(`${imagem.arquivo}-800.webp`)}
            srcSet={srcSet}
            sizes={sizes}
            width={imagem.largura}
            height={imagem.altura}
            alt={alt}
            loading="lazy"
            decoding="async"
            {...resto}
        />
    )
}
