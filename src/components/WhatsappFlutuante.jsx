import { MessageCircle } from "lucide-react";
import BotaoWhatsapp from "./BotaoWhatsapp.jsx";
import { contato } from "../site.config.js";

export default function WhatsappFlutuante() {
    return (
        <BotaoWhatsapp
            texto={contato.mensagemFlutuante}
            aria-label="Conversar no WhatsApp"
            className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-destaque text-fundo shadow-lg shadow-destaque/20 transition-transform duration-200 ease-out hover:bg-destaque-escuro active:scale-[0.93] motion-reduce:transition-none"
        >
            <MessageCircle aria-hidden="true" />
        </BotaoWhatsapp>
    );
}
