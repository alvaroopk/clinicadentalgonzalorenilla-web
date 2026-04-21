"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

type FormData = {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
};

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log(data);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center p-8">
        <CheckCircle2 size={56} className="text-accent mb-4" />
        <h3 className="font-heading font-bold text-2xl text-text mb-2">
          ¡Mensaje recibido!
        </h3>
        <p className="font-body text-text-secondary">
          Nos pondremos en contacto contigo en breve. También puedes llamarnos
          directamente si lo prefieres.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <label
          htmlFor="nombre"
          className="block font-body text-sm font-medium text-text mb-1.5"
        >
          Nombre *
        </label>
        <input
          id="nombre"
          type="text"
          {...register("nombre", { required: "El nombre es obligatorio" })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary font-body text-sm"
          placeholder="Tu nombre"
        />
        {errors.nombre && (
          <p className="mt-1 text-xs text-red-500 font-body">
            {errors.nombre.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block font-body text-sm font-medium text-text mb-1.5"
        >
          Email *
        </label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "El email es obligatorio",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Introduce un email válido",
            },
          })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary font-body text-sm"
          placeholder="tu@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500 font-body">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="telefono"
          className="block font-body text-sm font-medium text-text mb-1.5"
        >
          Teléfono
        </label>
        <input
          id="telefono"
          type="tel"
          {...register("telefono")}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary font-body text-sm"
          placeholder="Tu teléfono"
        />
      </div>

      <div>
        <label
          htmlFor="mensaje"
          className="block font-body text-sm font-medium text-text mb-1.5"
        >
          Mensaje *
        </label>
        <textarea
          id="mensaje"
          rows={5}
          {...register("mensaje", { required: "El mensaje es obligatorio" })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary font-body text-sm resize-none"
          placeholder="¿En qué podemos ayudarte?"
        />
        {errors.mensaje && (
          <p className="mt-1 text-xs text-red-500 font-body">
            {errors.mensaje.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark disabled:opacity-60 text-white px-8 py-4 rounded-xl font-body font-semibold text-base transition-colors"
      >
        <Send size={18} />
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
