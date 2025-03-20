import React from 'react'
import {
  BsTruck,
  BsBuilding,
  BsArrowRight,
  BsShieldCheck,
  BsGeoAlt
} from 'react-icons/bs'

import otoCekici from '../assets/images/slider/slider1.jpg'
import otoKurtarma from '../assets/images/slider/oto-cekici.jpg'
import yolYardim from '../assets/images/slider/slider3.jpg'

function Services() {
  const services = [
    {
      icon: <BsTruck className="text-3xl" />,
      title: "Oto Çekici Hizmeti",
      description: "Uşak’ta hızlı ve güvenilir oto çekici hizmeti sunuyoruz. Aracınız yolda kaldığında, modern çekici filomuz ve deneyimli ekibimizle en kısa sürede yanınıza ulaşıyor, güvenli bir şekilde dilediğiniz noktaya taşıyoruz.",
      features: [
        "7/24 hizmet",
        "Uygun fiyat garantisi",
        "Hızlı ve güvenilir",
      ],
      image: otoCekici,
    },
    {
      icon: <BsGeoAlt className="text-3xl" />,
      title: "Yol Yardım Hizmeti",
      description: "Yolda kaldığınız her durua, hızlı ve profesyonel çözümlerle yanınızdayız. Lastik arızası, yakıt tükenmesi veya diğer beklenmedik sorunlarda, kesintisiz yol yardım hizmetimizle 7/24 destek sağlıyoruz.",
      features: [
        "7/24 hizmet",
        "Uygun fiyat garantisi",
        "Hızlı ve güvenilir",
        "Profesyonel Ekip"
      ],
      image: otoKurtarma,
    },
    {
      icon: <BsBuilding className="text-3xl" />,
      title: "Oto Kurtarma Hizmeti",
      description: "Zorlu hava şartlarında veya kaza anlarında aracınızı güvenle kurtarmak için oto kurtarma hizmetimizle yanınızdayız. Her durua hızlı ve güvenilir çözümler sunuyoruz.",
      features: [
        "7/24 hizmet",
        "Uygun fiyat garantisi",
        "Hızlı ve güvenilir",
      ],
      image: yolYardim,
    }
  ]

  return (
    <section id="services" data-aos="fade-left" className="py-12 ">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl :text-4xl mt-20 font-bold text-gray-900 mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-gray-600 text-lg">
            20 yıllık tecrübemizle
            %100 müşteri memnuniyeti sağlıyoruz.
          </p>
        </div>

        {/* Hizmet Kartları */}
        <div className="grid :grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              {/* Görsel */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="bg-blue-600 p-3 rounded-full inline-block mb-2">
                    {service.icon}
                  </div>
                  <h3 className="text-xl text-white font-bold">{service.title}</h3>
                </div>
              </div>

              {/* İçerik */}
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                {/* Özellikler */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-700">
                      <BsShieldCheck className="text-blue-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

        {/* Ek Hizmetler */}


        {/* Alt CTA */}
        <div className="mt-16 text-center">
          <a
            href="tel:+905078076400"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Hemen Ara
            <BsArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services