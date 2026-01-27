import { Menu, Scale } from "lucide-react";
import Image from "next/image";


export default function Nav() {

    return (
        <nav className="flex justify-between items-center px-6 lg:px-20 py-6 bg-transparent border-b border-gray-800/50">
            <div className="flex items-center gap-2">
                <Image src="/Logo.png" alt="Logo" width={50} height={50} />
                <span className="text-2xl font-serif text-white font-bold tracking-wide">JONY PEÑA</span>
            </div>
            <div className="hidden md:block">
                <button className="px-6 py-3 border border-gray-600 text-white hover:bg-accent-gold hover:text-black hover:border-accent-gold transition-all duration-300 uppercase text-xs tracking-wider">
                    Agendar Consulta
                </button>
            </div>
            <div className="block md:hidden text-white">
                <Menu className="w-8 h-8" />
            </div>
        </nav>
    )

}