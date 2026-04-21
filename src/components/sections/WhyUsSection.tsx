"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const reasons = [
  "Trato personalizado: dedicamos el tiempo necesario a cada paciente",
  "No vemos bocas, vemos personas — filosofía de cuidado integral",
  "Tecnología de última generación: Nobel-Biocare y gafas 3D Zeiss",
  "Honestidad y transparencia en cada diagnóstico",
  "Más de 30 años de experiencia en el corazón de Madrid",
  "Espacio diseñado para minimizar la ansiedad dental",
];

export default function WhyUsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <Image
        src="/porquenosotros.jpg"
        alt="Clínica Dental Gonzalo Renilla — por qué elegirnos"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary-dark/80" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Lo que nos hace diferentes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                <Check size={14} className="text-white" />
              </div>
              <span className="font-body text-white/90 text-sm leading-relaxed">
                {reason}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
