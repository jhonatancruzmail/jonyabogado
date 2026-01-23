import { Briefcase, Scale } from "lucide-react";
import Image from "next/image";

export default function Welcome() {
    return (

        <section className="py-20 lg:py-32 bg-secondary-dark relative">
            <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Collage */}
                <div className="relative h-[500px] w-full">
                    <div className="absolute top-0 left-0 w-3/5 h-3/5 overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop"
                            alt="Library"
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    <div className="absolute bottom-0 right-10 w-3/5 h-3/5 overflow-hidden border-4 border-secondary-dark shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1767628711891-3e948c13b478?q=80&w=800&auto=format&fit=crop"
                            alt="Gavel"
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    {/* Vertical text or decoration could go here */}
                </div>

                {/* Right Content */}
                <div className="space-y-8">
                    <h2 className="text-3xl lg:text-4xl font-serif text-white">
                        Bienvenido - <br />
                        Tu Abogado de Confianza
                    </h2>
                    <div className="flex items-center gap-2">
                        <span className="h-[1px] w-12 bg-accent-gold"></span>
                        <Scale className="text-accent-gold w-6 h-6" />
                        <span className="h-[1px] w-12 bg-accent-gold"></span>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                        Aunque estoy ubicado en Pitalito, como abogado estoy orgulloso de ayudar a mis clientes en todo el Huila, mi objetivo es brindar asesoría legal de calidad y defender los derechos de mis clientes, con honestidad, transparencia y compromiso.
                    </p>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700 relative">
                            <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200" alt="Peter Parker" fill className="object-cover" />
                        </div>
                        <div>
                            <p className="text-accent-gold font-serif text-xl">Peter Parker</p>
                        </div>
                    </div>

                    <div className="flex gap-6 mt-8">
                        <div className="bg-gray-800 p-6 flex items-center gap-4 w-48">
                            <Briefcase className="w-10 h-10 text-gray-500" />
                            <div>
                                <span className="text-2xl font-bold text-white block">95%</span>
                                <span className="text-sm text-gray-400">Casos Exitosos</span>
                            </div>
                        </div>
                        <div className="bg-accent-gold p-6 flex items-center gap-4 w-48">
                            <div className="bg-black text-white px-2 py-1 font-bold text-lg">35+</div>
                            <div>
                                <span className="text-sm text-black font-semibold">Años de <br /> Experiencia</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}