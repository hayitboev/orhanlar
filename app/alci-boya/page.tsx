import Image from 'next/image';
import Link from 'next/link';
import { Phone, CheckCircle, Clock, Award, Brush } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alçı Boya Uygulamaları | Profesyonel Alçı Boya Hizmetleri Ümraniye',
  description: 'Ümraniye alçı boya uygulamaları. Profesyonel alçı boya hizmetleri, duvar alçı boya, tavan alçı boya. Modern ve şık görünüm için uzman ekip.',
  keywords: 'alçı boya, Ümraniye alçı boya, duvar alçı boya, tavan alçı boya, alçı boya ustası, İstanbul alçı boya',
};

export default function AlciBoya() {
  const alciBoyaTypes = [
    {
      title: 'Klasik Alçı Boya',
      description: 'Geleneksel alçı boya uygulaması ile doğal ve mat görünüm',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'
    },
    {
      title: 'Dekoratif Alçı Boya',
      description: 'Özel tekniklerle uygulanan dekoratif alçı boya çeşitleri',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg'
    },
    {
      title: 'Renkli Alçı Boya',
      description: 'Farklı renk seçenekleri ile kişiselleştirilebilen alçı boya',
      image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg'
    }
  ];

  const advantages = [
    'Doğal ve nefes alabilir yüzey',
    'Nem ve rutubete karşı dayanıklı',
    'Antibakteriyel özellik',
    'Kolay temizlenebilir',
    'Çevre dostu ve sağlıklı',
    'Uzun ömürlü ve dayanıklı',
    'Mat ve şık görünüm',
    'Renk seçeneği çeşitliliği'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Bölümü */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 dark-gray-text leading-tight">
                <span className="gold-text">Alçı Boya</span> Uygulamaları<br />
                Profesyonel Hizmet
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                <strong>Alçı boya uygulamaları</strong> ile duvarlarınıza doğal, nefes alabilir ve şık bir görünüm kazandırın. 
                Orhanlar Dekorasyon olarak <strong>Ümraniye ve İstanbul genelinde</strong> profesyonel <strong>alçı boya hizmetleri</strong> 
                sunuyoruz. 15 yıllık deneyimimizle <strong>duvar alçı boya, tavan alçı boya</strong> ve dekoratif alçı boya 
                uygulamalarında uzmanız. Çevre dostu, sağlıklı ve uzun ömürlü sonuçlar için kaliteli malzemeler kullanıyoruz.
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
                  <span className="text-sm font-medium">Doğal Malzeme</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-[#c8a84e]" />
                  <span className="text-sm font-medium">Hızlı Uygulama</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-[#c8a84e]" />
                  <span className="text-sm font-medium">Uzun Ömürlü</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Brush className="w-5 h-5 text-[#c8a84e]" />
                  <span className="text-sm font-medium">Profesyonel Ekip</span>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                alt="Alçı boya uygulamaları - profesyonel duvar alçı boya hizmetleri"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Alçı Boya Çeşitleri */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark-gray-text">
              <span className="gold-text">Alçı Boya</span> Çeşitlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              İhtiyacınıza uygun alçı boya türlerinde profesyonel uygulama hizmetleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {alciBoyaTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover-scale">
                <div className="relative h-48">
                  <Image
                    src={type.image}
                    alt={type.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 dark-gray-text">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantajlar */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 dark-gray-text">
                Alçı Boya <span className="gold-text">Avantajları</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Alçı boya, geleneksel boyalara göre birçok avantaja sahip doğal bir kaplama malzemesidir. 
                Özellikle sağlık ve estetik açısından tercih edilmektedir.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#c8a84e] flex-shrink-0" />
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg"
                alt="Alçı boya avantajları - doğal ve sağlıklı duvar kaplaması"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Uygulama Süreci */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark-gray-text">
              Alçı Boya <span className="gold-text">Uygulama Süreci</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Profesyonel alçı boya uygulaması için takip ettiğimiz aşamalar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#c8a84e] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 dark-gray-text">Yüzey Hazırlığı</h3>
              <p className="text-gray-600 text-sm">Duvar yüzeyinin temizlenmesi ve hazırlanması</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#c8a84e] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 dark-gray-text">Astar Uygulaması</h3>
              <p className="text-gray-600 text-sm">Alçı boya için uygun astar malzemesi uygulanır</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#c8a84e] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 dark-gray-text">Alçı Boya</h3>
              <p className="text-gray-600 text-sm">Profesyonel tekniklerle alçı boya uygulanır</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#c8a84e] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 dark-gray-text">Kalite Kontrolü</h3>
              <p className="text-gray-600 text-sm">Son kontroller yapılır ve teslim edilir</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fiyat ve İletişim */}
      <section className="section-padding bg-[#c8a84e] text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Alçı Boya Fiyatları için <span className="text-[#2b2b2b]">Ücretsiz Keşif</span>
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ümraniye'de profesyonel alçı boya uygulamaları için şeffaf fiyatlandırma ve 
            ücretsiz keşif hizmeti alın.
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