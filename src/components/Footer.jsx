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
    phone: "+905078076400",
    whatsapp: "+905078076400",
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
              Kasapoğlu Oto Kurtarma
            </h3>
            <p className="mb-4 text-white">
              20 yıllık tecrübemizle Uşak ve çevresinde 7/24 oto kurtarma hizmeti vermekteyiz. Uygun fiyatlar ile hizmetinizdeyiz.
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
                { text: 'Hizmetlerimiz', href: '/services' },
                { text: 'Galeri', href: '/gallery/photos' },
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

          {/* Hizmetler */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              Hizmetlerimiz
            </h3>
            <ul className="space-y-2">
              {[
                'Oto Çekici',
                'Oto Kurtarma',
                'Yol Yardım'
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-white hover:text-blue-500 transition-colors duration-300 flex items-center gap-2"
                  >
                    <BsArrowRight className="text-blue-500" />
                    {service}
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
                  0 507 807 64 00
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
              © 2025 - Kasapoğlu Oto Kurtarma - Tüm Hakları Saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer