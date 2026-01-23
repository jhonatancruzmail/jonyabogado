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
        View More <ArrowRight className="w-3 h-3" />
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
                            Explore The Perfect <br />
                            Our Practice Areas
                        </h2>
                        <div className="flex items-center gap-2">
                            <span className="h-[1px] w-12 bg-accent-gold"></span>
                            <Scale className="text-accent-gold w-6 h-6" />
                            <span className="h-[1px] w-12 bg-accent-gold"></span>
                        </div>
                    </div>
                    <p className="text-gray-400 max-w-md text-sm leading-relaxed">
                        We are a group of civil litigation/trial attorneys who focus on providing a justice based on the issues relating to insurance defense, insurance coverage, bad faith, insurance fraud and criminal litigation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <PracticeCard
                        icon={<Briefcase className="w-10 h-10 text-accent-gold" />}
                        title="Business Law"
                        desc="Be aware of new developments, as laws and rules often change based on the situation."
                    />
                    <PracticeCard
                        icon={<Building2 className="w-10 h-10 text-accent-gold" />}
                        title="Construction Law"
                        desc="Never judge, just listen and advise. Even if your client has made a bad decision in the case."
                    />
                    <PracticeCard
                        icon={<Car className="w-10 h-10 text-accent-gold" />}
                        title="Car Accident"
                        desc="Being untruthful will get you nowhere and give you a reputation of the dishonesty in law."
                    />
                    <PracticeCard
                        icon={<UserX className="w-10 h-10 text-accent-gold" />}
                        title="Wrongful Death"
                        desc="Keep yourself up-to-date on your area of law. Be aware of new justice, as laws and rules."
                    />
                    <PracticeCard
                        icon={<Gavel className="w-10 h-10 text-accent-gold" />}
                        title="Criminal Law"
                        desc="Our attorneys are fully committed to providing you with the support and attention that you deserve."
                    />
                    <PracticeCard
                        icon={<Users className="w-10 h-10 text-accent-gold" />}
                        title="Family Law"
                        desc="You may find yourself unable to work or complete work-related responsibilities safely."
                    />
                </div>
            </div>
        </section>
    )
}