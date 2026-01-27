"use client";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/____________________" // Placeholder as requested
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 1.5
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[100] group"
            aria-label="Contactar por WhatsApp"
        >
            {/* Tooltip */}
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-accent-gold text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-white/20">
                ¿Necesitas asesoría? ¡Escríbeme!
            </span>

            {/* Pulsating background for prominence */}
            <span className="absolute inset-0 rounded-full bg-accent-gold opacity-40 animate-ping"></span>

            {/* Main Button */}
            <div className="relative bg-accent-gold hover:bg-white text-black p-4 rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.4)] transition-colors duration-300 flex items-center justify-center border-2 border-primary-dark">
                <MessageCircle className="w-8 h-8" fill="currentColor" />
            </div>
        </motion.a>
    );
}
