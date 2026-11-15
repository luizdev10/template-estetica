import { useEffect, useRef } from "react"
import { X } from "lucide-react"
import { clinica, contato, privacidade } from "../site.config.js"

// Política de privacidade em janela (<dialog> nativo: Esc fecha e o foco fica preso).
// MODELO a ser revisado por profissional (advogado/encarregado de dados).
export default function PoliticaPrivacidade({ aberto, onFechar }) {
    const ref = useRef(null)

    useEffect(() => {
        const d = ref.current
        if (!d) return
        if (aberto && !d.open) {
            d.showModal()
            document.body.style.overflow = "hidden"
        }
        if (!aberto && d.open) d.close()
        return () => {
            document.body.style.overflow = ""
        }
    }, [aberto])

    return (
        <dialog
            ref={ref}
            aria-labelledby="privacidade-titulo"
            onClose={onFechar}
            onClick={(e) => e.target === ref.current && onFechar()}
            className="m-auto max-h-[85dvh] w-[calc(100%-2rem)] max-w-xl overflow-y-auto rounded-lg bg-fundo p-0 text-texto backdrop:bg-black/60"
        >
            <div className="relative p-6 sm:p-8">
                <button
                    type="button"
                    onClick={onFechar}
                    aria-label="Fechar política de privacidade"
                    className="absolute right-3 top-3 inline-flex h-11 w-11 items-center justify-center rounded-full text-texto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destaque"
                >
                    <X aria-hidden="true" />
                </button>

                <p className="mb-3 inline-block rounded-full bg-borda px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-texto/80">
                    Modelo a ser revisado por profissional
                </p>
                <h2 id="privacidade-titulo" className="font-display text-3xl leading-tight">
                    Política de privacidade
                </h2>

                <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed text-texto/85">
                    <p>
                        Este texto é um modelo. Antes de publicar, ele deve ser revisado por
                        profissional habilitado e adequado à realidade do cliente (Lei Geral de
                        Proteção de Dados, Lei nº 13.709/2018).
                    </p>

                    <section>
                        <h3 className="font-display text-xl">Quem é o responsável</h3>
                        <p>
                            {clinica.nome}. CNPJ/CPF: <strong>{privacidade.cnpjCpf}</strong>.
                            Responsável: <strong>{privacidade.responsavel}</strong>.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-display text-xl">Quais dados e para quê</h3>
                        <p>
                            No formulário de avaliação pedimos seu nome e seu WhatsApp, além dos
                            serviços de interesse e do período preferido. Esses dados são usados
                            apenas para responder ao seu pedido de avaliação.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-display text-xl">Como os dados trafegam</h3>
                        <p>
                            O formulário deste site não envia dados a nenhum servidor. Ele monta uma
                            mensagem e abre o WhatsApp no seu aparelho; ela só é enviada se você
                            confirmar o envio no próprio aplicativo. A partir daí, valem também os
                            termos e a política do WhatsApp.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-display text-xl">Seus direitos</h3>
                        <p>
                            Você pode pedir informação, correção ou exclusão dos seus dados, e
                            retirar o consentimento quando quiser. Canal para solicitações:{" "}
                            <strong>{privacidade.canalTitular}</strong> (contato geral:{" "}
                            {contato.email}).
                        </p>
                    </section>

                    <section>
                        <h3 className="font-display text-xl">Serviços de terceiros</h3>
                        <p>
                            Este site pode exibir um mapa do Google Maps e carregar fontes do Google
                            Fonts, serviços de terceiros com suas próprias políticas. TODO: o
                            responsável deve conferir se há outras ferramentas em uso (estatísticas,
                            anúncios).
                        </p>
                    </section>

                    <p className="text-xs text-suave">
                        Última atualização: {privacidade.atualizadoEm}
                    </p>
                </div>
            </div>
        </dialog>
    )
}
