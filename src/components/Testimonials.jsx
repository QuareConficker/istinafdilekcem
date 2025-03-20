import React, { useState } from 'react'
import {
  BsStarFill,
  BsGoogle,
  BsQuote,
  BsArrowLeft,
  BsArrowRight,
  BsCheckCircle
} from 'react-icons/bs'

function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0)

  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      role: "Oto Çekici",
      image: "/testimonial1.jpg", // Varsayılan avatar kullanabilirsiniz
      rating: 5,
      comment: "İnternetten bulduğum bu firma, çok kısa sürede olay yerine gelerek beni bu zor durumdan kurtardı. Hem hızlı hem de profesyonel bir hizmet sundular. Özellikle çekici sürücüsünün güler yüzlü ve yardımsever tavrı beni çok rahatlattı. Kesinlikle tavsiye ederim..",
      date: "2 hafta önce"
    },
    {
      name: "Ayşe Kaya",
      role: "Yol Yardım",
      image: "/testimonial2.jpg",
      rating: 5,
      comment: "İlk defa lastiğim patladı ne yapacağımı bilemedim. Kasapoğlu oto kurtarmayı aradım çok hızlı bir şekilde gelip yardımcı oldular kendilerine teşekkür ederim.",
      date: "1 ay önce"
    },
    {
      name: "Mehmet Demir",
      role: "Yol Yardım",
      image: "/testimonial3.jpg",
      rating: 5,
      comment: "Aracımın aküsü bittiği için sabah işe giderken yolda kaldım. Acil olarak oto kurtarma hizmetine ihtiyacım vardı. Kasapoğlu oto kurtarma hizmeti sayesinde aracımı kısa sürede çalışır hale getirdiler. Çok memnun kaldım.",
      date: "2 ay önce"
    }
  ]

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20">
      <div className="container  mx-auto px-4">
        {/* Google Reviews Badge */}
        <div className="flex justify-center mt-12 mb-12">
          <div className="bg-white rounded-full shadow-lg px-6 py-3 flex items-center gap-3">
            <BsGoogle className="text-2xl text-blue-600" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <BsStarFill key={i} className="text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold text-gray-800">4.9/5</span>
            <span className="text-gray-500">Google'da</span>
          </div>
        </div>

        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mutlu Müşterilerimiz
          </h2>
          <p className="text-gray-600 text-lg">
            Binlerce müşterimizin memnuniyeti en büyük referansımızdır.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    {/* Üst Kısım */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-600 font-semibold text-xl">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl text-gray-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <BsStarFill key={i} className="text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <BsQuote className="text-4xl text-blue-100 ml-auto" />
                    </div>

                    {/* Yorum */}
                    <p className="text-gray-600 mb-4 italic">
                      "{testimonial.comment}"
                    </p>

                    {/* Alt Kısım */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <BsCheckCircle className="text-green-500" />
                        <span>Doğrulanmış Müşteri</span>
                      </div>
                      <span>{testimonial.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Kontrolleri */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:text-blue-600 transition-colors duration-300"
          >
            <BsArrowLeft className="text-xl" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:text-blue-600 transition-colors duration-300"
          >
            <BsArrowRight className="text-xl" />
          </button>
        </div>

        {/* İstatistikler */}


        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="tel:+905078076400"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Siz de Memnun Müşterilerimizden Olun
            <BsArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials