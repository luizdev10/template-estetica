import { useState, useEffect, useRef } from "react"
import { ArrowUpRight, X } from "lucide-react"
import { procedimentos, rotulos, avisoProcedimentos } from "../site.config.js"
import Imagem from "../lib/imagem.jsx"
import { useReveal } from "../hooks/useReveal.js"

export default function Procedimentos() {
    const [selecionado, setSelecionado] = useState(null)
    const [refTitulo, tituloVisivel] = useReveal({ threshold: 0.1 })
    const [refGrade, visivel] = useReveal({ threshold: 0.1 })

    const destaque = procedimentos.find((p) => p.destaque) ?? procedimentos[procedimentos.length - 1]
    const resto = procedimentos.filter((p) => p !== destaque)

    return (

        <section id="procedimentos" className="scroll-mt-28 bg-borda pb-20 pt-16">
            <div
                ref={refTitulo}
                className={`mx-6 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none md:mx-10 lg:mx-auto lg:max-w-5xl ${
                    tituloVisivel ? "translate-y-0 opacity-100 blur-none" : "translate-y-8 opacity-0 blur-sm"
                }`}
            >
                <h2 className="font-display text-4xl md:text-6xl">
                    Cuidado pensado <br />
                    para <span className="text-destaque-escuro">cada rosto.</span>
                </h2>

                <p className="mt-4 max-w-xs text-sm text-suave">
                    Toque em um procedimento para saber mais.
                </p>
            </div>

            <div ref={refGrade} className="mx-6 flex flex-col gap-3 pt-10 md:mx-10 md:gap-4 lg:mx-auto lg:max-w-5xl lg:flex-row lg:gap-6">
                <CardProcedimento
                    item={destaque}
                    destaque
                    visivel={visivel}
                    atraso={0}
                    idGrao="grao-proc-destaque"
                    onClick={() => setSelecionado(destaque)}
                />

                <div className="grid flex-1 grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
                    {resto.map((item, i) => (
                        <CardProcedimento
                            key={item.nome}
                            item={item}
                            visivel={visivel}
                            atraso={(i + 1) * 110}
                            idGrao={`grao-proc-${i}`}
                            onClick={() => setSelecionado(item)}
                        />
                    ))}
                </div>
            </div>

            <div
                className={`mx-6 mt-14 flex flex-col items-start gap-4 border-t border-texto/15 pt-8 transition-all delay-200 duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none md:mx-10 lg:mx-auto lg:max-w-5xl ${
                    visivel ? "translate-y-0 opacity-100 blur-none" : "translate-y-8 opacity-0 blur-sm"
                }`}
            >
                <p className="max-w-sm font-display text-3xl leading-tight">
                    Não sabe qual escolher? A avaliação define o que faz sentido para você.
                </p>
                <a
                    href="#agendar"
                    className="inline-block rounded-full bg-destaque px-8 py-4 text-xs uppercase tracking-[0.2em] text-fundo transition-all duration-200 ease-out hover:bg-destaque-escuro active:scale-[0.97]"
                >
                    Agendar avaliação
                </a>
            </div>

            {selecionado && (
                <ModalProcedimento item={selecionado} onFechar={() => setSelecionado(null)} />
            )}
        </section>
    )
}

function CardProcedimento({ item, destaque, visivel, atraso, idGrao, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-haspopup="dialog"
            style={visivel ? { transitionDelay: `${atraso}ms` } : undefined}
            className={`group relative overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destaque focus-visible:ring-offset-2 focus-visible:ring-offset-borda transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none active:scale-[0.97] ${
                destaque ? "aspect-[4/3] lg:aspect-auto lg:w-80 lg:shrink-0 xl:w-96" : "aspect-[3/4]"
            } ${visivel ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
            <Imagem
                imagem={item.imagem}
                alt=""
                sizes={destaque ? "(min-width: 1280px) 384px, (min-width: 1024px) 320px, 100vw" : "(min-width: 768px) 33vw, 50vw"}
                style={{ objectPosition: item.posicao, animationDelay: visivel ? `${atraso}ms` : undefined }}
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
                    visivel ? "animate-revelar-foto motion-reduce:animate-none" : "scale-110 [clip-path:inset(0_0_100%_0)]"
                }`}
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/10" />

            <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.15] mix-blend-overlay motion-reduce:hidden" aria-hidden="true">
                <filter id={idGrao}>
                    <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.35 0" />
                </filter>
                <rect width="100%" height="100%" filter={`url(#${idGrao})`} />
            </svg>

            <ArrowUpRight aria-hidden="true" className="absolute right-3 top-3 text-amarelo transition-transform duration-200 ease-out group-hover:rotate-45" />

            <div className="absolute inset-x-0 bottom-0">
                {destaque && rotulos.maisProcurado && (
                    <p className="mx-4 mt-4 text-[10px] font-medium uppercase tracking-[0.2em] text-amarelo">
                        {rotulos.maisProcurado}
                    </p>
                )}
                <p className="m-4 font-display text-xl text-fundo md:text-2xl">{item.nome}</p>
            </div>
        </button>
    )
}

function ModalProcedimento({ item, onFechar }) {
    const ref = useRef(null)

    useEffect(() => {
        const d = ref.current
        if (!d.open) d.showModal()
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = ""
            if (d.open) d.close()
        }
    }, [])

    return (
        <dialog
            ref={ref}
            aria-labelledby="modal-titulo"
            aria-describedby="modal-detalhe"
            onClose={onFechar}
            onClick={(e) => e.target === ref.current && ref.current.close()}
            className="m-auto w-[calc(100%-2rem)] max-w-md overflow-visible rounded-lg bg-fundo p-0 text-texto backdrop:bg-black/60"
        >
            <div className="relative max-h-[90dvh] overflow-y-auto rounded-lg">
                <Imagem
                    imagem={item.imagem}
                    alt={item.alt}
                    sizes="448px"
                    style={{ objectPosition: item.posicao }}
                    className="aspect-[3/2] w-full object-cover"
                />

                <div className="flex flex-col gap-3 p-6">
                    <h3 id="modal-titulo" className="font-display text-4xl">
                        {item.nome}
                    </h3>

                    <p id="modal-detalhe" className="text-texto/80">
                        {item.detalhe ?? item.descricao}
                    </p>
                    <p className="text-xs text-suave">{avisoProcedimentos}</p>

                    <a
                        href="#agendar"
                        onClick={() => ref.current.close()}
                        className="mt-2 block rounded-full bg-destaque p-4 text-center text-fundo transition-all duration-200 ease-out hover:bg-destaque-escuro active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destaque focus-visible:ring-offset-2"
                    >
                        Agendar avaliação
                    </a>
                </div>

                <button
                    type="button"
                    aria-label="Fechar"
                    onClick={() => ref.current.close()}
                    className="absolute right-2 top-2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-fundo transition-transform duration-150 ease-out active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amarelo"
                >
                    <X aria-hidden="true" />
                </button>
            </div>
        </dialog>
    )
}
