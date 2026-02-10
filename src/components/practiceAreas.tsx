"use client";
import React, { memo, useState } from "react";
import { ArrowRight, Briefcase, Building2, Gavel, Heart, Scale, Users, X, CheckCircle2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface PracticeArea {
    icon: React.ReactNode;
    title: string;
    desc: string;
    delay: number;
    image: string;
    details: string[];
}

const Modal = ({ area, onClose }: { area: PracticeArea, onClose: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 lg:p-10 bg-black/90 backdrop-blur-md"
        >
            <motion.div
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-secondary-dark w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-sm border border-white/10 shadow-2xl flex flex-col lg:flex-row relative"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-50 p-2 bg-black/50 text-white rounded-full hover:bg-accent-gold hover:text-black transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Left Side: Image */}
                <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full">
                    <Image
                        src={area.image}
                        alt={area.title}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-secondary-dark/80" />
                </div>

                {/* Right Side: Content */}
                <div className="lg:w-1/2 p-8 lg:p-12 overflow-y-auto">
                    <div className="flex items-center gap-4 text-accent-gold mb-6">
                        {area.icon}
                        <h3 className="text-3xl font-serif text-white">{area.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-8 leading-relaxed font-light italic">
                        {area.desc}
                    </p>
                    <div className="space-y-4">
                        <h4 className="text-white font-serif text-xl mb-4 border-b border-white/5 pb-2 uppercase tracking-widest text-xs font-bold">Información Detallada</h4>
                        {area.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-4 group">
                                <CheckCircle2 className="w-5 h-5 text-accent-gold mt-1 shrink-0" />
                                <span className="text-gray-300 font-light leading-relaxed">{detail}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/5">
                        <a
                            href={`https://wa.me/573143873177?text=${encodeURIComponent(`Hola, quisiera más información sobre ${area.title}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 bg-accent-gold text-black font-bold py-4 px-8 rounded-sm uppercase text-xs tracking-[0.2em] hover:bg-white transition-colors w-full justify-center"
                        >
                            Consultar por WhatsApp
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const PracticeCard = memo(({ area, onOpen }: { area: PracticeArea, onOpen: (area: PracticeArea) => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: area.delay, ease: [0.16, 1, 0.3, 1] }}
            className="bg-secondary-dark border border-accent-gold/15 hover:border-accent-gold/40 transition-all duration-500 group cursor-default relative overflow-hidden rounded-sm flex flex-col h-full"
        >
            {/* Background Image Container */}
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.5] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-primary-dark/40 group-hover:bg-primary-dark/20 transition-colors" />

                {/* Icon Overlay */}
                <div className="absolute top-6 left-6 z-10">
                    <div className="w-16 h-16 rounded-xl bg-primary-dark/90 backdrop-blur-sm flex items-center justify-center group-hover:border-accent-gold transition-all duration-500 shadow-xl border border-white/10">
                        <div className="text-accent-gold transition-colors duration-500 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]">
                            {area.icon}
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-8 relative z-10 flex flex-col flex-grow">
                {/* Shimmer Effect on Hover */}
                <motion.div
                    className="absolute -inset-10 bg-gradient-to-tr from-accent-gold/0 via-accent-gold/5 to-accent-gold/0 pointer-events-none"
                    initial={{ x: "-100%", skewX: -45 }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                />

                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold-metallic transition-colors duration-500">
                    {area.title}
                </h3>
                <p className="text-gray-400 text-sm mb-10 leading-relaxed group-hover:text-gray-200 transition-colors font-light flex-grow">
                    {area.desc}
                </p>

                <motion.button
                    onClick={() => onOpen(area)}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="flex items-center gap-3 text-accent-gold text-xs uppercase tracking-[0.3em] font-bold group-hover:text-white transition-colors mt-auto"
                >
                    Explorar <ArrowRight className="w-4 h-4" />
                </motion.button>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/0 to-accent-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </motion.div>
    )
});

PracticeCard.displayName = "PracticeCard";

const PRACTICE_AREAS_DATA: PracticeArea[] = [
    {
        icon: <Gavel className="w-10 h-10" />,
        title: "Asesoría Jurídica",
        desc: "Derecho civil, comercial y laboral. Elaboración y revisión de contratos de alta complejidad.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
        delay: 0.1,
        details: [
            "Representación en procesos judiciales y administrativos.",
            "Elaboración, revisión y negociación de contratos civiles y mercantiles.",
            "Asesoría integral en derecho laboral y seguridad social.",
            "Gestión de trámites ante entidades gubernamentales.",
            "Consultoría estratégica para la prevención de litigios."
        ]
    },
    {
        icon: <Heart className="w-10 h-10" />,
        title: "Asesoría de Familia",
        desc: "Acompañamiento especializado en procesos familiares con un enfoque humano y altamente profesional.",
        image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop",
        delay: 0.15,
        details: [
            "Procesos de divorcio y liquidación de sociedad conyugal.",
            "Sucesiones y planeación patrimonial familiar.",
            "Custodia, cuota alimentaria y régimen de visitas.",
            "Conciliaciones extrajudiciales para la solución pacífica de conflictos.",
            "Protección de derechos de niños, niñas y adolescentes."
        ]
    },
    {
        icon: <Building2 className="w-10 h-10" />,
        title: "Asesoría Tributaria",
        desc: "Planeación tributaria responsable para empresas y personas ante requerimientos especiales DIAN.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
        delay: 0.2,
        details: [
            "Análisis y planeación tributaria para optimización de impuestos.",
            "Atención de requerimientos, inspecciones y procesos ante la DIAN.",
            "Elaboración y presentación de declaraciones de renta e IVA.",
            "Cumplimiento de obligaciones fiscales territoriales y nacionales.",
            "Asesoría en beneficios tributarios y devoluciones."
        ]
    },
    {
        icon: <Users className="w-10 h-10" />,
        title: "Contabilidad",
        desc: "Organización contable bajo estándares internacionales e informes financieros críticos.",
        image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=800&auto=format&fit=crop",
        delay: 0.3,
        details: [
            "Implementación y manejo de contabilidad bajo normas NIIF.",
            "Generación de estados financieros para toma de decisiones.",
            "Auditoría interna y revisión fiscal de procesos contables.",
            "Gestión de nómina y aportes a seguridad social.",
            "Análisis de costos y presupuestos empresariales."
        ]
    },
    {
        icon: <Briefcase className="w-10 h-10" />,
        title: "Cumplimiento",
        desc: "Evaluación de riesgos integrales legales y financieros con enfoque preventivo estratégico.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
        delay: 0.4,
        details: [
            "Programas de cumplimiento normativo (Compliance).",
            "Gestión del riesgo administrativo y contractual.",
            "Prevención de riesgos legales en operaciones corporativas.",
            "Auditorías de cumplimiento para identificación de brechas.",
            "Capacitación en ética empresarial y prevención de fraudes."
        ]
    }
];

export default function PracticeAreas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);

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
                            area={area}
                            onOpen={setSelectedArea}
                        />
                    ))}
                </div>
            </div>

            {/* Modal Detail */}
            <AnimatePresence>
                {selectedArea && (
                    <Modal
                        area={selectedArea}
                        onClose={() => setSelectedArea(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    )
}
