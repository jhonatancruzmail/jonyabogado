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
                        <h2 className="text-3xl lg:text-5xl font-serif text-white">
                            Explora Mis Áreas <br />
                            de Práctica
                        </h2>
                        <div className="flex items-center gap-2">
                            <span className="h-[1px] w-12 bg-accent-gold"></span>
                            <Scale className="text-accent-gold w-6 h-6" />
                            <span className="h-[1px] w-12 bg-accent-gold"></span>
                        </div>
                    </div>
                    <p className="text-gray-400 max-w-md text-sm leading-relaxed">
                        Soy un abogado de litigio civil y juicios enfocado en brindar justicia basada en problemas relacionados con defensa de seguros, cobertura de seguros, mala fe, fraude de seguros y litigio penal.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <PracticeCard
                        icon={<Briefcase className="w-10 h-10 text-accent-gold" />}
                        title="Derecho Corporativo"
                        desc="Mantente al tanto de los nuevos desarrollos, ya que las leyes y normas cambian a menudo según la situación."
                    />
                    <PracticeCard
                        icon={<Building2 className="w-10 h-10 text-accent-gold" />}
                        title="Derecho de Construcción"
                        desc="Nunca juzgues, solo escucha y aconseja. Incluso si tu cliente ha tomado una mala decisión en el caso."
                    />
                    <PracticeCard
                        icon={<Car className="w-10 h-10 text-accent-gold" />}
                        title="Accidentes de Auto"
                        desc="Ser deshonesto no te llevará a ninguna parte y te dará una reputación de deshonestidad en la ley."
                    />
                    <PracticeCard
                        icon={<UserX className="w-10 h-10 text-accent-gold" />}
                        title="Homicidio Culposo"
                        desc="Mantente actualizado en tu área de derecho. Sé consciente de la nueva justicia, así como de las leyes y normas."
                    />
                    <PracticeCard
                        icon={<Gavel className="w-10 h-10 text-accent-gold" />}
                        title="Derecho Penal"
                        desc="Estoy totalmente comprometido a brindarte el apoyo y la atención que mereces."
                    />
                    <PracticeCard
                        icon={<Users className="w-10 h-10 text-accent-gold" />}
                        title="Derecho Familiar"
                        desc="Es posible que no puedas trabajar o cumplir con tus responsabilidades laborales de manera segura."
                    />
                </div>
            </div>
        </section>
    )
}