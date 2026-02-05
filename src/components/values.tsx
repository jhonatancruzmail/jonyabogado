"use client";
import { ShieldCheck, Target, Eye, CheckCircle2, Award, Zap } from "lucide-react";
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

    // Define staggered scroll stages for 5 items
    // Total section scroll is from 0 to 1.
    // We'll use the 0.1 to 0.9 range for the items to avoid edges.
    const getMarkerStyle = (index: number) => {
        const itemStep = 0.8 / advantages.length; // 0.16 each
        const start = 0.1 + (index * itemStep);
        const middle = start + (itemStep * 0.4);
        const end = start + itemStep;

        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useTransform(
            sequenceProgress,
            [0, start, middle, end],
            ["rgba(212,175,55,0)", "rgba(212,175,55,0)", "rgba(212,175,55,1)", "rgba(212,175,55,1)"]
        );
    };

    const getTextStyle = (index: number) => {
        const itemStep = 0.8 / advantages.length;
        const start = 0.1 + (index * itemStep);
        const middle = start + (itemStep * 0.4);
        const end = start + itemStep;

        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useTransform(
            sequenceProgress,
            [0, start, middle, end],
            ["#4b5563", "#4b5563", "#d4af37", "#ffffff"]
        );
    };

    const getRotateStyle = (index: number) => {
        const itemStep = 0.8 / advantages.length;
        const start = 0.1 + (index * itemStep);
        const middle = start + (itemStep * 0.4);
        const end = start + itemStep;

        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useTransform(
            sequenceProgress,
            [0, start, middle, end],
            ["45deg", "45deg", "135deg", "135deg"]
        );
    };

    const getXOffset = (index: number) => {
        const itemStep = 0.8 / advantages.length;
        const start = 0.1 + (index * itemStep);
        const end = start + (itemStep * 0.4);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useTransform(
            sequenceProgress,
            [0, start, end],
            [0, 0, 15]
        );
    };

    return (
        <section className="bg-secondary-dark relative">
            <div className="container mx-auto px-6 lg:px-20 relative z-10 py-24 lg:pt-40 lg:pb-0 font-sans">
                {/* Mission & Vision - High End Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-40">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-primary-dark p-12 lg:p-16 border border-white/5 relative group overflow-hidden rounded-sm shadow-2xl"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-accent-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                        <div className="flex items-center gap-6 text-gold-metallic mb-8">
                            <div className="p-4 bg-accent-gold/10 rounded-xl">
                                <Target className="w-10 h-10" />
                            </div>
                            <h3 className="text-3xl font-serif text-white uppercase tracking-[0.2em]">Misión</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed italic text-xl font-serif font-light">
                            "Brindar asesoría integral con rigor técnico y enfoque preventivo, orientada al cumplimiento normativo y la protección estratégica de los intereses de nuestros clientes."
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-primary-dark p-12 lg:p-16 border border-white/5 relative group overflow-hidden rounded-sm shadow-2xl"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-accent-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                        <div className="flex items-center gap-6 text-gold-metallic mb-8">
                            <div className="p-4 bg-accent-gold/10 rounded-xl">
                                <Eye className="w-10 h-10" />
                            </div>
                            <h3 className="text-3xl font-serif text-white uppercase tracking-[0.2em]">Visión</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed italic text-xl font-serif font-light">
                            "Ser el referente profesional por excelencia en la integración del derecho, la contabilidad y las finanzas, ofreciendo soluciones de máxima seguridad jurídica."
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Sequence Locked Section */}
            <div ref={sequenceSectionRef} className="relative h-[300vh] bg-primary-dark">
                <div className="sticky top-0 h-screen flex items-center overflow-hidden">
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
                                <div className="h-0.5 bg-accent-gold/30 w-[120px]"></div>
                            </motion.div>

                            <div className="grid gap-6">
                                {advantages.map((adv, idx) => (
                                    <div key={idx} className="flex items-center gap-8 group">
                                        <div className="relative flex items-center justify-center">
                                            <motion.div
                                                style={{
                                                    backgroundColor: getMarkerStyle(idx),
                                                    rotate: getRotateStyle(idx)
                                                }}
                                                className="w-4 h-4 border border-accent-gold/50"
                                            ></motion.div>
                                        </div>
                                        <motion.span
                                            style={{
                                                color: getTextStyle(idx),
                                                x: getXOffset(idx)
                                            }}
                                            className="text-lg font-light tracking-wide transition-all duration-300"
                                        >
                                            {adv}
                                        </motion.span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Scroll Sequence */}
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
                                <motion.p
                                    style={{ opacity: useTransform(sequenceProgress, [0, 0.2, 0.8, 1], [0, 0.6, 0.6, 0]) }}
                                    className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] text-gold-metallic uppercase tracking-[0.4em] whitespace-nowrap"
                                >
                                    Solidez Financiera
                                </motion.p>
                            </motion.div>
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
                            Cimentamos nuestra práctica profesional en principios inamovibles que garantizan la excellence.
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
