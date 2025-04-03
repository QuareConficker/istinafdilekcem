import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight, BsCalendar, BsPerson } from 'react-icons/bs'

import istinaf from '../assets/images/blog/istinaf.png'
import istinaf2 from '../assets/images/blog/istinaf2.png'
import istinaf3 from '../assets/images/blog/istinaf3.png'

function Blog() {
  const posts = [
    {
      id: 1,
      title: "İstinaf Dilekçesi Nedir?",
      description: "İstinaf dilekçesi, bir mahkeme kararına karşı başvurulabilen ikinci derece bir yargılama yöntemidir. Birinci derece mahkemesinde verilen kararlar, belirli koşullar altında istinaf mahkemesine taşınabilir. İstinaf başvurusu, hukuki bir hata yapıldığını ve bu hatanın düzeltilmesi gerektiğini iddia eden bir başvurudur.",
      image: istinaf,
      date: "15 Mart 2024",
      author: "İstinaf Dilekçem",
      category: "İstinaf Dilekçesi"
    },
    {
      id: 2,
      title: "İstinaf Dilekçesi Nedir ve Neden Bir Uzmandan Yardım Almalısınız?",
      description: "İstinaf dilekçesi, bir mahkemenin verdiği kararın ikinci derecede incelenmesi için başvurulan önemli bir hukuki yoldur. ",
      image: istinaf2,
      date: "10 Mart 2024",
      author: "İstinaf Dilekçem",
      category: "İstinaf Dilekçesi"
    },
    {
      id: 3,
      title: "İstinaf Dilekçesi Hazırlamak: Neden Bir Uzman Yardımına İhtiyacınız Var?",
      description: "İstinaf dilekçesi, mahkemelerin verdiği kararları ikinci derece incelemeye alarak, bu kararın hatalı olduğu noktaları düzelttirmeyi amaçlayan hukuki bir başvurudur.",
      image: istinaf3,
      date: "5 Mart 2024",
      author: "İstinaf Dilekçem",
      category: "İstinaf Dilekçesi"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            İstinaf Dilekçemden Haberler
          </h2>
          <p className="text-gray-600 text-lg">
            İstinaf dilekçesi hakkında ve güncel bilgiler
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
      </div>
    </section>
  )
}

export default Blog 