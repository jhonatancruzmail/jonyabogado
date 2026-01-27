"use client";
import { ArrowRight, Briefcase, Building2, Gavel, Scale, Users } from "lucide-react"
import { motion } from "framer-motion";

function PracticeCard({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -15 }}
            className="bg-secondary-dark p-8 border border-white/5 hover:border-accent-gold/40 transition-all duration-500 group cursor-default relative overflow-hidden"
        >
            {/* Shimmer Effect on Hover */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-accent-gold/0 via-accent-gold/5 to-accent-gold/0"
                initial={{ x: "-100%", skewX: -45 }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
            />

            <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                className="mb-8 relative z-10"
            >
                <div className="w-16 h-16 rounded-2xl bg-primary-dark flex items-center justify-center group-hover:bg-accent-gold transition-colors duration-500">
                    <div className="text-accent-gold group-hover:text-black transition-colors duration-500">
                        {icon}
                    </div>
                </div>
            </motion.div>

            <h3 className="text-xl font-serif text-white mb-4 group-hover:text-accent-gold transition-colors duration-500 relative z-10">{title}</h3>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors">
                {desc}
            </p>

            <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-accent-gold text-xs uppercase tracking-[0.2em] font-bold relative z-10"
            >
                Explorar <ArrowRight className="w-4 h-4" />
            </motion.button>
        </motion.div>
    )
}

export default function PracticeAreas() {
    return (
        <section className="py-24 lg:py-32 bg-primary-dark overflow-hidden relative">
            {/* Background Decorative Text */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20rem] font-serif text-white/5 whitespace-nowrap pointer-events-none select-none -translate-x-1/2">
                EXPERTICIA
            </div>

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl lg:text-6xl font-serif text-white uppercase tracking-tight leading-none">
                            Soluciones Integrales <br />
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="text-accent-gold"
                            >
                                Legales y Contables
                            </motion.span>
                        </h2>
                        <div className="flex items-center gap-6">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 80 }}
                                transition={{ duration: 1, delay: 0.8 }}
                                className="h-px bg-accent-gold"
                            />
                            <Scale className="text-accent-gold/40 w-6 h-6" />
                        </div>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-gray-500 max-w-sm text-sm leading-relaxed border-l-2 border-accent-gold/20 pl-8 italic font-serif"
                    >
                        "Donde el derecho, la contabilidad y las finanzas se entienden en conjunto para una gestión sin fisuras."
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <PracticeCard
                        icon={<Gavel className="w-8 h-8" />}
                        title="Asesoría Jurídica"
                        desc="Derecho civil, comercial y laboral. Elaboración y revisión de contratos. Acompañamiento en procesos judiciales y administrativos."
                        delay={0.1}
                    />
                    <PracticeCard
                        icon={<Building2 className="w-8 h-8" />}
                        title="Asesoría Tributaria"
                        desc="Planeación tributaria responsable. Elaboración de declaraciones. Atención de requerimientos DIAN y estrategias de cumplimiento fiscal."
                        delay={0.2}
                    />
                    <PracticeCard
                        icon={<Users className="w-8 h-8" />}
                        title="Contabilidad y Finanzas"
                        desc="Organización y control contable. Informes contables y financieros. Análisis financiero para la correcta toma de decisiones."
                        delay={0.3}
                    />
                    <PracticeCard
                        icon={<Briefcase className="w-8 h-8" />}
                        title="Cumplimiento Normativo"
                        desc="Evaluación de riesgos legales y tributarios. Gestión del riesgo. Acompañamiento administrativo y contractual preventivo."
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    )
}