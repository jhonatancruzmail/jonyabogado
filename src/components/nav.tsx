"use client";
import { Menu, Phone, Calendar } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";

export default function Nav() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    const scrollProgress = useTransform(scrollY, [0, 2000], [0, 100]);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 lg:px-20 ${isScrolled
                    ? "py-4 bg-primary-dark/80 backdrop-blur-xl border-b border-white/5 shadow-2xl"
                    : "py-8 bg-transparent"
                    }`}
            >
                {/* Scroll Progress Indicator */}
                <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-accent-gold z-50"
                    style={{ width: `${scrollProgress}%`, opacity: isScrolled ? 1 : 0 }}
                />

                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="relative w-12 h-12 lg:w-14 lg:h-14 overflow-hidden rounded-xl bg-accent-gold p-0.5 group-hover:rotate-6 transition-transform duration-500">
                            <div className="w-full h-full bg-primary-dark rounded-[10px] flex items-center justify-center overflow-hidden">
                                <Image src="/Logo.png" alt="Logo" width={40} height={40} className="scale-110 group-hover:scale-125 transition-transform duration-500" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl lg:text-2xl font-serif text-white font-bold tracking-tight uppercase leading-none">Jony Peña</span>
                            <span className="text-[10px] text-accent-gold tracking-[0.4em] uppercase font-light mt-1">Abogado & Contador</span>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Contacto Directo</span>
                            <div className="flex items-center gap-2 text-white font-medium hover:text-accent-gold transition-colors cursor-pointer">
                                <Phone className="w-4 h-4 text-accent-gold" />
                                <span>+57 320 397 6761</span>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative px-8 py-4 bg-accent-gold text-black font-bold uppercase text-xs tracking-[0.2em] rounded-sm overflow-hidden group shadow-[0_10px_20px_-10px_rgba(212,175,55,0.5)] transition-all"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Agendar Consulta
                            </span>
                            <motion.div
                                className="absolute inset-0 bg-white"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            />
                        </motion.button>
                    </div>

                    <div className="block md:hidden">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-white/5 rounded-lg border border-white/10 text-white"
                        >
                            <Menu className="w-6 h-6" />
                        </motion.button>
                    </div>
                </div>
            </motion.nav>
        </>
    )
}
