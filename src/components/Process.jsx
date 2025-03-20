import React from 'react'
import {
  BsTelephone,
  BsClipboardCheck,
  BsBox,
  BsTruck,
  BsTools,
  BsCheckCircle,
  BsArrowRight
} from 'react-icons/bs'

function Process() {
  const steps = [
    {
      icon: <BsTelephone />,
      title: "İletişime Geçin",
      description: "Bizi arayın veya form doldurun, uzman ekibimiz sizinle iletişime geçsin.",
      color: "blue",
      details: [
        "7/24 müşteri hizmetleri",
        "Ücretsiz danışmanlık",
        "WhatsApp desteği"
      ]
    },
    {
      icon: <BsClipboardCheck />,
      title: "Ücretsiz Ekspertiz",
      description: "Eşyalarınızı yerinde inceleyelim, en uygun teklifi sunalım.",
      color: "green",
      details: [
        "Detaylı eşya kontrolü",
        "Net fiyat teklifi",
        "Taşıma planlaması"
      ]
    },
    {
      icon: <BsBox />,
      title: "Paketleme",
      description: "Eşyalarınızı özel malzemelerle güvenle paketleyelim.",
      color: "orange",
      details: [
        "Profesyonel ambalajlama",
        "Özel koruma malzemeleri",
        "Etiketleme sistemi"
      ]
    },
    {
      icon: <BsTruck />,
      title: "Taşıma",
      description: "Eşyalarınızı sigortalı şekilde yeni adresinize taşıyalım.",
      color: "purple",
      details: [
        "Kapalı kasa araçlar",
        "Sigortalı taşıma",
        "GPS takip sistemi"
      ]
    },
    {
      icon: <BsTools />,
      title: "Montaj",
      description: "Mobilyalarınızı uzman ekibimizle monte edelim.",
      color: "red",
      details: [
        "Profesyonel montaj ekibi",
        "Yerleşim düzenleme",
        "Temiz çalışma"
      ]
    },
    {
      icon: <BsCheckCircle />,
      title: "Kontrol & Teslim",
      description: "Son kontrolleri yapıp eşyalarınızı teslim edelim.",
      color: "teal",
      details: [
        "Detaylı kontrol listesi",
        "Müşteri onayı",
        "Memnuniyet anketi"
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Profesyonel Taşıma Sürecimiz
          </h2>
          <p className="text-gray-600 text-lg">
            Eşyalarınızı 6 adımda güvenle yeni adresinize taşıyoruz.
            Her adımda yanınızdayız.
          </p>
        </div>

        {/* Süreç Adımları */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Başlık ve İkon */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-full bg-${step.color}-100 flex items-center justify-center text-${step.color}-600 text-xl flex-shrink-0`}>
                  {step.icon}
                </div>
                <div>
                  <div className="text-sm text-blue-600 font-semibold mb-1">
                    Adım {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* Açıklama */}
              <p className="text-gray-600 mb-4">
                {step.description}
              </p>

              {/* Detaylar */}
              <ul className="space-y-2">
                {step.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <BsCheckCircle className="text-green-500 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Alt CTA */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl text-white font-bold mb-4">
            Hemen Ücretsiz Fiyat Teklifi Alın!
          </h3>
          <p className="text-blue-100 mb-6">
            Size en uygun ve en kaliteli nakliye hizmeti verelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+905XXXXXXXXX"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 transition-all duration-300"
            >
              <BsTelephone className="text-xl" />
              Hemen Ara
            </a>
          </div>
        </div>

        {/* Güven Göstergeleri */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "6+", text: "Adımlı Profesyonel Süreç" },
            { number: "100%", text: "Müşteri Memnuniyeti" },
            { number: "20+", text: "Yıllık Tecrübe" },
            { number: "7/24", text: "Destek" }
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-xl"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {item.number}
              </div>
              <p className="text-gray-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process