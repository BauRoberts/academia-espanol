"use client";

import React, { useState } from "react";

type FormData = {
  nombre: string;
  email: string;
  nivel: string;
  interes: string[];
  mensaje: string;
};

type FormTranslations = {
  fields: {
    nombre: {
      label: string;
      placeholder: string;
    };
    email: {
      label: string;
      placeholder: string;
    };
    nivel: {
      label: string;
      options: {
        label: string;
        value: string;
      }[];
    };
    interes: {
      label: string;
      options: {
        label: string;
        value: string;
      }[];
    };
    mensaje: {
      label: string;
      placeholder: string;
    };
  };
  submit: string;
  success: string;
  error: string;
};

type CursoRitmoWaitlistProps = {
  translations: FormTranslations;
  locale: string;
};

const CursoRitmoWaitlist: React.FC<CursoRitmoWaitlistProps> = ({
  translations,
  locale,
}) => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    nivel: "",
    interes: [],
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setFormData((prev) => {
      if (checked) {
        return {
          ...prev,
          interes: [...prev.interes, value],
        };
      } else {
        return {
          ...prev,
          interes: prev.interes.filter((item) => item !== value),
        };
      }
    });
  };

  const validateForm = (): boolean => {
    // Basic validation
    if (!formData.nombre.trim()) {
      setErrorMessage(translations.fields.nombre.label + " es requerido");
      return false;
    }

    if (!formData.email.trim()) {
      setErrorMessage(translations.fields.email.label + " es requerido");
      return false;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Por favor ingresa un email válido");
      return false;
    }

    if (!formData.nivel) {
      setErrorMessage(translations.fields.nivel.label + " es requerido");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // Aquí iría la lógica para enviar los datos a un endpoint
      // Por ahora simularemos un envío exitoso después de un tiempo

      console.log("Datos del formulario:", formData);

      // Simulación de envío (reemplazar con llamada API real)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus("success");
      // Resetear el formulario tras envío exitoso
      setFormData({
        nombre: "",
        email: "",
        nivel: "",
        interes: [],
        mensaje: "",
      });
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      setSubmitStatus("error");
      setErrorMessage(translations.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="waitlist-form" className="transition-all">
      {submitStatus === "success" ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mx-auto text-green-500 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-lg font-medium text-green-800 mb-2">
            ¡Gracias por tu interés!
          </h3>
          <p className="text-green-700">{translations.success}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nombre */}
          <div>
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {translations.fields.nombre.label}
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder={translations.fields.nombre.placeholder}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-orange focus:border-brand-orange"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {translations.fields.email.label}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={translations.fields.email.placeholder}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-orange focus:border-brand-orange"
              required
            />
          </div>

          {/* Nivel de español */}
          <div>
            <label
              htmlFor="nivel"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {translations.fields.nivel.label}
            </label>
            <select
              id="nivel"
              name="nivel"
              value={formData.nivel}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-orange focus:border-brand-orange"
              required
            >
              <option value="">{`-- ${translations.fields.nivel.label} --`}</option>
              {translations.fields.nivel.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Intereses */}
          <div>
            <p className="block text-sm font-medium text-gray-700 mb-2">
              {translations.fields.interes.label}
            </p>
            <div className="space-y-2">
              {translations.fields.interes.options.map((option) => (
                <div key={option.value} className="flex items-start">
                  <input
                    type="checkbox"
                    id={`interes-${option.value}`}
                    name="interes"
                    value={option.value}
                    checked={formData.interes.includes(option.value)}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-brand-orange border-gray-300 rounded mt-1"
                  />
                  <label
                    htmlFor={`interes-${option.value}`}
                    className="ml-3 text-sm text-gray-700"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Mensaje */}
          <div>
            <label
              htmlFor="mensaje"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {translations.fields.mensaje.label}
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows={4}
              placeholder={translations.fields.mensaje.placeholder}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-orange focus:border-brand-orange"
            />
          </div>

          {/* Error message */}
          {submitStatus === "error" && (
            <div className="text-red-500 text-sm font-medium">
              {errorMessage || translations.error}
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 rounded-md text-white font-medium transition-all ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-brand-orange hover:bg-brand-orange/90"
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Enviando...
              </span>
            ) : (
              translations.submit
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default CursoRitmoWaitlist;
