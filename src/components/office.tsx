"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function Office() {
    return (
        <section className="py-24 lg:py-32 bg-primary-dark overflow-hidden relative">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <span className="text-accent-gold text-xs uppercase tracking-[0.4em] font-bold">Instalaciones</span>
                            <h2 className="text-4xl lg:text-6xl font-serif text-white leading-tight">
                                Consultorio <br />
                                <span className="text-gold-metallic italic">Profesional</span>
                            </h2>
                        </div>
                        <p className="text-gray-400 text-lg font-light leading-relaxed max-w-lg">
                            Contamos con un espacio diseñado para la privacidad, la comodidad y el análisis riguroso de cada caso. Un entorno donde la confianza y el profesionalismo se encuentran.
                        </p>
                        <div className="flex items-center gap-4 text-accent-gold/80">
                            <MapPin className="w-5 h-5" />
                            <span className="text-sm tracking-widest uppercase">Atención Personalizada en Pitalito, Huila</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="relative group"
                    >
                        <div className="relative aspect-[16/9] lg:aspect-[4/3] rounded-sm overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src="/heroBackground.jpeg"
                                alt="Consultorio Profesional"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" />
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 border-r border-t border-accent-gold/30 rounded-tr-xl -z-10" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l border-b border-accent-gold/30 rounded-bl-xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
