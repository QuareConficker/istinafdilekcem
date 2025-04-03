import React from 'react'
import { BsWhatsapp, BsTelephone, BsArrowRight } from 'react-icons/bs'
import About from './About'

import Blog from './Blog'
import Contact from './Contact'
import Testimonials from './Testimonials'

function Hero() {
  return (
    <div>
      <div className="relative min-h-screen flex items-center pt-32 pb-20 bg-gradient-to-r text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl text-black md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Adaletinize Sahip Çıkın, İstinaf Dilekçenizle Hakkınızı Arayın!
            </h1>
            <p className="text-xl text-black mb-8 leading-relaxed">
              <strong className="text-lg text-red-600">Mahkeme kararınızda hata mı var?</strong><br />
              Yanlış bir karar mı alındı? İstinaf hakkınızı kullanarak, hatalı kararların yeniden değerlendirilmesini sağlayabilirsiniz!
            </p>

            <p className="text-xl text-black mb-8 leading-relaxed">
              <strong className="text-lg text-red-600">Profesyonel Destekle Hakkınızı Savunun!</strong><br />
              Bizimle, hukuki sürecinizi profesyonelce yönetin ve kişiye özel istinaf dilekçesi ile en doğru savunmayı yapın. Hakkınızı savunurken yanınızdayız.
            </p>

            <p className="text-xl text-black mb-8 leading-relaxed">
              <strong className="text-lg text-red-600">Tamamen Size Özel Yazılmış Dilekçe!</strong><br />
              Hiçbir zaman hazır dilekçe kullanmıyoruz. Tamamen size özel sizin sorununuza göre kurallara en uygun dilekçeleri yazıyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905315643011"
                className="group bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <BsTelephone className="text-2xl" />
                <span>Hemen Ara</span>
                <span className="hidden group-hover:inline-block ml-1">→</span>
              </a>
              <a
                href="https://wa.me/905315643011"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <BsWhatsapp className="text-2xl" />
                <span>WhatsApp</span>
                <span className="hidden group-hover:inline-block ml-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Testimonials />

      <Blog />
      <Contact />
    </div>
  )
}

export default Hero;
