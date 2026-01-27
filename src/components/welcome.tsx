"use client";
import { Briefcase, Scale } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Welcome() {
    return (
        <section className="py-20 lg:py-32 bg-secondary-dark relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Collage with Dramatic Entrance */}
                <motion.div
                    initial={{ opacity: 0, x: -100, rotateY: 20 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative h-[600px] w-full perspective-1000"
                >
                    <motion.div
                        initial={{ scale: 1.1, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="absolute top-0 left-0 w-4/5 h-4/5 overflow-hidden shadow-2xl z-10"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop"
                            alt="Library"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-1000"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ x: 50, y: 50, opacity: 0 }}
                        whileInView={{ x: 0, y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        className="absolute bottom-0 right-0 w-3/5 h-3/5 overflow-hidden border-8 border-secondary-dark shadow-2xl z-20"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1767628711891-3e948c13b478?q=80&w=800&auto=format&fit=crop"
                            alt="Gavel"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-1000"
                        />
                    </motion.div>
                    {/* Decorative Background Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 0.1, scale: 1 }}
                        transition={{ duration: 2 }}
                        className="absolute -top-10 -left-10 w-40 h-40 border-2 border-accent-gold rounded-full"
                    />
                </motion.div>

                {/* Right Content */}
                <div className="space-y-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-serif text-white uppercase tracking-tight">
                            Quién Soy - <br />
                            <span className="text-accent-gold">Abogado y Contador Público</span>
                        </h2>
                        <div className="flex items-center gap-4 mt-6">
                            <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: 60 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
                                className="h-[1px] bg-accent-gold"
                            ></motion.span>
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Scale className="text-accent-gold w-6 h-6" />
                            </motion.div>
                            <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: 60 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
                                className="h-[1px] bg-accent-gold"
                            ></motion.span>
                        </div>
                    </motion.div>

                    <div className="space-y-6">
                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-gray-400 leading-relaxed text-sm"
                        >
                            Soy Abogado y Contador Público, con más de 15 años de experiencia en el análisis integral de asuntos legales, tributarios, contables y financieros. Mi ejercicio profesional se orienta a brindar asesoría técnica, clara y responsable.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-gray-400 leading-relaxed text-sm font-medium border-l-2 border-accent-gold pl-6 italic bg-primary-dark/30 py-4"
                        >
                            "Mi trabajo se orienta a ofrecer soluciones claras, legales y sostenibles, integrando el derecho con la contabilidad y las finanzas para proteger el patrimonio y garantizar seguridad jurídica con respaldo profesional en cada caso."
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex items-center gap-4 group cursor-default"
                    >
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent-gold/30 group-hover:border-accent-gold transition-colors duration-500 relative">
                            <Image src="/abogado3.webp" alt="Johnny Augusto Peña Murcia" fill className="object-cover" />
                        </div>
                        <div>
                            <p className="text-accent-gold font-serif text-xl uppercase tracking-widest group-hover:tracking-[0.15em] transition-all duration-500">Johnny Augusto Peña Murcia</p>
                            <div className="h-px w-0 group-hover:w-full bg-accent-gold/50 transition-all duration-700"></div>
                        </div>
                    </motion.div>

                    <div className="flex flex-wrap gap-6 mt-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            whileHover={{ y: -5, backgroundColor: "rgba(31, 41, 55, 1)" }}
                            className="bg-gray-800/50 p-6 flex flex-col justify-center gap-2 w-56 border border-gray-700/50 backdrop-blur-sm transition-all"
                        >
                            <div className="flex items-center gap-3">
                                <Briefcase className="w-6 h-6 text-accent-gold" />
                                <span className="text-3xl font-bold text-white">15+</span>
                            </div>
                            <span className="text-[10px] text-gray-400 uppercase tracking-widest">Años de Experiencia Interdisciplinaria</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            whileHover={{ y: -5, backgroundColor: "rgba(212, 175, 55, 1)" }}
                            className="bg-accent-gold/90 p-6 flex flex-col justify-center gap-2 w-56 group/stat transition-all"
                        >
                            <div className="flex items-center gap-3">
                                <Scale className="w-6 h-6 text-black" />
                                <span className="text-3xl font-bold text-black uppercase">Firme</span>
                            </div>
                            <span className="text-[10px] text-black font-bold uppercase tracking-widest opacity-70 group-hover/stat:opacity-100">Seguridad Jurídica y Financiera</span>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}