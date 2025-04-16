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
    <section id="about" className="py-16 mt-14 bg-white">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dilekçe Yazdırmak İçin Bize Ulaşınız
          </h2>
          <p className="text-gray-600 text-lg">
            <b> 27 yıllık zabıt katibi deneyimine</b> sahip bir ekiple, hukuki süreçlerinizde profesyonel, güvenilir ve hızlı bir şekilde sizlere en iyi hizmeti sunmayı hedefliyoruz. Uzman kadromuz, yılların getirdiği tecrübe ve bilgi birikimiyle, istinaf başvurularınızda  <b> en doğru</b>, <b>en hızlı</b> ve <b> en etkili </b>çözüm yollarını sunmaktadır.
            <br />
            <br />
            <b> Zabıt katibi</b> olarak edindiğimiz derin hukuk bilgisi ve pratik deneyim, sizlere her aşamada en iyi hizmeti verme noktasında bize büyük bir avantaj sağlamaktadır. İstinaf dilekçeleri, hukuki sürecin kritik bir aşamasıdır ve <b> doğru yazılmış bir dilekçe</b>, davanızın seyrini değiştirebilir. <b> Bu bilinçle, her başvuruya özel, titizlikle hazırlanmış dilekçeler sunuyoruz.</b>
            <br />
            <br />
            <b>Hedefimiz, sizlerin haklarını en etkin şekilde savunmak ve adalete ulaşmalarını sağlamaktır.</b> Her bir başvuru, bizim için bir sorumluluktur ve bu sorumluluğu yerine getirirken müşteri memnuniyetini en üst düzeyde tutmak önceliğimizdir. <b>Güvenilir, dürüst ve sonuç odaklı hizmet anlayışımızla, hukuki sürecinizde yanınızdayız.</b>
          </p>
        </div>

        {/* Ana Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Sol Taraf - İstatistikler */}
          <div className="space-y-8">
            {/* İstatistik Kartları */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "27+", text: "Yıllık Tecrübe" },
                { number: "5000+", text: "Dilekçe Yazımı" },
                { number: "10+", text: "Uzman Personel" },
                { number: "%100", text: "Memnuniyet Oranı" }
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
                "Uygun Fiyat",
                "Anında Dilekçe Teslimi",
                "Tecrübeli Ekip",
                "Size Özel Yazılmış Dilekçe",
                "Güvenilir",
                "En doğru, En hızlı, En etkili çözümler",
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
                title: "Güvenilir",
                description: "Kişisel bilgilerinizi sadece dilekçenizi yazmak için kullanıyoruz."
              },
              {
                icon: <BsTruck className="text-2xl" />,
                title: "Hızlı Teslim",
                description: "Dilekçenizi kurallara uygun bir şekilde yazıp anında teslim ediyoruz."
              },
              {
                icon: <BsPeople className="text-2xl" />,
                title: "Uzman Ekip",
                description: " 27 yıllık Tecrübeli kadromuzla kurallara uygun ve hızlı hizmet sunuyoruz."
              },
              {
                icon: <BsAward className="text-2xl" />,
                title: "Size Özel Hizmet",
                description: "Hiçbir dilekçemiz kopyala yapıştır değil tamamen sizin sorununuza özel olarak hazırlanıyor."
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
            href="tel:+905315643011"
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