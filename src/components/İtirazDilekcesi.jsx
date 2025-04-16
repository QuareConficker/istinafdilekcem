import React from 'react'
import About from './About'
import { BsWhatsapp, BsTelephone } from 'react-icons/bs'

function ItirazDilekcesi() {
    return (
        <div>
            <div className="relative min-h-screen flex items-center pt-32 pb-20 bg-gradient-to-r text-white">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-3xl text-black md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                            Hatalı Kararlara Karşı Hakkınızı Arayın!
                        </h1>
                        <br />
                        <h2 className='text-blue-600'>İtiraz Dilekçesi</h2>
                        <br />
                        <p className="text-xl text-black mb-8 leading-relaxed">
                            <strong className="text-lg text-red-600">Karar size haksız mı geldi?</strong><br />
                            Alınan karara itiraz etmek en doğal hakkınız. Profesyonel hazırlanan itiraz dilekçesiyle sesinizi duyurun.
                        </p>

                        <p className="text-xl text-black mb-8 leading-relaxed">
                            <strong className="text-lg text-red-600">Süreçte Yalnız Değilsiniz!</strong><br />
                            Uzman ekibimiz, itiraz hakkınızı doğru ve etkili bir şekilde kullanmanız için sizinle birlikte hareket eder.
                        </p>

                        <p className="text-xl text-black mb-8 leading-relaxed">
                            <strong className="text-lg text-red-600">Size Özel Dilekçeler!</strong><br />
                            Her itiraz farklıdır. Hazır metinlerle değil, tamamen sizin durumunuza uygun, etkili ve kurallara uygun dilekçeler hazırlıyoruz.
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
        </div>
    )
}

export default ItirazDilekcesi
