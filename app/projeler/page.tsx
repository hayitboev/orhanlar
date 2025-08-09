import Image from 'next/image';
import Gallery from '@/components/Gallery';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projeler | Tamamlanan Tadilat ve Dekorasyon İşleri',
  description: 'Orhanlar Dekorasyon tarafından Ümraniye ve İstanbul\'da tamamlanan alçı boya, alçıpan, seramik ve tadilat projelerinin galerisi.',
  keywords: 'tadilat projeleri, boya projeleri, alçıpan projeleri, seramik işleri, Ümraniye projeler, İstanbul tadilat',
};

export default function Projeler() {
  // Proje galerisi görselleri
  const projectImages = [
    {
      src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      alt: 'Ümraniye salon alçı boya projesi - modern iç dekorasyon',
      title: 'Salon Alçı Boya Projesi - Ümraniye'
    },
    {
      src: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
      alt: 'Alçıpan asma tavan uygulaması - LED aydınlatma sistemi',
      title: 'Alçıpan Asma Tavan - LED Aydınlatma'
    },
    {
      src: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg',
      alt: 'Anahtar teslim tadilat projesi - komple ev yenileme',
      title: 'Anahtar Teslim Tadilat - 3+1 Daire'
    },
    {
      src: 'https://images.pexels.com/photos/1571447/pexels-photo-1571447.jpeg',
      alt: 'Banyo seramik döşeme işleri - modern banyo tasarımı',
      title: 'Banyo Seramik Döşeme - Modern Tasarım'
    },
    {
      src: 'https://images.pexels.com/photos/1571448/pexels-photo-1571448.jpeg',
      alt: 'Mutfak fayans ve tadilat işleri - fonksiyonel mutfak',
      title: 'Mutfak Fayans ve Tadilat'
    },
    {
      src: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg',
      alt: 'İç mekan boya işleri - renk harmonisi uygulaması',
      title: 'İç Mekan Boya İşleri - Renk Harmonisi'
    },
    {
      src: 'https://images.pexels.com/photos/1571441/pexels-photo-1571441.jpeg',
      alt: 'Yatak odası boya ve dekorasyon - şık yatak odası',
      title: 'Yatak Odası Boya ve Dekorasyon'
    },
    {
      src: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg',
      alt: 'Balkon seramik döşeme işleri - dış mekan seramik',
      title: 'Balkon Seramik Döşeme'
    },
    {
      src: 'https://images.pexels.com/photos/1571449/pexels-photo-1571449.jpeg',
      alt: 'Alçıpan bölücü duvar uygulaması - mekan bölümlendirme',
      title: 'Alçıpan Bölücü Duvar'
    },
    {
      src: 'https://images.pexels.com/photos/1571442/pexels-photo-1571442.jpeg',
      alt: 'Dekoratif alçı boya uygulamaları - özel teknikler',
      title: 'Dekoratif Alçı Boya Uygulamaları'
    },
    {
      src: 'https://images.pexels.com/photos/276725/pexels-photo-276725.jpeg',
      alt: 'Koridor seramik ve boya işleri - şık koridor tasarımı',
      title: 'Koridor Seramik ve Boya İşleri'
    },
    {
      src: 'https://images.pexels.com/photos/1571443/pexels-photo-1571443.jpeg',
      alt: 'Çocuk odası boya işleri - renkli çocuk odası',
      title: 'Çocuk Odası Boya İşleri'
    }
  ];

  const projectCategories = [
    {
      name: 'Alçı Boya',
      count: 15,
      description: 'Doğal ve nefes alabilir alçı boya uygulamaları'
    },
    {
      name: 'Alçıpan',
      count: 12,
      description: 'Asma tavan ve bölücü duvar sistemleri'
    },
    {
      name: 'Seramik',
      count: 18,
      description: 'Banyo, mutfak ve salon seramik döşeme işleri'
    },
    {
      name: 'Komple Tadilat',
      count: 8,
      description: 'Anahtar teslim ev tadilat projeleri'
    }
  ];

  const completedStats = [
    { number: '150+', label: 'Tamamlanan Proje', description: 'Son 3 yılda tamamladığımız proje sayısı' },
    { number: '98%', label: 'Müşteri Memnuniyeti', description: 'Müşterilerimizin memnuniyet oranı' },
    { number: '15', label: 'Yıllık Deneyim', description: 'Sektördeki toplam deneyimimiz' },
    { number: '30', label: 'Gün Ortalama', description: 'Ortalama proje tamamlama süresi' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Bölümü */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 section-padding">
        <div className="container-max text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 dark-gray-text leading-tight">
            Tamamlanan <span className="gold-text">Projelerimiz</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
            Orhanlar Dekorasyon olarak <strong>Ümraniye ve İstanbul genelinde</strong> tamamladığımız 
            <strong> alçı boya, alçıpan, seramik</strong> ve <strong>anahtar teslim tadilat</strong> 
            projelerini sizlerle paylaşıyoruz. Her projede kaliteli işçilik, zamanında teslim ve 
            müşteri memnuniyetini ön planda tutuyoruz.
          </p>

          {/* İstatistikler */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {completedStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gold-text mb-2">{stat.number}</div>
                <div className="text-lg font-semibold dark-gray-text mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proje Kategorileri */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark-gray-text">
              Proje <span className="gold-text">Kategorileri</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Farklı alanlarda gerçekleştirdiğimiz profesyonel projelerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {projectCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover-scale">
                <div className="text-3xl font-bold gold-text mb-2">{category.count}</div>
                <h3 className="text-xl font-semibold dark-gray-text mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proje Galerisi */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark-gray-text">
              Proje <span className="gold-text">Galerisi</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tamamladığımız projelerden detaylı görseller. Her projenin hikayesi ve 
              uygulama detayları için görsellere tıklayın.
            </p>
          </div>

          <Gallery images={projectImages} />
        </div>
      </section>

      {/* Son Projeler */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark-gray-text">
              Son <span className="gold-text">Projelerimiz</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ümraniye'de yakın zamanda tamamladığımız öne çıkan projeler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg"
                  alt="Ümraniye anahtar teslim tadilat projesi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold dark-gray-text mb-2">
                  Komple Ev Tadilat - Ümraniye
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  120m² 3+1 dairenin komple tadilat projesi. Boya, seramik, alçıpan ve elektrik işleri.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Tamamlanma: 35 gün</span>
                  <span className="bg-[#c8a84e] text-white text-xs px-3 py-1 rounded-full">
                    Anahtar Teslim
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg"
                  alt="Ümraniye alçıpan asma tavan projesi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold dark-gray-text mb-2">
                  Alçıpan Asma Tavan - Salon
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  40m² salon alanında LED aydınlatma sistemi ile alçıpan asma tavan uygulaması.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Tamamlanma: 5 gün</span>
                  <span className="bg-[#c8a84e] text-white text-xs px-3 py-1 rounded-full">
                    Alçıpan
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/1571447/pexels-photo-1571447.jpeg"
                  alt="Ümraniye banyo seramik projesi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold dark-gray-text mb-2">
                  Banyo Seramik Yenileme
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Ana banyo komple seramik yenileme, su yalıtım ve armatür değişimi işleri.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Tamamlanma: 8 gün</span>
                  <span className="bg-[#c8a84e] text-white text-xs px-3 py-1 rounded-full">
                    Seramik
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proje Süreci */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark-gray-text">
              Proje <span className="gold-text">Sürecimiz</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Her projede kaliteli sonuç için izlediğimiz sistematik yaklaşım
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#c8a84e] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 dark-gray-text">Keşif ve Planlama</h3>
              <p className="text-gray-600 text-sm">
                Projenin detaylı incelenmesi, ölçüm ve planlama aşaması
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#c8a84e] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 dark-gray-text">Malzeme Temini</h3>
              <p className="text-gray-600 text-sm">
                Kaliteli malzemelerin seçimi ve temin edilmesi
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#c8a84e] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 dark-gray-text">Uygulama</h3>
              <p className="text-gray-600 text-sm">
                Profesyonel ekip tarafından projenin uygulanması
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#c8a84e] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 dark-gray-text">Kontrol ve Teslim</h3>
              <p className="text-gray-600 text-sm">
                Kalite kontrol sonrası projenin müşteriye teslimi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bölümü */}
      <section className="section-padding bg-[#c8a84e] text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siz de Projenizi <span className="text-[#2b2b2b]">Bizimle Gerçekleştirin</span>
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ümraniye'de tadilat, boya, alçıpan ve seramik işleriniz için 
            deneyimli ekibimizden ücretsiz keşif alın.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+905555555555" 
              className="bg-white text-[#c8a84e] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg inline-flex items-center justify-center space-x-2"
            >
              <span>0555 555 55 55</span>
            </a>
            <a 
              href="/iletisim" 
              className="bg-[#2b2b2b] text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-lg"
            >
              Online Teklif Al
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}