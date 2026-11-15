import { demo } from "../site.config.js"

export default function FaixaDemo() {
    if (!demo.ativo) return null
    return (
        <p
            role="note"
            className="absolute inset-x-0 top-0 z-[60] flex h-7 items-center justify-center bg-destaque-escuro px-3 text-center text-[11px] tracking-wide text-fundo"
        >
            {demo.faixa}
        </p>
    )
}
