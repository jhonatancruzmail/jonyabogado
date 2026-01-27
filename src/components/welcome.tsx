"use client";
import { Briefcase, Scale } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Welcome() {
    return (

        <section className="py-20 lg:py-32 bg-secondary-dark relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Collage */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[500px] w-full"
                >
                    <div className="absolute top-0 left-0 w-3/5 h-3/5 overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop"
                            alt="Library"
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="absolute bottom-0 right-10 w-3/5 h-3/5 overflow-hidden border-4 border-secondary-dark shadow-2xl"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1767628711891-3e948c13b478?q=80&w=800&auto=format&fit=crop"
                            alt="Gavel"
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </motion.div>
                </motion.div>

                {/* Right Content */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-serif text-white">
                            Quién Soy - <br />
                            Abogado y Contador Público
                        </h2>
                        <div className="flex items-center gap-2 mt-4">
                            <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: 48 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="h-[1px] bg-accent-gold"
                            ></motion.span>
                            <Scale className="text-accent-gold w-6 h-6" />
                            <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: 48 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="h-[1px] bg-accent-gold"
                            ></motion.span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Soy Abogado y Contador Público, con más de 15 años de experiencia en el análisis integral de asuntos legales, tributarios, contables y financieros. Mi ejercicio profesional se orienta a brindar asesoría técnica, clara y responsable, articulando el derecho con la contabilidad y las finanzas para ofrecer soluciones sólidas y sostenibles a personas y empresas en la toma de decisiones legales y económicas, con enfoque preventivo, cumplimiento normativo y análisis financiero.
                        </p>
                        <p className="text-gray-400 leading-relaxed text-sm font-medium border-l border-accent-gold pl-4 italic">
                            "Mi trabajo se orienta a ofrecer soluciones claras, legales y sostenibles, integrando el derecho con la contabilidad y las finanzas para proteger el patrimonio y garantizar seguridad jurídica con respaldo profesional en cada caso."
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex items-center gap-4"
                    >
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700 relative">
                            <Image src="/abogado3.webp" alt="Johnny Augusto Peña Murcia" fill className="object-cover" />
                        </div>
                        <div>
                            <p className="text-accent-gold font-serif text-xl uppercase tracking-wider">Johnny Augusto Peña Murcia</p>
                        </div>
                    </motion.div>

                    <div className="flex gap-6 mt-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="bg-gray-800 p-6 flex flex-col justify-center gap-2 w-56 border border-gray-700"
                        >
                            <div className="flex items-center gap-3">
                                <Briefcase className="w-6 h-6 text-accent-gold" />
                                <span className="text-2xl font-bold text-white">15+</span>
                            </div>
                            <span className="text-xs text-gray-400 uppercase tracking-tighter">Años de Experiencia Interdisciplinaria</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="bg-accent-gold p-6 flex flex-col justify-center gap-2 w-56"
                        >
                            <div className="flex items-center gap-3">
                                <Scale className="w-6 h-6 text-black" />
                                <span className="text-2xl font-bold text-black uppercase">Firme</span>
                            </div>
                            <span className="text-xs text-black font-bold uppercase tracking-tighter">Seguridad Jurídica y Financiera</span>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>

    )
}