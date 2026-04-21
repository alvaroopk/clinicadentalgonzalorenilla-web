import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function FloatingCallButton() {
  return (
    <a
      href={`tel:${BUSINESS.phone}`}
      className="md:hidden fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-full shadow-lg transition-colors"
      aria-label={`Llamar a ${BUSINESS.name}`}
    >
      <Phone size={18} />
      <span className="font-body font-semibold text-sm">Llamar ahora</span>
    </a>
  );
}
