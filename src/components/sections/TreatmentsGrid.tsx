"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Gem,
  Sparkles,
  Sun,
  Shield,
  Leaf,
  Eye,
  ArrowRight,
} from "lucide-react";

const featuredTreatments = [
  {
    title: "Implantología",
    icon: Gem,
    desc: "Recupera tu sonrisa completa con implantes Nobel-Biocare de la máxima calidad y durabilidad.",
  },
  {
    title: "Estética Dental",
    icon: Sparkles,
    desc: "Carillas, blanqueamiento y rehabilitaciones para la sonrisa que siempre quisiste.",
  },
  {
    title: "Blanqueamiento",
    icon: Sun,
    desc: "Dientes más blancos de forma segura, conservadora y con resultados duraderos.",
  },
  {
    title: "Endodoncia",
    icon: Shield,
    desc: "Salvamos tu diente natural con técnicas especializadas y sin dolor.",
  },
  {
    title: "Periodoncia",
    icon: Leaf,
    desc: "Cuidamos tus encías para proteger tus dientes a largo plazo.",
  },
  {
    title: "Sedación Consciente",
    icon: Eye,
    desc: "Para los más aprensivos: tratamientos relajados con gafas 3D Zeiss.",
  },
];

export default function TreatmentsGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4">
            Nuestros tratamientos
          </h2>
          <p className="font-body text-text-secondary max-w-xl mx-auto">
            Soluciones dentales completas, desde revisiones hasta implantes y
            estética avanzada.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTreatments.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.title}
                className="group p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-md hover:scale-[1.02] transition-all duration-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon size={22} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-lg text-text mb-2">
                  {t.title}
                </h3>
                <p className="font-body text-text-secondary text-sm leading-relaxed">
                  {t.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/tratamientos"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-body font-semibold transition-colors"
          >
            Ver todos los tratamientos
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
