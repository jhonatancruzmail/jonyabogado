import { Menu, Scale } from "lucide-react";


export default function Nav() {

    return (
        <nav className="flex justify-between items-center px-6 lg:px-20 py-6 absolute w-full z-50 top-8 md:top-8 bg-transparent">
            <div className="flex items-center gap-2">
                <Scale className="w-8 h-8 text-accent-gold" />
                <span className="text-2xl font-serif text-white font-bold tracking-wide">Attorneyster</span>
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