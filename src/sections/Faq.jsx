import { faq } from "../site.config.js"
import { useReveal } from "../hooks/useReveal.js"

export default function Faq() {
    const [ref, visivel] = useReveal({ threshold: 0.1 })

    return (
        <section id="faq" aria-labelledby="faq-titulo" className="scroll-mt-28 bg-borda pb-20 pt-16">
            <div
                ref={ref}
                className={`mx-6 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none md:mx-10 lg:mx-auto lg:max-w-3xl ${
                    visivel ? "translate-y-0 opacity-100 blur-none" : "translate-y-8 opacity-0 blur-sm"
                }`}
            >
                <h2 id="faq-titulo" className="font-display text-4xl md:text-5xl">
                    {faq.titulo}
                </h2>
                <p className="mt-3 text-xs text-suave">{faq.aviso}</p>

                <div className="mt-8 border-t border-texto/15">
                    {faq.itens.map((item) => (
                        <details key={item.pergunta} className="group border-b border-texto/15">
                            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 font-display text-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destaque [&::-webkit-details-marker]:hidden">
                                {item.pergunta}
                                <span
                                    aria-hidden="true"
                                    className="text-2xl leading-none text-destaque transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                                >
                                    +
                                </span>
                            </summary>
                            <p className="pb-5 pr-8 text-sm leading-relaxed text-texto/80">{item.resposta}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    )
}
