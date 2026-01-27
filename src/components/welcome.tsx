import { Briefcase, Scale } from "lucide-react";
import Image from "next/image";

export default function Welcome() {
    return (

        <section className="py-20 lg:py-32 bg-secondary-dark relative">
            <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Collage */}
                <div className="relative h-[500px] w-full">
                    <div className="absolute top-0 left-0 w-3/5 h-3/5 overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop"
                            alt="Library"
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    <div className="absolute bottom-0 right-10 w-3/5 h-3/5 overflow-hidden border-4 border-secondary-dark shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1767628711891-3e948c13b478?q=80&w=800&auto=format&fit=crop"
                            alt="Gavel"
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    {/* Vertical text or decoration could go here */}
                </div>

                {/* Right Content */}
                <div className="space-y-8">
                    <h2 className="text-3xl lg:text-4xl font-serif text-white">
                        Quién Soy - <br />
                        Abogado y Contador Público
                    </h2>
                    <div className="flex items-center gap-2">
                        <span className="h-[1px] w-12 bg-accent-gold"></span>
                        <Scale className="text-accent-gold w-6 h-6" />
                        <span className="h-[1px] w-12 bg-accent-gold"></span>
                    </div>
                    <div className="space-y-4">
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Soy Abogado y Contador Público, con más de 15 años de experiencia en el análisis integral de asuntos legales, tributarios, contables y financieros. Mi ejercicio profesional se orienta a brindar asesoría técnica, clara y responsable, articulando el derecho con la contabilidad y las finanzas para ofrecer soluciones sólidas y sostenibles a personas y empresas en la toma de decisiones legales y económicas, con enfoque preventivo, cumplimiento normativo y análisis financiero.
                        </p>
                        <p className="text-gray-400 leading-relaxed text-sm font-medium border-l border-accent-gold pl-4 italic">
                            "Mi trabajo se orienta a ofrecer soluciones claras, legales y sostenibles, integrando el derecho con la contabilidad y las finanzas para proteger el patrimonio y garantizar seguridad jurídica con respaldo profesional en cada caso."
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700 relative">
                            <Image src="/abogado1.webp" alt="Johnny Augusto Peña Murcia" fill className="object-cover" />
                        </div>
                        <div>
                            <p className="text-accent-gold font-serif text-xl uppercase tracking-wider">Johnny Augusto Peña Murcia</p>
                        </div>
                    </div>

                    <div className="flex gap-6 mt-8">
                        <div className="bg-gray-800 p-6 flex flex-col justify-center gap-2 w-56 border border-gray-700">
                            <div className="flex items-center gap-3">
                                <Briefcase className="w-6 h-6 text-accent-gold" />
                                <span className="text-2xl font-bold text-white">15+</span>
                            </div>
                            <span className="text-xs text-gray-400 uppercase tracking-tighter">Años de Experiencia Interdisciplinaria</span>
                        </div>
                        <div className="bg-accent-gold p-6 flex flex-col justify-center gap-2 w-56">
                            <div className="flex items-center gap-3">
                                <Scale className="w-6 h-6 text-black" />
                                <span className="text-2xl font-bold text-black uppercase">Firme</span>
                            </div>
                            <span className="text-xs text-black font-bold uppercase tracking-tighter">Seguridad Jurídica y Financiera</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}