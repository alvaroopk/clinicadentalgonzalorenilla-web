import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="mb-4">
              <span className="block text-white/60 text-xs uppercase tracking-widest font-body">
                Clínica Dental
              </span>
              <span className="block text-white font-heading font-bold text-xl">
                Gonzalo Renilla
              </span>
            </div>
            <p className="text-white/70 text-sm font-body leading-relaxed">
              Tu dentista de confianza en Madrid desde 1995. Tratamos personas,
              no bocas.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Contacto
            </h3>
            <ul className="space-y-3 font-body text-sm text-white/80">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>
                  {BUSINESS.address}
                  <br />
                  {BUSINESS.city}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-accent" />
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS.phoneDisplay}
                </a>
                <span className="text-white/50">·</span>
                <a
                  href={`tel:${BUSINESS.mobile}`}
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS.mobileDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-accent" />
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>
                  {BUSINESS.hours.weekdays}
                  <br />
                  {BUSINESS.hours.friday}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Navegación
            </h3>
            <ul className="space-y-2 font-body text-sm text-white/80">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/50 text-xs font-body">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="/aviso-legal" className="hover:text-white/80 transition-colors">
              Aviso legal
            </Link>
            <Link href="/privacidad" className="hover:text-white/80 transition-colors">
              Privacidad
            </Link>
            <Link href="/cookies" className="hover:text-white/80 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
