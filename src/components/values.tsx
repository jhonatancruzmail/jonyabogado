import { ShieldCheck, Target, Eye, CheckCircle2, Award, Zap, MessageSquare, Clock } from "lucide-react";

export default function Values() {
    const values = [
        { title: "Ética profesional", desc: "Actuación transparente y responsable.", icon: <ShieldCheck className="w-6 h-6" /> },
        { title: "Rigor técnico", desc: "Precisión jurídica, contable y financiera.", icon: <Award className="w-6 h-6" /> },
        { title: "Responsabilidad", desc: "Compromiso con cada asunto encomendado.", icon: <CheckCircle2 className="w-6 h-6" /> },
        { title: "Confidencialidad", desc: "Manejo reservado de la información.", icon: <Zap className="w-6 h-6" /> },
        { title: "Cumplimiento normativo", desc: "Respeto estricto por la ley y la institucionalidad.", icon: <ShieldCheck className="w-6 h-6" /> },
    ];

    const advantages = [
        "Enfoque interdisciplinario (abogado y contador)",
        "Análisis completo del problema, no soluciones parciales",
        "Lenguaje claro y técnico",
        "Acompañamiento responsable y profesional",
        "Orientación preventiva y estratégica"
    ];

    return (
        <section className="py-20 lg:py-32 bg-secondary-dark">
            <div className="container mx-auto px-6 lg:px-20">

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                    <div className="bg-primary-dark p-10 border-l-4 border-accent-gold space-y-4">
                        <div className="flex items-center gap-3 text-accent-gold mb-2">
                            <Target className="w-8 h-8" />
                            <h3 className="text-2xl font-serif text-white uppercase tracking-wider">Misión</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed italic">
                            Brindar asesoría jurídica, tributaria, contable y financiera integral, con rigor técnico y enfoque preventivo, orientada al cumplimiento normativo y la protección de los intereses de personas naturales, empresas y entidades públicas o privadas.
                        </p>
                    </div>
                    <div className="bg-primary-dark p-10 border-l-4 border-accent-gold space-y-4">
                        <div className="flex items-center gap-3 text-accent-gold mb-2">
                            <Eye className="w-8 h-8" />
                            <h3 className="text-2xl font-serif text-white uppercase tracking-wider">Visión</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed italic">
                            Ser reconocido como un profesional de referencia por la solidez técnica, la ética y la capacidad de integrar el derecho, la contabilidad y las finanzas en soluciones jurídicas y económicas confiables, eficientes y ajustadas a la normativa colombiana.
                        </p>
                    </div>
                </div>

                {/* Why work with me & Values */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Why work with me */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-serif text-white mb-2">¿Por qué trabajar conmigo?</h2>
                            <div className="w-12 h-1 bg-accent-gold"></div>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Mi formación dual me permite ofrecer una visión periférica de cada caso, asegurando que las decisiones legales tengan sustento financiero y viceversa.
                        </p>
                        <div className="space-y-4">
                            {advantages.map((adv, idx) => (
                                <div key={idx} className="flex items-center gap-4 group">
                                    <div className="w-2 h-2 bg-accent-gold rounded-full group-hover:scale-150 transition-transform"></div>
                                    <span className="text-white text-sm font-medium">{adv}</span>
                                </div>
                            ))}
                        </div>
                        <div className="pt-6">
                            <div className="flex items-center gap-4 text-accent-gold">
                                <MessageSquare className="w-6 h-6" />
                                <span className="font-serif italic text-lg whitespace-nowrap">Soluciones legales con impacto financiero.</span>
                            </div>
                        </div>
                    </div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {values.map((v, idx) => (
                            <div key={idx} className="bg-primary-dark/50 p-6 border border-gray-800 hover:border-accent-gold/20 transition-colors group">
                                <div className="text-accent-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {v.icon}
                                </div>
                                <h4 className="text-white font-serif mb-2">{v.title}</h4>
                                <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
