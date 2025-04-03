import React from 'react'
import {
  BsWhatsapp,
  BsTelephone,
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsArrowRight,
  BsClock
} from 'react-icons/bs'

import { Link } from 'react-router-dom'

function Footer() {
  const contactInfo = {
    phone: "+905315643011",
    whatsapp: "+905315643011",
  }

  const socialLinks = {
    facebook: "#0",
    instagram: "#0",
    youtube: "#0"
  }

  return (
    <footer className="bg-black text-gray-300">
      <div className="container mx-auto px-4">
        {/* Üst Kısım */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Hakkımızda */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              İstinaf Dilekçem
            </h3>
            <p className="mb-4 text-white">
              27 yıllık zabıt katibi deneyimimiz ile sizlere özel en uygun fiyatlar ile kurallara en uygun dilekçeyi yazıp hemen teslim ediyoruz.
            </p>
            <div className="flex gap-4">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <BsFacebook />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <BsInstagram />
              </a>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <BsYoutube />
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              Hızlı Linkler
            </h3>
            <ul className="space-y-2">
              {[
                { text: 'Ana Sayfa', href: '/' },
                { text: 'Hakkımızda', href: '/about' },
                { text: 'Müşteri Yorumları', href: '/testimonials' },
                { text: 'İletişim', href: '/contact' },
              ].map((link) => (
                <li key={link.text}>
                  <Link
                    to={link.href}
                    className="text-white hover:text-blue-500 transition-colors duration-300 flex items-center gap-2"
                  >
                    <BsArrowRight className="text-blue-500" />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              İletişim
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-3 text-white hover:text-blue-500 transition-colors duration-300"
                >
                  <BsTelephone className="text-blue-500 text-xl flex-shrink-0" />
                  0 531 564 3011
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-blue-500 transition-colors duration-300"
                >
                  <BsWhatsapp className="text-blue-500 text-xl flex-shrink-0" />
                  WhatsApp Hattı
                </a>
              </li>
              <li className="flex items-center gap-3 text-white">
                <BsClock className="text-blue-500 text-xl flex-shrink-0" />
                <span>
                  7/24 Hizmet
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 - İstinaf Dilekçem - Tüm Hakları Saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer