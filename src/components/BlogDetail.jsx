import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { BsCalendar, BsPerson, BsArrowLeft, } from 'react-icons/bs'


import istinaf from '../assets/images/blog/istinaf.png'
import istinaf2 from '../assets/images/blog/istinaf2.png'
import istinaf3 from '../assets/images/blog/istinaf3.png'

function BlogDetail() {
  const { blogId } = useParams()
  const navigate = useNavigate()

  const blogPosts = [
    {
      id: 1,
      title: "İstinaf Dİlekçesi Nedir?",
      description: "İstinaf dilekçesi, bir mahkeme kararına karşı başvurulabilen ikinci derece bir yargılama yöntemidir. ",
      content: `
       İstinaf dilekçesi, bir mahkeme kararına karşı başvurulabilen ikinci derece bir yargılama yöntemidir. Birinci derece mahkemesinde verilen kararlar, belirli koşullar altında istinaf mahkemesine taşınabilir. İstinaf başvurusu, hukuki bir hata yapıldığını ve bu hatanın düzeltilmesi gerektiğini iddia eden bir başvurudur.
      `,
      image: istinaf,
      date: "15 Mart 2024",
      author: "İstinaf Dilekçem",
      category: "İstinaf Dilekçesi",
      readTime: "2 dakika",
      relatedPosts: [2, 3]
    },
    {
      id: 2,
      title: "İstinaf Dilekçesi Nedir ve Neden Bir Uzmandan Yardım Almalısınız?",
      description: "İstinaf dilekçesi, bir mahkemenin verdiği kararın ikinci derecede incelenmesi için başvurulan önemli bir hukuki yoldur.",
      content: `
        İstinaf dilekçesi, bir mahkemenin verdiği kararın ikinci derecede incelenmesi için başvurulan önemli bir hukuki yoldur. Ancak bu başvuru, her zaman basit bir süreç değildir. Yanlış bir biçimde yazılan bir istinaf dilekçesi, hak kaybına yol açabilir ve kararın düzeltilmesi yerine daha da karmaşık hale gelmesine neden olabilir. İşte tam bu noktada, bir uzman desteği almanızın neden kritik olduğunu anlamanızı sağlayacak birkaç önemli neden:

        1. Hukuki Bilgi ve Deneyim Gereklidir
        İstinaf dilekçesi yazarken doğru hukuki terimlerin kullanılması, kanun maddelerine uygunluk ve uygun delillerin sunulması çok önemlidir. Bir hukuki hata, başvurunuzun reddedilmesine ya da kararın aleyhinize sonuçlanmasına yol açabilir. Uzman bir avukat, doğru argümanları kurarak dilekçenizin güçlü bir şekilde sunulmasını sağlar.

        2. Zaman Kısıtlamaları ve Süreler
        İstinaf başvuruları belirli bir süre içinde yapılmalıdır. Bu süreyi kaçırmak, hakkınızın ortadan kalkmasına yol açar. Bir avukat, sürecin doğru şekilde takip edilmesini ve başvurunun zamanında yapılmasını sağlar, böylece zaman kaybı ve hukuki haklarınızın yitirilmesi engellenmiş olur.

        3. Mahkeme Kararının İyi Analizi
        İstinaf dilekçesi, mahkemenin verdiği kararın analiz edilmesini gerektirir. Kendi başınıza bu analizi yaparken hukuki incelemeyi eksik bırakabilir ya da yanlış bir noktaya odaklanabilirsiniz. Avukatınız, kararın hangi yönlerinin hatalı olduğunu net bir şekilde tespit eder ve buna uygun bir başvuru hazırlar.

        4. Delillerin Etkin Kullanımı
        İstinaf başvurusunda deliller çok önemlidir. Yeni delillerin sunulması ya da eski delillerin doğru şekilde değerlendirilmesi gerekir. Bir uzman, hangi delillerin etkili olacağını belirleyerek, sizin lehinize olacak şekilde bu delilleri dilekçenize dahil eder.

        Sonuç
        İstinaf dilekçesi hazırlamak, hukuki bir süreç olduğu için profesyonel yardım almak her zaman daha güvenlidir. Hukuk uzmanları, sürecin her aşamasında size rehberlik eder ve hakkınızı en iyi şekilde savunmanızı sağlar. Eğer siz de istinaf dilekçesi ile ilgili bir başvuru yapmak istiyorsanız, deneyimli bir avukattan yardım alarak süreci doğru bir şekilde yönlendirebilirsiniz.


      `,
      image: istinaf2,
      date: "10 Mart 2024",
      author: "İstinaf Dilekçem",
      category: "İstinaf Dilekçesi",
      readTime: "3 dakika",
      relatedPosts: [1, 3]
    },
    {
      id: 3,
      title: "İstinaf Dilekçesi Hazırlamak: Neden Bir Uzman Yardımına İhtiyacınız Var?",
      description: "İstinaf dilekçesi, mahkemelerin verdiği kararları ikinci derece incelemeye alarak, bu kararın hatalı olduğu noktaları düzelttirmeyi amaçlayan hukuki bir başvurudur.",
      content: `
        İstinaf dilekçesi, mahkemelerin verdiği kararları ikinci derece incelemeye alarak, bu kararın hatalı olduğu noktaları düzelttirmeyi amaçlayan hukuki bir başvurudur. Ancak bu süreç, birçok karmaşıklık içerir. İşte, istinaf dilekçesi yazarken bir uzmandan yardım almanızın neden kritik olduğunu gösteren birkaç önemli neden:

        1. Hatalı Kararın Tespit Edilmesi
        Bir mahkemenin kararına itiraz etmek, çoğu zaman çok sayıda hukuki ve teknik detay içerir. Bu kararda yapılan yanlışlıkları fark etmek, sıradan bir kişi için kolay değildir. Bir avukat, yasal hataları tespit ederek, istinaf dilekçesini doğru temellere dayandırır ve sizin için en uygun çözümü sağlar.

        2. Yargılama Sürecine Etki Edilen Zaman Kısıtlamaları
        İstinaf başvurusu, mahkeme kararının tebliğinden sonra belli bir süre içinde yapılmalıdır. Bu süreyi kaçırmak, başvurunuzun geçersiz sayılmasına yol açar. Bir hukuk uzmanı, zaman kısıtlamalarını takip eder ve başvurunuzu zamanında yaparak, hakkınızın kaybolmasını engeller.

        3. Hukuki Çerçeveye Uygunluk Sağlamak
        İstinaf dilekçesi, belirli yasal çerçeveler içerisinde hazırlanmalıdır. Yasal boşluklar ya da eksik ifadeler, başvurunuzun reddedilmesine sebep olabilir. Bir avukat, dilekçenizi yasal çerçevelerle uyumlu hale getirerek, başvurunuzun reddedilme riskini en aza indirir.

        4. Yeni Delillerin Eklenmesi ve İspat Süreci
        İstinaf başvurusunda, yeni delillerin sunulması ya da eski delillerin yanlış yorumlanmasının düzeltilmesi gerekebilir. Bu aşamada yanlış bir karar, başvurunuzun başarısız olmasına yol açabilir. Bir avukat, hangi delillerin ve hangi tanıkların etkili olacağını analiz eder ve dosyanıza ekler.

        Sonuç
        İstinaf dilekçesi yazarken profesyonel destek almak, davanızı en güçlü şekilde savunabilmenizi sağlar. Hem yasal bilgi gereksinimlerini karşılamak hem de süreç boyunca size rehberlik etmek için bir avukattan yardım almak, sizi başarılı sonuçlara götürür. Eğer istinaf başvurusu yapacaksanız, deneyimli bir hukuk uzmanıyla çalışarak, sürecin doğru bir şekilde yönetilmesini sağlayabilirsiniz.
      `,
      image: istinaf3,
      date: "5 Mart 2024",
      author: "İstinaf Dilekçem",
      category: "İstinaf Dilekçesi",
      readTime: "5 dakika",
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