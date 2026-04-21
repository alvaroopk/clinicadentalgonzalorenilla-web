"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ChevronDown } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/banner5.jpg"
        alt="Clínica Dental Gonzalo Renilla — instalaciones modernas en Madrid"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/70 via-primary-dark/60 to-primary-dark/75" />

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.p
          className="font-body text-accent uppercase tracking-widest text-sm mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Madrid · Desde {BUSINESS.since}
        </motion.p>

        <motion.h1
          className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Tu dentista de confianza
          <br />
          <span className="text-accent">en Madrid</span>
        </motion.h1>

        <motion.p
          className="font-body text-white/85 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Tratamos personas, no bocas. Más de 30 años cuidando sonrisas con
          especialización, tecnología avanzada y un trato verdaderamente cercano.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href={`tel:${BUSINESS.phone}`}
            className="flex items-center justify-center gap-2 bg-accent hover:bg-teal-400 text-white px-8 py-4 rounded-full font-body font-semibold text-base transition-colors shadow-lg"
          >
            <Phone size={18} />
            Pedir cita — {BUSINESS.phoneDisplay}
          </a>
          <Link
            href="/tratamientos"
            className="flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full font-body font-semibold text-base transition-colors"
          >
            Ver tratamientos
          </Link>
        </motion.div>
      </div>

      <a
        href="#por-que-nosotros"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Desplazarse hacia abajo"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
