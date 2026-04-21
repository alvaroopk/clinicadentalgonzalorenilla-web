import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tratamientos Dentales en Madrid | Clínica Dental Gonzalo Renilla",
  description:
    "Implantología Nobel-Biocare, estética dental, endodoncia, blanqueamiento, periodoncia y más. Tratamientos dentales completos en Madrid con 30 años de experiencia.",
  alternates: {
    canonical: "https://clinicadentalgonzalorenilla-web.vercel.app/tratamientos",
  },
};

export default function TratamientosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
