// Monta o <img> a partir de um objeto de imagem da configuração:
// { arquivo, largura, altura }. Largura e altura evitam salto de layout.
export const caminho = (relativo) => `${import.meta.env.BASE_URL}${relativo}`

export default function Imagem({ imagem, alt, ...resto }) {
    return (
        <img
            src={caminho(`${imagem.arquivo}.webp`)}
            width={imagem.largura}
            height={imagem.altura}
            alt={alt}
            {...resto}
        />
    )
}
