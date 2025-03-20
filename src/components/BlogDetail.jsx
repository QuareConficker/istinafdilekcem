import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { BsCalendar, BsPerson, BsArrowLeft, } from 'react-icons/bs'

import otoCekici from '../assets/images/blog/oto-cekici2.jpg'
import otoKurtarma from '../assets/images/blog/oto-kurtarma2.jpg'
import yolYardim from '../assets/images/blog/yol-yardim.jpg'

function BlogDetail() {
  const { blogId } = useParams()
  const navigate = useNavigate()

  const blogPosts = [
    {
      id: 1,
      title: "Uşak Oto Çekici Hizmeti ile Yolda Kalmayın",
      description: "Uşak’ta yolda kalmak artık sorun değil! Uşak oto çekici hizmetimizle, aracınız hangi sebeple olursa olsun yolda kaldığında en kısa sürede yanınızdayız. 7/24 oto çekici",
      content: `
        Uşak’ta yolda kalmak artık sorun değil! Uşak oto çekici hizmetimizle, aracınız hangi sebeple olursa olsun yolda kaldığında en kısa sürede yanınızdayız. 7/24 oto çekici hizmetimiz sayesinde gece gündüz demeden hızlı ve güvenilir çözümler sunuyoruz.

        Aracınızın aküsü mü bitti? Lastiğiniz mi patladı? Yakıtınız mı tükendi? Uşak yol yardım hizmetimiz ile tüm bu sorunlara anında çözüm buluyoruz. Deneyimli ekibimiz ve modern çekici araçlarımız sayesinde aracınızı dilediğiniz noktaya güvenle taşıyoruz.

        Eğer siz de acil çekici Uşak hizmetine ihtiyaç duyuyorsanız, vakit kaybetmeden bize ulaşın. Güvenilir oto kurtarma çözümlerimiz ile her an yanınızdayız!
      `,
      image: otoCekici,
      date: "15 Mart 2024",
      author: "Kasapoğlu Oto Çekici",
      category: "Oto Çekici Hizmeti",
      readTime: "5 dakika",
      relatedPosts: [2, 3]
    },
    {
      id: 2,
      title: "Uşak Oto Kurtarma ile Aracınızı Güvenle Taşıyoruz",
      description: "Zorlu hava koşulları, ani arızalar veya kazalar nedeniyle aracınız yolda mı kaldı? Endişelenmeyin! Uşak oto kurtarma",
      content: `
        Zorlu hava koşulları, ani arızalar veya kazalar nedeniyle aracınız yolda mı kaldı? Endişelenmeyin! Uşak oto kurtarma hizmetimizle aracınızı güvenli bir şekilde kurtarıyor ve istediğiniz noktaya ulaştırıyoruz.

        Deneyimli ekibimiz, hızlı çekici Uşak hizmetimiz ile en kısa sürede bulunduğunuz konuma geliyor. Modern çekici araçlarımız sayesinde aracınızın zarar görmeden taşınmasını sağlıyoruz.

        Özellikle kaza durumlarında veya riskli yol koşullarında güvenilir oto kurtarma hizmeti büyük önem taşır. Biz, profesyonel ekibimizle sizlere en iyi hizmeti sunmak için çalışıyoruz. Uşak araç taşıma ihtiyaçlarınızda bizden destek alarak güvenliğinizi garanti altına alın!
      `,
      image: otoKurtarma,
      date: "10 Mart 2024",
      author: "Kasaoğlu Oto Kurtarma",
      category: "Oto Kurtarma Hizmeti",
      readTime: "6 dakika",
      relatedPosts: [1, 3]
    },
    {
      id: 3,
      title: "Uşak Yol Yardım Hizmeti: 7/24 Kesintisiz Destek",
      description: "Araç kullanırken beklenmedik sorunlarla karşılaşabilirsiniz. Lastik patlaması, yakıt bitmesi veya akü sorunları gibi durumlarda Uşak yol yardım ",
      content: `
        Araç kullanırken beklenmedik sorunlarla karşılaşabilirsiniz. Lastik patlaması, yakıt bitmesi veya akü sorunları gibi durumlarda Uşak yol yardım hizmetimizle bir telefon kadar uzağınızdayız!

        Günün her saati sunduğumuz 7/24 oto çekici hizmetimiz ile aracınızı bulunduğu noktadan güvenle taşıyoruz. Uşak oto çekici ekibimiz, hızlı ve profesyonel çözümlerle sizleri mağdur etmeden en yakın servise ulaştırıyor.

        Eğer acil çekici Uşak ihtiyacınız varsa, vakit kaybetmeden bize ulaşabilirsiniz. Uşak araç taşıma ve hızlı çekici Uşak hizmetlerimiz ile güvenli ve konforlu bir yolculuk için her an yanınızdayız!
      `,
      image: yolYardim,
      date: "5 Mart 2024",
      author: "Kasaopğlu Yol Yardım",
      category: "Yol Yardım Hizmeti",
      readTime: "7 dakika",
      relatedPosts: [1, 2]
    },
  ]

  const post = blogPosts.find(post => post.id === parseInt(blogId))

  if (!post) {
    navigate('/blog')
    return null
  }

  const relatedPosts = blogPosts.filter(p => post.relatedPosts.includes(p.id))

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto mt-16 px-4">
        {/* Geri Dönüş Linki */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-blue-600 font-medium mb-8 hover:text-blue-700 transition-colors duration-300"
        >
          <BsArrowLeft />
          Tüm Blog Yazıları
        </Link>

        <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Başlık ve Meta Bilgiler */}
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-500 mb-6">
              <span className="flex items-center gap-1">
                <BsCalendar />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <BsPerson />
                {post.author}
              </span>
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-sm">
                Okuma Süresi: {post.readTime}
              </span>
            </div>
          </div>

          {/* Görsel */}
          <div className="aspect-video relative">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* İçerik */}
          <div className="p-8">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }}
            />

          </div>
        </article>

        {/* İlgili Yazılar */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              İlgili Yazılar
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map(post => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-video relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default BlogDetail 