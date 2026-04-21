"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, BUSINESS } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-text-secondary text-xs font-body uppercase tracking-widest">
              Clínica Dental
            </span>
            <span className="text-primary font-heading font-bold text-lg md:text-xl">
              Gonzalo Renilla
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-primary border-b-2 border-primary pb-0.5"
                    : "text-text hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              <Phone size={14} />
              {BUSINESS.phoneDisplay}
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-text hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-body text-base py-2 border-b border-gray-50 ${
                  pathname === link.href
                    ? "text-primary font-semibold"
                    : "text-text hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 rounded-full text-sm font-medium mt-2"
            >
              <Phone size={16} />
              Llamar ahora — {BUSINESS.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
