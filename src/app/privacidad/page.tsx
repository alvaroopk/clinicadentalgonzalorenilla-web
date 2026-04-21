import { BUSINESS } from "@/lib/constants";

export default function PrivacidadPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <h1 className="font-heading font-bold text-3xl text-text mb-8">
        Política de Privacidad
      </h1>
      <div className="font-body text-text-secondary space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="font-heading font-semibold text-lg text-text mb-2">
            Responsable del tratamiento
          </h2>
          <p>
            {BUSINESS.name} — {BUSINESS.address}, {BUSINESS.city}
            <br />
            Email: {BUSINESS.email}
          </p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-lg text-text mb-2">
            Finalidad del tratamiento
          </h2>
          <p>
            Los datos personales que facilite a través del formulario de
            contacto serán tratados con la finalidad de atender su consulta o
            solicitud de información sobre nuestros servicios.
          </p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-lg text-text mb-2">
            Derechos del usuario
          </h2>
          <p>
            Tiene derecho a acceder, rectificar, cancelar y oponerse al
            tratamiento de sus datos personales. Para ejercer estos derechos
            puede dirigirse a {BUSINESS.email}.
          </p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-lg text-text mb-2">
            Conservación de datos
          </h2>
          <p>
            Los datos serán conservados durante el tiempo necesario para atender
            su solicitud y, posteriormente, conforme a las obligaciones legales
            aplicables.
          </p>
        </section>
      </div>
    </div>
  );
}
