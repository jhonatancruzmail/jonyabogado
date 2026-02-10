"use client";
import React, { memo } from "react";
import { MapPin, Clock, ExternalLink, Navigation } from "lucide-react";
import { motion } from "framer-motion";

const MAP_URL = "https://www.google.com/maps/search/?api=1&query=Calle+4+%23+1B-62+Barrio+Quinche+Pitalito+Huila";

const INFO_CARDS = [
    {
        icon: <MapPin className="w-6 h-6 text-accent-gold" />,
        title: "Dirección",
        content: "Calle 4 # 1B-62 Barrio Quinche\nPitalito, Huila"
    },
    {
        icon: <Clock className="w-6 h-6 text-accent-gold" />,
        title: "Horarios de Atención",
        content: "Lunes a Viernes: 8:00 AM – 6:00 PM\nSábados: 9:00 AM – 12:00 PM"
    }
];

const InfoCard = memo(({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) => (
    <motion.div
        whileHover={{ x: 10 }}
        className="flex gap-6 items-start group"
    >
        <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-accent-gold/50 transition-colors">
            {icon}
        </div>
        <div>
            <h4 className="text-white font-serif text-xl mb-1">{title}</h4>
            <p className="text-gray-400 font-light whitespace-pre-line">{content}</p>
        </div>
    </motion.div>
));

InfoCard.displayName = "InfoCard";

export default function Location() {
    return (
        <section className="py-24 lg:py-40 bg-primary-dark relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-gold/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-gold/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* Left Side: Information Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-10"
                    >
                        <div className="space-y-6">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-accent-gold text-xs uppercase tracking-[0.5em] font-bold block"
                            >
                                Encuéntrenos
                            </motion.span>
                            <h2 className="text-5xl lg:text-7xl font-serif text-white leading-tight">
                                Ubicación <br />
                                <span className="text-gold-metallic italic">Estratégica</span>
                            </h2>
                            <div className="h-0.5 bg-accent-gold/20 w-24"></div>
                        </div>

                        <p className="text-gray-400 text-lg font-light leading-relaxed max-w-lg">
                            Visítenos en nuestra oficina principal para recibir atención personalizada y de alto nivel técnico en todos sus procesos jurídicos y contables.
                        </p>

                        <div className="grid gap-8">
                            {INFO_CARDS.map((card, index) => (
                                <InfoCard key={index} {...card} />
                            ))}
                        </div>

                        <motion.a
                            href={MAP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 bg-gold-metallic text-black font-bold py-4 px-8 rounded-sm uppercase text-xs tracking-[0.2em] shadow-2xl transition-all"
                        >
                            <Navigation className="w-4 h-4" />
                            Cómo llegar
                        </motion.a>
                    </motion.div>

                    {/* Right Side: Map Representation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="relative group"
                    >
                        <div className="aspect-[4/5] bg-secondary-dark border border-white/5 relative overflow-hidden rounded-sm shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent z-10" />

                            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 space-y-6">
                                <motion.div
                                    animate={{
                                        y: [0, -10, 0],
                                        boxShadow: ["0 0 20px rgba(212,175,55,0.2)", "0 0 40px rgba(212,175,55,0.4)", "0 0 20px rgba(212,175,55,0.2)"]
                                    }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-24 h-24 rounded-full bg-accent-gold flex items-center justify-center border-[8px] border-primary-dark shadow-2xl"
                                >
                                    <MapPin className="w-10 h-10 text-black fill-black/20" />
                                </motion.div>
                                <div className="text-center space-y-2">
                                    <p className="text-gold-metallic font-serif text-2xl tracking-widest">Pitalito</p>
                                    <p className="text-white/40 uppercase text-[10px] tracking-[0.4em]">Huila, Colombia</p>
                                </div>
                            </div>

                            <div className="absolute top-1/4 left-0 w-full h-px bg-white/5 -rotate-12" />
                            <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 rotate-6" />
                            <div className="absolute top-0 left-1/3 w-px h-full bg-white/5 rotate-12" />

                            <a
                                href={MAP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 z-30 flex items-center justify-center bg-accent-gold/0 group-hover:bg-accent-gold/10 transition-colors duration-700 cursor-pointer"
                            >
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white text-black py-4 px-8 rounded-full font-bold uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-2xl">
                                    Ver en Google Maps <ExternalLink className="w-3 h-3" />
                                </div>
                            </a>
                        </div>

                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-gold/10 blur-[60px] rounded-full" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-gold/10 blur-[60px] rounded-full" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
