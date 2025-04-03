import React from 'react'
import { BsWhatsapp, BsTelephone } from 'react-icons/bs'
import { motion } from 'framer-motion'

function FloatingButtons() {
  const contactInfo = {
    phone: "+905315643011",
    whatsapp: "+905315643011",
  }

  return (
    <>
      {/* Mobil CTA Banner */}
      <div
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-[1000]"
      >
        <div className="flex gap-3">
          <a
            href={`tel:${contactInfo.phone}`}
            className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium text-center hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <BsTelephone />
            <span>Hemen Ara</span>
          </a>
          <a
            href={`https://wa.me/${contactInfo.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-500 text-white py-3 px-4 rounded-lg font-medium text-center hover:bg-green-600 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <BsWhatsapp />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Masaüstü WhatsApp Baloncuğu */}
      <div className="hidden md:flex fixed bottom-16 right-6 z-[1000]">
        {/* Partikül Efekti */}
        <motion.div
          className="absolute inset-0 w-12 h-12 bg-green-300 opacity-50 blur-xl rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0.2, 0.6] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        />
        <motion.a
          href={`https://wa.me/${contactInfo.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-[1001]"
          animate={{ scale: [1, 1.2, 1] }}  // Sürekli büyüyüp küçülme
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <BsWhatsapp size={24} />
        </motion.a>
      </div>
    </>
  )
}

export default FloatingButtons
