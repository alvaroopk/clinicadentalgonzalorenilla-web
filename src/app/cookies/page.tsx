export default function CookiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <h1 className="font-heading font-bold text-3xl text-text mb-8">
        Política de Cookies
      </h1>
      <div className="font-body text-text-secondary space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="font-heading font-semibold text-lg text-text mb-2">
            ¿Qué son las cookies?
          </h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en su
            dispositivo cuando visita un sitio web. Permiten al sitio recordar
            sus preferencias y mejorar su experiencia de navegación.
          </p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-lg text-text mb-2">
            Cookies utilizadas en este sitio
          </h2>
          <p>
            Este sitio web utiliza cookies técnicas esenciales para su correcto
            funcionamiento. No se utilizan cookies de seguimiento o publicidad
            de terceros.
          </p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-lg text-text mb-2">
            Gestión de cookies
          </h2>
          <p>
            Puede configurar su navegador para rechazar o eliminar las cookies.
            Tenga en cuenta que deshabilitar las cookies puede afectar a la
            funcionalidad del sitio web.
          </p>
        </section>
      </div>
    </div>
  );
}
