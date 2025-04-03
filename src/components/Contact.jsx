import React from 'react'
import {
  BsWhatsapp,
  BsTelephone,
} from 'react-icons/bs'

function Contact() {
  const contactInfo = {
    phone: "+905315643011",
    whatsapp: "+905315643011",
  }

  return (
    <section id="contact" className="py-20 mt-12 ">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hemen İletişime Geçin
          </h2>
          <p className="text-gray-600 text-lg">
            Size özel kurallara en uygun şekilde yazdığımız istinaf dilekçeleri ile sorununuza çözüm buluyoruz.
          </p>
        </div>

        {/* İletişim Kartları Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Telefon */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <BsTelephone className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">
                  Bizi Arayın
                </h3>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-lg text-blue-600 hover:text-blue-700 transition-colors duration-300 font-medium"
                >
                  0 531 564 3011
                </a>
                <p className="mt-2 text-gray-600">
                  İstinaf dilekçenizi hemen hazırlayalım.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <BsTelephone className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">
                  İstinaf Dilekçesi Yazdır
                </h3>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-lg text-blue-600 hover:text-blue-700 transition-colors duration-300 font-medium"
                >
                  0 531 564 3011
                </a>
                <p className="mt-2 text-gray-600">
                  Size özel kurallara uygun dilekçenizi hemen yazalım.
                </p>
              </div>
            </div>
          </div>
          {/* WhatsApp */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <BsWhatsapp className="text-green-600 text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">
                  WhatsApp
                </h3>
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-green-600 hover:text-green-700 transition-colors duration-300 font-medium"
                >
                  0 531 564 3011
                </a>
                <p className="mt-2 text-gray-600">
                  Hızlı teklif ve bilgi için bize yazın.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* CTA Banner */}
        <div className="mt-12 bg-blue-600 rounded-2xl p-8 text-center text-white max-w-6xl mx-auto">
          <h3 className="text-2xl text-white font-bold mb-4">
            İstinaf Dilekçesi Yazdırmak İçin Hemen Arayın!
          </h3>
          <p className="text-blue-100 mb-6">
            Size özel hazırlanmış kurallara uygun istinaf dilekçesi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.phone}`}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 transition-all duration-300"
            >
              <BsTelephone className="text-xl" />
              Hemen Ara
            </a>
            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 transition-all duration-300"
            >
              <BsWhatsapp className="text-xl" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact