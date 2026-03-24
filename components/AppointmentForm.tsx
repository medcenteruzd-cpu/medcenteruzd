"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "@/components/Button";
import Alert from "@/components/Alert";
import Spinner from "@/components/Spinner";

interface AppointmentFormProps {
  onSuccess: () => void;
}

export default function AppointmentForm({ onSuccess }: AppointmentFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; msg: string }>({
    type: null,
    msg: "",
  });

  const { t } = useTranslation("common");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, msg: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({
          type: "success",
          msg: t("modal.successMessage") || "Заявку успішно відправлено! Ми зателефонуємо вам.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
        
        // Закриваємо модалку трохи пізніше, щоб юзер побачив Alert
        setTimeout(() => {
          onSuccess();
        }, 2500);
      } else {
        throw new Error(result.error || "Помилка відправки");
      }
    } catch (error) {
      console.error("Form Error:", error);
      setStatus({
        type: "error",
        msg: "Не вдалося надіслати повідомлення. Спробуйте ще раз або зателефонуйте нам.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      {/* Overlay - блокує взаємодію під час відправки */}
      {isSubmitting && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-[1px] rounded-xl">
          <Spinner size="lg" className="text-[#133b88]" />
        </div>
      )}

      <form 
        onSubmit={handleSubmit} 
        className={`space-y-4 transition-opacity ${isSubmitting ? "opacity-50 pointer-events-none" : "opacity-100"}`}
      >
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 text-[#133b88] dark:text-white">
          {t("modal.title")}
        </h2>

        {/* Використання твого компонента Alert */}
        <Alert type={status.type} message={status.msg} />

        <div className="space-y-3">
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-200">
              {t("modal.nameLabel")} *
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("modal.namePlaceholder")}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 outline-none focus:border-[#133b88] focus:ring-1 focus:ring-[#133b88] dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-200">
              {t("modal.email")} *
            </label>
            <input
              type="email"
              name="email"
              placeholder={t("modal.emailPlaceholder")}
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 outline-none focus:border-[#133b88] focus:ring-1 focus:ring-[#133b88] dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-200">
              {t("modal.phoneLabel")} *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+380(___)___-__-__"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 outline-none focus:border-[#133b88] focus:ring-1 focus:ring-[#133b88] dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-200">
              {t("modal.messageLabel")}
            </label>
            <textarea
              name="message"
              placeholder={t("modal.messagePlaceholder")}
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 outline-none focus:border-[#133b88] focus:ring-1 focus:ring-[#133b88] dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all resize-none"
            />
          </div>
        </div>

        <Button 
          type="submit" 
          size="md" 
          disabled={isSubmitting} 
          className="w-full bg-[#133b88] hover:bg-[#0e2a63] text-white py-3 rounded-lg flex justify-center items-center gap-2 transition-colors shadow-md"
        >
          {isSubmitting ? (
            <>
              <Spinner size="sm" />
              <span>{t("sending") || "Надсилаємо..."}</span>
            </>
          ) : (
            t("btn")
          )}
        </Button>
      </form>
    </div>
  );
}