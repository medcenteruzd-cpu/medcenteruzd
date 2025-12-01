"use client";

import { useTranslation } from "react-i18next";

export function getDoctorsDara(t: (key: string) => string) {
  const doctors = [
    {
      slug: "kobyliak-igor-anatoliyovych",
      name: t("doctors.kobyliakName"),
      specialty: t("doctors.kobyliakSpecialty"),
      experience: t("doctors.kobyliakExperience"),
      practice: t("doctors.kobyliakPractice"),
      email: "medcenteruzd@gmail.com",
      phone: "+38 067 493 51 04",
      about: t("doctors.kobyliakAbout"),
      specializations: [
        t("doctors.kobyliakSpecializations.0"),
        t("doctors.kobyliakSpecializations.1"),
        t("doctors.kobyliakSpecializations.2"),
        t("doctors.kobyliakSpecializations.3"),
        t("doctors.kobyliakSpecializations.4"),
        t("doctors.kobyliakSpecializations.5"),
        t("doctors.kobyliakSpecializations.6"),
        t("doctors.kobyliakSpecializations.7"),
      ],
      photo: "/imgs/kobyliak-igor-doctors.webp",
      certificates: [
        "/imgs/certificates/cert1.jpg",
        "/imgs/certificates/cert2.jpg",
        "/imgs/certificates/cert3.jpg"
      ]
    },
    {
      slug: "kobyliak-olena-olekseevna",
      name: t("doctors.kobyliakOlenaName"),
      specialty: t("doctors.kobyliakOlenaSpecialty"),
      experience: t("doctors.kobyliakOlenaExperience"),
      practice: t("doctors.kobyliakOlenePractice"),
      email: "medcenteruzd@gmail.com",
      phone: "+38 067 123 45 67",
      about: t("doctors.kobyliakOlenaAbout"),
      specializations: [
        t("doctors.kobyliakOlenaSpecializations.0"),
        t("doctors.kobyliakOlenaSpecializations.1"),
        t("doctors.kobyliakOlenaSpecializations.2"),
        t("doctors.kobyliakOlenaSpecializations.3"),
        t("doctors.kobyliakOlenaSpecializations.4"),
        t("doctors.kobyliakOlenaSpecializations.5"),
        t("doctors.kobyliakOlenaSpecializations.6"),
        t("doctors.kobyliakOlenaSpecializations.7"),
        t("doctors.kobyliakOlenaSpecializations.8"),
        t("doctors.kobyliakOlenaSpecializations.9")
      ],
      photo: "/imgs/kobyliak-olena-doctors.webp",
      certificates: [
        "/imgs/certificates/cert1.jpg",
        "/imgs/certificates/cert2.jpg",
        "/imgs/certificates/cert3.jpg"
      ]
    }
  ];

  return doctors;
}

export function useDoctor(slug: string) {
  const { t } = useTranslation("common");

  const doctors = getDoctorsDara(t);

  return doctors.find((doc) => doc.slug === slug);
}
