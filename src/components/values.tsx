"use client";
import { ShieldCheck, Target, Eye, CheckCircle2, Award, Zap, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function Values() {
    const values = [
        { title: "Ética profesional", desc: "Actuación transparente y responsable.", icon: <ShieldCheck className="w-6 h-6" /> },
        { title: "Rigor técnico", desc: "Precisión jurídica, contable y financiera.", icon: <Award className="w-6 h-6" /> },
        { title: "Responsabilidad", desc: "Compromiso con cada asunto encomendado.", icon: <CheckCircle2 className="w-6 h-6" /> },
        { title: "Confidencialidad", desc: "Manejo reservado de la información.", icon: <Zap className="w-6 h-6" /> },
        { title: "Cumplimiento normativo", desc: "Respeto estricto por la ley.", icon: <ShieldCheck className="w-6 h-6" /> },
    ];

    const advantages = [
        "Enfoque interdisciplinario (abogado y contador)",
        "Análisis completo del problema",
        "Lenguaje claro y técnico",
        "Acompañamiento responsable",
        "Orientación preventiva y estratégica"
    ];

    return (
        <section className="py-24 lg:py-32 bg-secondary-dark overflow-hidden relative">
            {/* Background Decorative Element */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"
            />

            <div className="container mx-auto px-6 lg:px-20 relative z-10">

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="bg-primary-dark p-12 border-t-2 border-accent-gold space-y-6 shadow-2xl group"
                    >
                        <div className="flex items-center gap-5 text-accent-gold mb-2">
                            <motion.div
                                whileInView={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                            >
                                <Target className="w-10 h-10" />
                            </motion.div>
                            <h3 className="text-2xl font-serif text-white uppercase tracking-[0.2em] group-hover:tracking-[0.25em] transition-all duration-500">Misión</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed italic text-lg font-serif">
                            Brindar asesoría jurídica, tributaria, contable y financiera integral, con rigor técnico y enfoque preventivo, orientada al cumplimiento normativo y la protección de los intereses de personas naturales y empresas.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="bg-primary-dark p-12 border-t-2 border-accent-gold space-y-6 shadow-2xl group"
                    >
                        <div className="flex items-center gap-5 text-accent-gold mb-2">
                            <motion.div
                                whileInView={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Eye className="w-10 h-10" />
                            </motion.div>
                            <h3 className="text-2xl font-serif text-white uppercase tracking-[0.2em] group-hover:tracking-[0.25em] transition-all duration-500">Visión</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed italic text-lg font-serif">
                            Ser reconocido como un profesional de referencia por la solidez técnica, la ética y la capacidad de integrar el derecho, la contabilidad y las finanzas en soluciones confiables y eficientes.
                        </p>
                    </motion.div>
                </div>

                {/* Why work with me & Values */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

                    {/* Why work with me */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl lg:text-5xl font-serif text-white mb-4 leading-tight">¿Por qué <br /> <span className="text-accent-gold">trabajar conmigo?</span></h2>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 100 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="h-0.5 bg-accent-gold/40"
                            ></motion.div>
                        </motion.div>

                        <div className="space-y-6">
                            {advantages.map((adv, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="flex items-center gap-6 group"
                                >
                                    <div className="w-3 h-3 border border-accent-gold rotate-45 group-hover:bg-accent-gold group-hover:scale-125 transition-all duration-300"></div>
                                    <span className="text-white text-base font-medium tracking-wide group-hover:translate-x-2 transition-transform duration-300">{adv}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="pt-10 border-t border-white/5"
                        >
                            <div className="flex items-center gap-6 text-accent-gold">
                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <MessageSquare className="w-8 h-8 opacity-50" />
                                </motion.div>
                                <span className="font-serif italic text-xl">Soluciones legales con impacto financiero real.</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 perspective-1000">
                        {values.map((v, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, rotateY: -20, y: 30 }}
                                whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: idx * 0.15 }}
                                whileHover={{ scale: 1.05, y: -5, z: 20 }}
                                className="bg-primary-dark/80 p-8 border border-white/5 hover:border-accent-gold/30 transition-all duration-500 group shadow-xl backdrop-blur-sm"
                            >
                                <div className="text-accent-gold mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                                    {v.icon}
                                </div>
                                <h4 className="text-white font-serif text-lg mb-3 tracking-wider">{v.title}</h4>
                                <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-400 transition-colors">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
