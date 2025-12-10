"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SpecialistsSlider from "../components/SpecialistsSlider";
import { useTranslation } from "react-i18next";
import Modal from "@/components/Modal";
import AppointmentForm from "@/components/AppointmentForm";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiViber } from "react-icons/si";

function HeroSection(t: (key: string) => string, setIsModalOpen: (open: boolean) => void) {
  return (
    <section className="relative min-h-screen bg-[#133b88] flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/imgs/home-kobyliak-igor-2.png"
          alt="УЗД діагностика"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 max-w-2xl">
        <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {t("mainPage.title")}
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 ">
          {t("mainPage.subtitle")}
        </p>
        <Link
          href="/appointment"
          className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            setIsModalOpen(true);
          }}
        >
          {t("mainPage.btn")}
        </Link>
      </div>
    </section>

  )
}

function AboutAndWhySection(t: (key: string) => string) {
  const items = [
    {
      title: t("mainPage.experiencedSpecialistsTitle"),
      description: t("mainPage.experiencedSpecialistsDescription"),
      imgUrl: "/imgs/icon_logomed-3_50.svg",
    },
    {
      title: t("mainPage.modernEquipmentTitle"),
      description: t("mainPage.modernEquipmentDescription"),
      imgUrl: "/imgs/icon_logomed-3_50.svg",
    },
    {
      title: t("mainPage.wideRangeTitle"),
      description: t("mainPage.wideRangeDescription"),
      imgUrl: "/imgs/icon_logomed-3_50.svg",
    },
    {
      title: t("mainPage.comfortableConditionsTitle"),
      description: t("mainPage.comfortableConditionsDescription"),
      imgUrl: "/imgs/icon_logomed-3_50.svg",
    },
  ];

  return (
    <section className="relative  py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 ">
          <div className="relative h-72 md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/imgs/uzd_pechinky.jpg"
              alt="Медичний центр УЗД"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-5  text-center md:text-left">
            <h1 className="heading-h1 ">
              {t("mainPage.aboutUs")}
            </h1>
            <h2 className="heading-h2">
              {t("mainPage.modernCenterTitle")}
            </h2>
            <p className="leading-relaxed ">
              {t("mainPage.centerDescription")}
            </p>
            <p className="leading-relaxed ">
              {t("mainPage.experiencedDoctors")}
            </p>

            <Link href="/aboutUs" className="bg-primary hover:bg-[#126fe6] text-white cursor-pointer inline-flex items-center justify-center font-medium rounded-md transition duration-300 shadow-sm px-5 py-2 text-base">
              {t("mainPage.btnAboutUs")}
            </Link>
          </div>
        </div>

        <div className="text-center mb-10">
          <h2 className="heading-h1">
            {t("mainPage.whyChooseUs")}
          </h2>
          <p className="heading-h3 max-w-[700px] mx-auto">
            {t("mainPage.whyChooseUsDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="group bg-white hover:bg-[#133b88] dark:bg-[#133b88] rounded-[5px] shadow-md hover:shadow-xl p-6  text-left transition-all duration-300"
            >
              <div className="flex mb-4">
                <Image
                  src={item.imgUrl}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#484848] dark:text-white mb-2 
                     group-hover:text-white">
                {item.title}
              </h3>
              <p className="text-[#484848] dark:text-white/90 text-sm group-hover:text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection(t: (key: string) => string) {
  const items = [
    {
      title: t("mainPage.servicesAbdominalUltrasoundTitle"),
      description: t("mainPage.servicesAbdominalUltrasoundDescription"),
      imgUrl: "/imgs/icon_logomed-3_50.svg",
      price: 400,
      waitTime: 15
    },
    {
      title: t("mainPage.servicesHeartTitle"),
      description: t("mainPage.servicesHeartDescription"),
      imgUrl: "/imgs/icon_logomed-3_50.svg",
      price: 500,
      waitTime: 15
    },
    {
      title: t("mainPage.servicesThyroidTitle"),
      description: t("mainPage.servicesThyroidDescription"),
      imgUrl: "/imgs/icon_logomed-3_50.svg",
      price: 400,
      waitTime: 15
    },
    {
      title: t("mainPage.servicesLiverElastographyTitle"),
      description: t("mainPage.servicesLiverElastographyDescription"),
      imgUrl: "/imgs/icon_logomed-3_50.svg",
      price: 800,
      waitTime: 10
    },
    {
      title: t("mainPage.servicesBreastTitle"),
      description: t("mainPage.servicesBreastDescription"),
      imgUrl: "/imgs/icon_logomed-3_50.svg",
      price: 500,
      waitTime: 15
    },
    {
      title: t("mainPage.serviceslowerLimbVeinUltrasoundTitle"),
      description: t("mainPage.serviceslowerLimbVeinUltrasoundDescription"),
      imgUrl: "/imgs/icon_logomed-3_50.svg",
      price: 700,
      waitTime: 29
    },
    {
      title: t("mainPage.servicesNeckHeadVesselsTitle"),
      description: t("mainPage.servicesNeckHeadVesselsDescription"),
      imgUrl: "/imgs/icon_logomed-3_50.svg",
      price: 700,
      waitTime: 15
    },

    {
      title: t("mainPage.servicesLymphNodesTitle"),
      description: t("mainPage.servicesLymphNodesDescription"),
      imgUrl: "/imgs/icon_logomed-3_50.svg",
      price: 400,
      waitTime: 15
    },
    {
      title: t("mainPage.servicesUrinaryTitle"),
      description: t("mainPage.servicesUrinaryDescription"),
      imgUrl: "/imgs/icon_logomed-3_50.svg",
      price: 600,
      waitTime: 45
    },

    // {
    //   title: t("mainPage.servicesSoftTissuesTitle"),
    //   description: t("mainPage.servicesSoftTissuesDescription"),
    //   imgUrl: "/imgs/icon_logomed-3_50.svg",
    //   price: 400,
    //   waitTime: 29
    // },


    // {
    //   title: t("mainPage.servicesJointsTitle"),
    //   description: t("mainPage.servicesJointsDescription"),
    //   imgUrl: "/imgs/icon_logomed-3_50.svg",
    //   price: 500,
    //   waitTime: 15
    // },
    // {
    //   title: t("mainPage.servicesLimbVesselsTitle"),
    //   description: t("mainPage.servicesLimbVesselsDescription"),
    //   imgUrl: "/imgs/icon_logomed-3_50.svg",
    //   price: 400 + 400,
    //   waitTime: 15
    // },

    // {
    //   title: t("mainPage.servicesObGynTitle"),
    //   description: t("mainPage.servicesObGynDescription"),
    //   imgUrl: "/imgs/icon_logomed-3_50.svg",
    //   price: 3100,
    //   waitTime: 60
    // },
    // {
    //   title: t("mainPage.servicesInternalOrgansTitle"),
    //   description: t("mainPage.servicesInternalOrgansDescription"),
    //   imgUrl: "/imgs/icon_logomed-3_50.svg",
    //   price: 1500,
    //   waitTime: 30
    // },



  ];

  const [showAll, setShowAll] = useState(true);
  const visibleItems = showAll ? items : items.slice(0, 6);

  return (
    <section id="services" className="bg-[#edf5fd] dark:bg-gray-900  py-16 px-6 md:px-12 text-center">
      <h2 className="heading-h1">{t("mainPage.ultrasoundServicesTitle")}</h2>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700  mt-8 overflow-hidden md:overflow-visible`}
        style={{ maxHeight: showAll ? `${items.length * 400}px` : "970px " }}
      >
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="group bg-white hover:bg-[#133b88] dark:bg-[#133b88] rounded-[5px] shadow-md p-6 flex flex-col relative overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="flex justify-center mb-4">
              <Image src={item.imgUrl} alt={item.title} width={40} height={40} className="object-contain" />
            </div>
            <h3 className="text-lg dark:text-white font-semibold text-gray-800  group-hover:text-white mb-4">{item.title}</h3>
            <p className="text-gray-600 dark:text-white text-sm leading-relaxed group-hover:text-white">{item.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
              <span className="font-bold group-hover:text-white">💰 Ціна: <span className="font-medium text-gray-900 dark:text-white font-bold group-hover:text-white group-hover:text-white">{item.price} грн</span></span>
              <span className="font-bold group-hover:text-white">⏱️ Тривалість обстеження: <span className="font-medium text-gray-900 dark:text-white group-hover:text-white">{item.waitTime} хв</span></span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        {/* <Button variant="primary" size="md"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? t("mainPage.collapse") : t("mainPage.showMore")}
        </Button> */}

        <Link href="/price" className="bg-primary hover:bg-[#126fe6] text-whitebg-primary hover:bg-[#126fe6] text-white cursor-pointer inline-flex items-center justify-center font-medium rounded-md transition duration-300 shadow-sm px-5 py-2 text-base">
          {t("mainPage.allservices")}
        </Link>
      </div>
    </section>
  );
}

function SpecialistsSection(t: (key: string) => string, setIsModalOpen: (open: boolean) => void) {
  const specialists = [
    {
      name: t("mainPage.specialist1Name"),
      specialization: t("mainPage.specialist1Specialization"),
      experience: t("mainPage.specialist1Experience"),
      practiceSince: t("mainPage.specialist1PracticeSince"),
      email: t("mainPage.specialist1Email"),
      phone: t("mainPage.specialist1Phone"),
      image: "/imgs/kobyliak-igor-an-2048x1695.webp"
    },
    {
      name: t("mainPage.specialist2Name"),
      specialization: t("mainPage.specialist2Specialization"),
      experience: t("mainPage.specialist2Experience"),
      practiceSince: t("mainPage.specialist2PracticeSince"),
      email: t("mainPage.specialist2Email"),
      phone: t("mainPage.specialist2Phone"),
      image: "/imgs/kobyliak-olena-2-2048x1695.webp"
    }
  ];

  return (
    <section className="py-16 px-12">

      <SpecialistsSlider slides={specialists} onClick={setIsModalOpen} />
    </section>
  );
}

function TestimonialsSection(t: (key: string) => string) {
  const testimonials = [
    { name: t("mainPage.testimonial1Name"), feedback: t("mainPage.testimonial1Feedback") },
    { name: t("mainPage.testimonial2Name"), feedback: t("mainPage.testimonial2Feedback") },
    { name: t("mainPage.testimonial3Name"), feedback: t("mainPage.testimonial3Feedback") },
    { name: t("mainPage.testimonial4Name"), feedback: t("mainPage.testimonial4Feedback") },
    { name: t("mainPage.testimonial5Name"), feedback: t("mainPage.testimonial5Feedback") },
    { name: t("mainPage.testimonial6Name"), feedback: t("mainPage.testimonial6Feedback") }
  ];

  return (
    <section className="px-6 md:px-12 py-16 bg-[#edf5fd] dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="heading-h1 mb-12">
          Відгуки наших пацієнтів
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-[#133b88] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-1"
            >

              <div className="absolute -top-4 left-6 text-5xl text-[#133b88]/20 select-none">
                “
              </div>

              <p className="text-gray-700 dark:text-white text-lg italic mb-6 leading-relaxed">
                {testimonial.feedback}
              </p>
              <p className="text-gray-900 dark:text-white  font-semibold text-right">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactsSection(t: (key: string) => string) {

  return (
    <>
      <h2 className="heading-h1 text-center bg-[#edf5fd]">
        Контакти
      </h2>
      <section id="contacts" className="px-6 md:px-12 py-16 bg-primary m-0">

        <div className="container mx-auto px-4">


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className=" rounded-2xl  p-8">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Запис до лікаря
              </h3>
              <p className="text-white  mb-8">Після заповнення ми вам передзвоними</p>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                  <div className="flex flex-col">
                    <label className="text-white mb-2">Ім’я</label>
                    <input
                      type="text"
                      placeholder="Ваше ім’я"
                      required
                      className="border-0 border-b-2 border-gray-300 focus:border-[#3eacf8] focus:outline-none py-2 text-white "
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-white  mb-2">Прізвище</label>
                    <input
                      type="text"
                      placeholder="Ваше прізвище"
                      required
                      className="border-0 border-b-2 border-gray-300 focus:border-[#3eacf8] focus:outline-none py-2 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  <div className="flex flex-col">
                    <label className="text-white  mb-2">Е-пошта</label>
                    <input
                      type="email"
                      placeholder="Введіть вашу е-пошту"
                      required
                      className="border-0 border-b-2 border-gray-300 focus:border-[#3eacf8] focus:outline-none py-2 text-white "
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-white  mb-2">Телефон</label>
                    <input
                      type="tel"
                      placeholder="+380(___)___-__-__"
                      required
                      className="border-0 border-b-2 border-gray-300 focus:border-[#3eacf8] focus:outline-none py-2 text-white "
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 text-white">Повідомлення</label>
                  <textarea
                    rows={4}
                    className="text-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3eacf8] "
                    placeholder="Коротко опишіть, що вас цікавить"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white hover:bg-[#6476f1] text-[#5397F4] font-semibold py-2 rounded-[5px] transition cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Ваше повідомлення успішно надіслано!");
                  }}
                >
                  Надіслати
                </button>
              </form>
            </div>


            <div className=" p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Зв’язатись з нами</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 text-white">
                  {/* Адреса */}
                  <div className="flex items-start gap-3">
                    <span className="text-xl">📍</span>
                    <div>
                      <p className="font-semibold">Адреса:</p>
                      <p className="mt-1 text-gray-200">Україна, м.Умань вул.Шевченка 50</p>

                    </div>
                  </div>

                  {/* Телефон */}
                  <div className="flex items-start gap-3">
                    <span className="text-xl">☎️</span>
                    <div>
                      <p className="font-semibold">Телефон:</p>
                      <a
                        href="tel:+380971234567"
                        className="mt-1 block text-gray-200 hover:underline"
                      >
                        +38 067 493 51 04
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <span className="text-xl">✉️</span>
                    <div>
                      <p className="font-semibold">Email:</p>
                      <a
                        href="mailto:info@clinic.ua"
                        className="mt-1 block text-gray-200 hover:underline"
                      >
                        medcenteruzd@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Графік роботи */}
                  <div className="flex items-start gap-3">
                    <span className="text-xl">🕒</span>
                    <div>
                      <p className="font-semibold">Графік роботи:</p>
                      <p className="mt-1 text-gray-200 leading-relaxed">
                        Пн–Пт: 08:00–19:00<br />
                        Сб: 09:00–15:00<br />
                        Нд: вихідний
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-8 flex flex-start gap-4 text-white ">
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
                    <SiViber size={20} className="text-purple-600"/>
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </>


  );
}

function BookAnAppointmentSection(t: (key: string) => string, setIsModalOpen: (open: boolean) => void) {

  return (
    <section
      className="relative w-[90%] h-[300px] bg-cover bg-center flex items-center m-auto rounded-[20px] mb-[60px]"
      style={{
        backgroundImage:
          "url('/imgs/bannerAppointment.jpg')", 
      }}
    >
      <div className="absolute inset-0"></div>
      <div className="relative z-10 max-w-2xl px-8 text-white">
        <h2 className="text-xl md:text-4xl font-bold mb-4">
          {t("mainPage.bookAppointmentKobyliakUltrasoundUman")}
        </h2>
        <button onClick={() => setIsModalOpen(true)} className="bg-primary hover:bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition cursor-pointer">
          {t("btn")}
        </button>
      </div>
    </section>


  );
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation("common");

  return (
    <div className="space-y-16">
      {HeroSection(t, setIsModalOpen)}
      {AboutAndWhySection(t)}
      {ServicesSection(t)}
      {SpecialistsSection(t, setIsModalOpen)}
      {TestimonialsSection(t)}
      {ContactsSection(t)}
      <div className=" w-full h-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630.175419929347!2d30.21890107592255!3d48.75944627131889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d20da8953e6589%3A0x22e976b0eac83120!2z0JrQsNCx0ZbQvdC10YIg0KPQl9CUINCa0L7QsdC40LvRj9C60LA!5e0!3m2!1suk!2sua!4v1761223967521!5m2!1suk!2sua"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      {BookAnAppointmentSection(t, setIsModalOpen)}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AppointmentForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
}
