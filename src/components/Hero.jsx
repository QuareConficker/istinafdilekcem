import React, { useState, useEffect } from 'react'
import {
  BsWhatsapp,
  BsTelephone,
  BsArrowRight
} from 'react-icons/bs'
import About from './About'
import Services from './Services'
import Blog from './Blog'
import Contact from './Contact'
import Testimonials from './Testimonials'

// Slider resimleri
import slider1 from '../assets/images/slider/slider1.jpg'
import slider2 from '../assets/images/slider/slider2.jpg'
import slider3 from '../assets/images/slider/slider3.jpg'

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: slider1,
      title: "Profesyonel Hizmet",
      description: "Kaliteli ve güvenilir çözümler"
    },
    {
      image: slider2,
      title: "Modern Yaklaşım",
      description: "Yenilikçi ve müşteri odaklı hizmet"
    },
    {
      image: slider3,
      title: "Uzman Ekip",
      description: "Deneyimli ve profesyonel kadro"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div data-aos="fade-down" className="relative min-h-screen flex items-center pt-32 pb-20">
        {/* Slider Arkaplan */}
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Karartma eklendi */}
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Uşak Kasapoğlu Oto Kurtarma
              <span className="block text-blue-400"> 7/24 Hızlı ve Uygun Fiyatlı</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Güvenilir
              <span className="text-blue-400 font-semibold"> Ekonomik </span>
              ve Size En Yakın
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905078076400"
                className="group bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <BsTelephone className="text-2xl" />
                <span>Hemen Ara</span>
                <span className="hidden group-hover:inline-block ml-1">→</span>
              </a>
              <a
                href="https://wa.me/905078076400"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <BsWhatsapp className="text-2xl" />
                <span>WhatsApp Konum Gönder</span>
                <span className="hidden group-hover:inline-block ml-1">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Slider Kontrolleri */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2 mb-8 sm:mb-0">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSlide === index ? 'bg-blue-400' : 'bg-white/50'}`}
            />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 z-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2">
              <BsArrowRight className="animate-pulse" />
              <p className="text-sm md:text-base font-medium">
                Hemen Ara - <span className="font-bold">Uşak Oto Kurtarma - Çekici - </span> 7/24 Hızlı ve Uygun Fiyatlı
              </p>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Testimonials />
      <Services />
      <Blog />
      <Contact />
    </div>
  )
}

export default Hero;
