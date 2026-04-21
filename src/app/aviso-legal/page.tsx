import { BUSINESS } from "@/lib/constants";

export default function AvisoLegalPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <h1 className="font-heading font-bold text-3xl text-text mb-8">
        Aviso Legal
      </h1>
      <div className="font-body text-text-secondary space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="font-heading font-semibold text-lg text-text mb-2">
            Titular del sitio web
          </h2>
          <p>
            {BUSINESS.name}
            <br />
            {BUSINESS.address}, {BUSINESS.city}
            <br />
            Email: {BUSINESS.email}
            <br />
            Tel: {BUSINESS.phoneDisplay}
          </p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-lg text-text mb-2">
            Objeto y ámbito de aplicación
          </h2>
          <p>
            El presente Aviso Legal regula el acceso, navegación y uso del sitio
            web de {BUSINESS.name}. El acceso al sitio web implica la aceptación
            plena y sin reservas de las presentes condiciones.
          </p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-lg text-text mb-2">
            Propiedad intelectual
          </h2>
          <p>
            Todos los contenidos del sitio web, incluyendo textos, imágenes y
            diseño, son propiedad de {BUSINESS.name} o de terceros que han
            autorizado su uso. Queda prohibida su reproducción sin autorización
            expresa.
          </p>
        </section>
      </div>
    </div>
  );
}
