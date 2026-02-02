"use client";
import { ShieldCheck, Target, Eye, CheckCircle2, Award, Zap, MessageSquare } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Values() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const values = [
        { title: "Ética profesional", desc: "Actuación transparente, honesta y responsable en cada decisión.", icon: <ShieldCheck className="w-6 h-6" /> },
        { title: "Rigor técnico", desc: "Precisión absoluta en el análisis jurídico, contable y financiero.", icon: <Award className="w-6 h-6" /> },
        { title: "Responsabilidad", desc: "Compromiso inquebrantable con cada asunto encomendado.", icon: <CheckCircle2 className="w-6 h-6" /> },
        { title: "Confidencialidad", desc: "Manejo estrictamente reservado y seguro de toda la información.", icon: <Zap className="w-6 h-6" /> },
        { title: "Cumplimiento", desc: "Respeto estricto por el marco normativo y legal vigente.", icon: <ShieldCheck className="w-6 h-6" /> },
    ];

    const advantages = [
        "Enfoque interdisciplinario único (Abogado y Contador)",
        "Análisis 360° de la situación jurídico-financiera",
        "Lenguaje claro que traduce la complejidad técnica",
        "Acompañamiento personalizado y directo",
        "Orientación preventiva para evitar riesgos futuros"
    ];

    return (
        <section ref={containerRef} className="py-24 lg:py-40 bg-secondary-dark overflow-hidden relative">
            {/* Background Decorative Element - Moving Orb */}
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-accent-gold/5 blur-[120px] rounded-full pointer-events-none"
            />

            <div className="container mx-auto px-6 lg:px-20 relative z-10">

                {/* Mission & Vision - High End Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-40">
                    <motion.div
                        initial={{ opacity: 0, x: -50, rotateY: 15 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-primary-dark p-12 lg:p-16 border border-white/5 relative group overflow-hidden rounded-sm shadow-2xl"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-accent-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                        <div className="flex items-center gap-6 text-accent-gold mb-8">
                            <motion.div
                                animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="p-4 bg-accent-gold/10 rounded-xl"
                            >
                                <Target className="w-10 h-10" />
                            </motion.div>
                            <h3 className="text-3xl font-serif text-white uppercase tracking-[0.2em]">Misión</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed italic text-xl font-serif font-light">
                            "Brindar asesoría integral con rigor técnico y enfoque preventivo, orientada al cumplimiento normativo y la protección estratégica de los intereses de nuestros clientes."
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50, rotateY: -15 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-primary-dark p-12 lg:p-16 border border-white/5 relative group overflow-hidden rounded-sm shadow-2xl"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-accent-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                        <div className="flex items-center gap-6 text-accent-gold mb-8">
                            <motion.div
                                animate={{ opacity: [0.6, 1, 0.6] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="p-4 bg-accent-gold/10 rounded-xl"
                            >
                                <Eye className="w-10 h-10" />
                            </motion.div>
                            <h3 className="text-3xl font-serif text-white uppercase tracking-[0.2em]">Visión</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed italic text-xl font-serif font-light">
                            "Ser el referente profesional por excelencia en la integración del derecho, la contabilidad y las finanzas, ofreciendo soluciones de máxima seguridad jurídica."
                        </p>
                    </motion.div>
                </div>

                {/* Why work with me & Values */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

                    {/* Why work with me - Staggered List */}
                    <div className="space-y-16">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">¿Por qué <br /> <span className="text-accent-gold">trabajar conmigo?</span></h2>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 120 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
                                className="h-0.5 bg-accent-gold/30"
                            ></motion.div>
                        </motion.div>

                        <div className="grid gap-8">
                            {advantages.map((adv, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
                                    className="flex items-center gap-8 group"
                                >
                                    <div className="relative flex items-center justify-center">
                                        <div className="w-4 h-4 border border-accent-gold/50 rotate-45 group-hover:bg-accent-gold group-hover:rotate-[135deg] group-hover:border-transparent transition-all duration-500"></div>
                                        <div className="absolute w-8 h-8 border border-accent-gold/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                                    </div>
                                    <span className="text-white text-lg font-light tracking-wide group-hover:translate-x-3 group-hover:text-accent-gold transition-all duration-500">{adv}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 1 }}
                            className="pt-12 border-t border-white/5"
                        >
                            <div className="flex items-center gap-6 group">
                                <div className="p-4 bg-white/5 rounded-full group-hover:bg-accent-gold/10 transition-colors">
                                    <MessageSquare className="w-8 h-8 text-accent-gold" />
                                </div>
                                <span className="font-serif italic text-2xl text-gray-300">"Interpretamos la norma para proteger su patrimonio."</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Values Grid - 3D Hover Effect */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 perspective-1000">
                        {values.map((v, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                whileHover={{
                                    y: -15,
                                    scale: 1.02,
                                    rotateX: 5,
                                    rotateY: -5
                                }}
                                className="bg-primary-dark/60 p-10 border border-white/5 hover:border-accent-gold/30 hover:bg-primary-dark/80 transition-all duration-500 group shadow-2xl backdrop-blur-md rounded-sm relative overflow-hidden"
                            >
                                <div className="absolute -right-8 -bottom-8 text-white/5 group-hover:text-accent-gold/5 transition-colors">
                                    {v.icon && <v.icon.type className="w-32 h-32" />}
                                </div>
                                <div className="text-accent-gold mb-8 relative z-10 p-3 bg-accent-gold/5 w-fit rounded-lg group-hover:bg-accent-gold group-hover:text-black transition-all duration-500">
                                    {v.icon}
                                </div>
                                <h4 className="text-white font-serif text-xl mb-4 tracking-widest relative z-10">{v.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors relative z-10 font-light">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

