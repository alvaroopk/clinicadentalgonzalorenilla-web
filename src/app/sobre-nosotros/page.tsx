"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const credentials = [
  "Licenciado en Odontología — UCM",
  "Especialista en Estética Dental — UCM",
  "Especialista en Endodoncia — Universidad de Valencia",
  "Especialista en Odontología Preventiva y Comunitaria — UCM",
  "Formación continuada en implantología y periodoncia",
];

const galleryImages = [
  { src: "/banner1.jpg", alt: "Clínica Dental Renilla — sala de tratamiento" },
  { src: "/banner2.jpg", alt: "Clínica Dental Renilla — instalaciones" },
  { src: "/banner3.jpg", alt: "Clínica Dental Renilla — equipamiento moderno" },
  { src: "/banner4.jpg", alt: "Clínica Dental Renilla — consulta" },
  { src: "/banner6.jpg", alt: "Clínica Dental Renilla — sala de espera" },
  { src: "/banner7.jpg", alt: "Clínica Dental Renilla — detalle clínica" },
];

export default function SobreNosotrosPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/banner3.jpg"
          alt="Clínica Dental Gonzalo Renilla Madrid desde 1995"
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
            Madrid · Desde {BUSINESS.since}
          </motion.p>
          <motion.h1
            className="font-heading font-bold text-4xl md:text-5xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Clínica Dental Gonzalo Renilla
          </motion.h1>
          <motion.p
            className="font-body text-white/80 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Más de tres décadas cuidando la salud dental de las familias
            madrileñas con honestidad, especialización y trato humano.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-5">
                Una clínica construida sobre confianza
              </h2>
              <p className="font-body text-text-secondary leading-relaxed mb-4">
                Desde 1995, la Clínica Dental Gonzalo Renilla ha sido un
                referente en el barrio de Argüelles (Madrid). Empezamos con un
                objetivo claro: ofrecer a cada paciente el tratamiento que
                realmente necesita, con el tiempo que merece y la honestidad que
                se exige.
              </p>
              <p className="font-body text-text-secondary leading-relaxed">
                Hoy, treinta años después, ese objetivo sigue siendo nuestra
                razón de ser. No vemos bocas, vemos personas. Y esa filosofía
                está presente en cada visita, cada diagnóstico y cada
                tratamiento.
              </p>
            </motion.div>

            <motion.div
              className="relative h-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/banner1.jpg"
                alt="Historia de la Clínica Dental Gonzalo Renilla"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              className="relative h-80 lg:h-[480px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/banner2.jpg"
                alt="Dr. Gonzalo Renilla — dentista especialista en Madrid"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-body text-accent uppercase tracking-widest text-sm mb-3">
                Formación y experiencia
              </p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-5">
                Dr. Gonzalo Renilla — Especialista en odontología integral
              </h2>
              <p className="font-body text-text-secondary leading-relaxed mb-6">
                Licenciado y especialista por la Universidad Complutense de
                Madrid y la Universidad de Valencia, el Dr. Gonzalo Renilla
                lleva más de 30 años al frente de su clínica. Su formación
                continuada y su pasión por la odontología de calidad se
                traducen en tratamientos de excelencia para cada paciente.
              </p>
              <ul className="space-y-3 mb-8">
                {credentials.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-3 font-body text-sm text-text"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-accent shrink-0 mt-0.5"
                    />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-primary-light rounded-2xl p-6 border border-primary/10">
                <p className="font-body text-sm text-text-secondary leading-relaxed italic">
                  &quot;Gracias al Dr. Rafael Miñana Laliga que me transmitió
                  todos sus conocimientos y su pasión por la endodoncia. Gracias
                  al Dr. Javier Tapia García del que aprendí cómo planificar los
                  casos. Gracias al Dr. Pedro Lázaro Calvo del que sigo
                  aprendiendo de implantes y periodoncia.&quot;
                </p>
                <p className="mt-3 font-body text-xs text-text-secondary font-semibold">
                  — Dr. Gonzalo Renilla
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4">
              Nuestras instalaciones
            </h2>
            <p className="font-body text-text-secondary max-w-xl mx-auto">
              Diseñamos la clínica para que te sientas cómodo desde el primer
              momento. Un espacio sereno, equipado con tecnología de última
              generación.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.src}
                className="relative h-64 rounded-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">
            ¿Quieres conocernos?
          </h2>
          <p className="font-body text-white/80 mb-8">
            Ven a visitarnos o llámanos. Estaremos encantados de enseñarte la
            clínica y resolver todas tus dudas.
          </p>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="inline-flex items-center gap-2 bg-white text-primary hover:bg-primary-light px-8 py-4 rounded-full font-body font-semibold text-base transition-colors shadow-md"
          >
            <Phone size={18} />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
