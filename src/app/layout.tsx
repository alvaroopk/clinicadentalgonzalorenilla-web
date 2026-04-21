import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCallButton from "@/components/layout/FloatingCallButton";
import JsonLd from "@/components/seo/JsonLd";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clínica Dental Gonzalo Renilla | Dentista en Madrid desde 1995",
  description:
    "Clínica dental en Madrid con más de 30 años de experiencia. Implantología Nobel-Biocare, estética dental, endodoncia, blanqueamiento y más. Pide cita: 915 547 875.",
  keywords: [
    "dentista Madrid",
    "clínica dental Madrid",
    "implantes dentales Madrid",
    "estética dental Madrid",
    "endodoncia Madrid",
    "blanqueamiento dental Madrid",
    "Gonzalo Renilla",
    "Blasco de Garay",
  ],
  openGraph: {
    title: "Clínica Dental Gonzalo Renilla | Dentista en Madrid",
    description:
      "Tu dentista de confianza en Madrid desde 1995. Implantología, estética dental, endodoncia y más tratamientos con trato personalizado.",
    url: "https://clinicadentalgonzalorenilla-web.vercel.app",
    siteName: "Clínica Dental Gonzalo Renilla",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica Dental Gonzalo Renilla | Dentista en Madrid",
    description:
      "Tu dentista de confianza en Madrid desde 1995. Implantología, estética dental, endodoncia y más.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://clinicadentalgonzalorenilla-web.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${inter.variable} font-body bg-background text-text antialiased`}
      >
        <JsonLd />
        <Header />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
