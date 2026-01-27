"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {

  return (

    <section className="relative w-full min-h-screen flex items-center pt-40">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-0.5 bg-accent-gold mb-4"
          ></motion.div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-5xl lg:text-7xl font-serif text-white leading-tight"
            >
              Johnny Augusto <br />
              Peña Murcia <br />
              <span className="text-accent-gold text-3xl lg:text-4xl block mt-2">Abogado y Contador Público</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-400 max-w-2xl leading-relaxed border-l-2 border-accent-gold pl-4 text-sm"
          >
            Johnny Augusto Peña Murcia es Abogado y Contador Público, con formación y experiencia en el análisis integral de asuntos jurídicos, tributarios, contables y financieros, orientado al cumplimiento normativo, la prevención del riesgo legal y la correcta toma de decisiones administrativas y económicas.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-4"
          >
            <button className="bg-accent-gold text-black font-semibold px-8 py-4 hover:bg-white transition-colors duration-300 transform hover:-translate-y-1">
              Agendar Consulta
            </button>
            <button className="border border-gray-600 text-white font-semibold px-8 py-4 hover:border-accent-gold hover:text-accent-gold transition-colors duration-300 transform hover:-translate-y-1">
              Ver Servicios
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="hidden lg:flex justify-end relative h-full min-h-[800px] items-end"
        >
          {/* Man Image */}
          <div className="relative w-full h-full max-w-md">
            <Image
              src="/abogado3.webp"
              alt="Lawyer"
              fill
              className="object-cover object-top mask-image-b-fade" // Assuming we might want a fade, but css mask is better.
              style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )

}