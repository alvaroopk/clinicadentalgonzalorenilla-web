"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Gem,
  Sparkles,
  Sun,
  Shield,
  Baby,
  Wrench,
  Leaf,
  Puzzle,
  Eye,
} from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import { TREATMENTS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Gem,
  Sparkles,
  Sun,
  Shield,
  Baby,
  Wrench,
  Leaf,
  Puzzle,
  Eye,
};

export default function TratamientosPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/banner4.jpg"
          alt="Tratamientos en Clínica Dental Gonzalo Renilla Madrid"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary-dark/70" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <motion.p
            className="font-body text-accent uppercase tracking-widest text-sm mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Clínica Dental Gonzalo Renilla
          </motion.p>
          <motion.h1
            className="font-heading font-bold text-4xl md:text-5xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Tratamientos dentales completos en Madrid
          </motion.h1>
          <motion.p
            className="font-body text-white/80 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Desde revisiones hasta implantes y estética avanzada. Cada
            tratamiento, planificado con precisión y ejecutado con los mejores
            materiales.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TREATMENTS.map((t, i) => {
              const Icon = iconMap[t.icon];
              return (
                <motion.article
                  key={t.slug}
                  className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    {Icon && <Icon size={26} className="text-primary" />}
                  </div>
                  <h2 className="font-heading font-bold text-xl text-text mb-3">
                    {t.title}
                  </h2>
                  <p className="font-body text-text-secondary text-sm leading-relaxed">
                    {t.desc}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
