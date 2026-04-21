import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Clínica Dental Gonzalo Renilla — Madrid desde 1995",
  description:
    "Conoce al Dr. Gonzalo Renilla, especialista en odontología por la UCM y Universidad de Valencia. Más de 30 años cuidando sonrisas en Madrid con honestidad y trato personalizado.",
  alternates: {
    canonical:
      "https://clinicadentalgonzalorenilla-web.vercel.app/sobre-nosotros",
  },
};

export default function SobreNosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
