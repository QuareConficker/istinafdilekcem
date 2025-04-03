import React from "react";

const OnePageSite = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            {/* Navbar */}
            <nav className="fixed top-0 w-full bg-white shadow-md py-4 px-6 flex justify-between items-center z-10">
                <h1 className="text-xl font-bold">Arzuhalci Hizmetleri</h1>
                <ul className="hidden md:flex space-x-6">
                    <li><a href="#about" className="hover:text-blue-500">Hakkımızda</a></li>
                    <li><a href="#services" className="hover:text-blue-500">Hizmetler</a></li>
                    <li><a href="#contact" className="hover:text-blue-500">İletişim</a></li>
                </ul>
            </nav>

            {/* Hero Section */}
            <header className="h-screen flex flex-col justify-center items-center bg-blue-500 text-white text-center px-6">
                <h2 className="text-4xl md:text-6xl font-bold">Profesyonel Dilekçe Yazım Hizmetleri</h2>
                <p className="mt-4 text-lg">Boşanma, dava ve resmi başvurular için profesyonel destek</p>
            </header>

            {/* About Section */}
            <section id="about" className="py-20 px-6 bg-white text-center">
                <h2 className="text-3xl font-bold">Hakkımızda</h2>
                <p className="mt-4 text-gray-700">Uzman ekibimizle her türlü resmi ve hukuki dilekçeyi profesyonelce hazırlıyoruz.</p>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 px-6 bg-gray-200 text-center">
                <h2 className="text-3xl font-bold">Hizmetlerimiz</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white shadow-md rounded-lg">
                        <h3 className="text-xl font-semibold">Boşanma Dilekçesi</h3>
                        <p className="mt-2 text-gray-600">Boşanma süreciniz için profesyonel dilekçeler.</p>
                    </div>
                    <div className="p-6 bg-white shadow-md rounded-lg">
                        <h3 className="text-xl font-semibold">Dava Dilekçeleri</h3>
                        <p className="mt-2 text-gray-600">Her türlü dava için uygun dilekçe hazırlama.</p>
                    </div>
                    <div className="p-6 bg-white shadow-md rounded-lg">
                        <h3 className="text-xl font-semibold">Resmi Başvurular</h3>
                        <p className="mt-2 text-gray-600">Devlet kurumlarına yapılacak başvurular için dilekçeler.</p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-6 bg-white text-center">
                <h2 className="text-3xl font-bold">İletişime Geçin</h2>
                <p className="mt-4 text-gray-700">Sorularınız için bizimle iletişime geçebilirsiniz.</p>
            </section>

            {/* Footer */}
            <footer className="py-6 bg-gray-800 text-white text-center">
                <p>&copy; 2025 Arzuhalci Hizmetleri. Tüm hakları saklıdır.</p>
            </footer>
        </div>
    );
};

export default OnePageSite;
