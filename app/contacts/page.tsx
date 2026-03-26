"use client"
import { useTranslation } from "react-i18next";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';


export default function AboutPage() {
    const { t } = useTranslation("common");
    return (
        <section className="min-h-screen  py-12 px-6 md:px-16">
             <h1 className="heading-h1  text-center">
                {t("contactsPage.title")}
            </h1>

            <div className="w-full py-16">
                <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

                    
                    <div className="bg-[#133b88] dark:bg-[#133b88] rounded-[20px] shadow-lg p-8 text-center transition-all hover:shadow-xl hover:bg-[#0e2c56]">
                        <div className="mb-4">
                            <FaPhoneAlt size={24} className="text-white mx-auto mb-3" />
                        </div>
                        <h2 className="heading-h3 text-white mb-3">{t("contactsPage.telephone")}</h2>
                        <a href="tel:+380674935104" className="text-lg text-white hover:text-gray-200">
                            +38 067 493 51 04
                        </a>
                    </div>

                    
                    <div className="bg-[#133b88] dark:bg-[#133b88] rounded-[20px] shadow-lg p-8 text-center transition-all hover:shadow-xl hover:bg-[#0e2c56]">
                        <div className="mb-4">
                            <FaMapMarkerAlt size={24} className="text-white mx-auto mb-3" />
                        </div>
                        <h2 className="heading-h3 text-white mb-3">{t("contactsPage.address")}</h2>
                        <p className="text-white leading-relaxed">{t("contactsPage.addressValue")}</p>
                    </div>

               
                    <div className="bg-[#133b88] dark:bg-[#133b88] rounded-[20px] shadow-lg p-8 text-center transition-all hover:shadow-xl hover:bg-[#0e2c56]">
                        <div className="mb-4">
                            <FaClock size={24} className="text-white mx-auto mb-3" />
                        </div>
                        <h2 className="heading-h3 text-white mb-3">{t("contactsPage.workTime")}</h2>
                        <p className="text-white leading-relaxed">{t("contactsPage.workDay1")}</p>
                        <p className="text-white leading-relaxed">{t("contactsPage.workDay2")}</p>
                    </div>

                </div>
            </div>




            <div className="w-full bg-white dark:bg-[#133b88] mb-8 p-2 md:p-8 rounded-[20px] shadow-lg transition hover:shadow-xl overflow-hidden">
                <h2 className="text-center heading-h3 py-2 md:py-8">
                    {t("contactsPage.howToFindUs")}
                </h2>

                <div className="w-full h-[300px] md:h-[600px]  overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630.175419929347!2d30.21890107592255!3d48.75944627131889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d20da8953e6589%3A0x22e976b0eac83120!2z0JrQsNCx0ZbQvdC10YIg0KPQl9CUINCa0L7QsdC40LvRj9C60LA!5e0!3m2!1suk!2sua!4v1761223967521!5m2!1suk!2sua"
                        className="w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                <div className="w-full mt-6">
                    <h2 className="text-center heading-h3 py-2 md:py-8"> {t("contactsPage.locationVideoTitle")}</h2>

                    <video
                        src="/video/location.mp4"
                        className="w-full h-[300px] md:h-[500px] rounded-lg"
                        controls
                    />
                </div>
            </div>


        </section>
    );
}
