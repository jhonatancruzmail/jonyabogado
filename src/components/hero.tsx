"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 500], [0, 100]);
  const yContent = useTransform(scrollY, [0, 500], [0, -50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
    }
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: 48,
      transition: { duration: 1, ease: "easeInOut" }
    }
  };

  return (
    <section ref={containerRef} className="relative w-full min-h-screen flex items-center pt-40 overflow-hidden">
      {/* Background Image Overlay with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="relative w-full h-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop"
            alt="Law Library Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/95 to-transparent"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y: yContent }}
        className="container mx-auto px-6 lg:px-20 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-8">
          <motion.div
            variants={lineVariants}
            className="h-0.5 bg-accent-gold mb-4"
          ></motion.div>

          <div className="overflow-hidden">
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-serif text-white leading-tight"
            >
              Johnny Augusto <br />
              Peña Murcia <br />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-accent-gold text-3xl lg:text-4xl block mt-2"
              >
                Abogado y Contador Público
              </motion.span>
            </motion.h1>
          </div>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 max-w-2xl leading-relaxed border-l-2 border-accent-gold pl-4 text-sm"
          >
            Johnny Augusto Peña Murcia es Abogado y Contador Público, con formación y experiencia en el análisis integral de asuntos jurídicos, tributarios, contables y financieros, orientado al cumplimiento normativo, la prevención del riesgo legal y la correcta toma de decisiones administrativas y económicas.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-gold text-black font-semibold px-8 py-4 transition-colors duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Agendar Consulta</span>
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
                initial={false}
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: "#d4af37", color: "#d4af37" }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-600 text-white font-semibold px-8 py-4 transition-all duration-300"
            >
              Ver Servicios
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: yImage }}
          className="hidden lg:flex justify-end relative h-full min-h-[800px] items-end px-10"
        >
          {/* Man Image with Parallax and Glow */}
          <div className="relative w-full h-full max-w-md group">
            <motion.div
              className="absolute inset-0 bg-accent-gold/5 blur-3xl rounded-full scale-150 group-hover:bg-accent-gold/10 transition-colors"
              animate={{
                scale: [1.4, 1.5, 1.4],
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <Image
              src="/abogado3.webp"
              alt="Lawyer"
              fill
              className="object-cover object-top mask-image-b-fade relative z-10"
              style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}