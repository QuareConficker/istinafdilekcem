import React from 'react'
import About from './About'
import { BsWhatsapp, BsTelephone } from 'react-icons/bs'

function IcraDilekcesi() {
    return (
        <div>
            <div className="relative min-h-screen flex items-center pt-32 pb-20 bg-gradient-to-r text-white">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-3xl text-black md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                            Alacaklarınızı Yasal Yolla Tahsil Edin!
                        </h1>
                        <br />
                        <h2 className='text-blue-600'>İcra Dilekçesi</h2>
                        <br />
                        <p className="text-xl text-black mb-8 leading-relaxed">
                            <strong className="text-lg text-red-600">Alacağınız mı var?</strong><br />
                            Karşı taraf borcunu ödemiyor mu? Yasal süreçle hakkınızı arayın. Profesyonel icra dilekçesiyle işlemleri başlatın.
                        </p>

                        <p className="text-xl text-black mb-8 leading-relaxed">
                            <strong className="text-lg text-red-600">İcra Takibi Sürecinde Yalnız Değilsiniz!</strong><br />
                            Uzman ekibimiz, alacaklarınızı tahsil etmeniz için gerekli adımları doğru şekilde atar ve süreci sizin adınıza yürütür.
                        </p>

                        <p className="text-xl text-black mb-8 leading-relaxed">
                            <strong className="text-lg text-red-600">Durumunuza Uygun Dilekçeler!</strong><br />
                            Her icra takibi farklıdır. Hazır metinlerle değil, borçluya ve duruma özel etkili dilekçeler hazırlıyoruz.
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

export default IcraDilekcesi
