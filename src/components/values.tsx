"use client";
import { ShieldCheck, Target, Eye, CheckCircle2, Award, Zap, MessageSquare } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollSequence from "./scrollSequence";

export default function Values() {
    const sequenceSectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: sequenceProgress } = useScroll({
        target: sequenceSectionRef,
        offset: ["start start", "end end"]
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
        <section className="bg-secondary-dark relative">
            <div className="container mx-auto px-6 lg:px-20 relative z-10 py-24 lg:pt-40 lg:pb-0 font-sans">
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
                        <div className="flex items-center gap-6 text-gold-metallic mb-8">
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
                        <div className="flex items-center gap-6 text-gold-metallic mb-8">
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
            </div>

            {/* Scroll Sequence Locked Section */}
            <div ref={sequenceSectionRef} className="relative h-[200vh] bg-primary-dark">
                <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                    {/* Background Decorative Element */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />

                    <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10 w-full">

                        {/* Left Side: Why Work with Me */}
                        <div className="space-y-12 bg-primary-dark/60 backdrop-blur-md p-8 lg:p-12 border border-white/5 rounded-sm shadow-2xl">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">¿Por qué <br /> <span className="text-gold-metallic">trabajar conmigo?</span></h2>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 120 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
                                    className="h-0.5 bg-accent-gold/30"
                                ></motion.div>
                            </motion.div>

                            <div className="grid gap-6">
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
                                        </div>
                                        <span className="text-white text-lg font-light tracking-wide group-hover:translate-x-3 group-hover:text-gold-metallic transition-all duration-500">{adv}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Smaller Sequence, Not as background */}
                        <div className="relative flex justify-center items-center">
                            <motion.div
                                style={{
                                    opacity: useTransform(sequenceProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]),
                                    scale: useTransform(sequenceProgress, [0, 0.15], [0.8, 1])
                                }}
                                className="relative z-10"
                            >
                                <ScrollSequence
                                    frameCount={240}
                                    path="/framesMonedas"
                                    progress={sequenceProgress}
                                    className="w-full max-w-[450px] aspect-square rounded-full border border-gold-metallic/20  bg-black overflow-hidden"
                                />
                                {/* Label for the sequence interaction */}
                                <motion.p
                                    style={{ opacity: useTransform(sequenceProgress, [0, 0.2, 0.8, 1], [0, 0.6, 0.6, 0]) }}
                                    className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] text-gold-metallic uppercase tracking-[0.4em] whitespace-nowrap"
                                >
                                    Solidez Financiera
                                </motion.p>
                            </motion.div>

                            {/* Decorative glow behind sequence */}
                            <div className="absolute inset-0 bg-accent-gold/10 blur-[100px] rounded-full -z-10" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Grid */}
            <div className="py-24 lg:py-40 container mx-auto px-6 lg:px-20 relative z-10 bg-secondary-dark">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-8">
                        <h3 className="text-4xl font-serif text-white uppercase tracking-widest">Nuestros <span className="text-gold-metallic">Valores</span></h3>
                        <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">
                            Cimentamos nuestra práctica profesional en principios inamovibles que garantizan la excelencia.
                        </p>
                    </div>
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
                                className="bg-primary-dark/60 p-10 border border-white/5 hover:border-gold-metallic/30 hover:bg-primary-dark/80 transition-all duration-500 group shadow-2xl backdrop-blur-md rounded-sm relative overflow-hidden"
                            >
                                <div className="text-accent-gold mb-8 relative z-10 p-3 bg-accent-gold/5 w-fit rounded-lg group-hover:bg-gold-metallic group-hover:text-black transition-all duration-500">
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
