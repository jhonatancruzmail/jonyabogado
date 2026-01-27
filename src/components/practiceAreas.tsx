import { ArrowRight, Briefcase, Building2, Car, Gavel, Scale, Users, UserX } from "lucide-react"



function PracticeCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="bg-secondary-dark p-8 border border-transparent hover:border-accent-gold/30 transition-all duration-300 group">
            <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-serif text-white mb-4 group-hover:text-accent-gold transition-colors">{title}</h3>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                {desc}
            </p>
            <button className="flex items-center gap-2 text-white text-xs uppercase tracking-wider group-hover:text-accent-gold transition-colors">
                Ver Más <ArrowRight className="w-3 h-3" />
            </button>
        </div>
    )
}
export default function PracticeAreas() {
    return (
        <section className="py-20 lg:py-32 bg-primary-dark">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl lg:text-5xl font-serif text-white uppercase tracking-tight">
                            Soluciones Integrales <br />
                            <span className="text-accent-gold">Legales y Contables</span>
                        </h2>
                        <div className="flex items-center gap-2">
                            <span className="h-[1px] w-12 bg-accent-gold"></span>
                            <Scale className="text-accent-gold w-6 h-6" />
                            <span className="h-[1px] w-12 bg-accent-gold"></span>
                        </div>
                    </div>
                    <p className="text-gray-400 max-w-md text-sm leading-relaxed border-l border-gray-700 pl-6 italic">
                        "Donde el derecho, la contabilidad y las finanzas se entienden en conjunto."
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <PracticeCard
                        icon={<Gavel className="w-10 h-10 text-accent-gold" />}
                        title="Asesoría Jurídica"
                        desc="Derecho civil, comercial y laboral. Elaboración y revisión de contratos. Acompañamiento en procesos judiciales y administrativos."
                    />
                    <PracticeCard
                        icon={<Building2 className="w-10 h-10 text-accent-gold" />}
                        title="Asesoría Tributaria"
                        desc="Planeación tributaria responsable. Elaboración de declaraciones. Atención de requerimientos DIAN y estrategias de cumplimiento fiscal."
                    />
                    <PracticeCard
                        icon={<Users className="w-10 h-10 text-accent-gold" />}
                        title="Contabilidad y Finanzas"
                        desc="Organización y control contable. Informes contables y financieros. Análisis financiero para la correcta toma de decisiones."
                    />
                    <PracticeCard
                        icon={<Briefcase className="w-10 h-10 text-accent-gold" />}
                        title="Cumplimiento Normativo"
                        desc="Evaluación de riesgos legales y tributarios. Gestión del riesgo. Acompañamiento administrativo y contractual preventivo."
                    />
                </div>
            </div>
        </section>
    )
}