import { BUSINESS } from "@/lib/constants";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: BUSINESS.name,
    description:
      "Clínica dental en Madrid con más de 30 años de experiencia. Especialistas en implantología Nobel-Biocare, estética dental, endodoncia y más tratamientos con trato personalizado.",
    url: "https://clinicadentalgonzalorenilla-web.vercel.app",
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address,
      addressLocality: BUSINESS.city,
      addressRegion: "Madrid",
      postalCode: BUSINESS.postalCode,
      addressCountry: "ES",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
    foundingDate: BUSINESS.since,
    medicalSpecialty: [
      "Implantología",
      "Estética Dental",
      "Endodoncia",
      "Blanqueamiento Dental",
      "Periodoncia",
      "Odontología Infantil",
    ],
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card",
    areaServed: {
      "@type": "City",
      name: "Madrid",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
