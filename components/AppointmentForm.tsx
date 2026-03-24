"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "@/components/Button";


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
  const { t } = useTranslation("common");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    alert("✅ Повідомлення успішно надіслано!");

    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold text-center mb-2 dark:text-white">
        {t("modal.title")} *
      </h2>

      <div>
        <label className="block text-sm font-semibold mb-1 dark:text-gray-200">
          {t("modal.nameLabel")} *
        </label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={t("modal.namePlaceholder")}
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1 dark:text-gray-200">
          {t("modal.email")} *
        </label>
        <input
          type="email"
          name="email"
          placeholder={t("modal.emailPlaceholder")}
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1 dark:text-gray-200">
          {t("modal.phoneLabel")} *
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+__(___)___-__-__"
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1 dark:text-gray-200">
          {t("modal.messageLabel")}
        </label>
        <textarea
          name="message"
          placeholder={t("modal.messagePlaceholder")}
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      <Button  size="md">
        {t("btn")}
      </Button>
    </form>
  );
}
