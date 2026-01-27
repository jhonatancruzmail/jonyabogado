import { Mail, Phone } from "lucide-react";

export default function ContactInfo() {
    return (

        <div className="hidden md:flex justify-between items-center px-6 lg:px-20 py-2 border-b border-gray-800 text-xs text-gray-400">
            <div className="flex gap-6">
                <span className="hover:text-accent-gold cursor-pointer transition-colors">Inicio</span>
                <span className="hover:text-accent-gold cursor-pointer transition-colors">Sobre Mí</span>
                <span className="hover:text-accent-gold cursor-pointer transition-colors">Páginas</span>
                <span className="hover:text-accent-gold cursor-pointer transition-colors">Contacto</span>
            </div>
            <div className="flex gap-6 items-center">
                <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-accent-gold" />
                    <span>Llámanos: ____________________</span>
                </div>
                <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-accent-gold" />
                    <span>Email: ____________________</span>
                </div>
            </div>
        </div>
    )
}