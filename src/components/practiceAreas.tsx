"use client";
import React, { memo } from "react";
import { ArrowRight, Briefcase, Building2, Gavel, Heart, Scale, Users } from "lucide-react"
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

interface PracticeCardProps {
    icon: React.ReactNode;
    title: string;
    desc: string;
    delay: number;
}

const PracticeCard = memo(({ icon, title, desc, delay }: PracticeCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
            className="bg-secondary-dark p-8 border border-white/5 hover:border-accent-gold/40 transition-colors duration-500 group cursor-default relative overflow-hidden rounded-sm"
        >
            <div className="relative z-10">
                {/* Shimmer Effect on Hover */}
                <motion.div
                    className="absolute -inset-10 bg-gradient-to-tr from-accent-gold/0 via-accent-gold/5 to-accent-gold/0 pointer-events-none"
                    initial={{ x: "-100%", skewX: -45 }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                />

                <div className="mb-10">
                    <div className="w-20 h-20 rounded-2xl bg-primary-dark/80 backdrop-blur-sm flex items-center justify-center group-hover:border-accent-gold transition-all duration-500 shadow-xl border border-white/10">
                        <div className="text-accent-gold transition-colors duration-500 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]">
                            {icon}
                        </div>
                    </div>
                </div>

                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold-metallic transition-colors duration-500">
                    {title}
                </h3>
                <p className="text-gray-400 text-sm mb-10 leading-relaxed group-hover:text-gray-200 transition-colors font-light">
                    {desc}
                </p>

                <motion.button
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="flex items-center gap-3 text-accent-gold text-xs uppercase tracking-[0.3em] font-bold group-hover:text-white transition-colors"
                >
                    Explorar <ArrowRight className="w-4 h-4" />
                </motion.button>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/0 to-accent-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.div>
    )
});

PracticeCard.displayName = "PracticeCard";

const PRACTICE_AREAS_DATA = [
    {
        icon: <Gavel className="w-10 h-10" />,
        title: "Asesoría Jurídica",
        desc: "Derecho civil, comercial y laboral. Elaboración y revisión de contratos. Acompañamiento en procesos judiciales y administrativos de alta complejidad.",
        delay: 0.1
    },
    {
        icon: <Heart className="w-10 h-10" />,
        title: "Asesoría de Familia",
        desc: "Acompañamiento especializado en procesos de divorcio, sucesiones, custodia de menores y conciliaciones, con un enfoque humano y altamente profesional.",
        delay: 0.15
    },
    {
        icon: <Building2 className="w-10 h-10" />,
        title: "Asesoría Tributaria",
        desc: "Planeación tributaria responsable para empresas y personas. Elaboración de declaraciones complejas y atención de requerimientos especiales DIAN.",
        delay: 0.2
    },
    {
        icon: <Users className="w-10 h-10" />,
        title: "Contabilidad",
        desc: "Organización contable bajo estándares internacionales. Informes financieros críticos y análisis para la toma de decisiones gerenciales.",
        delay: 0.3
    },
    {
        icon: <Briefcase className="w-10 h-10" />,
        title: "Cumplimiento",
        desc: "Evaluación de riesgos integrales legales y financieros. Gestión del riesgo administrativo y contractual preventivo con enfoque estratégico.",
        delay: 0.4
    }
];

export default function PracticeAreas() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section id="servicios" ref={containerRef} className="py-32 lg:py-48 bg-primary-dark overflow-hidden relative">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/mazoContraMesa.mp4" type="video/mp4" />
                </video>
                {/* Overlays for depth and readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary-dark/40 to-primary-dark" />
                <div className="absolute inset-0 bg-primary-dark/60" />
            </div>

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-8"
                    >
                        <h2 className="text-5xl lg:text-7xl font-serif text-white uppercase tracking-tight leading-none">
                            Soluciones<br />
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6, duration: 1 }}
                                className="text-gold-metallic italic block mt-2"
                            >
                                Integrales
                            </motion.span>
                        </h2>
                        <div className="flex items-center gap-8">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 120 }}
                                transition={{ duration: 1.5, delay: 0.8, ease: "circOut" }}
                                className="h-px bg-accent-gold/50"
                            />
                            <Scale className="text-accent-gold/40 w-8 h-8" />
                        </div>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-gray-400 max-w-md text-base leading-relaxed border-l-2 border-accent-gold/30 pl-10 italic font-serif py-4"
                    >
                        "Donde el derecho, la contabilidad y las finanzas se entienden en conjunto para una gestión sin fisuras. Protegemos su visión con rigor técnico."
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
                    {PRACTICE_AREAS_DATA.map((area, index) => (
                        <PracticeCard
                            key={index}
                            {...area}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
