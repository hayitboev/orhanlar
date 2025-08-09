import Image from 'next/image';
import Link from 'next/link';
import { Phone, CheckCircle, Clock, Award, Grid3X3 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Seramik Fayans Ustası Ümraniye | Banyo, Mutfak Seramik Döşeme',
  description: 'Ümraniye seramik fayans ustası. Banyo, mutfak, balkon seramik döşeme hizmetleri. Profesyonel fayans ustası ekibi ile kaliteli işçilik garantisi.',
  keywords: 'Ümraniye seramik ustası, fayans ustası, banyo seramik, mutfak fayans, seramik döşeme, İstanbul seramik',
};

export default function SeramikFayans() {
  const seramikAreas = [
    {
      title: 'Banyo Seramik',
      description: 'Su geçirmez ve hijyenik banyo seramik uygulamaları',
      image: 'https://images.pexels.com/photos/1571447/pexels-photo-1571447.jpeg',
      features: ['Su yalıtımı', 'Hijyenik yüzey', 'Kolay temizlik', 'Dayanıklılık']
    },
    {
      title: 'Mutfak Fayans',
      description: 'Fonksiyonel ve estetik mutfak fayans çözümleri',
      image: 'https://images.pexels.com/photos/1571448/pexels-photo-1571448.jpeg',
      features: ['Leke tutmaz', 'Kolay bakım', 'Isıya dayanıklı', 'Gıda uyumlu']
    },
    {
      title: 'Salon ve Koridor',
      description: 'Şık ve dayanıklı salon seramik döşeme hizmetleri',
      image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg',
      features: ['Estetik görünüm', 'Dayanıklılık', 'Kolay temizlik', 'Çok çeşit']
    }
  ];

  const seramikTypes = [
    'Porselen Seramik',
    'Granit Seramik',
    'Mozaik Fayans',
    'Doğal Taş Görünümlü',
    'Ahşap Görünümlü',
    'Mermer Görünümlü',
    'Büyük Boy Seramik',
    'Dekoratif Fayans'
  ];

  const workSteps = [
    { title: 'Yüzey Hazırlığı', description: 'Zemin ve duvar yüzeylerinin temizlenmesi ve düzeltilmesi' },
    { title: 'Su Yalıtımı', description: 'Nemli alanlarda profesyonel su yalıtım uygulaması' },
    { title: 'Yapıştırıcı Uygulama', description: 'Kaliteli seramik yapıştırıcısı ile doğru uygulama' },
    { title: 'Seramik Döşeme', description: 'Hassas ölçümlerle seramiklerin yerleştirilmesi' },
    { title: 'Derz Dolgusu', description: 'Derz malzemesi ile aralar arasının doldurulması' },
    { title: 'Temizlik ve Teslim', description: 'Final temizliği ve kalite kontrolü' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Bölümü */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 dark-gray-text leading-tight">
                <span className="gold-text">Seramik Fayans</span> Ustası<br />
                Ümraniye Hizmet
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                <strong>Ümraniye seramik fayans ustası</strong> olarak Orhanlar Dekorasyon, 15 yıllık deneyimi ile 
                <strong>banyo seramik, mutfak fayans</strong> ve salon seramik döşeme hizmetleri sunuyor. 
                Profesyonel <strong>seramik ustası</strong> ekibimiz ile kaliteli malzemeler kullanarak uzun ömürlü 
                ve estetik sonuçlar elde ediyoruz. <strong>Seramik döşeme</strong> işlerinde Ümraniye ve İstanbul 
                genelinde güvenilir hizmet veriyoruz.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:+905555555555" 
                  className="btn-primary inline-flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Hemen Ara</span>
                </a>
                <Link href="/iletisim" className="btn-secondary">
                  Ücretsiz Keşif
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#c8a84e]" />
                  <span className="text-sm font-medium">Kaliteli Seramik</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-[#c8a84e]" />
                  <span className="text-sm font-medium">Hızlı Döşeme</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-[#c8a84e]" />
                  <span className="text-sm font-medium">İşçilik Garantisi</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Grid3X3 className="w-5 h-5 text-[#c8a84e]" />
                  <span className="text-sm font-medium">Uzman Ekip</span>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.pexels.com/photos/1571447/pexels-photo-1571447.jpeg"
                alt="Ümraniye seramik fayans ustası - profesyonel seramik döşeme hizmetleri"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seramik Uygulama Alanları */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark-gray-text">
              <span className="gold-text">Seramik</span> Uygulama Alanları
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Evinizin her alanında profesyonel seramik ve fayans döşeme hizmetleri
            </p>
          </div>

          <div className="space-y-16">
            {seramikAreas.map((area, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 dark-gray-text">{area.title}</h3>
                  <p className="text-lg text-gray-700 mb-6">{area.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {area.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#c8a84e] flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/iletisim" className="btn-primary">
                    Fiyat Bilgisi Al
                  </Link>
                </div>

                <div className={`relative h-80 rounded-lg overflow-hidden shadow-lg ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seramik Çeşitleri */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark-gray-text">
              <span className="gold-text">Seramik</span> Çeşitlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Geniş seramik ve fayans çeşitliliği ile her tarza uygun çözümler
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {seramikTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover-scale">
                <div className="w-12 h-12 bg-[#c8a84e] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Grid3X3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold dark-gray-text">{type}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Çalışma Süreci */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark-gray-text">
              Seramik Döşeme <span className="gold-text">Süreci</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Profesyonel seramik döşeme için izlediğimiz aşamalar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workSteps.map((step, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#c8a84e] rounded-full flex items-center justify-center mr-4">
                    <span className="text-lg font-bold text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold dark-gray-text">{step.title}</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Önce/Sonra Galeri */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark-gray-text">
              <span className="gold-text">Önce</span> / <span className="gold-text">Sonra</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ümraniye'de gerçekleştirdiğimiz seramik işlerinden örnekler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="relative h-32">
                    <Image
                      src={`https://images.pexels.com/photos/157${1440 + index}/pexels-photo-157${1440 + index}.jpeg`}
                      alt={`Seramik işi ${index} - öncesi`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
                      ÖNCE
                    </div>
                  </div>
                  <div className="relative h-32">
                    <Image
                      src={`https://images.pexels.com/photos/157${1450 + index}/pexels-photo-157${1450 + index}.jpeg`}
                      alt={`Seramik işi ${index} - sonrası`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded">
                      SONRA
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold dark-gray-text">Banyo Seramik Projesi {index}</h3>
                  <p className="text-sm text-gray-600 mt-1">Ümraniye - Tamamlanma: 3 gün</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fiyat ve İletişim */}
      <section className="section-padding bg-[#c8a84e] text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seramik Fayans Fiyatları için <span className="text-[#2b2b2b]">Ücretsiz Keşif</span>
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Banyo, mutfak ve salon seramik döşeme işleriniz için profesyonel ekibimizden 
            ücretsiz keşif ve fiyat teklifi alın.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+905555555555" 
              className="bg-white text-[#c8a84e] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg inline-flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>0555 555 55 55</span>
            </a>
            <Link 
              href="/iletisim" 
              className="bg-[#2b2b2b] text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-lg"
            >
              Online Teklif Al
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}