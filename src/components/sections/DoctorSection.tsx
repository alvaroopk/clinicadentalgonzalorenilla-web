"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const credentials = [
  "Licenciado en Odontología — UCM",
  "Especialista en Estética Dental — UCM",
  "Especialista en Endodoncia — Universidad de Valencia",
  "Especialista en Odontología Preventiva y Comunitaria — UCM",
  "Formación continuada en implantología y periodoncia",
];

export default function DoctorSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-accent uppercase tracking-widest text-sm mb-3">
              Conócenos
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-5">
              El Dr. Gonzalo Renilla
            </h2>
            <p className="font-body text-text-secondary leading-relaxed mb-6">
              Licenciado y especialista por la Universidad Complutense de Madrid
              y la Universidad de Valencia, el Dr. Gonzalo Renilla lleva más de
              30 años al frente de su clínica. Su formación continuada y su
              pasión por la odontología de calidad se traducen en tratamientos de
              excelencia para cada paciente.
            </p>
            <ul className="space-y-3 mb-8">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-3 font-body text-sm text-text">
                  <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/sobre-nosotros"
              className="inline-block bg-primary hover:bg-primary-dark text-white px-7 py-3 rounded-full font-body font-semibold text-sm transition-colors"
            >
              Conoce la clínica
            </Link>
          </motion.div>

          <motion.div
            className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/banner6.jpg"
              alt="Interior de la Clínica Dental Gonzalo Renilla en Madrid"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
