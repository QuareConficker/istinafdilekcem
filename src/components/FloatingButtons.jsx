import React, { useState, useEffect } from 'react'
import { BsWhatsapp, BsTelephone, BsX } from 'react-icons/bs'

function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const contactInfo = {
    phone: "+905078076400",
    whatsapp: "+905078076400",
  }

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // 300px scroll sonrası butonları göster
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Mobil CTA Banner */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden transform transition-transform duration-500 ${isVisible ? 'translate-y-0' : 'translate-y-full'
          }`}
      >
        <div className="flex gap-3">
          <a
            href={`tel:${contactInfo.phone}`}
            className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium text-center hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <BsTelephone />
            <span>Ara 7/24</span>
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

    </>
  )
}

export default FloatingButtons