import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight, BsCalendar, BsPerson } from 'react-icons/bs'

import otoCekici from '../assets/images/blog/oto-cekici2.jpg'
import otoKurtarma from '../assets/images/blog/oto-kurtarma2.jpg'
import yolYardim from '../assets/images/blog/yol-yardim.jpg'

function Blog() {
  const posts = [
    {
      id: 1,
      title: "Uşak Oto Çekici Hizmeti ile Yolda Kalmayın",
      description: "Uşak’ta yolda kalmak artık sorun değil! Uşak oto çekici hizmetimizle, aracınız hangi sebeple olursa olsun yolda kaldığında en kısa sürede yanınızdayız. 7/24 oto çekici",
      image: otoCekici,
      date: "15 Mart 2024",
      author: "Kasapoğlu Oto Çekici",
      category: "Oto Çekici Hizmeti"
    },
    {
      id: 2,
      title: "Uşak Oto Kurtarma ile Aracınızı Güvenle Taşıyoruz",
      description: "Zorlu hava koşulları, ani arızalar veya kazalar nedeniyle aracınız yolda mı kaldı? Endişelenmeyin! Uşak oto kurtarma",
      image: otoKurtarma,
      date: "10 Mart 2024",
      author: "Kasapoğlu Oto Kurtarma",
      category: "Oto Kurtarma Hizmeti"
    },
    {
      id: 3,
      title: "Uşak Yol Yardım Hizmeti: 7/24 Kesintisiz Destek",
      description: "Araç kullanırken beklenmedik sorunlarla karşılaşabilirsiniz. Lastik patlaması, yakıt bitmesi veya akü sorunları gibi durumlarda Uşak yol yardım ",
      image: yolYardim,
      date: "5 Mart 2024",
      author: "Kasapoğlu Yol Yardım",
      category: "Yol Yardım Hizmeti"
    }
  ];

  return (
    <section data-aos="fade-left" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Blog
          </h2>
          <p className="text-gray-600 text-lg">
            En son haberler ve güncel içerikler
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Blog Görseli */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Blog İçeriği */}
              <div className="p-6">
                {/* Meta Bilgiler */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <BsCalendar />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BsPerson />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.description}
                </p>

                <div className="flex items-center justify-between">
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all duration-300"
                  >
                    Devamını Oku
                    <BsArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Tüm Blog Yazılarını İnceleyin
            <BsArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blog 