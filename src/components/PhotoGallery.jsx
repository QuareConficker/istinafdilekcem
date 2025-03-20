import React, { useState } from "react";
import { BsX } from "react-icons/bs";
import slider1 from "../assets/images/slider/slider1.jpg";
import slider2 from "../assets/images/slider/slider2.jpg";
import slider3 from "../assets/images/slider/slider3.jpg";
import slider4 from "../assets/images/slider/oto-cekici.jpg";
import slider5 from "../assets/images/slider/oto-kurtarma.jpg";

function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Örnek galeri resimleri
  const images = [
    { src: slider1, title: "Kasapoğlu Oto Kurtarma" },
    { src: slider2, title: "Kasapoğlu Oto Kurtarma" },
    { src: slider3, title: "Kasapoğlu Oto Kurtarma" },
    { src: slider5, title: "Kasapoğlu Oto Kurtarma" },
  ];

  return (
    <div data-aos="fade-left" className="py-20 mt-12">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Foto Galeri
          </h1>
          <p className="text-gray-600 text-lg">
            Çalışmalarımızdan öne çıkan kareler
          </p>
        </div>

        {/* Galeri Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group aspect-square rounded-2xl overflow-hidden relative"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  {image.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors duration-300"
            >
              <BsX />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default PhotoGallery;