"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import ContactForm from "@/components/sections/ContactForm";

export default function ContactoPage() {
  return (
    <>
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="font-heading font-bold text-4xl md:text-5xl text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contacta con nosotros
          </motion.h1>
          <motion.p
            className="font-body text-white/80 text-lg max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Estamos en Madrid. Llámanos, escríbenos o pásate por la clínica.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading font-bold text-2xl text-text mb-8">
                Datos de contacto
              </h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin size={22} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-text mb-1">
                      Dirección
                    </p>
                    <p className="font-body text-text-secondary text-sm">
                      {BUSINESS.address}
                      <br />
                      {BUSINESS.city}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone size={22} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-text mb-1">
                      Teléfono
                    </p>
                    <a
                      href={`tel:${BUSINESS.phone}`}
                      className="font-body text-text-secondary text-sm hover:text-primary transition-colors block"
                    >
                      {BUSINESS.phoneDisplay}
                    </a>
                    <a
                      href={`tel:${BUSINESS.mobile}`}
                      className="font-body text-text-secondary text-sm hover:text-primary transition-colors block"
                    >
                      {BUSINESS.mobileDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail size={22} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-text mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="font-body text-text-secondary text-sm hover:text-primary transition-colors"
                    >
                      {BUSINESS.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock size={22} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-text mb-1">
                      Horario
                    </p>
                    <p className="font-body text-text-secondary text-sm">
                      {BUSINESS.hours.weekdays}
                      <br />
                      {BUSINESS.hours.friday}
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-10 rounded-2xl overflow-hidden h-64">
                <iframe
                  title="Mapa Clínica Dental Gonzalo Renilla — Calle Blasco de Garay 94, Madrid"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.936!2d-3.7161!3d40.4327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42288!2sCalle+Blasco+de+Garay+94%2C+Madrid!5e0!3m2!1ses!2ses"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading font-bold text-2xl text-text mb-6">
                Envíanos un mensaje
              </h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
