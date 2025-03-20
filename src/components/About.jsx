import React from 'react'
import {
  BsShieldCheck,
  BsTruck,
  BsPeople,
  BsAward,
  BsCheckCircle
} from 'react-icons/bs'

function About() {
  return (
    <section id="about" data-aos="fade-left" className="py-16 mt-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kasapoğlu Oto Kurtarma
          </h2>
          <p className="text-gray-600 text-lg">
            Kasapoğlu Oto Kurtarma, Uşak ve çevresindeki sürücülere 7/24 profesyonel yol yardımı hizmeti sunarak, sektörde güvenin ve kalitenin adresi haline gelmiştir. Yolculuk esnasında karşılaşabileceğiniz her türlü problemde yanınızda olan Kasapoğlu Uşak Oto Çekici, hızlı ve güvenilir çözümleriyle zaman kaybınızı en aza indirmeyi amaçlar
          </p>
        </div>

        {/* Ana Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Sol Taraf - İstatistikler */}
          <div className="space-y-8">
            {/* İstatistik Kartları */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "20+", text: "Yıllık Tecrübe" },
                { number: "5000+", text: "Mutlu Müşteri" },
                { number: "10+", text: "Uzman Personel" },
                { number: "0%", text: "Hasar Oranı" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-600">
                    {stat.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Özellikler Listesi */}
            <div className="space-y-4">
              {[
                "Acil Yol Yardımı",
                "Oto Çekici Hizmeti",
                "Kaskolu Araç Taşıma",
                "Tekli Özel ve Çoklu Araç Taşıma",
                "En Hızlı Oto Kurtarma",
                "Şeffaf Fiyatlar"
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <BsCheckCircle className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ Taraf - Değerlerimiz */}
          <div className="grid gap-6">
            {[
              {
                icon: <BsShieldCheck className="text-2xl" />,
                title: "7/24 Hizmet",
                description: "Günün her saati ulaşabilirsiniz"
              },
              {
                icon: <BsTruck className="text-2xl" />,
                title: "Hızlı Müdehale",
                description: "En kısa sürede olay yerine ulaşırız"
              },
              {
                icon: <BsPeople className="text-2xl" />,
                title: "Uzman Ekip",
                description: "Tecrübeli kadromuzla güvenilir hizmet sunarız"
              },
              {
                icon: <BsAward className="text-2xl" />,
                title: "Modern Ekipman",
                description: "Teknolojik Ekipmanlarımızla kaliteli çözümler üretiriz"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-blue-600">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alt CTA */}
        <div className="mt-16 text-center">
          <a
            href="tel:+905078076400"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Hemen Ara - Hızlı Yardım
          </a>
        </div>
      </div>
    </section>
  )
}

export default About