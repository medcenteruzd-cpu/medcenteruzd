"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiViber } from "react-icons/si";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("common");
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <Image
          src="/imgs/logo-kabinet-kobyliaka-1.png"
          alt="Медцентр УЗД"
          width={250}
          height={250}
          className="h-12 w-auto m-auto md:m-0"
        />
        <div>

          <h3 className="text-lg font-semibold  mb-3 text-center md:text-left">
            {t("footer.footerContactsTitle")}
          </h3>
          <p className="mt-1 text-center md:text-left">
            {t("footer.footerPhone")} <a href="tel:+380674935104" className="hover:underline">+38 067 493 51 04</a>
          </p>
          <p className=" text-center md:text-left">{t("footer.footerAddress")}</p>

          <p className=" mt-1 text-center md:text-left">
            {t("footer.footerEmail")} <a href="mailto:medcenteruzd@gmail.com" className="hover:underline">medcenteruzd@gmail.com</a>
          </p>

        </div>

        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">
            {t("footer.footerInfoTitle")}
          </h3>
          <ul className="space-y-2">
            <li><Link href="/services">{t("footer.footerServicesLink")}</Link></li>
            <li><Link href="/doctors">{t("footer.footerDoctorsLink")}</Link></li>
            <li><Link href="/contacts">{t("footer.footerContactsLink")}</Link></li>
            <li><Link href="/blog">{t("footer.footerBlogLink")}</Link></li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">
            {t("footer.footerSocialTitle")}
          </h3>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a
              href="https://www.facebook.com/igor.kobilak.2025"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} className="text-blue-600" /> 
            </a>

            <a
              href="https://www.instagram.com/dr.kobyliak"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={20} className="text-pink-500" /> 
            </a>

            <a
              href="https://tinyurl.com/464btays"
              className="hover:text-gray-800 transition-colors"
              aria-label="Viber"
            >
              <SiViber size={20} className="text-purple-600" /> 
            </a>
          </div>


        </div>
      </div>
    </footer>
  );
}
