import React from 'react'
import About from './About'
import { BsWhatsapp, BsTelephone } from 'react-icons/bs'

function SavunmaDilekcesi() {
    return (
        <div>
            <div className="relative min-h-screen flex items-center pt-32 pb-20 bg-gradient-to-r text-white">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-3xl text-black md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                            Kendinizi En Doğru Şekilde Savunun, Hakkınızı Koruyun!
                        </h1>
                        <br />
                        <h2 className='text-blue-600' >Savunma Dilekçesi</h2>
                        <br />
                        <p className="text-xl text-black mb-8 leading-relaxed">
                            <strong className="text-lg text-red-600">Suçlamalar karşısında yalnız mısınız?</strong><br />
                            Hukuki sürecinizde en güçlü savunmayı yapmak için doğru yerdesiniz. Savunma dilekçenizle kendinizi en etkili şekilde ifade edin.
                        </p>

                        <p className="text-xl text-black mb-8 leading-relaxed">
                            <strong className="text-lg text-red-600">Uzman Ekibimiz Yanınızda!</strong><br />
                            Size özel hazırlanan savunma dilekçeleriyle, yasal haklarınızı tam anlamıyla kullanın. Her dava kendine özgüdür, biz de size özel çalışıyoruz.
                        </p>

                        <p className="text-xl text-black mb-8 leading-relaxed">
                            <strong className="text-lg text-red-600">Kişiye Özel Hazırlanan Dilekçeler!</strong><br />
                            Hazır şablonlardan uzak, tamamen sizin olayınıza ve ihtiyaçlarınıza özel savunma dilekçeleri yazıyoruz.
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

export default SavunmaDilekcesi
