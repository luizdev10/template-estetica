import { contato } from "../site.config.js";

export default function BotaoWhatsapp({ texto, className, children, ...resto }) {
    return (
        <a
            href={`https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(texto)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
            {...resto}
        >
            {children}
        </a>
    );
}
