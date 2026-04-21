import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Clínica Dental Gonzalo Renilla — Calle Blasco de Garay 94, Madrid",
  description:
    "Pide cita en la Clínica Dental Gonzalo Renilla. Calle Blasco de Garay 94, 1º Dcha, Madrid. Tel: 915 547 875. Horario: L-J 9-20h, V 9-14h.",
  alternates: {
    canonical: "https://clinicadentalgonzalorenilla-web.vercel.app/contacto",
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
