"use client";

import { motion } from "framer-motion";
import { Award, Heart, Zap } from "lucide-react";

const pillars = [
  {
    icon: Award,
    title: "Experiencia contrastada",
    desc: "Licenciado y especialista por la UCM y la Universidad de Valencia. Más de 30 años al frente de la clínica con formación continuada.",
  },
  {
    icon: Heart,
    title: "Trato personalizado",
    desc: "Dedicamos el tiempo necesario a cada paciente. No hay prisas, no hay protocolos vacíos. Hay personas y hay resultados.",
  },
  {
    icon: Zap,
    title: "Tecnología avanzada",
    desc: "Implantes Nobel-Biocare, gafas 3D Zeiss para relajarte durante el tratamiento y materiales de la máxima calidad.",
  },
];

export default function ValuePillars() {
  return (
    <section id="por-que-nosotros" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4">
            Por qué elegirnos
          </h2>
          <p className="font-body text-text-secondary max-w-xl mx-auto">
            En Clínica Dental Renilla no vemos bocas, vemos personas. Cada visita
            es un compromiso con tu bienestar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-primary-light border border-primary/10 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <Icon size={26} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-text mb-3">
                  {pillar.title}
                </h3>
                <p className="font-body text-text-secondary text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
