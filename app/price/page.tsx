"use client";
import React from "react";
import { useServices } from "./data";
import { useRouter } from "next/navigation";
import { useTranslation } from "next-i18next";
import Head from "next/head";


const ServicesPage: React.FC = () => {
    const { t } = useTranslation("common");
    const router = useRouter();
    const services = useServices();
    const handleRowClick = (id: number) => {
        router.push(`/price/${id}`);
    };

    return (
        <>
            <Head>
                <title>{t("pricePage.title")} | Медичний центр УЗД в Умані</title>
                <meta
                    name="description"
                    content="Перелік послуг УЗД, ціни та тривалість обстежень у медичному центрі Умані"
                />
                <meta name="robots" content="index, follow" />

                {/* Structured Data для всіх послуг */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@graph": services.map((service) => ({
                                "@type": "Service",
                                "name": service.title,
                                "provider": {
                                    "@type": "MedicalClinic",
                                    "name": "Медичний центр УЗД",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "вул. Шевченка 50",
                                        "addressLocality": "Умань",
                                        "addressCountry": "UA"
                                    },
                                    "telephone": "+380674935104",
                                    "url": "https://yourdomain.com/"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "price": service.price,
                                    "priceCurrency": "UAH"
                                }
                            }))
                        })
                    }}
                />
            </Head>
            <div className="max-w-6xl mx-auto px-4 py-10">
                <h1 className="heading-h1 mb-6 text-center">{t("pricePage.title")}</h1>

                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
                        <thead className="bg-primary">
                            <tr>
                                <th className="px-4 py-2 text-left text-white font-medium">{t("pricePage.service")}</th>
                                <th className="px-4 py-2  text-left text-white font-medium">{t("pricePage.uah")}</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white  divide-y divide-gray-200">
                            {services.map((service) => (
                                <tr
                                    key={service.id}
                                    onClick={() => handleRowClick(service.id)}
                                    className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-900 hover:bg-blue-100 dark:hover:bg-blue-700 transition-colors duration-200 cursor-pointer text-left">
                                    <td className="px-4 py-3 ">{service.title}</td>
                                    <td className="px-4 py-3">{service.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    );
};

export default ServicesPage;
