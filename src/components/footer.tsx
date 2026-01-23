
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
                            <span className="text-2xl font-serif text-white font-bold tracking-wide">Attorneyster</span>
                        </div>
                        <p className="leading-relaxed text-sm">
                            Comprometidos con la excelencia y la justicia. Brindamos asesoría legal de primer nivel para proteger tus derechos y tu futuro.
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
                            {['Derecho Corporativo', 'Derecho Familiar', 'Derecho Penal', 'Bienes Raíces', 'Lesiones Personales', 'Derecho Laboral'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="flex items-center gap-2 hover:text-accent-gold transition-colors duration-300 text-sm group">
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
                            <h3 className="text-white font-serif text-xl mb-8 relative inline-block">
                                Suscríbete
                                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent-gold"></span>
                            </h3>
                            <p className="text-sm mb-4">Recibe las últimas noticias y actualizaciones legales.</p>
                            <form className="relative">
                                <input
                                    type="email"
                                    placeholder="Tu correo electrónico"
                                    className="w-full bg-primary-dark border border-gray-700 py-3 px-4 text-white focus:outline-none focus:border-accent-gold transition-colors text-sm pr-12"
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-accent-gold hover:text-white transition-colors">
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </form>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-gray-800/50">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                                <span className="text-sm">123 Calle Legal, Oficina 400, Ciudad de México, CP 12345</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-accent-gold shrink-0" />
                                <span className="text-sm">+52 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-accent-gold shrink-0" />
                                <span className="text-sm">contacto@attorneyster.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-primary-dark py-6 border-t border-gray-800">
                <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>&copy; 2024 Attorneyster. Todos los derechos reservados.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-accent-gold transition-colors">Términos y Condiciones</a>
                        <a href="#" className="hover:text-accent-gold transition-colors">Política de Privacidad</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
