"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            ¿Listo para cuidar tu sonrisa?
          </h2>
          <p className="font-body text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Llámanos o escríbenos y te ayudamos a encontrar el tratamiento que
            necesitas. Primera visita sin compromiso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-primary-light px-8 py-4 rounded-full font-body font-semibold text-base transition-colors shadow-md"
            >
              <Phone size={18} />
              Llamar ahora — {BUSINESS.phoneDisplay}
            </a>
            <a
              href={`mailto:${BUSINESS.email}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full font-body font-semibold text-base transition-colors"
            >
              <Mail size={18} />
              Escribir por email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
