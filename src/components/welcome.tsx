"use client";
import { Briefcase, Scale } from "lucide-react";
import Image from "next/image";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function Welcome() {
    // Magnetic effect for signature
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
    const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mouseX.set(x * 0.4);
        mouseY.set(y * 0.4);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section className="py-24 lg:py-40 bg-secondary-dark relative overflow-hidden">
            {/* Background Grain/Noise or subtle pattern could go here */}

            <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* Left Collage with Dramatic High-End Entrance */}
                <div className="relative h-[650px] w-full perspective-2000">
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1, rotateY: 25, x: -50 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-0 left-0 w-[85%] h-[85%] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] z-10 rounded-sm"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop"
                            alt="Library"
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-[2s] ease-out"
                        />
                        <div className="absolute inset-0 bg-primary-dark/10 group-hover:bg-transparent transition-colors duration-700"></div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 100, y: 100, opacity: 0, rotate: 5 }}
                        whileInView={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute bottom-0 right-0 w-[60%] h-[60%] overflow-hidden border-[12px] border-secondary-dark shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7)] z-20 rounded-sm"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1767628711891-3e948c13b478?q=80&w=800&auto=format&fit=crop"
                            alt="Gavel"
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-[2s] ease-out"
                        />
                    </motion.div>

                    {/* Decorative Background Element */}
                    <motion.div
                        animate={{
                            rotate: 360,
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-16 -left-16 w-64 h-64 border border-accent-gold/10 rounded-full flex items-center justify-center"
                    >
                        <div className="w-[90%] h-[90%] border border-accent-gold/5 rounded-full" />
                    </motion.div>
                </div>

                {/* Right Content */}
                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-serif text-white uppercase tracking-tight leading-tight">
                            Quién Soy - <br />
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="text-gold-metallic"
                            >
                                Abogado y Contador Público
                            </motion.span>
                        </h2>
                        <div className="flex items-center gap-6 mt-8">
                            <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: 80 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 0.8, ease: "circOut" }}
                                className="h-px bg-accent-gold/50"
                            ></motion.span>
                            <motion.div
                                animate={{ rotate: [0, 15, -15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Scale className="text-gold-metallic w-6 h-6" />
                            </motion.div>
                            <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: 80 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 0.8, ease: "circOut" }}
                                className="h-px bg-accent-gold/50"
                            ></motion.span>
                        </div>
                    </motion.div>

                    <div className="space-y-8">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="text-gray-400 leading-relaxed text-lg font-light"
                        >
                            Soy Abogado Contador Público, con más de 15 años de experiencia en el análisis integral de asuntos legales, tributarios, contables y financieros. Mi ejercicio profesional se orienta a brindar asesoría técnica, clara y responsable.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.5 }}
                            className="relative"
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold-metallic" />
                            <p className="text-white/90 leading-relaxed text-sm font-medium pl-8 italic bg-white/5 py-6 rounded-r-sm">
                                "Mi trabajo se orienta a ofrecer soluciones claras, legales y sostenibles, integrando el derecho con la contabilidad y las finanzas para proteger el patrimonio y garantizar seguridad jurídica con respaldo profesional en cada caso."
                            </p>
                        </motion.div>
                    </div>

                    {/* Signature with Magnetic Effect */}
                    <motion.div
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{ x: springX, y: springY }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="flex items-center gap-6 group cursor-pointer w-fit"
                    >
                        <div className="w-20 h-20 rounded-full overflow-hidden border border-accent-gold/20 p-1 group-hover:border-accent-gold transition-colors duration-700 relative">
                            <div className="w-full h-full rounded-full overflow-hidden relative">
                                <Image src="/abogado3.webp" alt="Jony Augusto Peña Murcia" fill className="object-cover object-top scale-110 group-hover:scale-125 transition-transform duration-1000" />
                            </div>
                        </div>
                        <div>
                            <p className="text-gold-metallic font-serif text-2xl uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all duration-700">Jony Augusto Peña Murcia</p>
                            <div className="h-px w-0 group-hover:w-full bg-gold-metallic transition-all duration-1000"></div>
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700">Abogado y Contador Público</p>
                        </div>
                    </motion.div>

                    <div className="flex flex-wrap gap-8 mt-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 1 }}
                            whileHover={{ y: -10, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                            className="bg-white/5 backdrop-blur-md p-8 flex flex-col justify-center gap-3 w-64 border border-white/5 transition-all duration-500 rounded-sm group/card"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-accent-gold/10 rounded-lg group-hover/card:bg-accent-gold transition-colors duration-500">
                                    <Briefcase className="w-6 h-6 text-accent-gold group-hover/card:text-black transition-colors" />
                                </div>
                                <span className="text-4xl font-serif text-white">15+</span>
                            </div>
                            <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] leading-tight">Años de Experiencia <br />Interdisciplinaria</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 1.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-gold-metallic p-8 flex flex-col justify-center gap-3 w-64 shadow-[0_20px_40px_-10px_rgba(212,175,55,0.3)] transition-all duration-500 rounded-sm group/stat"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-black/10 rounded-lg">
                                    <Scale className="w-6 h-6 text-black" />
                                </div>
                                <span className="text-3xl font-serif text-black uppercase tracking-tighter">Firme</span>
                            </div>
                            <span className="text-[10px] text-black font-bold uppercase tracking-[0.2em] leading-tight opacity-70 group-hover/stat:opacity-100 transition-opacity">Seguridad Jurídica <br />y Financiera</span>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}
