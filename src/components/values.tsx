"use client";
import { ShieldCheck, Target, Eye, CheckCircle2, Award, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const VALUES_DATA = [
    { title: "Ética profesional", desc: "Actuación transparente, honesta y responsable en cada decisión.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Rigor técnico", desc: "Precisión absoluta en el análisis jurídico, contable y financiero.", icon: <Award className="w-6 h-6" /> },
    { title: "Responsabilidad", desc: "Compromiso inquebrantable con cada asunto encomendado.", icon: <CheckCircle2 className="w-6 h-6" /> },
    { title: "Confidencialidad", desc: "Manejo estrictamente reservado y seguro de toda la información.", icon: <Zap className="w-6 h-6" /> },
    { title: "Cumplimiento", desc: "Respeto estricto por el marco normativo y legal vigente.", icon: <ShieldCheck className="w-6 h-6" /> },
];

const ADVANTAGES_DATA = [
    "Enfoque interdisciplinario único (Abogado y Contador)",
    "Análisis 360° de la situación jurídico-financiera",
    "Lenguaje claro que traduce la complejidad técnica",
    "Acompañamiento personalizado y directo",
    "Orientación preventiva para evitar riesgos futuros"
];

export default function Values() {
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
                        className="bg-primary-dark p-12 lg:p-16 border border-accent-gold/15 relative group overflow-hidden rounded-sm shadow-2xl"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-accent-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                        <div className="flex items-center gap-6 text-accent-gold mb-8">
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
                        className="bg-primary-dark p-12 lg:p-16 border border-accent-gold/15 relative group overflow-hidden rounded-sm shadow-2xl"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-accent-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                        <div className="flex items-center gap-6 text-accent-gold mb-8">
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

            {/* Why Work with Me - Refined Section */}
            <div className="relative py-24 lg:py-32 bg-primary-dark overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />

                <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10 w-full">

                    {/* Left Side: Why Work with Me */}
                    <div className="space-y-12 bg-primary-dark/60 backdrop-blur-md p-8 lg:p-12 border border-accent-gold/15 rounded-sm shadow-2xl">
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
                            {ADVANTAGES_DATA.map((adv, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    className="flex items-center gap-8 group"
                                >
                                    <div className="relative flex items-center justify-center">
                                        <motion.div
                                            initial={{ rotate: 45, backgroundColor: "rgba(212,175,55,0)" }}
                                            whileInView={{ rotate: 135, backgroundColor: "rgba(212,175,55,1)" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: idx * 0.1 + 0.3 }}
                                            className="w-4 h-4 border border-accent-gold/50"
                                        />
                                    </div>
                                    <motion.span
                                        className="text-lg font-light tracking-wide text-white group-hover:text-gold-metallic transition-colors duration-300"
                                    >
                                        {adv}
                                    </motion.span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Professional Image */}
                    <div className="relative flex justify-center items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative z-10 w-full max-w-[500px] aspect-[4/5] rounded-sm overflow-hidden border border-white/10 group shadow-2xl"
                        >
                            <Image
                                src="/abogado1.webp"
                                alt="Experto Jurídico y Contable"
                                fill
                                className="object-cover object-top grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-60" />

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="absolute bottom-8 left-8 right-8 p-6 bg-primary-dark/40 backdrop-blur-md border border-white/10 rounded-sm"
                            >
                                <p className="text-gold-metallic uppercase tracking-[0.4em] text-[10px] font-bold mb-2">Compromiso Total</p>
                                <h3 className="text-white font-serif text-xl">Excelencia en cada detalle</h3>
                            </motion.div>
                        </motion.div>

                        {/* Decorative Background Elements */}
                        <div className="absolute -inset-4 bg-accent-gold/5 blur-[80px] rounded-full -z-10 animate-pulse" />
                        <motion.div
                            animate={{
                                rotate: [0, 360],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute -top-10 -right-10 w-40 h-40 border border-gold-metallic/10 rounded-full border-dashed"
                        />
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
                        {VALUES_DATA.map((v, idx) => (
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
                                className="bg-primary-dark/60 p-10 border border-accent-gold/15 hover:border-accent-gold/40 hover:bg-primary-dark/80 transition-all duration-500 group shadow-2xl backdrop-blur-md rounded-sm relative overflow-hidden"
                            >
                                <div className="text-accent-gold mb-8 relative z-10 p-3 bg-accent-gold/5 w-fit rounded-lg group-hover:bg-accent-gold/20 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-500">
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
