"use client";

import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import AppointmentForm from "@/components/AppointmentForm";


const navLinks = [
  { href: "/", key: "header.mainLink" },
  { href: "#services", key: "header.servicesLink" },
  { href: "/doctors", key: "header.doctorsLink" },
  { href: "/price", key: "header.priceLink" },
  { href: "/contacts", key: "header.contactsLink" },
];

const LangSwitch = ({
  currentLang,
  onChange,
}: {
  currentLang: string;
  onChange: (lang: string) => void;
}) => (
  <div className="flex  items-center gap-1 dark:bg-gray-900 border rounded-full bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-900 transition px-2 py-1 cursor-pointer">
    {["ua", "en"].map((l) => (
      <button
        key={l}
        onClick={() => onChange(l)}
        className={`w-7 h-7 flex items-center justify-center rounded-full text-[13px] font-medium transition cursor-pointer ${currentLang === l
          ? "bg-primary text-white"
          : "text-gray-600 hover:text-[#133b88]"
          }`}
      >
        {l.toUpperCase()}
      </button>
    ))}
  </div>
);


const ThemeSwitch = ({
  theme,
  onToggle,
}: {
  theme: string | undefined;
  onToggle: () => void;
}) => (
  <button
    onClick={onToggle}
    className="flex items-center  justify-center w-8 h-8 rounded-full hover:bg-gray-100 text-gray-700 transition cursor-pointer"
  >
    {theme === "light" ? <FaSun size={16} /> : <FaMoon size={16} />}
  </button>
);

const NavLinks = ({
  links,
  t,
  onClick,
  vertical = false,
}: {
  links: { href: string; key: string }[];
  t: (key: string) => string;
  onClick?: () => void;
  vertical?: boolean;
}) => {
  const pathname = usePathname(); 
  return (
    <nav className={`${vertical ? "flex flex-col space-y-3" : "flex items-center gap-4"}`}>
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClick}
            className={`${vertical
              ? `font-semibold text-center ${
                  isActive ? "text-[#0156A0]" : "text-[#484848] dark:text-[#fff]"
                } hover:text-[#0156A0]`
              : `text-[14px] font-semibold uppercase transition-colors ${
                  isActive ? "text-[#0156A0]" : "text-[#484848] dark:text-[#fff]"
                } hover:text-[#0156A0]`
            }`}
          >
            {t(link.key)}
          </Link>
        );
      })}
    </nav>
  );
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("ua");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const { t, i18n } = useTranslation("common");

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeLang = (l: string) => {
    setLang(l);
    i18n.changeLanguage(l);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  if (!mounted) return null;
  return (
    <header className={`bg-white dark:bg-gray-900 shadow-sm border-b sticky top-0 z-50`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-3">

        <Link href="/" className="flex items-center gap-2">
          <Image src="/imgs/logo.png" alt="Медцентр УЗД" width={40} height={30}  className="h-auto w-auto"/>
          <div className="flex flex-col uppercase leading-none">
            <span className="text-[12px] md:text-l font-bold text-[#0156A0]">{t("header.clinic")}</span>
            <span className="text-[12px] md:text-l font-bold text-[#0156A0]">{t("header.customer")}</span>
          </div>

        </Link>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <NavLinks links={navLinks} t={t} />
          {/* <button className="bg-[#133b88] hover:bg-[#1b4cb0] rounded-full text-white text-sm px-5 py-2 font-medium shadow-sm transition cursor-pointer">
            {t("header.btn")}
          </button> */}
          <Button
            variant="primary"
            size="sm"
            onClick={() => setIsModalOpen(true)}
          >
            {t("header.btn")}
          </Button>
          <LangSwitch currentLang={lang} onChange={changeLang} />
          <ThemeSwitch theme={theme} onToggle={toggleTheme} />
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <AppointmentForm onSuccess={() => setIsModalOpen(false)} />
        </Modal>

        {/* Mobile actions */}
        <div className="flex md:hidden items-center gap-3">
          {/* <button className="bg-[#133b88]  hover:bg-[#1b4cb0] rounded-full text-white text-sm px-5 py-2 font-medium shadow-sm transition cursor-pointer">
            {t("header.btn")}
          </button> */}
          <Button
            variant="primary"
            size="sm"
            onClick={() => setIsModalOpen(true)}
          >
            {t("header.btn")}
          </Button>
          <button
            className="p-2 text-gray-700 text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t shadow animate-slide-down">
          <div className="px-4 py-4">
            <NavLinks links={navLinks} t={t} onClick={() => setMenuOpen(false)} vertical />
            <hr className="my-4" />
            <div className="flex justify-center items-center gap-3">
              <LangSwitch currentLang={lang} onChange={changeLang} />
              <ThemeSwitch theme={theme} onToggle={toggleTheme} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
