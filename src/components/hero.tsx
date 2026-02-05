"use client";
import Image from "next/image";
import { motion, useScroll, useTransform, Variants, useSpring, useMotionValue } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 500], [0, 150]);
  const yContent = useTransform(scrollY, [0, 500], [0, -80]);
  const opacityHeader = useTransform(scrollY, [0, 300], [1, 0]);

  // Magnetic button effect values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x * 0.3);
    mouseY.set(y * 0.3);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const titleVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.5
      }
    }
  };

  const text = "Jony Augusto Peña Murcia";
  const words = text.split(" ");

  return (
    <section ref={containerRef} className="relative w-full min-h-screen flex items-center pt-0 lg:pt-32 overflow-hidden bg-primary-dark">
      {/* Background Image Overlay with Enhanced Ken Burns */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.2, rotate: 1 }}
          animate={{ scale: 1.1, rotate: 0 }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="relative w-full h-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop"
            alt="Law Library Background"
            fill
            className="object-cover opacity-15 grayscale-[0.5]"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y: yContent, opacity: opacityHeader }}
        className="container mx-auto px-6 lg:px-20 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-6 lg:space-y-10 relative z-20">
          <motion.div
            variants={lineVariants}
            className="h-1 bg-accent-gold w-16 mb-6"
          ></motion.div>

          <div className="overflow-visible">
            <h1 className="flex flex-col pt-28 lg:pt-0 text-5xl lg:text-8xl font-serif text-white leading-[1.1] tracking-tight">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
                className="text-gray-400 text-xl lg:text-3xl block mb-4 lg:mt-6 font-light tracking-widest uppercase order-1 lg:order-2"
              >
                Abogado <span className="lg:inline hidden">& Contador Público</span><span className="lg:hidden inline">& Contador</span>
              </motion.span>
              <div className="order-2 lg:order-1">
                <span className="block overflow-hidden pb-2">
                  <motion.span variants={titleVariants} className="block">
                    <span className="lg:inline hidden">Jony Augusto</span>
                    <span className="lg:hidden inline">Jony</span>
                  </motion.span>
                </span>
                <span className="block overflow-hidden py-1">
                  <motion.span
                    variants={titleVariants}
                    className="block text-gold-metallic italic relative"
                  >
                    <span className="lg:inline hidden">Peña Murcia</span>
                    <span className="lg:hidden inline">Peña</span>
                    <motion.span
                      initial={{ backgroundPosition: "200% 0" }}
                      animate={{ backgroundPosition: "-200% 0" }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "easeInOut",
                        delay: 2
                      }}
                      style={{
                        backgroundImage: "linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.8) 50%, transparent 65%)",
                        backgroundSize: "250% 100%",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                      }}
                      className="absolute inset-0 z-10 text-transparent pointer-events-none brightness-150"
                    >
                      <span className="lg:inline hidden">Peña Murcia</span>
                      <span className="lg:hidden inline">Peña</span>
                    </motion.span>
                  </motion.span>
                </span>
              </div>
            </h1>
          </div>

          <motion.p
            variants={titleVariants}
            className="text-white lg:text-gray-400 max-w-xl leading-relaxed border-l border-accent-gold/50 pl-6 text-base font-light bg-accent-gold/10 backdrop-blur-md p-6 rounded-sm lg:bg-transparent lg:p-0 lg:backdrop-blur-none mt-54 lg:mt-0"
          >
            Análisis integral de asuntos jurídicos, tributarios, contables y financieros, orientado al cumplimiento normativo y la prevención del riesgo legal.
          </motion.p>

          <motion.div
            variants={titleVariants}
            className="flex flex-wrap gap-6 pt-4"
          >
            <motion.button
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ x: springX, y: springY }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gold-metallic text-black font-bold px-10 py-5 transition-all duration-500 relative overflow-hidden group rounded-sm"
            >
              <span className="relative z-10">Agendar Consulta</span>
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity"
                initial={false}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </motion.button>
            <motion.a
              href="#servicios"
              whileHover={{
                backgroundColor: "rgba(212, 175, 55, 0.1)",
                borderColor: "#d4af37"
              }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/20 text-white font-medium px-10 py-5 transition-all duration-500 rounded-sm backdrop-blur-sm flex items-center justify-center cursor-pointer"
            >
              Ver Servicios
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{ y: yImage }}
          className="flex justify-end items-end pb-0 absolute lg:relative -right-16 lg:right-0 bottom-48 lg:bottom-auto h-[600px] lg:h-[800px] w-full lg:w-auto opacity-30 lg:opacity-100 z-10 lg:z-10 pointer-events-none lg:pointer-events-auto"
        >
          {/* Man Image with Parallax and Glow */}
          <div className="relative w-full h-full max-w-lg group">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-gold/10 blur-[120px] rounded-full z-0"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                rotate: [0, 90, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full h-full"
            >
              <Image
                src="/abogado3.webp"
                alt="Jony Augusto Peña Murcia"
                fill
                className="object-cover object-top relative z-10"
                style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
                priority
              />
            </motion.div>

            {/* Decorative Floating Elements */}
            <motion.div
              animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-32 h-32 border border-accent-gold/20 rounded-full blur-sm"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-[10px] text-gold-metallic uppercase tracking-[0.3em] font-bold">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-accent-gold to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
