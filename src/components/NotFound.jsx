import React from 'react';
import { BsExclamationCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <section id="not-found" className="py-16 mt-12 bg-white">
            <div className="container mx-auto px-4">
                {/* Başlık */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <BsExclamationCircle className="text-6xl mt-5 text-red-600 mx-auto mb-4" />
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Sayfa Bulunamadı
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Üzgünüz, aradığınız sayfa mevcut değil. Lütfen doğru bir URL girdiğinizden emin olun veya ana sayfaya dönün.
                    </p>
                </div>

                {/* Ana içerik */}
                <div className="text-center mt-8">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
                    >
                        <BsExclamationCircle className="text-white" />
                        Ana Sayfaya Dön
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default NotFound;
