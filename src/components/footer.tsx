
import { Facebook, Instagram, Linkedin, Twitter, Scale, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary-dark text-gray-400 border-t border-gray-800">
            {/* Main Footer Content */}
            <div className="container mx-auto px-6 lg:px-20 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <Scale className="w-8 h-8 text-accent-gold" />
                            <span className="text-xl font-serif text-white font-bold tracking-wide">JONNY PEÑA</span>
                        </div>
                        <p className="leading-relaxed text-sm">
                            Abogado y Contador Público. Especialista en la integración estratégica del derecho con la realidad financiera para brindar soluciones sólidas y sostenibles.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-accent-gold hover:text-black hover:border-accent-gold transition-all duration-300">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-accent-gold hover:text-black hover:border-accent-gold transition-all duration-300">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-accent-gold hover:text-black hover:border-accent-gold transition-all duration-300">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-accent-gold hover:text-black hover:border-accent-gold transition-all duration-300">
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-serif text-xl mb-8 relative inline-block">
                            Enlaces Rápidos
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent-gold"></span>
                        </h3>
                        <ul className="space-y-4">
                            {['Inicio', 'Sobre Nosotros', 'Áreas de Práctica', 'Abogados', 'Blog', 'Contacto'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="flex items-center gap-2 hover:text-accent-gold transition-colors duration-300 text-sm group">
                                        <span className="w-1.5 h-1.5 bg-accent-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Practice Areas */}
                    <div>
                        <h3 className="text-white font-serif text-xl mb-8 relative inline-block">
                            Áreas de Práctica
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent-gold"></span>
                        </h3>
                        <ul className="space-y-4">
                            {['Asesoría Jurídica', 'Asesoría de Familia', 'Asesoría Tributaria', 'Contabilidad', 'Cumplimiento'].map((item) => (
                                <li key={item}>
                                    <a href="#servicios" className="flex items-center gap-2 hover:text-accent-gold transition-colors duration-300 text-sm group">
                                        <span className="w-1.5 h-1.5 bg-accent-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter & Contact */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-white font-serif text-xl mb-4 relative inline-block">
                                Frase de Cierre
                            </h3>
                            <p className="text-accent-gold italic text-sm leading-relaxed border-l border-accent-gold pl-4">
                                “Donde el derecho, la contabilidad y las finanzas se entienden en conjunto.”
                            </p>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-gray-800/50">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                                <span className="text-sm">Calle 4 # 1B-62 Barrio Quinche, Pitalito, Huila</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-accent-gold shrink-0" />
                                <div className="flex flex-col text-sm">
                                    <a href="https://wa.me/573143873177" target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold transition-colors">314 387 3177</a>
                                    <a href="https://wa.me/573203976761" target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold transition-colors">320 397 6761</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-accent-gold shrink-0" />
                                <a href="mailto:jonyjp1977@hotmail.com" className="text-sm hover:text-accent-gold transition-colors">jonyjp1977@hotmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Legal Notice */}
                <div className="mt-16 pt-8 border-t border-gray-800">
                    <p className="text-[10px] text-gray-500 text-center uppercase tracking-widest leading-relaxed max-w-3xl mx-auto">
                        Aviso legal: La información contenida en este sitio web tiene fines informativos y no constituye asesoría legal o contable sin la correspondiente contratación profesional.
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-primary-dark py-6 border-t border-gray-800">
                <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>&copy; {new Date().getFullYear()} Jony Augusto Peña Murcia. Todos los derechos reservados.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-accent-gold transition-colors">Términos y Condiciones</a>
                        <a href="#" className="hover:text-accent-gold transition-colors">Política de Privacidad</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
